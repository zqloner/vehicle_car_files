package com.mgl.bean.sys.dto;


import com.mgl.bean.sys.SysRole;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.experimental.Accessors;

/**
 * @author 张奇
 * @Company: 阳光易德
 * @date 2019/11/27
 * @Time 14:06
 * @Description:
 */
@Data
@EqualsAndHashCode(callSuper = false)
@Accessors(chain = true)
public class SysRoleListDto extends SysRole {
    private String permissions;
}
