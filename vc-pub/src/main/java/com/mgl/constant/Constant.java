package com.mgl.constant;


public class Constant {
	//有效
	public static final int STATUS_VALID = 1;
	// 无效
	public static final int STATUS_INVALID = 0;
	//有效
	public static final int DELETE_VALID = 1;
	// 无效
	public static final int DELETE_INVALID = 0;
	//默认page
	public static final String PAGE_NUMBER = "1";
	//默认分页单位
	public static final String PAGE_SIZE = "10";
	//管理员账号默认密码
	public static final String ADMINUSER_DEFAULT_PASSWORD = "96e79218965eb72c92a549dd5a330112";
	//任务状态   未开始
	public static final int MISSION_STATUS_UN_BEGIN = 1;
	//任务状态   进行中
	public static final int MISSION_STATUS_BEGIN = 2;
	//任务状态   已结束
	public static final int MISSION_STATUS_END = 3;
	//默认code
	public static final String ACCOUNT_DEFAULT_CODE = "0001";
	//用户的code相加的长度4
	public static final int ACCOUNT_ADD_NUMBER = 4 ;
	//完成
	public static final int FINISH = 1;
	//未完成
	public static final int UNFINISH = 0;
	//任务默认   新任务状态
	public static final int MISSION_IS_NEW = 1;

	public static final int MISSION_UN_IS_NEW = 0;

	public static final String DATE_FORMAT = "yyyy-MM-dd";

	//量表
	public static final int CONTENT_SCALE = 1;
	//方案
	public static final int CONTENT_SCHEME = 2;
	//量表下分类(1量表   2  问卷)
	public static final int SCALE_SCALE_TYPE = 1;

	public static final int SCALE_PSQ_TYPE = 2;

	// 线程池最大线程数
	public static final int THREAD_POOL_COUNT = 10;

	//批量个人报告 code
	public static final String CATEGORY_CODE_REPORT = "1";
	//集体报告 code
	public static final String CATEGORY_CODE_COLLECTIVE = "2";
	//批量原始分 code
	public static final String CATEGORY_CODE_SCORE = "3";

	//world生成成功
	public static final int DOCUMENT_STATUS_FINISH = 1;
	//world没有生成
	public static final int DOCUMENT_STATUS_UNFIN = 0;
	//world生成异常
	public static final int DOCUMENT_STATUS_FAIL = 2;

	//原始分   文件
	public static final String ORIGINAL = "original";

	//未读
	public static final int UN_IS_READ = 0;
	//已读
	public static final int IS_READ = 1;
	//个人报告   文件
	public static final String REPORT = "report";

	//量表请求ip
	public static final String SUBMIT_SCALE_IP = "http://39.107.202.226";
	//量表请求接口
	public static final String SUBMIT_SCALE = "submitScaleAnswers";

	//天数
	public static final Integer A_YEAR_DAYS = 365 ;

	public static final String WEB_TESTING_ID = "_testingId";

	public static final String SCALE_CODE = "sw_scale_";

	public static final Integer MISSION_UN_VISIBLE = 0;

}
