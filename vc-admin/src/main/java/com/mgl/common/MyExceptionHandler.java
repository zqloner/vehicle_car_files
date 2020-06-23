package com.mgl.common;

import com.mgl.constant.CommonResult;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
@Slf4j
public class MyExceptionHandler {
    @ExceptionHandler(value = Exception.class)
    public CommonResult handlerException(Exception e) {
        log.error("全局异常",e);
        return CommonResult.failed("系统异常");
    }
}
