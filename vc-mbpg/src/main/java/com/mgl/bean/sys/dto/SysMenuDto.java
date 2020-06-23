package com.mgl.bean.sys.dto;

/**
 * @Description:
 * @Author: zhangqi
 * @CreateTime: 2020/6/2119:07
 * @Company: MGL
 */
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.experimental.Accessors;

import java.util.List;
@Data
@EqualsAndHashCode(callSuper = false)
@Accessors(chain = true)
public class SysMenuDto {
    private Long id;
    private String name;
    private Long pid;
    private List<SysMenuDto> children;
}
