package com.mgl.controller.sys;


import com.mgl.constant.CommonResult;
import com.mgl.service.sys.SysMenuService;
import io.swagger.annotations.ApiOperation;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

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
@RequestMapping("/sysMenu")
public class SysMenuController {

    @Resource
    private SysMenuService sysMenuService;

    @GetMapping("/getMenuList")
    @ResponseBody
    @ApiOperation("获取所有权限")
    public CommonResult getAllMenuList(){
        return CommonResult.success(sysMenuService.getAllMenuList());
    }
}
