package com.mgl.constant;
public enum ScalePath {


		YaLiYingDuiFangShiTest("YaLiYingDuiFangShiTest","answer"), // 应对方式测验
		Goutongnengli("Goutongnengli","goutongnengli"),  // 沟通能力测验
	    GongZuoKongZhiYuan("GongZuoKongZhiYuan","jobControl"), // 工作控制源量表
		QingXuWenDingXingScale("QingXuWenDingXingScale","moodStability"),  // 情绪稳定性测验
		YaLiFanYingScale("YaLiFanYingScale","pressure"),//压力水平量表
		SuDianXinLiZiBen("SuDianXinLiZiBen","psychologicalCapitalSudian"), // 心理资本量表
		RuiWenTuiLi("RuiWenTuiLi","RuiWenTuiLi"),//瑞文推理
		ZhengZhuangZiPing("ZhengZhuangZiPing","symptom"); // SCL-90


		ScalePath(String type, String path) {
            this.type = type;
            this.path = path;
        }
        private String type;
        private String path;

        public String getType() {
            return type;
        }

        public String getPath() {
            return path;
        }

        public static String getPath(String scaleCode) {
            for (ScalePath scalePath: ScalePath.values()){
                if (scalePath.getType().equals(scaleCode)){
                    return scalePath.getPath();
                }
            }
            return "";
        }
        
    }

