/**
 * Created by zhuxq on 2019/9/6.
 */
layui.config({
    base : "/js/"
}).use(['form','table','layer','laypage','hour','pagination','ajax','fileUpload','upload'], function () {
    var $ = layui.jquery
        , layer = layui.layer
        , form = layui.form
        ,upload = layui.upload
        , fileUpload = layui.fileUpload;//自定义文件上传
    //上传文件
    fileUpload.picture({
        elem:"#upload",
        url:"/mglVehicleCarTotalInfo/importExcel",//上传接口
        // ,data:'',//额外参数
        accept:"file"
    }, function(res, index, upload){  //执行上传请求后的回调
        if(res.code == "200"){
            layer.msg(res.data);
            layer.closeAll('loading'); //关闭loadingd
            window.location.href = "/changeViews?views=cars/cars-total-info";
        }else{
            layer.msg(res.message);
            layer.closeAll('loading'); //关闭loading
        }
    });
});