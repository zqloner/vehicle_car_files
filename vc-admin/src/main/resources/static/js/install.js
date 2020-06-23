layui.config({
    base : "/js/"
}).use(['form','layer','jquery','ajax'],function(){
    var form = layui.form,
        $ = layui.jquery,
        layer = layui.layer;


    //表单自定义验证规则
    form.verify({
        //验证密码
        // var reg = /^[\w]{6,12}$/
        pass: [/^[\S]{6,16}$/, '密码必须6到16位，且不能出现空格']
    });
    //监听提交--修改密码
    form.on('submit(modify)', function(data){
        if(data.field.newPass != data.field.finalPass){
                layer.msg("确认密码与新密码不一致，请重新输入！");
                return false;
        }
        var params = {};
        params.oldPass = hex_md5(data.field.oldPass);
        params.newPass = hex_md5(data.field.newPass);

        //仅限开发环境使用，正式时请修改
        // if(data.field.oldPass !='123456'){
        //     layer.msg("原密码错误，请重新输入！");
        //     return false;
        // }else if(data.field.newPass != data.field.finalPass){
        //     layer.msg("确认密码与新密码不一致，请重新输入！");
        //     return false;
        // }else {
        //     //仅限开发环境使用，正式时请去除
        //     layer.alert(JSON.stringify(data.field), {
        //         title: '最终的提交信息'
        //     },function () {
        //         form.val('install', {
        //             "oldPass": ""
        //             ,"newPass": ""
        //             ,"finalPass": ""
        //         });
        //         layer.closeAll();//关闭所有层
        //         layer.msg("修改成功！");
        //     });
            //这里一般是发送修改的Ajax请求
            //同步更新表格和缓存对应的值
            $.post('/sysAdminUser/changePwd',params,function(res){

                form.val('install', {
                    "oldPass": ""
                    ,"newPass": ""
                    ,"finalPass": ""
                });
                layer.msg(res.message);
            });
            // layer.closeAll();//关闭所有层
            return false;
        // }
    });
});