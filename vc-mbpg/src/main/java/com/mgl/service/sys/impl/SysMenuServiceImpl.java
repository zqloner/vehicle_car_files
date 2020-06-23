package com.mgl.service.sys.impl;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.mgl.bean.sys.SysMenu;
import com.mgl.bean.sys.dto.SysMenuDto;
import com.mgl.dao.sys.SysMenuMapper;
import com.mgl.service.sys.SysMenuService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

/**
 * <p>
 *  服务实现类
 * </p>
 *
 * @author zhangqi
 * @since 2020-06-21
 */
@Service
public class SysMenuServiceImpl extends ServiceImpl<SysMenuMapper, SysMenu> implements SysMenuService {

    @Resource
    private SysMenuMapper sysMenuMapper;

    @Override
    public List<SysMenuDto> getAllMenuList() {
        return sysMenuMapper.getAllMenuList();
    }
}
