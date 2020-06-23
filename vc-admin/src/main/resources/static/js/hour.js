//注册时间
layui.define(['jquery','laydate'],function(exports){
    //声明使用
    var laydate = layui.laydate,
        $ = layui.jquery;
    //注册时间
    //选择日期
    lay('.laydate').each(function(){
        laydate.render({
            elem: this
            ,trigger: 'click'
            ,theme:'#1890ff'
        });
    });
    //选择月份
    lay('.laymonth').each(function(){
        laydate.render({
            elem: this
            ,trigger: 'click'
            ,type: 'month'
            ,theme:'#1890ff'
        });
    });
    //选择时间
    lay('.layDatetime').each(function(){
        laydate.render({
            elem: this
            ,trigger: 'click'
            ,type: 'datetime'
            ,theme:'#1890ff'
        });
    });

    //最大时间
    lay('.maxTime').each(function(){
        laydate.render({
            elem: this
            ,trigger: 'click'
            ,theme:'#1890ff'
            ,max:(new Date()).Format("yyyy-MM-dd")
        });
    });
    exports("hour");
});