package com.mgl.bean.sys.dto;

import com.mgl.bean.sys.SysAdminUser;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.experimental.Accessors;

/**
 * @author 张奇
 * @Company: 阳光易德
 * @date 2019/11/25
 * @Time 11:40
 * @Description:
 */
@Data
@EqualsAndHashCode(callSuper = false)
@Accessors(chain = true)
public class SysAdminUserListDto extends SysAdminUser {
    private Long roleId;

    private String roleName;


}
