package com.mgl.service.cars;

import com.baomidou.mybatisplus.extension.service.IService;
import com.mgl.bean.cars.MglVehicleCarInfo;
import com.mgl.constant.CommonResult;

/**
 * <p>
 *  服务类
 * </p>
 *
 * @author zhangqi
 * @since 2020-06-21
 */
public interface MglVehicleCarInfoService extends IService<MglVehicleCarInfo> {

    CommonResult getList(MglVehicleCarInfo mglVehicleCarInfo, Integer pageNum, Integer pageSize);

    CommonResult addOrUpdate(MglVehicleCarInfo mglVehicleCarInfo);

    Boolean deleteById(Long id);
}
