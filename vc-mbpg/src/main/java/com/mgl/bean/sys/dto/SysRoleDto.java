package com.mgl.bean.sys.dto;

import com.mgl.bean.sys.SysRole;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.experimental.Accessors;

import java.util.List;

/**
 * @author 张奇
 * @Company: 阳光易德
 * @date 2019/12/5
 * @Time 9:42
 * @Description:
 */
@Data
@EqualsAndHashCode(callSuper = false)
@Accessors(chain = true)
public class SysRoleDto  extends SysRole {
    private List<Long> menuIds;
}
