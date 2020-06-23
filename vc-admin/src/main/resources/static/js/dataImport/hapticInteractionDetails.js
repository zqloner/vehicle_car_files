layui.config({
    base : "../../js/"
}).use(['form','table','layer','ajax'],function(){
    var form = layui.form,
        table = layui.table,
        layer = layui.layer,
        $ = layui.jquery
        ,ajax = layui.ajax//自定义
        ,url = "https://www.easy-mock.com/mock/5c0107c04ed9b43d7590d502/heartHome/gauge";

    var roleSetting = [
        {id:'1',quota:'团队合作绩效得分',result:'153',description:'1',reference:'160-190'},
        {id:'2',quota:'系统时间',result:'153',description:'0',reference:'30-290'},
        {id:'3',quota:'左手力',result:'153',description:'1',reference:''},
        {id:'4',quota:'呼吸',result:'153',description:'',reference:''},
        {id:'5',quota:'右手力',result:'153',description:'',reference:''},
        {id:'6',quota:'力反馈设备末端位置',result:'153',description:'',reference:''},
        {id:'7',quota:'含氧血红蛋白浓度',result:'153',description:'',reference:''},
        {id:'8',quota:'脱氧血红蛋白浓度',result:'153',description:'',reference:''}
    ];
    //表格无数据时的样式
    $(".layui-none").text("").append('<p>数据加载中！</p>');
    //表格渲染
    function tablePlay(data) {
        table.render({
            id: "enquiry",
            elem: "#table",
            data: data,
            skin: 'line',
            limit:8,
            cols: [//设置表头参数
                [
                    {field: 'quota', title: '指标', width: '25%'}
                    ,{field: 'result', title: '结果', width: '25%'}
                    , {field: 'description',title: '异常描述', width: '25%'}
                    , {field: 'reference', align:'center', title: '参考值', width: '25%'}
                ]
            ]
        });
    }
    //加载数据
    function getCadreList(pageNumber,pageSize){
        var params =new Object();
        params.pageNumber = pageNumber;
        params.pageSize = pageSize;
        /*ajax.request(url,'GET',params,function(res){
            tablePlay(res.data);
            laypageCurr(res);
            //删除loding
            // parent.tools.stop();
        });*/
        tablePlay(roleSetting);
    }
    //初始化加载
    getCadreList();
});

