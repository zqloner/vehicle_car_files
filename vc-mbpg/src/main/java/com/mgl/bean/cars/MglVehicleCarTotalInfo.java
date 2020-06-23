package com.mgl.bean.cars;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import java.io.Serializable;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.experimental.Accessors;

/**
 * <p>
 * 车辆档案总表
 * </p>
 *
 * @author zhangqi
 * @since 2020-06-21
 */
@Data
@EqualsAndHashCode(callSuper = false)
@Accessors(chain = true)
public class MglVehicleCarTotalInfo implements Serializable {

    private static final long serialVersionUID = 1L;

    @TableId(value = "id", type = IdType.AUTO)
    private Long id;

    /**
     * 省份
     */
    private String province;

    /**
     * 市级
     */
    private String city;

    /**
     * 区/县
     */
    private String countyInfo;

    /**
     * 整车厂
     */
    private String carFactory;

    /**
     * 电池类型
     */
    private String batteryType;

    /**
     * 容量
     */
    private String capacity;

    /**
     * 电池系统
     */
    private String batterySystem;

    /**
     * 并联
     */
    private String parallelConnection;

    /**
     * 串联
     */
    private String seriesConnection;

    /**
     * 整车系统
     */
    private String vehicleSystem;

    /**
     * 结构（本项内容为开口填充项）
     */
    private String construction;

    /**
     * 整车配置，尽量补充
     */
    private String vehicleConfiguration;

    /**
     * 订单号
     */
    private String orderNumber;

    /**
     * 数量
     */
    private Integer number;

    /**
     * 运行日期(严格按照格式:1970-01-01)
     */
    private String runDate;

    /**
     * 质保期限（年/公里）
     */
    private String warrantyPeriod;

    /**
     * 是否
过保/报废
     */
    private String status;

    /**
     * 责任工程师
     */
    private String dutyEngineer;

    /**
     * 覆盖授权服务站
     */
    private String serviceStation;

    /**
     * 备注
     */
    private String note;

    /**
     * 万公里
2020年3月
     */
    private String threeMayKilometers;

    /**
     * 万公里2020年2月
     */
    private String twoSecondKilometers;

    /**
     * 问题
     */
    private String question;

    /**
     * 公里差
     */
    private String kePoor;

    /**
     * 删除标识符
     */
    private Integer delflag;


}
