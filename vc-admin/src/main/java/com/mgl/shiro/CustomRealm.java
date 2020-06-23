package com.mgl.shiro;

import com.mgl.bean.sys.SysAdminUser;
import com.mgl.service.sys.SysAdminUserService;
import org.apache.shiro.authc.*;
import org.apache.shiro.authz.AuthorizationInfo;
import org.apache.shiro.realm.AuthorizingRealm;
import org.apache.shiro.subject.PrincipalCollection;
import org.springframework.beans.factory.annotation.Autowired;

/**
 * Created by liushuai on 2019/11/21.
 */
public class CustomRealm extends AuthorizingRealm {

    @Autowired
    private SysAdminUserService sysAdminUserService;


    @Override
    protected AuthorizationInfo doGetAuthorizationInfo(PrincipalCollection principalCollection) {
        /*System.err.println("老弟,老了啊");
        SimpleAuthorizationInfo authorizationInfo = new SimpleAuthorizationInfo();
        authorizationInfo.addRole("system");
        authorizationInfo.addStringPermission("user:add");*/
        return null;
    }


    @Override
    protected AuthenticationInfo doGetAuthenticationInfo(AuthenticationToken authenticationToken) throws AuthenticationException {
        SysAdminUser user = sysAdminUserService.getUserByName(authenticationToken.getPrincipal().toString());
        if (user == null) {
            throw new UnknownAccountException();
        }
        String password = user.getPassword();
        user.setPassword(null);
        return new SimpleAuthenticationInfo(user, password, getName());
    }
}
