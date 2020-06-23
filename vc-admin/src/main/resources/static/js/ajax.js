layui.define(["layer","jquery"],function(exports){
    var $ = layui.$,
        layer = layui.layer,
        promise = {
            request : (url, type, data , collBack) => {
                $.ajax({
                    url: url,
                    type:type,
                    data:data,//额外参数
                    // dataType:"json",
                    success: function (res) {
                        if (res.code == 200) {
                            var data = res.data;
                            collBack(data);
                        }else {
                            layer.msg(res.message,{icon: 5});
                        }
                        //删除loding
                        // parent.tools.stop();
                    },

                    error:function () {
                        //删除loding
                        // parent.tools.stop();
                        layer.msg('请求异常！');
                    }
                });
            }
        };

    exports("ajax",promise);
});