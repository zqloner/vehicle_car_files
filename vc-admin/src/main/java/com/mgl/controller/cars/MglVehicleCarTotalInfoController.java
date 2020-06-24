package com.mgl.controller.cars;


import com.github.pagehelper.PageHelper;
import com.mgl.bean.cars.MglVehicleCarTotalInfo;
import com.mgl.constant.CommonResult;
import com.mgl.constant.Constant;
import com.mgl.service.cars.MglVehicleCarTotalInfoService;
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
 * 车辆档案总表 前端控制器
 * </p>
 *
 * @author zhangqi
 * @since 2020-06-21
 */
@Controller
@RequestMapping("/mglVehicleCarTotalInfo")
public class MglVehicleCarTotalInfoController {

    @Resource
    private MglVehicleCarTotalInfoService mglVehicleCarTotalInfoService;

    @GetMapping("list")
    @ResponseBody
    @ApiOperation("获取列表")
    public CommonResult getList(MglVehicleCarTotalInfo mglVehicleCarTotalInfo,
                                @RequestParam(value = "pageNum", defaultValue = "1") Integer pageNum,
                                @RequestParam(value = "pageSize", defaultValue = "10") Integer pageSize) {
        PageHelper.startPage(pageNum, pageSize);
        return CommonResult.success(CommonPage.restPage(mglVehicleCarTotalInfoService.getList(mglVehicleCarTotalInfo)));
    }

    @PostMapping("addOrUpdate")
    @ResponseBody
    @ApiOperation("新增")
    public CommonResult addUser(MglVehicleCarTotalInfo mglVehicleCarTotalInfo) {
        if (mglVehicleCarTotalInfo.getId() == null) {
            mglVehicleCarTotalInfo.setCreateTime(LocalDateTime.now());
        }
        mglVehicleCarTotalInfo.setUpdateTime(LocalDateTime.now());
        mglVehicleCarTotalInfo.setDelFlag(Constant.DELETE_INVALID);
        return mglVehicleCarTotalInfoService.addOrUpdate(mglVehicleCarTotalInfo);
    }

    @GetMapping("getById")
    @ResponseBody
    @ApiOperation("获取详情")
    public CommonResult getById(Long id) {
        return CommonResult.success(mglVehicleCarTotalInfoService.getById(id), "操作成功");
    }

    @PostMapping("delete")
    @ResponseBody
    @ApiOperation("通过id删除")
    public CommonResult delete(Long id) {
        return mglVehicleCarTotalInfoService.deleteById(id)?CommonResult.success(null, "删除成功"):CommonResult.failed("删除失败");
    }

    /**
     * 导出
     *
     * @param response
     */
    @RequestMapping("exportList")
    public void exportExcel(HttpServletResponse response, MglVehicleCarTotalInfo mglVehicleCarTotalInfo) {
        List<MglVehicleCarTotalInfo> list = mglVehicleCarTotalInfoService.getList(mglVehicleCarTotalInfo);
        ExcelUtils.createExcel(response, list, MglVehicleCarTotalInfo.class, "cars-total-info.xlsx");
    }

    @PostMapping("importExcel")
    @ResponseBody
    public CommonResult upload(MultipartFile file) {
//        public static <T> List<T> readExcel(String path, Class<T> cls, MultipartFile file)
        String path = "";
        List<MglVehicleCarTotalInfo> list = ExcelUtils.readExcel(path, MglVehicleCarTotalInfo.class, file,0);
        list.stream().forEach(x -> {
            x.setDelFlag(Constant.DELETE_INVALID);
        });
        return mglVehicleCarTotalInfoService.saveBatch(list) ? CommonResult.success("添加成功！共导入" + list.size() + "条数据") : CommonResult.failed("导入失败");
    }
}
