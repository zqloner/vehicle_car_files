package com.mgl.bean.sys.vo;

import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.experimental.Accessors;
import org.apache.commons.lang3.StringUtils;

/**
 * @Description:
 * @Author: zhangqi
 * @CreateTime: 2020/6/2119:13
 * @Company: MGL
 */
@Data
@EqualsAndHashCode(callSuper = false)
@Accessors(chain = true)
public class SysAdminUserListVo {
    private Long currentId;
    private String code;
    private String username;
    private Long roleId;
    private String start;
    private String end;

    public void setEnd(String end) {
        if (!StringUtils.isBlank(end)) {
            this.end = end + " 23:59:59";
        } else {
            this.end = end;
        }
    }
}