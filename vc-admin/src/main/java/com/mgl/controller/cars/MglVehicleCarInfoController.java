package com.mgl.controller.cars;


import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.github.pagehelper.PageHelper;
import com.mgl.bean.cars.MglVehicleCarInfo;
import com.mgl.constant.CommonResult;
import com.mgl.constant.Constant;
import com.mgl.service.cars.MglVehicleCarInfoService;
import com.mgl.utils.CommonPage;
import com.mgl.utils.ExcelUtils;
import io.swagger.annotations.ApiOperation;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletResponse;
import java.time.LocalDateTime;
import java.util.List;

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
        PageHelper.startPage(pageNum, pageSize);
        return CommonResult.success(CommonPage.restPage(mglVehicleCarInfoService.getList(mglVehicleCarInfo)));
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


    /**
     * 导出
     *
     * @param response
     */
    @RequestMapping("exportList")
    public void exportExcel(HttpServletResponse response,MglVehicleCarInfo mglVehicleCarInfo) {
        List<MglVehicleCarInfo> list = mglVehicleCarInfoService.getList(mglVehicleCarInfo);
        ExcelUtils.createExcel(response, list, MglVehicleCarInfo.class, "cars-info.xlsx");
    }

    @PostMapping("importExcel")
    @ResponseBody
    public CommonResult upload(MultipartFile file) {
//        public static <T> List<T> readExcel(String path, Class<T> cls, MultipartFile file)
        String path = "";
        List<MglVehicleCarInfo> list = ExcelUtils.readExcel(path, MglVehicleCarInfo.class, file, 0);
        for (int i = 0; i < list.size(); i++) {
            for (int j = list.size() - 1; j > i; j--) {
                if (list.get(j).getCarVin().equals(list.get(i).getCarVin())) {
                    return CommonResult.failed("第" + (i + 2) + "行和第" + (j + 2) + "行vin码重复,请核查!");
                }
            }
            String carVin = list.get(i).getCarVin();
            MglVehicleCarInfo dict = mglVehicleCarInfoService.getOne(new QueryWrapper<>(new MglVehicleCarInfo().setCarVin(carVin)));
            if (dict != null) {
                return CommonResult.failed("第" + (i + 2) + "行错误，汽车vin号已经存在");
            }
            if (carVin.length() != 17) {
                return CommonResult.failed("第" + (i + 2) + "行错误，vin码位数不正确");
            }
        }
        list.stream().forEach(x -> {
            x.setDelFlag(Constant.DELETE_INVALID);
        });
        return mglVehicleCarInfoService.saveBatch(list) ? CommonResult.success("添加成功！共导入" + list.size() + "条数据") : CommonResult.failed("导入失败");
    }

}
