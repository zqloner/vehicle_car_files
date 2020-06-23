layui.config({
    base : "/js/"
}).use(['form','table','layer','ajax'],function(){
    var form = layui.form,
        table = layui.table,
        layer = layui.layer,
        $ = layui.jquery
        ,ajax = layui.ajax//自定义
        ,url = "https://www.easy-mock.com/mock/5c0107c04ed9b43d7590d502/heartHome/gauge";

    var roleSetting = [
        // {id:'1',quota:'身高（cm）',result:'153',description:'1',reference:'160-190'},
        // {id:'2',quota:'体重（kg）',result:'153',description:'0',reference:'30-290'},
        // {id:'3',quota:'上肢长（cm）',result:'153',description:'1',reference:''},
        // {id:'4',quota:'下肢长（cm）',result:'153',description:'',reference:''},
        // {id:'5',quota:'胸围（cm）',result:'153',description:'',reference:''},
        // {id:'6',quota:'大臂围（cm）',result:'153',description:'',reference:''},
        // {id:'7',quota:'小臂围（cm）',result:'153',description:'',reference:''},
        // {id:'8',quota:'大腿围（cm）',result:'153',description:'',reference:''},
        // {id:'9',quota:'小腿围（cm）',result:'153',description:'',reference:''},
        // {id:'10',quota:'腰围（cm）',result:'153',description:'',reference:''},
        // {id:'11',quota:'肺活量（ml）',result:'153',description:'',reference:''},
        // {id:'12',quota:'体脂（%）',result:'153',description:'',reference:''},
        // {id:'13',quota:'疾病史',result:'153',description:'',reference:''},
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
            limit:data.length,
            cols: [//设置表头参数
                [
                    {field: 'quata', title: '指标', width: '25%'}
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
        params.id = $("[name=dataId]").val();
        ajax.request("/testDataImport/seeDetail",'GET',params,function(res){
            tablePlay(res);
            form.render();
            // laypageCurr(res);
            //删除loding
            // parent.tools.stop();
        });
        // tablePlay(roleSetting);
    }
    //初始化加载
    getCadreList();

    var typeObj = {1:"身体基础数据",2:"选拔体能数据",3:"触觉交互数据",4:"管理学团队训练数据",5:"心智共享团队",
        6:"脑电数据",7:"生理指标数据",8:"生物数据", 9: "特色体能训练数据"};
    function typeData(type) {
        $("#typeData").html(typeObj[type]);
        form.render();
    }
    typeData($("[name=typeId]").val());
    //加载数据
    function getBodyBasic(pageNumber,pageSize){
        var params =new Object();
        params.id = $("[name=dataId]").val();
        ajax.request("/testDataImport/getUserInfo",'GET',params,function(res){

            $("[name=name]").html(res.name);
            $("[name=username]").html(res.username);
            var strSex = "";
            if(res.sex==0){
                strSex = "女"
            }else if(res.sex==1){
                strSex = "男"
            }
            $("[name=sex]").html(strSex);
            $("[name=birthTime]").html(res.age);
            $("[name=nationName]").html(res.nationName);
            // 政治面貌：1群众、2共青团员、3共产党员（含预备党员）、4其他党派
            var strOutlook = "";
            if(res.politicalOutlook==1){
                strOutlook = "群众"
            }else if(res.politicalOutlook==2){
                strOutlook = "共青团员"
            }else if(res.politicalOutlook==3){
                strOutlook = "共产党员"
            }else if(res.politicalOutlook==4){
                strOutlook = "其他党派"
            }
            $("[name=politicalOutlook]").html(strOutlook);
            // 学历：1高中及以下、2大专、3大学本科、4硕士研究生及以上
            var strEducation = "";
            if(res.educationId==1){
                strEducation = "高中及以下"
            }else if(res.educationId==2){
                strEducation = "大专"
            }else if(res.educationId==3){
                strEducation = "大学本科"
            }else if(res.educationId==4){
                strEducation = "硕士研究生及以上"
            }
            $("[name=educationId]").html(strEducation);
            // 婚姻状况：1未婚单身、2未婚恋爱、3已婚、4其他（离异、丧偶等）
            var strMarriage = "";
            if(res.marriageType==1){
                strMarriage = "未婚单身"
            }else if(res.marriageType==2){
                strMarriage = "未婚恋爱"
            }else if(res.marriageType==3){
                strMarriage = "已婚"
            }else if(res.marriageType==4){
                strMarriage = "其他"
            }
            $("[name=marriageType]").html(strMarriage);
            // 反馈类型 1训练反馈 2设备反馈 3平台反馈 4其他建议
            var myType = "";
            if(res.myType==1){
                strMarriage = "训练反馈"
            }else if(res.myType==2){
                strMarriage = "设备反馈"
            }else if(res.myType==3){
                strMarriage = "平台反馈"
            }else if(res.myType==4){
                strMarriage = "其他建议"
            }
            $("[name=type]").html(res.type);
            $("[name=content]").html(res.content);
            var myTuPianDiv = '';
            if(res.tupianUrl != undefined){
                var tupians = [];
                tupians = res.tupianUrl.split(",");
                for(var i=0;i<tupians.length;i++){
                    myTuPianDiv += ' <img class="screenshot" src="'+tupians[i]+'" alt="">'
                }
            }
            $("[name=myTuPianDiv]").html(myTuPianDiv);
            $("[name=handleResult]").html(res.handleResult);
            $("[name=contactInfo]").html(res.contactInfo);
            $("[name=joinUpTime]").html(res.armyAge);
            $("[name=createTime]").html(res.createTime);
            form.render();
        });
        // tablePlay(roleSetting);
    }
    //初始化加载
    getBodyBasic();
});

