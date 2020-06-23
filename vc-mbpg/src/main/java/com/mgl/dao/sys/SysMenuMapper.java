package com.mgl.dao.sys;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.mgl.bean.sys.SysMenu;
import com.mgl.bean.sys.dto.SysMenuDto;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

/**
 * <p>
 *  Mapper 接口
 * </p>
 *
 * @author zhangqi
 * @since 2020-06-21
 */
@Mapper
public interface SysMenuMapper extends BaseMapper<SysMenu> {
    List<SysMenuDto> getAllMenuList();
}
