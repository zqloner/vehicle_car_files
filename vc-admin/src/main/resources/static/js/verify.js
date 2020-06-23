//表单验证
layui.define(['form','jquery'],function(exports){
    var form = layui.form
        ,$ = layui.jquery;
    //自定义验证规则
    form.verify({

        //账号
        username: [/^[0-9a-zA-Z]{4,20}$/,'账号只能是4-20位数字或者字母'],
        adminusercount: [/^[0-9a-zA-Z]{6,20}$/,'账号只能是6-20位数字或者字母'],
        myPerm: function (value) {
            var checkLenth = $("[name='myPerMissions']:checked");
            if (checkLenth.length <= 0) {
                return "请选择权限";
            }
        }
        //验证姓名
        ,name: [/^[0-9A-Za-z\u2E80-\uFE4F]{1,20}$/,'姓名只能是1-20位汉字、字母或者数字']

    	//验证班级名称
    	/*,className : [/^[a-zA-Z0-9_\u4e00-\u9fa5]{1,9}$/,'名称只能是汉字、数字、字母、下划线(不超过10个字符)']
    	//验证批量添加班级
	    ,classNameNumber :[/^[1-9]\d{0,2}$/,'只能是1~3位数字、第一位不能为0']
    	//验证学号工号
    	,jobNumber :[/^[0-9a-zA-Z_]{1,30}$/,'只能是字母、数字、下划线(不超过30位)']
    	//学校管理员名称
    	,schoolUserName:[/^\w{5,20}$/,'管理员账号格式为5-20个字符,包括字母、数字、下划线']*/
        //验证姓名
       /* ,username: function(value, item){ //value：表单的值、item：表单的DOM对象
            if(!new RegExp("^[a-zA-Z0-9_\u4e00-\u9fa5\\s·]+$").test(value)){
                return '用户名不能有特殊字符';
            }
            if(/(^\_)|(\__)|(\_+$)/.test(value)){
                return '用户名首尾不能出现下划线\'_\'';
            }
            if(/^\d+\d+\d$/.test(value)){
                return '用户名不能全为数字';
            }
        }*/
        //验证标题
        ,title: function(value){
            if(value.length < 5){
                return '标题至少得5个字符啊';
            }
        }
        //验证密码
        ,pass: [
            /^[\S]{6,12}$/
            , '密码必须6到12位，且不能出现空格']
        ,content: function(value){
            layedit.sync(editIndex);
        }
    });
    exports("verify");
});