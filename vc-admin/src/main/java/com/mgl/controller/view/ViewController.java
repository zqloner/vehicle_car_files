package com.mgl.controller.view;

import org.apache.commons.lang3.StringUtils;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.GetMapping;

import javax.servlet.http.HttpServletRequest;
import java.net.URLDecoder;

/**
 * @author liushuai
 * @date 2019/11/26
 */
@Controller
public class ViewController {

    @GetMapping("/changeViews")
    public String changeViews(String views, HttpServletRequest request, ModelMap modelMap) {
        if(StringUtils.isBlank(views)){
            return "redirect:main";
        }
        try {
            String queryString = URLDecoder.decode(request.getQueryString(), "utf-8");
            String[] strings = queryString.split("&");
            for (String value : strings) {
                String[] split = value.split("=");
                if(split.length >= 2){
                    modelMap.put(split[0], split[1]);
                }
            }
            return views;
        } catch (Exception e) {
            return "redirect:main";
        }
    }

    @GetMapping("/main")
    public String main() {
        return "index";
    }

    @GetMapping(value = {"/login","/"})
    public String login() {
        return "login/login";
    }

    @GetMapping("/404")
    public String notFind() {
        return "404";
    }
}
