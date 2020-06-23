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
        {id:'1',quota:'比武成绩',result:'153',description:'1',reference:'160-190'},
        {id:'2',quota:'攀爬成绩',result:'153',description:'0',reference:'30-290'},
        {id:'3',quota:'越障成绩',result:'153',description:'1',reference:''},
        {id:'4',quota:'长距奔袭成绩',result:'153',description:'',reference:''},
        {id:'5',quota:'潜水成绩',result:'153',description:'',reference:''},
        {id:'6',quota:'排爆成绩',result:'153',description:'',reference:''},
        {id:'7',quota:'网攻成绩',result:'153',description:'',reference:''},
        {id:'8',quota:'狙击成绩',result:'153',description:'',reference:''},
        {id:'9',quota:'接近破袭目标成绩',result:'153',description:'',reference:''},
        {id:'10',quota:'实施破袭战斗成绩',result:'153',description:'',reference:''},
        {id:'11',quota:'安全撤离转移成绩',result:'153',description:'',reference:''},
        {id:'12',quota:'任务团队胜率',result:'153',description:'',reference:''}
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
            limit:12,
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

