package com.mgl.service.sys;

import com.baomidou.mybatisplus.extension.service.IService;
import com.mgl.bean.sys.SysRole;
import com.mgl.bean.sys.dto.SysRoleDto;
import com.mgl.constant.CommonResult;

import java.util.List;

/**
 * <p>
 *  服务类
 * </p>
 *
 * @author zhangqi
 * @since 2020-06-21
 */
public interface SysRoleService extends IService<SysRole> {

    CommonResult getRoleList(Long shiroId);
    public CommonResult addOrUpdateRole(SysRole sysRole, List<Long> menuIds, Long shiroId);

    CommonResult del(Long roleId);

    SysRoleDto toUpdate(Long roleId);
}
