layui.config({
    base : "/js/"
}).use(['form','layer','element','transfer','jquery','table','hour','projectile','pagination','ajax'],function(){
    var form = layui.form
        ,$ = layui.jquery
        ,table = layui.table
        ,layer = layui.layer
        ,element = layui.element//Tab的切换功能，切换事件监听等，需要依赖element模块
        ,transfer = layui.transfer
        ,hour = layui.hour//自定义时间选择
        ,projectile = layui.projectile//自定义弹框
        ,pagination = layui.pagination//自定义分页
        ,pageFlag = true
        ,ajax = layui.ajax//自定义
        ,limitNumber = 10;//表格每页显示的条数

    var scaleValue = $("#scales").text();
    var trainPlanValue = $("#trainPlans").text();
    var missionValue = $("#mission").text();
    //todo ****************************************
    var checkedContent = [],users = [],userMap = {},missionOriginalUsers = {},delUsers = [];
    var missionVo = {contentList:[],users:"",mission:{},delUsers:[]};
    // todo 选择任务内容 *****************************************************************************
    var taskContentData = [],upward = true;
    //模拟数据
    var assessScale = JSON.parse(scaleValue);
    var trainPlan = JSON.parse(trainPlanValue);
    var currentMission = missionValue.trim().length == 0 ? undefined : JSON.parse(missionValue);
    //todo 任务编辑
    if(currentMission != undefined){
        showData();
    }else{
        taskContentFun(taskContentData,missionFlag);
    }

    //表格无数据时的样式
    $(".layui-none").text("").append('<p>数据加载中！</p>');
    //表格渲染
    // taskContentFun(taskContentData);
    function taskContentFun(data,editValue) {
        editValue = editValue ? '' : 'text';
        table.render({
            id: "enquiry",
            elem: "#table",
            data: data,
            skin: 'line',
            limit:data.length,
            cols: [//设置表头参数
                [
                    {field: 'title', title: '测评内容名称', width: '25%'}
                    , {field: 'contentType', title: '类型', width: '25%', templet: function (d) {
                        return d.contentType == 1 ? "测评量表" : "训练方案";
                    }}
                    , {field: 'alias', title: '别名', width: '20%',edit: editValue }
                    , {field: 'sort', align:'center', title: '排序', width: '20%', templet: function (d) {
                        return "<span class='sort_btn' lay-event='sorting'><img src='/img/sorting.png' alt='排序上'></span>"+
                            "<span class='sort_btn' lay-event='sortDown'><img src='/img/sortDown.png' alt='排序下'></span>";
                    }}
                    , {title: '操作', align:'center', width: '10%', templet: function (d) {
                        return "<a class='layui-btn layui-btn-xs' lay-event='del_btn'>删除</a>";
                    }}
                ]
            ]
        });
    }
    function sortMethod(data){
        for (var i=0; i<taskContentData.length; i++) {
            if (taskContentData[i].value == data.value && taskContentData[i].contentType == data.contentType) {
                if(upward){
                    if(i-1>=0){
                        var tmp1 = taskContentData[i];
                        var tmp2 = taskContentData[i - 1];
                        taskContentData.splice(i - 1,1,tmp1);
                        taskContentData.splice(i,1,tmp2);
                    }
                }else {
                    if(i+1 <= taskContentData.length - 1){
                        var tmp1 = taskContentData[i];
                        var tmp2 = taskContentData[i + 1];
                        taskContentData.splice(i + 1,1,tmp1);
                        taskContentData.splice(i,1,tmp2);
                    }
                }
                break;
            }
        }
        taskContentFun(taskContentData);
    }
    //监听操作
    table.on('tool(enquiryTest)', function(obj){
        if(checkMissionFlag()){
            return;
        }
        if(obj.event === 'sorting'){//操作—排序上
            // console.log(obj.data);
            upward = true;
            sortMethod(obj.data)
        }else if(obj.event === 'sortDown'){//操作—排序下
            upward = false;
            sortMethod(obj.data)
        }else if(obj.event === 'del_btn'){//操作—删除
            if(checkMissionFlag()){
                return;
            }
            layer.confirm('确定要删除此数据吗？',{icon:3, title:'提示',move: false,resize: false}, function(index){
                // obj.del();
                var currentData = obj.data;
                for (var i = 0; i < checkedContent.length; i++) {
                    if(checkedContent[i].value == currentData.value && checkedContent[i].contentType == currentData.contentType){
                        checkedContent.splice(i, 1);
                    }
                }
                layer.close(index);
                layer.msg('删除成功！');
                taskContentFun(taskContentData);
            });
        }
    });
    //监听单元格编辑
    table.on('edit(enquiryTest)', function(obj){
        if(checkMissionFlag()){
            return;
        }
        var value = obj.value //得到修改后的值
            ,data = obj.data //得到所在行所有键值
            ,field = obj.field; //得到字段
        for (var i=0; i<taskContentData.length; i++) {
            if (taskContentData[i].value == data.value && taskContentData[i].contentType == data.contentType) {
                taskContentData.splice(i, 1);    //删除一项
                data[field] = value;
                taskContentData.splice(i,0,data);
            }
        }
        // console.log(taskContentData);
    });
    //点击--选择要添加的内容
    $("#choiceContent").click(function () {
        if(checkMissionFlag()){
            return;
        }
        projectile.elastic({title:"选择测评内容", area:['640px','460px'], content:$("#evaluationContents")},function () {
            form.val('evaluationContents', {"type": "测评量表"});
            shuttleBox(assessScale,1,getCheckedData(1));
        });
    });
    //选择类型
    form.on('radio(selectType)', function(data){
        if(data.value == '测评量表'){
            shuttleBox(assessScale,1,getCheckedData(1));
        }else if(data.value == '训练方案'){
            shuttleBox(trainPlan,2,getCheckedData(2));
        }
    });
    function getCheckedData(type){
        var arr = [];
        for (var i = 0; i < checkedContent.length; i++) {
            if(checkedContent[i].contentType == type){
                arr.push(checkedContent[i].value);
            }
        }
        return arr;
    }
    function shuttleBox(data,type,value) {
        transfer.render({
            elem: '#power'
            ,data: data
            ,id: 'authority'
            ,title: ['待选内容', '选定内容']
            ,value: value //初始右侧数据
            ,width: 245
            ,height: 240
            ,onchange: function(obj, index){
                for(var i = 0;i < obj.length;i++){
                    obj[i].contentType = type;
                    obj[i].alias = obj[i].title;
                }
                if(index == 0){
                    checkedContent = checkedContent.concat(obj);
                }else{
                    for (var i = 0; i < obj.length; i++) {
                        var currentObj = obj[i];
                        for (var j = 0; j < checkedContent.length; j++) {
                            if(checkedContent[j].value == currentObj.value && checkedContent[j].contentType == currentObj.contentType){
                                checkedContent.splice(j, 1);
                            }
                        }
                    }
                }
            },parseData: function(res){
                return {
                    "value": res.id //数据值
                    ,"title": res.name //数据标题
                    ,"disabled": false  //是否禁用
                    ,"checked": false //是否选中
                }
            }
        });
    }
    //点击取消
    $("body").on("click",".cancel",function(){
        layer.closeAll(); //关闭所有层
    });
    //点击确认
    $("body").on("click","#confirm",function(){
        // var getData = transfer.getData('authority'); //获取右侧数据
        // layer.alert(JSON.stringify(getData));
        taskContentData = checkedContent;
        taskContentFun(taskContentData);
        layer.closeAll(); //关闭所有层
    });
    //todo *************************测评内容******************************************
    //点击下一步
    $("#toPublish").click(function () {
        if(taskContentData.length==0){
            layer.msg('请选择要添加的内容');
        }else{
            var arr = [];
            for (var i = 0; i < checkedContent.length; i++) {
                var obj = checkedContent[i];
                arr.push({"contentId":obj.value,"contentAlias":obj.alias,"sort":(i+1),"contentType":obj.contentType});
            }
            missionVo.contentList = arr;
            $(".newlyBuild li:nth-child(1) span").text('').attr('class','complete');
            element.tabChange('test', '22');
            $('html , body').animate({scrollTop: 0},'slow');
            //回显
            var mission = missionVo.mission;
            form.val("taskInformation", {
                "type": mission.type,
                "name": mission.name,
                "descrition": mission.descrition,
                "visible": mission.visible
            })
        }
    });


    // todo 确定任务信息 *****************************************************************************
    //填写任务信息--点击上一步
    $("#backOne").click(function () {
        $(".newlyBuild li:nth-child(1) span").text('1').attr('class','layui-badge');
        element.tabChange('test', '11');
        $('html , body').animate({scrollTop: 0},'slow');
    });
    //填写任务信息--点击下一步
    form.on('submit(fillTasks)', function(data){
        missionVo.mission = data.field;
        $(".newlyBuild li:nth-child(2) span").text('').attr('class','complete');
        element.tabChange('test', '33');
        $('html , body').animate({scrollTop: 0},'slow');
        return false;
    });


    // todo 选择参与人员 *****************************************************************************
    function participant(data){
        table.render({
            id: "participantTable",
            elem: "#participant",
            data: data,
            skin: 'line',
            cols: [//设置表头参数
                [
                    {type: 'checkbox', align:'center',width:'5%'}
                    ,{type:'numbers', align:'center',title: '编号', width: '5%'}
                    ,{field: 'name', title: '姓名', width: '10%'}
                    , {field: 'username', title: '账号', width: '10%'}
                    , {field: 'sex', align:'center', title: '性别', width: '5%',templet: function (d) {
                        if (d.sex == "0") {return "女";
                        } else if (d.sex == "1") {return "男";}
                    }}
                    , {field: 'age', align:'center', title: '年龄', width: '10%'}
                    , {field: 'nationName', title: '民族', width: '10%'}
                    , {field: 'politicalOutlookName', title: '政治面貌', width: '10%'}
                    , {field: 'educationName', title: '文化程度', width: '10%'}
                    , {field: 'marriageTypeName', align:'center', title: '婚恋程度', width: '10%'}
                    , {title: '操作', align:'center', width: '10%', templet: function (d) {
                        if(missionOriginalUsers[d.id] == undefined || (missionOriginalUsers[d.id] != undefined && missionOriginalUsers[d.id].finishCount == 0)){
                            return "<a class='layui-btn layui-btn-xs' lay-event='del_btn'>删除</a>";
                        }else{
                            return "<a class='layui-btn layui-btn-xs notClickable' lay-event='del_btn'>删除</a>";
                        }
                    }}
                ]
            ],
            page: { //分页
                layout: ['count','prev','page','next','limit','skip']
                ,first: '首页'
                ,last: '尾页'
                ,theme:'#1E9FFF'//自定义颜色
            }
            ,limit:10
            ,limits:[5,10,20,30,50,100]
            , done: function () {
                //表格渲染完成后执行的方法
            }
        });
    }
    function resultsTable(data){
        table.render({
            id: "resultsTableTest",
            elem: "#resultsTable",
            data: data,
            skin: 'line',
            cols: [//设置表头参数
                [
                    {type: 'checkbox', align:'center',width:'5%'}
                    ,{type:'numbers', align:'center',title: '编号', width: '5%'}
                    ,{field: 'name', title: '姓名', width: '10%'}
                    , {field: 'username', title: '账号', width: '10%'}
                    , {field: 'sex', align:'center', title: '性别', width: '5%',templet: function (d) {
                        if (d.sex == "0") {return "女";
                        } else if (d.sex == "1") {return "男";}
                    }}
                    , {field: 'age', align:'center', title: '年龄', width: '10%'}
                    , {field: 'nationName', title: '民族', width: '10%'}
                    , {field: 'politicalOutlookName', title: '政治面貌', width: '10%'}
                    , {field: 'educationName', title: '文化程度', width: '10%'}
                    , {field: 'marriageTypeName', align:'center', title: '婚恋程度', width: '10%'}
                ]
            ],
            page: { //分页
                layout: ['count','prev','page','next','limit','skip']
                ,first: '首页'
                ,last: '尾页'
                ,theme:'#1E9FFF'//自定义颜色
            }
            ,limit:10
            ,limits:[5,10,20,30,50,100]
            , done: function () {
                //表格渲染完成后执行的方法
            }
        });
    }
    //监听操作
    table.on('tool(participantTest)', function(obj){
        if(obj.event === 'del_btn'){//操作—删除
            layer.confirm('确定要删除此数据吗？',{icon:3, title:'提示',move: false,resize: false}, function(index){
                delUserByIds([obj.data.id]);
                participant(getUsersById());
                layer.close(index);
                layer.msg('删除成功！');
            });
        }
    });

    //点击查找
    var searchObj = {};
    form.on('submit(addNews)', function(data){
        projectile.elastic({title:"查询结果", content:$("#queryResults"),area:['820px', '450px']},function () {
            pageFlag = true;
            searchObj = data.field;
            getCadreList();
        });
        return false;
    });
    //加载数据
    function getCadreList(pageNumber,pageSize){
        var params = searchObj;
        params.pageNum = pageNumber;
        params.pageSize = pageSize;
        ajax.request('/userUser/userListAll','GET',params,function(res){
            for (var i=0; i< res.length; i++) {
                if(userMap[res[i].id] == undefined){
                    userMap[res[i].id] = res[i];
                }
            }
            resultsTable(dealUsersData(res));
            //删除loding
            // parent.tools.stop();
        });
    }

    //去掉已有的数据   用户
    function dealUsersData(data){
        var arr = [];
        for(var i = 0;i < data.length;i++){
            if(users.indexOf(data[i].id) == -1){
                arr.push(data[i]);
            }
        }
        return arr;
    }
    // 点击确定
    $("#determine").click(function () {
        var checkStatus = table.checkStatus('resultsTableTest');
        var participantData = checkStatus.data;
        if(participantData.length==0){
            layer.msg("请选择参与人员");
        }else {
            for(var i = 0;i < participantData.length;i++){
                users.push(participantData[i].id);
            }
            $("#tableContents").show();
            participant(getUsersById());
            layer.closeAll();
        }
    });
    function getUsersById() {
        var arr = [];
        for(var i=0; i<users.length; i++){
            var obj = userMap[users[i]];
            if(obj != undefined){
                delete obj.LAY_CHECKED;
                delete obj.LAY_TABLE_INDEX;
                arr.push(obj);
            }
        }
        return arr;
    }
    function delUserByIds(ids){
        for (var i=0; i<ids.length; i++) {
            var id = ids[i];
            if(missionOriginalUsers[id] != undefined){
                if(missionOriginalUsers[id].finishCount > 0){
                    continue;
                }else{
                    delUsers.push(id);
                }
            }
            users.splice(users.indexOf(id), 1);
        }
    }
    //点击批量删除
    $("#batchDeletion").click(function () {
        var checkStatus = table.checkStatus("participantTable")
            ,data = checkStatus.data; //获取选中项
        if(data.length==0){
            layer.msg("请选择要删除的数据");
            return false;
        }
        var arr = [];
        for (var i=0; i<data.length; i++) {
            arr.push(data[i].id);
        }
        delUserByIds(arr);
        participant(getUsersById());
    });
    //上一步
    $("#previousStep").click(function () {
        $(".newlyBuild li:nth-child(2) span").text('2').attr('class','layui-badge');
        element.tabChange('test', '22');
        $('html , body').animate({scrollTop: 0},'slow');
    });
    //下一步
    $("#preview").click(function () {
        if (users.length==0){
            layer.msg('请选择参与人员');
        }else{
            $(".newlyBuild li:nth-child(3) span").text('').attr('class','complete');
            element.tabChange('test', '44');
            $('html , body').animate({scrollTop: 0},'slow');
            var usersById = getUsersById();
            previewTable(getUsersById());
            prevMissionInfo();
        }
    });
    
    function prevMissionInfo() {
        var mission = missionVo.mission;
        $("#name").html(mission.name);
        $("#descrition").html(mission.descrition);
        $("#visible").html(mission.visible == 1 ? "个人可以查看报告" : "个人不能查看报告");
        $("#userCount").html(users.length + "人");
    }


    // todo 预览发布 *****************************************************************************
    function previewTable(data){
        table.render({
            id: "previewTest",
            elem: "#previewTable",
            data: data,
            skin: 'line',
            limit:limitNumber,
            cols: [//设置表头参数
                [
                    /*{type: 'checkbox', align:'center',width:'5%'},*/
                    {type:'numbers', align:'center',title: '编号', width: '5%'}
                    ,{field: 'name', title: '姓名', width: '10%'}
                    , {field: 'username', title: '账号', width: '10%'}
                    , {field: 'sex', align:'center', title: '性别', width: '5%',templet: function (d) {
                        if (d.sex == "0") {return "女";
                        } else if (d.sex == "1") {return "男";}
                    }}
                    , {field: 'age', align:'center', title: '年龄', width: '10%'}
                    , {field: 'nationName', title: '民族', width: '10%'}
                    , {field: 'politicalOutlookName', title: '政治面貌', width: '10%'}
                    , {field: 'educationName', title: '文化程度', width: '10%'}
                    , {field: 'marriageTypeName', align:'center', title: '婚恋程度', width: '10%'}
                ]
            ],
            page: { //分页
                layout: ['count','prev','page','next','limit','skip']
                ,first: '首页'
                ,last: '尾页'
                ,theme:'#1E9FFF'//自定义颜色
            }
            ,limit:10
            ,limits:[5,10,20,30,50,100]
            , done: function () {
                //表格渲染完成后执行的方法
            }
        });
    }
    // 上一步
    $("#backThree").click(function () {
        $(".newlyBuild li:nth-child(3) span").text('3').attr('class','layui-badge');
        element.tabChange('test', '33');
        $('html , body').animate({scrollTop: 0},'slow');
    });
    // 确认发布
    $("#release").click(function () {
        var arr = [];
        for(var i = 0; i < delUsers.length;i++){
            if(users.indexOf(delUsers[i]) == -1){
                arr.push(delUsers[i]);
            }
        }
        missionVo.users = users.join();
        missionVo.delUsers = arr.join();
        if(currentMission != undefined){
            missionVo.mission.id = currentMission.id;
        }
        parent.tools.load();
        $.ajax({
            type: "POST",
            data: JSON.stringify(missionVo),
            url: "/misMission/editMission",
            contentType:'application/json;charset=utf-8',
            success: function (res) {
                if (res.code == 200) {
                    layer.msg("发布成功");
                    setTimeout(function(){
                        window.location.href = "/changeViews?views=cars/taskRecord"
                    },500);
                }else {
                    layer.msg(res.message,{icon: 5});
                }
                parent.tools.stop();
            }
        });
    });
    //分页渲染
    function laypageCurr(res,page) {
        if (pageFlag) {
            pagination.paging({data:res,num:limitNumber,elem:page},function (obj, first) {
                //obj包含了当前分页的所有参数，比如：
                // console.log(obj.curr); //得到当前页，以便向服务端请求对应页的数据。
                // console.log(obj.limit); //得到每页显示的条数
                limitNumber = obj.limit;
                if (!first) {
                    pageFlag = false;
                    // getCadreList(obj.curr, obj.limit);
                }
            });
        }
    }

    function getMissionUserById(missionId){
        ajax.request('/misMission/getMissionUserById','GET',{"id":missionId},function(res){
            for (var i = 0; i < res.length; i++) {
                users.push(res[i].id);
                missionOriginalUsers[res[i].id] = res[i];
                userMap[res[i].id] = res[i];
            }
            //回显任务原有的人员
            $("#tableContents").show();
            participant(res);
        });
    }

    function showData() {
        var misContents = currentMission.misContents;
        for(var i = 0;i < misContents.length;i++){
            var obj = misContents[i];
            checkedContent.push({"value":obj.content_id,"title":obj.contentName,"sort":obj.sort,"alias":obj.content_alias,"contentType":obj.content_type});
        }
        //回显任务下内容
        taskContentData = checkedContent;
        taskContentFun(taskContentData,missionFlag);
        //回显任务
        var mission = {};
        mission.type = currentMission.type;
        mission.name = currentMission.name;
        mission.descrition = currentMission.descrition;
        mission.visible = currentMission.visible;
        missionVo.mission = mission;
        getMissionUserById(currentMission.id);

        if(missionFlag){
            $("[name=type]").attr("disabled",true);
        }
    }
    function checkMissionFlag(){
        if(missionFlag){
            layer.msg("任务已经开始,不能操作");
            return true;
        }
    }
});