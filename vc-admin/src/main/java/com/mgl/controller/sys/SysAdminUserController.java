package com.mgl.controller.sys;


import com.mgl.bean.sys.SysAdminUser;
import com.mgl.bean.sys.vo.SysAdminUserListVo;
import com.mgl.constant.CommonResult;
import com.mgl.service.sys.SysAdminUserService;
import com.mgl.utils.ShiroUtils;
import io.swagger.annotations.ApiOperation;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;

/**
 * <p>
 *  前端控制器
 * </p>
 *
 * @author zhangqi
 * @since 2020-06-21
 */
@Controller
@RequestMapping("/sysAdminUser")
public class SysAdminUserController {

    @Resource
    private SysAdminUserService sysAdminUserService;

    @GetMapping("list")
    @ResponseBody
    @ApiOperation("获取列表")
    public CommonResult getList(SysAdminUserListVo sysAdminUserListVo,
                                @RequestParam(value = "pageNum",defaultValue = "1")Integer pageNum,
                                @RequestParam(value = "pageSize",defaultValue = "10")Integer pageSize){
        return sysAdminUserService.getUserList(sysAdminUserListVo,ShiroUtils.getUserVo().getId(),pageNum,pageSize);
    }

    @PostMapping("/addOrUpdate")
    @ResponseBody
    @ApiOperation("新增")
    public CommonResult addUser(SysAdminUser sysAdminUser, @RequestParam("roleId") Long roleId){

        return sysAdminUserService.addOrUpdateUser(sysAdminUser,roleId, ShiroUtils.getUserVo().getId());
    }

    @GetMapping("/toUpdate")
    @ResponseBody
    @ApiOperation("到达修改详情")
    public CommonResult toUpdate(@RequestParam("id")Long id){
        return CommonResult.success(sysAdminUserService.getSysUserDetailById(id));
    }


    @GetMapping("/del/{id}")
    @ResponseBody
    @ApiOperation("删除")
    public CommonResult del(@PathVariable("id")Long id){
        return sysAdminUserService.del(id);
    }

    @GetMapping("/resetPwd/{id}")
    @ResponseBody
    @ApiOperation("重置密码")
    public CommonResult resetPwd( @PathVariable("id")Long id){
        return sysAdminUserService.resetPwd(id);
    }

    @GetMapping("/getCurrentMenus")
    @ApiOperation("获取当前用户的权限")
    @ResponseBody
    public CommonResult getCurrentMenus(){
        return CommonResult.success(sysAdminUserService.getMenuByUserId(ShiroUtils.getUserVo().getId()));
    }

    @PostMapping("/changePwd")
    @ApiOperation("修改密码")
    @ResponseBody
    public CommonResult changePwd(String oldPass,String newPass){
        return sysAdminUserService.changePwd(ShiroUtils.getUserVo().getId(),oldPass,newPass);
    }

}
