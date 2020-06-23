package com.mgl.service.sys;

import com.baomidou.mybatisplus.extension.service.IService;
import com.mgl.bean.sys.SysAdminUser;
import com.mgl.bean.sys.SysMenu;
import com.mgl.bean.sys.dto.SysAdminUserListDto;
import com.mgl.bean.sys.vo.SysAdminUserListVo;
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
public interface SysAdminUserService extends IService<SysAdminUser> {

    SysAdminUser getUserByName(String username);

    CommonResult getUserList(SysAdminUserListVo sysAdminUserListVo, Long shiroId, Integer pageNum, Integer pageSize);

    CommonResult addOrUpdateUser(SysAdminUser sysAdminUser,Long roleId,Long shiroId);
    SysAdminUserListDto getSysUserDetailById(Long id);

    CommonResult del(Long id);

    public CommonResult resetPwd(Long id);

    List<SysMenu> getMenuByUserId(Long id);

    CommonResult changePwd(Long id, String oldPass, String newPass);
}
