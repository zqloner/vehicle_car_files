layui.config({
    base : "/js/"
}).use(['form','layer','jquery','ajax'],function(){
    var form = layui.form
        ,ajax = layui.ajax
        ,$ = layui.jquery;

    //登录按钮
    form.on("submit(login)",function(data){
        console.log(data.field);
        $(this).text("登录中...").attr("disabled","disabled").addClass("layui-disabled");
        var params = {};
        params.username = data.field.username;
        params.password = hex_md5(data.field.password);
        login(params);
        return false;
    });

    /*获取页面高度，赋值给背景图*/
    var browserHeight = document.documentElement.clientHeight;
    if(browserHeight > 667){
        $(".loginBody").attr("style","height:"+browserHeight+"px");
    }else{
        $(".loginBody").attr("style","height:667px");
    }

    /*监听浏览器窗口 动态设置title盒子高度为图片高度*/
    window.onresize = function(){
        browserHeight = document.documentElement.clientHeight;
        if(browserHeight > 667){
            $(".loginBody").attr("style","height:"+browserHeight+"px");
        }else{
            $(".loginBody").attr("style","height:667px");
        }
    }
    function login(data) {
        $.ajax({
            type:"POST",
            url:"/authe",
            data:data,
            dataType:"json",
            success:function(res){
                if(res.code == 200){
                    window.location.href = "/main"
                }else{
                    layer.msg(res.message,{icon: 5});
                }
                setTimeout(function(){
                    $(".layui-form-item button").text("登录").removeAttr("disabled","disabled").removeClass("layui-disabled");
                },2000)

            }
        })
    }
});
