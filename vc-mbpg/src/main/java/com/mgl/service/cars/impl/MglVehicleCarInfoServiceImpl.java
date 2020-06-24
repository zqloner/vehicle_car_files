package com.mgl.service.cars.impl;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.github.pagehelper.PageHelper;
import com.mgl.bean.cars.MglVehicleCarInfo;
import com.mgl.constant.CommonResult;
import com.mgl.constant.Constant;
import com.mgl.dao.cars.MglVehicleCarInfoMapper;
import com.mgl.service.cars.MglVehicleCarInfoService;
import com.mgl.utils.CommonPage;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.Resource;

/**
 * <p>
 *  服务实现类
 * </p>
 *
 * @author zhangqi
 * @since 2020-06-21
 */
@Service
public class MglVehicleCarInfoServiceImpl extends ServiceImpl<MglVehicleCarInfoMapper, MglVehicleCarInfo> implements MglVehicleCarInfoService {

    @Resource
    private MglVehicleCarInfoMapper mglVehicleCarInfoMapper;

    @Override
    public CommonResult getList(MglVehicleCarInfo mglVehicleCarInfo, Integer pageNum, Integer pageSize) {
        PageHelper.startPage(pageNum, pageSize);
        return CommonResult.success(CommonPage.restPage(mglVehicleCarInfoMapper.getList(mglVehicleCarInfo)));
    }

    @Override
    @Transactional(rollbackFor = Exception.class)
    public CommonResult addOrUpdate(MglVehicleCarInfo mglVehicleCarInfo) {
        return saveOrUpdate(mglVehicleCarInfo)?CommonResult.success(null,"操作成功"):CommonResult.failed("操作失败");
    }

    @Override
    public Boolean deleteById(Long id) {
        return saveOrUpdate(getById(id).setDelFlag(Constant.DELETE_VALID));
    }
}
