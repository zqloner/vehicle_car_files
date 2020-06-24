package com.mgl.controller.cars;


import com.mgl.bean.cars.MglVehicleCarInfo;
import com.mgl.constant.CommonResult;
import com.mgl.constant.Constant;
import com.mgl.service.cars.MglVehicleCarInfoService;
import io.swagger.annotations.ApiOperation;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import java.time.LocalDateTime;

/**
 * <p>
 * 前端控制器
 * </p>
 *
 * @author zhangqi
 * @since 2020-06-21
 */
@Controller
@RequestMapping("/mglVehicleCarInfo")
public class MglVehicleCarInfoController {

    @Resource
    private MglVehicleCarInfoService mglVehicleCarInfoService;

    @GetMapping("list")
    @ResponseBody
    @ApiOperation("获取列表")
    public CommonResult getList(MglVehicleCarInfo mglVehicleCarInfo,
                                @RequestParam(value = "pageNum", defaultValue = "1") Integer pageNum,
                                @RequestParam(value = "pageSize", defaultValue = "10") Integer pageSize) {
        return mglVehicleCarInfoService.getList(mglVehicleCarInfo, pageNum, pageSize);
    }

    @PostMapping("addOrUpdate")
    @ResponseBody
    @ApiOperation("新增")
    public CommonResult addUser(MglVehicleCarInfo mglVehicleCarInfo) {
        if (mglVehicleCarInfo.getId() == null) {
            mglVehicleCarInfo.setCreateTime(LocalDateTime.now());
        }
        mglVehicleCarInfo.setUpdateTime(LocalDateTime.now());
        mglVehicleCarInfo.setDelFlag(Constant.DELETE_INVALID);
        return mglVehicleCarInfoService.addOrUpdate(mglVehicleCarInfo);
    }

    @GetMapping("getById")
    @ResponseBody
    @ApiOperation("获取详情")
    public CommonResult getById(Long id) {
        return CommonResult.success(mglVehicleCarInfoService.getById(id), "操作成功");
    }

    @PostMapping("delete")
    @ResponseBody
    @ApiOperation("通过id删除")
    public CommonResult delete(Long id) {
        return mglVehicleCarInfoService.deleteById(id)?CommonResult.success(null, "删除成功"):CommonResult.failed("删除失败");
    }


}
