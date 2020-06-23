package com.mgl.controller.login;


import com.mgl.bean.sys.SysAdminUser;
import com.mgl.constant.CommonResult;
import com.mgl.utils.ShiroUtils;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.apache.commons.lang3.StringUtils;
import org.apache.shiro.SecurityUtils;
import org.apache.shiro.authc.UsernamePasswordToken;
import org.apache.shiro.subject.Subject;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;

/**
 *
 * @author liushuai
 * @date 2019/11/21
 */
@Controller
@Api("用户登录")
public class LoginController {

//    @Autowired
//    private LogLoginAdminUserService logLoginAdminUserService;

    @PostMapping("/authe")
    @ResponseBody
    @ApiOperation("用户登录")
    public CommonResult authe(String username, String password, HttpServletRequest request) {
        if(StringUtils.isBlank(username) || StringUtils.isBlank(password)){
            return CommonResult.failed("请输入用户名和密码");
        }
        UsernamePasswordToken token = new UsernamePasswordToken(username, password);
        Subject subject = SecurityUtils.getSubject();
        try {
            subject.login(token);
            //添加登录日志
            SysAdminUser userVo = ShiroUtils.getUserVo();
//            logLoginAdminUserService.addLoginLog(IpUtils.getIpAddr(request),userVo.getId());
            return CommonResult.success(userVo);
        } catch (Exception e) {
            return CommonResult.failed("用户名或密码错误");
        }
    }

}
