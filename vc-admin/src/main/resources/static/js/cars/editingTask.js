layui.config({
    base : "../../js/"
}).use(['form','layer','element','transfer','jquery','table','hour','projectile','pagination'],function(){
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
        ,limitNumber = 10;//表格每页显示的条数


    // todo 选择任务内容 *****************************************************************************
    var taskContentData = [
        {"id":'3',"value": "3", "title": "测评工具三","contentName":'测评工具三',"type":'测评量表',"alias":'测评工具三'}
        ,{"id":'4',"value": "4", "title": "测评工具四","contentName":'测评工具四',"type":'测评量表',"alias":'测评工具四'}
        ,{"id":'5',"value": "5", "title": "测评工具五","contentName":'测评工具五',"type":'测评量表',"alias":'测评工具五'}
        ,{"id":'6',"value": "6", "title": "方案一","contentName":'方案一',"type":'测评量表',"alias":'方案一'}
    ]
        ,sortIndex,upward = true;
    //模拟数据
    var assessScale = [
        {"id":'1',"value": "1", "title": "测评工具一","contentName":'测评工具一',"type":'测评量表',"alias":'测评工具一'}
        ,{"id":'2',"value": "2", "title": "测评工具二","contentName":'测评工具二',"type":'测评量表',"alias":'测评工具二'}
        ,{"id":'3',"value": "3", "title": "测评工具三","contentName":'测评工具三',"type":'测评量表',"alias":'测评工具三'}
        ,{"id":'4',"value": "4", "title": "测评工具四","contentName":'测评工具四',"type":'测评量表',"alias":'测评工具四'}
        ,{"id":'5',"value": "5", "title": "测评工具五","contentName":'测评工具五',"type":'测评量表',"alias":'测评工具五'}
        ,{"id":'6',"value": "6", "title": "方案一","contentName":'方案一',"type":'测评量表',"alias":'方案一'}
        ,{"id":'7',"value": "7", "title": "方案二","contentName":'方案二',"type":'测评量表',"alias":'方案二'}
        ,{"id":'8',"value": "8", "title": "方案三","contentName":'方案三',"type":'测评量表',"alias":'方案三'}
        ,{"id":'9',"value": "9", "title": "方案四","contentName":'方案四',"type":'测评量表',"alias":'方案四'}
    ];
    var trainPlan = [
        {"id":'1',"value": "1", "title": "方案一","contentName":'方案一',"type":'测评量表',"alias":'方案一'}
        ,{"id":'2',"value": "2", "title": "测评工具二","contentName":'测评工具二',"type":'测评量表',"alias":'测评工具二'}
        ,{"id":'3',"value": "3", "title": "方案三","contentName":'方案三',"type":'测评量表',"alias":'方案三'}
        ,{"id":'4',"value": "4", "title": "方案四","contentName":'方案四',"type":'测评量表',"alias":'方案四'}
        ,{"id":'5',"value": "5", "title": "测评工具五","contentName":'测评工具五',"type":'测评量表',"alias":'测评工具五'}
        ,{"id":'6',"value": "6", "title": "测评工具一","contentName":'测评工具一',"type":'测评量表',"alias":'测评工具一'}
        ,{"id":'7',"value": "7", "title": "方案二","contentName":'方案二',"type":'测评量表',"alias":'方案二'}
        ,{"id":'8',"value": "8", "title": "测评工具三","contentName":'测评工具三',"type":'测评量表',"alias":'测评工具三'}
        ,{"id":'9',"value": "9", "title": "测评工具四","contentName":'测评工具四',"type":'测评量表',"alias":'测评工具四'}
    ];
    //表格无数据时的样式
    $(".layui-none").text("").append('<p>数据加载中！</p>');
    //表格渲染
    taskContentFun(taskContentData);
    function taskContentFun(data) {
        table.render({
            id: "enquiry",
            elem: "#table",
            data: data,
            skin: 'line',
            limit:data.length,
            cols: [//设置表头参数
                [
                    {field: 'contentName', title: '测评内容名称', width: '25%'}
                    , {field: 'type', title: '类型', width: '25%'}
                    , {field: 'alias', title: '别名', width: '20%',edit: 'text'}
                    , {field: 'sort', align:'center', title: '排序', width: '20%', templet: function (d) {
                        return "<span class='sort_btn' lay-event='sorting'><img src='../../img/sorting.png' alt='排序上'></span>"+
                            "<span class='sort_btn' lay-event='sortDown'><img src='../../img/sortDown.png' alt='排序下'></span>";
                    }}
                    , {title: '操作', align:'center', width: '10%', templet: function (d) {
                        return "<a class='layui-btn layui-btn-xs' lay-event='del_btn'>删除</a>";
                    }}
                ]
            ]
        });
    }
    function sortMethod(data){
        sortIndex = 0;
        for (var i=0; i<taskContentData.length; i++) {
            if (taskContentData[i].id == data.id) {
                if(upward){
                    if(i-1>=0){
                        sortIndex=i-1
                    }else {
                        sortIndex = 0;
                    }
                }else {
                    sortIndex=i+1
                }
                taskContentData.splice(i, 1);    //删除一项
            }
        }
        taskContentData.splice(sortIndex,0,data);
        taskContentFun(taskContentData);
    }
    //监听操作
    table.on('tool(enquiryTest)', function(obj){
        if(obj.event === 'sorting'){//操作—排序上
            // console.log(obj.data);
            upward = true;
            sortMethod(obj.data)
        }else if(obj.event === 'sortDown'){//操作—排序下
            console.log(obj.data);
            upward = false;
            sortMethod(obj.data)
        }else if(obj.event === 'del_btn'){//操作—删除
            layer.confirm('确定要删除此数据吗？',{icon:3, title:'提示',move: false,resize: false}, function(index){
                obj.del();
                layer.close(index);
                layer.msg('删除成功！');
            });
        }
    });
    //监听单元格编辑
    table.on('edit(enquiryTest)', function(obj){
        var value = obj.value //得到修改后的值
            ,data = obj.data //得到所在行所有键值
            ,field = obj.field; //得到字段
        layer.msg('[ID: '+ data.id +'] ' + field + ' 字段更改为：'+ value);

        for (var i=0; i<taskContentData.length; i++) {
            if (taskContentData[i].id == data.id) {
                taskContentData.splice(i, 1);    //删除一项
                data[field] = value;
                taskContentData.splice(i,0,data);
            }
        }
        // console.log(taskContentData);
    });
    //点击--选择要添加的内容
    $("#choiceContent").click(function () {
        projectile.elastic({title:"选择测评内容", area:['640px','460px'], content:$("#evaluationContents")},function () {
            form.val('evaluationContents', {"type": "测评量表"});
            shuttleBox(assessScale);
        });
    });
    //选择类型
    form.on('radio(selectType)', function(data){
        if(data.value == '测评量表'){
            shuttleBox(assessScale);
        }else if(data.value == '训练方案'){
            shuttleBox(trainPlan);
        }
    });
    function shuttleBox(data) {
        transfer.render({
            elem: '#power'
            ,data: data
            ,id: 'authority'
            ,title: ['待选内容', '选定内容']
            ,value: ["1", "3"] //初始右侧数据
            ,width: 245
            ,height: 240
            ,onchange: function(obj, index){
                // var arr = ['左边', '右边'];
                // layer.alert('来自 <strong>'+ arr[index] + '</strong> 的数据：'+ JSON.stringify(obj)); //获得被穿梭时的数据
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
        taskContentData = transfer.getData('authority');
        taskContentFun(taskContentData);
        layer.closeAll(); //关闭所有层
    });
    //点击下一步
    $("#toPublish").click(function () {
        if(taskContentData.length==0){
            layer.msg('请选择要添加的内容');
        }else{
            $(".newlyBuild li:nth-child(1) span").text('').attr('class','complete');
            element.tabChange('test', '22');
            $('html , body').animate({scrollTop: 0},'slow');
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
        //前端测试代码——仅限开发环境使用，正式时请去除
        layer.alert(JSON.stringify(data.field), {
            title: '最终的提交信息'
        },function () {
            layer.closeAll(); //关闭所有层
            $(".newlyBuild li:nth-child(2) span").text('').attr('class','complete');
            element.tabChange('test', '33');
            $('html , body').animate({scrollTop: 0},'slow');
            form.val("taskInformation", {
                "taskType": '配属选拔'
                ,"taskName": ''
                ,"taskDescription": ''
                ,"taskTerm": ''
                ,"viewReport": '个人不能查看报告'
            })
        });
        /*element.tabChange('test', '33');
        $('html , body').animate({scrollTop: 0},'slow');
        form.val("taskInformation", {
            "taskType": '配属选拔'
            ,"taskName": ''
            ,"taskDescription": ''
            ,"taskTerm": ''
            ,"viewReport": '个人不能查看报告'
        })*/
        return false;
    });


    // todo 选择参与人员 *****************************************************************************
    var participantData = [];
    function participant(data){
        table.render({
            id: "participantTable",
            elem: "#participant",
            data: data,
            skin: 'line',
            limit:limitNumber,
            cols: [//设置表头参数
                [
                    {type: 'checkbox', align:'center',width:'5%'}
                    ,{type:'numbers', align:'center',title: '编号', width: '5%'}
                    ,{field: 'username', title: '姓名', width: '11%'}
                    , {field: 'managerNum', title: '账号', width: '10%'}
                    , {field: 'gender', align:'center', title: '性别', width: '5%',templet: function (d) {
                        if (d.gender == "0") {return "女";
                        } else if (d.gender == "1") {return "男";}
                    }}
                    , {field: 'age', align:'center', title: '年龄', width: '10%'}
                    , {field: 'nation', title: '民族', width: '11%'}
                    , {field: 'politicalOutlook', title: '政治面貌', width: '11%'}
                    , {field: 'education', title: '文化程度', width: '11%'}
                    , {field: 'marriage', align:'center', title: '婚恋程度', width: '11%'}
                    , {title: '操作', align:'center', width: '10%', templet: function (d) {
                        return "<a class='layui-btn layui-btn-xs' lay-event='del_btn'>删除</a>";
                    }}
                ]
            ]
        });
    }
    function resultsTable(data){
        table.render({
            id: "resultsTableTest",
            elem: "#resultsTable",
            data: data,
            skin: 'line',
            limit:limitNumber,
            cols: [//设置表头参数
                [
                    {type: 'checkbox', align:'center',width:'5%'}
                    ,{type:'numbers', align:'center',title: '编号', width: '5%'}
                    ,{field: 'username', title: '姓名', width: '15%'}
                    , {field: 'managerNum', title: '账号', width: '10%'}
                    , {field: 'gender', align:'center', title: '性别', width: '5%',templet: function (d) {
                        if (d.gender == "0") {return "女";
                        } else if (d.gender == "1") {return "男";}
                    }}
                    , {field: 'age', align:'center', title: '年龄', width: '10%'}
                    , {field: 'nation', title: '民族', width: '15%'}
                    , {field: 'politicalOutlook', title: '政治面貌', width: '10%'}
                    , {field: 'education', title: '文化程度', width: '15%'}
                    , {field: 'marriage', align:'center', title: '婚恋程度', width: '10%'}
                ]
            ]
        });
    }
    //监听操作
    table.on('tool(participantTest)', function(obj){
        if(obj.event === 'del_btn'){//操作—删除
            layer.confirm('确定要删除此数据吗？',{icon:3, title:'提示',move: false,resize: false}, function(index){
                obj.del();
                layer.close(index);
                layer.msg('删除成功！');
            });
        }
    });
    //点击查找
    form.on('submit(addNews)', function(data){
        //前端测试代码——仅限开发环境使用，正式时请去除
        layer.alert(JSON.stringify(data.field), {
            title: '最终的提交信息'
        },function () {
            layer.closeAll(); //关闭所有层
            projectile.elastic({title:"查询结果", content:$("#queryResults"),area:['820px', '450px']},function () {
                resultsTable([
                    {id:'1',username:'张三丰',managerNum:'111102033',gender:'1',age:'23',nation:'汉族',politicalOutlook:'党员',education:'大专及以下',marriage:'单身'},
                    {id:'2',username:'张淑芳',managerNum:'111102033',gender:'0',age:'28',nation:'回族',politicalOutlook:'预备党员',education:'本科',marriage:'已婚'},
                    {id:'3',username:'谭思敏',managerNum:'111102033',gender:'1',age:'25',nation:'维吾尔族',politicalOutlook:'团员',education:'研究生',marriage:'未婚'},
                ]);
                pageFlag = true;
                limitNumber = 10;
                laypageCurr({total:20},'page1');
            });
        });
        return false;
    });
    // 点击确定
    $("#determine").click(function () {
        var checkStatus = table.checkStatus('resultsTableTest');
        participantData = checkStatus.data;
        if(participantData.length==0){
            layer.msg("请选择参与人员");
        }else {
            $("#tableContents").show();
            participant(participantData);
            pageFlag = true;
            limitNumber = 10;
            laypageCurr({total:20},'page');
            layer.closeAll();
        }
    });
    //点击批量删除
    $("#batchDeletion").click(function () {
        var checkStatus = table.checkStatus("participantTable")
            ,data = checkStatus.data; //获取选中项
        if(data.length==0){
            layer.msg("请选择要删除的数据");
            return false;
        }
        for (var i=0; i<participantData.length; i++) {
            for (var j=0; j<data.length; j++) {
                if (participantData[i].id == data[j].id) {
                    participantData.splice(i, 1);    //删除一项
                }
            }
        }
        participant(participantData);
    });
    //上一步
    $("#previousStep").click(function () {
        $(".newlyBuild li:nth-child(2) span").text('2').attr('class','layui-badge');
        element.tabChange('test', '22');
        $('html , body').animate({scrollTop: 0},'slow');
    });
    //下一步
    $("#preview").click(function () {
        if (participantData.length==0){
            layer.msg('请选择参与人员');
        }else{
            $(".newlyBuild li:nth-child(3) span").text('').attr('class','complete');
            element.tabChange('test', '44');
            $('html , body').animate({scrollTop: 0},'slow');
            previewTable(previewTableData);
            pageFlag = true;
            limitNumber = 10;
            laypageCurr({total:20},'page2');
        }
    });


    // todo 预览发布 *****************************************************************************
    var previewTableData = [
        {id:'1',username:'张三丰',managerNum:'111102033',gender:'1',age:'23',nation:'汉族',politicalOutlook:'党员',education:'大专及以下',marriage:'单身'},
        {id:'2',username:'张淑芳',managerNum:'111102033',gender:'0',age:'28',nation:'回族',politicalOutlook:'预备党员',education:'本科',marriage:'已婚'},
        {id:'3',username:'谭思敏',managerNum:'111102033',gender:'1',age:'25',nation:'维吾尔族',politicalOutlook:'团员',education:'研究生',marriage:'未婚'},
    ];
    function previewTable(data){
        table.render({
            id: "previewTest",
            elem: "#previewTable",
            data: data,
            skin: 'line',
            limit:limitNumber,
            cols: [//设置表头参数
                [
                    {type:'numbers', align:'center',title: '编号', width: '5%'}
                    ,{field: 'username', title: '姓名', width: '15%'}
                    , {field: 'managerNum', title: '账号', width: '10%'}
                    , {field: 'gender', align:'center', title: '性别', width: '5%',templet: function (d) {
                        if (d.gender == "0") {return "女";
                        } else if (d.gender == "1") {return "男";}
                    }}
                    , {field: 'age', align:'center', title: '年龄', width: '10%'}
                    , {field: 'nation', title: '民族', width: '15%'}
                    , {field: 'politicalOutlook', title: '政治面貌', width: '10%'}
                    , {field: 'education', title: '文化程度', width: '15%'}
                    , {field: 'marriage', align:'center', title: '婚恋程度', width: '10%'}
                ]
            ]
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
        layer.msg('任务发布成功！');
        history.go(-1);
        /*layer.confirm('任务发布成功！', {
            title : '提示'
            ,btn: ['继续布置任务']
            ,icon: 1
            ,closeBtn: 0
            ,btnAlign: 'c'
            ,move: false,
            resize: false
        }, function(index, layero){
            layer.closeAll();
            history.go(-1);
            // window.location.href = "assignmentTask.html";
        });*/
    });
    //分页渲染
    function laypageCurr(res,page) {
        if (pageFlag) {
            pagination.paging({data:res.total,num:limitNumber,elem:page},function (obj, first) {
                //obj包含了当前分页的所有参数，比如：
                // console.log(obj.curr); //得到当前页，以便向服务端请求对应页的数据。
                // console.log(obj.limit); //得到每页显示的条数
                limitNumber = obj.limit;
                if (!first) {
                    pageFlag = false;
                    // getCadreList(obj.curr, obj.limit)
                }
            });
        }
    }
});