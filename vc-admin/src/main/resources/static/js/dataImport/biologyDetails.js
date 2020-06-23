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
        {id:'1',quota:'ACE基因',result:'153',description:'1',reference:'160-190'},
        {id:'2',quota:'心功能(SDNN；ms)',result:'153',description:'0',reference:'30-290'},
        {id:'3',quota:'肺功能(FEV1/FVC；%)',result:'153',description:'1',reference:''},
        {id:'4',quota:'最大摄氧量（VO2max；mL/kg/min）',result:'153',description:'',reference:''},
        {id:'5',quota:'FADS1基因',result:'153',description:'',reference:''},
        {id:'6',quota:'EPAS1基因',result:'153',description:'',reference:''},
        {id:'7',quota:'C-反应蛋白(CRP；mg/L)',result:'153',description:'',reference:''},
        {id:'8',quota:'OXTR基因',result:'153',description:'',reference:''},
        {id:'9',quota:'cfDNA甲基化水平-GeneA',result:'153',description:'',reference:''},
        {id:'10',quota:'cfDNA甲基化水平-GeneB',result:'153',description:'',reference:''},
        {id:'11',quota:'cfDNA甲基化水平-GeneC',result:'153',description:'',reference:''},
        {id:'12',quota:'心肌肌钙蛋白(cTnT；pg/mL)',result:'153',description:'',reference:''},
        {id:'13',quota:'神经胶质纤维酸性蛋白(GFAP；pg/mL)',result:'153',description:'',reference:''},
        {id:'14',quota:'泛素羧基末端水解酶Ll(UCH-L1；pg/mL)',result:'153',description:'',reference:''}
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
            limit:14,
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

