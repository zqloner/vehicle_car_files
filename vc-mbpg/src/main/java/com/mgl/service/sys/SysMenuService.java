package com.mgl.service.sys;

import com.baomidou.mybatisplus.extension.service.IService;
import com.mgl.bean.sys.SysMenu;
import com.mgl.bean.sys.dto.SysMenuDto;

import java.util.List;

/**
 * <p>
 *  服务类
 * </p>
 *
 * @author zhangqi
 * @since 2020-06-21
 */
public interface SysMenuService extends IService<SysMenu> {

    List<SysMenuDto> getAllMenuList();
}
