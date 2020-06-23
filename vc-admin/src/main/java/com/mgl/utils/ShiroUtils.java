package com.mgl.utils;

import com.mgl.bean.sys.SysAdminUser;
import lombok.extern.slf4j.Slf4j;
import org.apache.shiro.SecurityUtils;

/**
 * Created by liushuai on 2019/11/21.
 */
@Slf4j
public class ShiroUtils {

    public static SysAdminUser getUserVo(){
        try {
            return (SysAdminUser) SecurityUtils.getSubject().getPrincipal();
        } catch (Exception e) {
            return null;
        }
    }
}
