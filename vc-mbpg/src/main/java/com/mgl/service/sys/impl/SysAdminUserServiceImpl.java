package com.mgl.service.sys.impl;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.github.pagehelper.PageHelper;
import com.mgl.bean.sys.SysAdminUser;
import com.mgl.bean.sys.SysMenu;
import com.mgl.bean.sys.SysUserRole;
import com.mgl.bean.sys.dto.SysAdminUserListDto;
import com.mgl.bean.sys.vo.SysAdminUserListVo;
import com.mgl.constant.CommonResult;
import com.mgl.constant.Constant;
import com.mgl.dao.sys.SysAdminUserMapper;
import com.mgl.service.sys.SysAdminUserService;
import com.mgl.service.sys.SysMenuService;
import com.mgl.service.sys.SysUserRoleService;
import com.mgl.utils.CommonPage;
import org.apache.commons.lang3.StringUtils;
import org.apache.shiro.crypto.hash.Md5Hash;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.Resource;
import java.time.LocalDateTime;
import java.util.List;

/**
 * <p>
 *  服务实现类
 * </p>
 *
 * @author zhangqi
 * @since 2020-06-21
 */
@Service
public class SysAdminUserServiceImpl extends ServiceImpl<SysAdminUserMapper, SysAdminUser> implements SysAdminUserService {


    @Resource
    private SysAdminUserMapper sysAdminUserMapper;
    @Resource
    private SysUserRoleService sysUserRoleService;
    @Resource
    private SysMenuService sysMenuService;

    @Override
    public SysAdminUser getUserByName(String username) {
        return this.getOne(new QueryWrapper<>(
                new SysAdminUser()
                        .setUsername(username)
                        .setStatus(Constant.STATUS_VALID)
                        .setDelStatus(Constant.DELETE_VALID)
        ));
    }

    @Override
    public CommonResult getUserList(SysAdminUserListVo sysAdminUserListVo, Long shiroId, Integer pageNum, Integer pageSize) {
        SysAdminUser adminUser = getById(shiroId);
        sysAdminUserListVo.setCode(adminUser.getCode());
        sysAdminUserListVo.setCurrentId(shiroId);
        PageHelper.startPage(pageNum, pageSize);
        return CommonResult.success(CommonPage.restPage(sysAdminUserMapper.getSysUserList(sysAdminUserListVo)));
    }

    @Override
    @Transactional(rollbackFor = Exception.class)
    public CommonResult addOrUpdateUser(SysAdminUser sysAdminUser,Long roleId,Long shiroId) {
        if (sysAdminUser.getId()==null){
            if (StringUtils.isBlank(sysAdminUser.getPassword())){
                sysAdminUser.setPassword(Constant.ADMINUSER_DEFAULT_PASSWORD);
            }else {
                Md5Hash md5Hash = new Md5Hash(sysAdminUser.getPassword());
                sysAdminUser.setPassword(md5Hash.toString());
            }
            SysAdminUser one =getUserByName(sysAdminUser.getUsername());
            if(one!=null){
                return CommonResult.failed("账号已存在,请更换账号");
            }
            SysAdminUser byShiroId = getById(shiroId);
            String newCode = sysAdminUserMapper.getMaxCode(byShiroId.getCode(),byShiroId.getCode().length()+Constant.ACCOUNT_ADD_NUMBER);
            if(StringUtils.isBlank(newCode)){
                newCode = byShiroId.getCode()+Constant.ACCOUNT_DEFAULT_CODE;
            }else {
                newCode = Long.parseLong(newCode)+1+"";
                int len = newCode.length()%Constant.ACCOUNT_ADD_NUMBER;
                int lenl =Constant.ACCOUNT_ADD_NUMBER - len;
                String zero = "";
                for(int i = 1;i<=lenl;i++){
                    zero += "0";
                }
                newCode = zero + newCode;
            }
            save(sysAdminUser.setCode(newCode).setCreateTime(LocalDateTime.now()).setUpdateTime(LocalDateTime.now()).setCreaterId(shiroId).setStatus(Constant.STATUS_VALID)
                    .setDelStatus(Constant.DELETE_VALID));
            sysUserRoleService.save(new SysUserRole().setUserId(sysAdminUser.getId()).setRoleId(roleId));
            return CommonResult.success(null,"新增成功");
        }else {
            SysAdminUser adminUser = getById(sysAdminUser.getId());
            if (!StringUtils.isBlank(sysAdminUser.getPassword()) && !sysAdminUser.getPassword().equals(adminUser.getPassword())) {
                Md5Hash md5Hash = new Md5Hash(sysAdminUser.getPassword());
                sysAdminUser.setPassword(md5Hash.toString());
            }
            sysUserRoleService.remove(new QueryWrapper<>(new SysUserRole().setUserId(sysAdminUser.getId())));
            updateById(sysAdminUser.setUpdateTime(LocalDateTime.now()));
            sysUserRoleService.save(new SysUserRole().setUserId(sysAdminUser.getId()).setRoleId(roleId));
            return CommonResult.success(null,"修改成功");
        }
    }

    @Override
    public SysAdminUserListDto getSysUserDetailById(Long id) {
        return sysAdminUserMapper.getSysUserDetailById(id);
    }

    @Transactional(rollbackFor = Exception.class)
    @Override
    public CommonResult del(Long id) {
        SysAdminUser sysAdminUser = getById(id);
        sysAdminUser.setDelStatus(Constant.DELETE_INVALID);
        sysUserRoleService.remove(new QueryWrapper<>(new SysUserRole().setUserId(id)));
        boolean f = saveOrUpdate(sysAdminUser);
        if (f){
            return CommonResult.success(null, "删除成功");
        }
        return CommonResult.success(null, "删除失败");
    }

    @Transactional(rollbackFor = Exception.class)
    @Override
    public CommonResult resetPwd(Long id) {
        SysAdminUser sysAdminUser = getById(id);
        sysAdminUser.setPassword(Constant.ADMINUSER_DEFAULT_PASSWORD);
        boolean f = saveOrUpdate(sysAdminUser);
        if (f){
            return CommonResult.success(null, "重置密码成功");
        }
        return CommonResult.success(null, "重置密码失败");
    }

    @Override
    public List<SysMenu> getMenuByUserId(Long id) {
        if (id == 1) {
            return sysMenuService.list(null);
        }
        return sysAdminUserMapper.getMenuByUserId(id);
    }

    @Transactional(rollbackFor = Exception.class)
    @Override
    public CommonResult changePwd(Long id, String oldPass, String newPass) {
        SysAdminUser adminUser = getById(id);
        if (!adminUser.getPassword().equals(oldPass)) {
            return CommonResult.failed("原密码不正确");
        }
        boolean b = updateById(adminUser.setPassword(newPass));
        if (!b) {
            return CommonResult.failed("修改失败");
        }
        return CommonResult.success(null, "修改成功");
    }



}
