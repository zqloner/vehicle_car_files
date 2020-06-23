package com.mgl.dao.sys;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.mgl.bean.sys.SysAdminUser;
import com.mgl.bean.sys.SysMenu;
import com.mgl.bean.sys.dto.SysAdminUserListDto;
import com.mgl.bean.sys.vo.SysAdminUserListVo;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

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
public interface SysAdminUserMapper extends BaseMapper<SysAdminUser> {

    List<SysAdminUserListDto> getSysUserList(SysAdminUserListVo sysAdminUserListVo);
    SysAdminUserListDto getSysUserDetailById(@Param("id")Long id);
    String getMaxCode(@Param("code") String code,@Param("length") Integer length);

    List<SysMenu> getMenuByUserId(Long userid);
}
