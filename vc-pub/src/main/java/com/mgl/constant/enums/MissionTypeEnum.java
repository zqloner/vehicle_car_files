package com.mgl.constant.enums;
public enum MissionTypeEnum {

    // 配属选拔
    PSXB(1,"http://filecdn.yalixinli.com/specialWarfare/mission/logo/psxb_zw.png"),
    // 训练提升
    XLTS(2,"http://filecdn.yalixinli.com/specialWarfare/mission/logo/xlts.png"),
    // 日常监测',
    RCJC(3,"http://filecdn.yalixinli.com/specialWarfare/mission/logo/rcjc.png");


    MissionTypeEnum(Integer type, String path) {
        this.type = type;
        this.path = path;
    }
    private Integer type;
    private String path;

    public Integer getType() {
        return type;
    }

    public String getPath() {
        return path;
    }

    public static String getPath(Integer type) {
        for (MissionTypeEnum scalePath: MissionTypeEnum.values()){
            if (scalePath.getType().equals(type)){
                return scalePath.getPath();
            }
        }
        return "";
    }

}

