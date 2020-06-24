package com.mgl.bean.cars;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.experimental.Accessors;

import java.io.Serializable;
import java.time.LocalDateTime;

/**
 * <p>
 * 
 * </p>
 *
 * @author zhangqi
 * @since 2020-06-21
 */
@Data
@EqualsAndHashCode(callSuper = false)
@Accessors(chain = true)
public class MglVehicleCarInfo implements Serializable {

    private static final long serialVersionUID = 1L;

    @TableId(value = "id", type = IdType.AUTO)
    private Long id;

    /**
     * VIN
     */
    private String carVin;

    /**
     * 车牌号
     */
    private String carNumber;

    /**
     * 省份
     */
    private String province;

    /**
     * 惠州市
     */
    private String city;

    /**
     * 区县
     */
    private String countyInfo;

    /**
     * 整车客户
     */
    private String vehicleCustomer;

    /**
     * 电池编号
     */
    private String batteryNumber;

    /**
     * 订单号
     */
    private String orderNumber;

    /**
     * 电池类型
     */
    private String batteryType;

    /**
     * 单体容量
     */
    private String singleCapacity;

    /**
     * 现BCU软件版本
     */
    private String nowBcuSoftwareVersion;

    /**
     * 原BCU软件版本
     */
    private String originalBcuSoftwareVersion;

    /**
     * 公交线路
     */
    private String busRoute;

    /**
     * 公交公司
     */
    private String busCompany;

    /**
     * 车辆投入使用时间
     */
    private String vehicleServiceTime;

    /**
     * 混合模式
     */
    private String mixedModel;

    /**
     * 主机厂车工号
     */
    private String mainTurningNumber;

    /**
     * 原电池编号
     */
    private String galvanicCellNumber;

    /**
     * 备注
     */
    private String note;

    /**
     * 删除标识符
     */
    private Integer delFlag;

    private LocalDateTime createTime;
    private LocalDateTime updateTime;


}
