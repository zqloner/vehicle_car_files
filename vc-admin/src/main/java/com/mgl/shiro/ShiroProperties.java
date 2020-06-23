package com.mgl.shiro;

import lombok.Data;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

/**
 *
 * @author liushuai
 * @date 2019/11/22
 */
@Component
@ConfigurationProperties(prefix="shiro")
@Data
public class ShiroProperties {

    private String loginUrl;

    private String successUrl;

    private String unauthorizedUrl;

    private long timeout;

    private String cookieName;

}
