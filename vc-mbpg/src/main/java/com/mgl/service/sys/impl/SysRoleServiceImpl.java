package com.mgl.service.sys.impl;

import cn.hutool.core.collection.CollectionUtil;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.mgl.bean.sys.SysAdminUser;
import com.mgl.bean.sys.SysRole;
import com.mgl.bean.sys.SysRoleMenu;
import com.mgl.bean.sys.SysUserRole;
import com.mgl.bean.sys.dto.SysAdminUserListDto;
import com.mgl.bean.sys.dto.SysRoleDto;
import com.mgl.bean.sys.vo.SysAdminUserListVo;
import com.mgl.constant.CommonResult;
import com.mgl.constant.Constant;
import com.mgl.dao.sys.SysAdminUserMapper;
import com.mgl.dao.sys.SysRoleMapper;
import com.mgl.service.sys.SysAdminUserService;
import com.mgl.service.sys.SysRoleMenuService;
import com.mgl.service.sys.SysRoleService;
import com.mgl.service.sys.SysUserRoleService;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.Resource;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

/**
 * <p>
 *  服务实现类
 * </p>
 *
 * @author zhangqi
 * @since 2020-06-21
 */
@Service
public class SysRoleServiceImpl extends ServiceImpl<SysRoleMapper, SysRole> implements SysRoleService {

    @Resource
    private SysRoleMapper sysRoleMapper;
    @Resource
    private SysRoleMenuService sysRoleMenuService;

    @Resource
    private SysUserRoleService sysUserRoleService;
    @Resource
    private SysAdminUserService sysAdminUserService;
    @Resource
    private SysAdminUserMapper sysAdminUserMapper;

    @Override
    public CommonResult getRoleList( Long shiroId) {
        SysAdminUser adminUser = sysAdminUserService.getById(shiroId);
        List<SysAdminUserListDto> sysUserList = sysAdminUserMapper.getSysUserList(new SysAdminUserListVo().setCode(adminUser.getCode()));
        List<Long> adminIds = new ArrayList<>();
        sysUserList.forEach(x->adminIds.add(x.getId()));
        adminIds.add(shiroId);
        return CommonResult.success(sysRoleMapper.getRoleList(adminIds));
    }

    @Transactional(rollbackFor = Exception.class)
    @Override
    public CommonResult addOrUpdateRole(SysRole sysRole, List<Long> menuIds, Long shiroId) {
        if (sysRole.getId() == null) {
            try {
                //新增
                save(sysRole.setCreateTime(LocalDateTime.now()).setDelStatus(Constant.DELETE_VALID).setStatus(Constant.STATUS_VALID)
                        .setCreaterId(shiroId).setUpdateTime(LocalDateTime.now()));
                if(CollectionUtil.isNotEmpty(menuIds)){
                    menuIds.forEach(x->sysRoleMenuService.save(new SysRoleMenu().setRoleId(sysRole.getId()).setMenuId(x)));
                }
                return CommonResult.success(null, "新增成功");
            } catch (Exception e) {
                e.printStackTrace();
            }
            return CommonResult.failed("新增失败");
        } else {
            boolean b = false;
            try {
                //修改
                sysRoleMenuService.remove(new QueryWrapper<>(new SysRoleMenu().setRoleId(sysRole.getId())));
                SysRole sysRole1 = getById(sysRole.getId());
                if(CollectionUtil.isNotEmpty(menuIds)){
                    menuIds.forEach(x->sysRoleMenuService.save(new SysRoleMenu().setRoleId(sysRole.getId()).setMenuId(x)));
                }
                b = updateById(sysRole1.setName(sysRole.getName()).setDescrition(sysRole.getDescrition()).setUpdateTime(LocalDateTime.now()));
                return CommonResult.success(null, "修改成功");
            } catch (Exception e) {
                e.printStackTrace();
            }
            return CommonResult.failed("修改失败");
        }
    }

    @Override
    public CommonResult del(Long roleId) {
        List<SysUserRole> list = sysUserRoleService.list(new QueryWrapper<>(new SysUserRole().setRoleId(roleId)));
        if (list.size() > 0) {
            return CommonResult.failed("该角色有账户使用,不能删除");
        }
        boolean b = updateById(getById(roleId).setUpdateTime(LocalDateTime.now()).setDelStatus(Constant.DELETE_INVALID));
        sysRoleMenuService.remove(new QueryWrapper<>(new SysRoleMenu().setRoleId(roleId)));
        if (b) {
            return CommonResult.success(null, "删除成功");
        } else {
            return CommonResult.failed("删除失败");
        }
    }

    @Override
    public SysRoleDto toUpdate(Long roleId) {
        SysRoleDto sysRoleDto = new SysRoleDto();
        BeanUtils.copyProperties(getById(roleId),sysRoleDto);
        List<SysRoleMenu> list = sysRoleMenuService.list(new QueryWrapper<>(new SysRoleMenu().setRoleId(roleId)));
        sysRoleDto.setMenuIds(list.stream().map(SysRoleMenu::getMenuId).collect(Collectors.toList()));
        return sysRoleDto;
    }
}
