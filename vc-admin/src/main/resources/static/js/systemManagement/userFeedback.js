layui.config({
    base : "/js/"
}).use(['form','table','layer','element','pagination','projectile','ajax'],function(){
    var form = layui.form
        ,table = layui.table
        ,layer = layui.layer
        ,$ = layui.jquery
        ,element = layui.element//Tab的切换功能，切换事件监听等，需要依赖element模块
        ,pagination = layui.pagination//自定义分页
        ,projectile = layui.projectile//自定义弹框
        ,ajax = layui.ajax//自定义
        ,pageFlag = true
        ,limitNumber = 10//表格每页显示的条数
        ,url = "https://www.easy-mock.com/mock/5c0107c04ed9b43d7590d502/heartHome/gauge";

    var searchObj = new Object();

    var roleSetting = [
        {id:'1',username:'张三丰',managerNum:'111102033',feedbackType:'训练反馈',feedbackTime:'2019-11-18',state:'0'},
        {id:'2',username:'张淑芳',managerNum:'111102033',feedbackType:'平台反馈',feedbackTime:'2019-11-18',state:'1'},
        {id:'3',username:'谭思敏',managerNum:'111102033',feedbackType:'其他建议',feedbackTime:'2019-11-18',state:'0'},
    ];
    // //表格无数据时的样式
    // $(".layui-none").text("").append('<p>数据加载中！</p>');
    // var pending = [],processed = [];
    // for(var i=0;i < roleSetting.length;i++){
    //     debugger;
    //     if(roleSetting[i].handleResult==undefined){
    //         pending.push(roleSetting[i]);
    //     }else{
    //         processed.push(roleSetting[i]);
    //     }
    // }
    //监听导航点击
    element.on('nav(navigation)', function(elem){
        //表格无数据时的样式
        // $(".layui-none").text("").append('<p>数据加载中！</p>');
        // var pending = [],processed = [];
        // for(var i=0;i < roleSetting.length;i++){
        //     if(roleSetting[i].handleResult==undefined){
        //         pending.push(roleSetting[i]);
        //     }else{
        //         processed.push(roleSetting[i]);
        //     }
        // }
        // layer.msg(elem.text());
        pageFlag = true;
        if(elem.text()=='全部'){
            searchObj.isRead = "";
            $("[name=searchName]").val("");
            form.render();
            getCadreList();
        }else if(elem.text()=='未处理'){
            $("[name=searchName]").val("");
            form.render();
            searchObj.isRead = 0;
            getCadreList();
        }else if(elem.text()=='已处理'){
            $("[name=searchName]").val("");
            form.render();
            searchObj.isRead = 1;
            getCadreList();
        }
    });
    //表格渲染
    function tablePlay(data) {
        table.render({
            id: "enquiry",
            elem: "#table",
            data: data,
            skin: 'line',
            limit:limitNumber,
            cols: [//设置表头参数
                [
                    {type:'numbers', align:'center',title: '编号', width: '5%'}
                    ,{field: 'name', title: '反馈人姓名', width: '15%'}
                    , {field: 'username', title: '反馈账号', width: '15%'}
                    , {field: 'type', title: '反馈类型', width: '15%'}
                    , { title: '反馈时间', width: '20%',templet: function (d) {
                        return (new Date(d.createTime)).Format("yyyy-MM-dd");
                    }
                }
                    , { align:'center', title: '状态', width: '15%',templet: function (d) {
                        if (d.handleResult == undefined) {return "<div><span class='layui-badge-dot'></span>待处理</div>";
                        } else{return "<div><span class='layui-badge-dot layui-bg-green'></span>已处理</div>";}
                    }}
                    , {title: '操作', align:'center', width: '15%', templet: function (d) {
                        if (d.handleResult == undefined) {return "<a class='layui-btn layui-btn-xs' lay-event='handle'>处理</a>";
                        } else {return "<a class='layui-btn layui-btn-xs' lay-event='see_btn'>查看</a>";}
                    }}
                ]
            ]
        });
    }
    //分页渲染
    function laypageCurr(res) {
        if (pageFlag) {
            pagination.paging({data:res,num:limitNumber,elem:'page'},function (obj, first) {
                //obj包含了当前分页的所有参数，比如：
                // console.log(obj.curr); //得到当前页，以便向服务端请求对应页的数据。
                // console.log(obj.limit); //得到每页显示的条数
                limitNumber = obj.limit;
                if (!first) {
                    pageFlag = false;
                    getCadreList(obj.curr, obj.limit)
                }
            });
        }
    }
    //加载数据
    function getCadreList(pageNumber,pageSize){
        searchObj.pageNum = pageNumber;
        searchObj.pageSize = pageSize;
        searchObj.name = $("[name=searchName]").val();
        $.ajax({
            url:"/sysFeedback/list" ,
            type:"GET" ,
            data:searchObj,
            success:function (res) {
                if(res.code==200){
                    // pageFlag = true;
                    roleSetting = res.data.list;
                    tablePlay(res.data.list);
                    laypageCurr(res.data);
                }else {
                    layer.alert(res.message);
                }
            } ,
            dataType:"json"
        });
        return false;
        //
        // tablePlay(roleSetting);
        // laypageCurr({total:20});
    }
    //初始化加载
    getCadreList();
    //监听操作
    var feedBackId = {};
    table.on('tool(test)', function(obj){
        feedBackId = obj.data.id;
        $.ajax({
            url:"/sysFeedback/handleOrSeeDetail" ,
            type:"GET" ,
            data:{"id":obj.data.id},
            success:function (res) {
            // <li><div class="mid_name">姓名：</div><div class="mid_value" name="name">田玲</div></li>
            //     <li><div class="mid_name">账号：</div><div class="mid_value" name="username">111102033</div></li>
            //     <li><div class="mid_name">性别：</div><div class="mid_value" name="sex">女</div></li>
            //     <li><div class="mid_name">出生年月：</div><div class="mid_value" name="birthTime">1989-11-18</div></li>
            //     <li><div class="mid_name">民族：</div><div class="mid_value" name="nationName">汉族</div></li>
            //     <li><div class="mid_name">政治面貌：</div><div class="mid_value" name="politicalOutlook">中共党员</div></li>
            //     <li><div class="mid_name">文化程度：</div><div class="mid_value" name="educationId">本科</div></li>
            //     <li><div class="mid_name">恋爱状态：</div><div class="mid_value" name="marriageType">已婚</div></li>
                if(res.code==200){
                    $("[name=name]").html(res.data.name);
                    $("[name=username]").html(res.data.username);
                    var strSex = "";
                    if(res.data.sex==0){
                        strSex = "女"
                    }else if(res.data.sex==1){
                        strSex = "男"
                    }
                    $("[name=sex]").html(strSex);
                    $("[name=birthTime]").html(res.data.birthTime);
                    $("[name=nationName]").html(res.data.nationName);
                    // 政治面貌：1群众、2共青团员、3共产党员（含预备党员）、4其他党派
                    var strOutlook = "";
                    if(res.data.politicalOutlook==1){
                        strOutlook = "群众"
                    }else if(res.data.politicalOutlook==2){
                        strOutlook = "共青团员"
                    }else if(res.data.politicalOutlook==3){
                        strOutlook = "共产党员"
                    }else if(res.data.politicalOutlook==4){
                        strOutlook = "其他党派"
                    }
                    $("[name=politicalOutlook]").html(strOutlook);
                    // 学历：1高中及以下、2大专、3大学本科、4硕士研究生及以上
                    var strEducation = "";
                    if(res.data.educationId==1){
                        strEducation = "高中及以下"
                    }else if(res.data.educationId==2){
                        strEducation = "大专"
                    }else if(res.data.educationId==3){
                        strEducation = "大学本科"
                    }else if(res.data.educationId==4){
                        strEducation = "硕士研究生及以上"
                    }
                    $("[name=educationId]").html(strEducation);
                    // 婚姻状况：1未婚单身、2未婚恋爱、3已婚、4其他（离异、丧偶等）
                    var strMarriage = "";
                    if(res.data.marriageType==1){
                        strMarriage = "未婚单身"
                    }else if(res.data.marriageType==2){
                        strMarriage = "未婚恋爱"
                    }else if(res.data.marriageType==3){
                        strMarriage = "已婚"
                    }else if(res.data.marriageType==4){
                        strMarriage = "其他"
                    }
                    $("[name=marriageType]").html(strMarriage);
                    // 反馈类型 1训练反馈 2设备反馈 3平台反馈 4其他建议
                    var myType = "";
                    if(res.data.type==1){
                        myType = "训练反馈"
                    }else if(res.data.type==2){
                        myType = "设备反馈"
                    }else if(res.data.type==3){
                        myType = "平台反馈"
                    }else if(res.data.type==4){
                        myType = "其他建议"
                    }
                    $("[name=type]").html(myType);
                    $("[name=content]").html(res.data.content);
                    var myTuPianDiv = '';
                    if(res.data.tupianUrl != undefined){
                        var tupians = [];
                        tupians = res.data.tupianUrl.split(",");
                        for(var i=0;i<tupians.length;i++){
                            myTuPianDiv += ' <img class="screenshot" src="'+tupians[i]+'" alt="">'
                        }
                    }
                    $("[name=myTuPianDiv]").html(myTuPianDiv);
                    $("[name=handleResult]").html(res.data.handleResult);
                    $("[name=contactInfo]").html(res.data.contactInfo);
                    form.render();
                }else {
                    layer.alert(res.message);
                }
            } ,
            dataType:"json"
        });
        if(obj.event === 'handle'){//操作—处理
            projectile.elastic({title:"详细信息", area:['680px','400px'], content:$("#processed")},function () {
                form.val('processed', {"proposal": ""});
            });
        }else if(obj.event === 'see_btn'){//操作—查看
            projectile.elastic({title:"详细信息", area:['680px','400px'], content:$("#examine")},function () {});
        }
    });
    //取消
    $(".cancel").click(function () {
        layer.closeAll(); //关闭所有层
    });
    //点击查找---监听submit提交
    form.on("submit(addNews)",function(data){
        pageFlag = true;
        getCadreList();
        // layer.msg('提交成功！！！');
        //console.log(data.elem); //被执行事件的元素DOM对象，一般为button对象
        //console.log(data.form); //被执行提交的form对象，一般在存在form标签时才会返回
        //console.log(data.field); //当前容器的全部表单字段，名值对形式：{name: value}
        return false; //阻止表单跳转
    });
    //点击提交---监听submit提交（弹框-处理）handleResult
    form.on("submit(submission)",function(data){
        $.ajax({
            url:"/sysFeedback/handle" ,
            type:"POST" ,
            data:{"id":feedBackId,"handleResult":data.field.proposal},
            success:function (res) {
                if(res.code==200){
                    layer.msg(res.message);
                    window.location.href = "/changeViews?views=systemManagement/userFeedback";
                    layer.closeAll();
                }else {
                    layer.msg(res.message);
                }
            } ,
            dataType:"json"
        });
        return false;
        // console.log(JSON.stringify(data.field));
        layer.closeAll(); //关闭所有层
        //console.log(data.elem); //被执行事件的元素DOM对象，一般为button对象
        //console.log(data.form); //被执行提交的form对象，一般在存在form标签时才会返回
        //console.log(data.field); //当前容器的全部表单字段，名值对形式：{name: value}
        // return false; //阻止表单跳转
    });
});

