package com.mgl.controller.sys;


import com.mgl.bean.sys.SysRole;
import com.mgl.constant.CommonResult;
import com.mgl.service.sys.SysRoleService;
import com.mgl.utils.ShiroUtils;
import io.swagger.annotations.ApiOperation;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import java.util.List;

/**
 * <p>
 *  前端控制器
 * </p>
 *
 * @author zhangqi
 * @since 2020-06-21
 */
@Controller
@RequestMapping("/sysRole")
public class SysRoleController {

    @Resource
    private SysRoleService sysRoleService;

    @GetMapping("/getRoleList")
    @ResponseBody
    @ApiOperation("获取角色列表")
    public CommonResult getRoleList(){
        return sysRoleService.getRoleList(ShiroUtils.getUserVo().getId());
    }

    @PostMapping("/add")
    @ResponseBody
    @ApiOperation("新增角色或者修改")
    public CommonResult addOrUpdateRole(SysRole sysRole, @RequestParam("menuIds[]") List<Long> menuIds) {
        return sysRoleService.addOrUpdateRole(sysRole, menuIds, ShiroUtils.getUserVo().getId());
    }

    @GetMapping("/del/{roleId}")
    @ResponseBody
    @ApiOperation("删除角色")
    public CommonResult deleteRole(@PathVariable Long roleId) {
        return sysRoleService.del(roleId);
    }


    @GetMapping("/toUpdate")
    @ResponseBody
    @ApiOperation("删除角色")
    public CommonResult toUpdate(Long roleId) {
        return CommonResult.success(sysRoleService.toUpdate(roleId));
    }
}
