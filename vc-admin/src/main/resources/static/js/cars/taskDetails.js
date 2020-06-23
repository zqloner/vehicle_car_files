layui.config({
    base : "../../js/"
}).use(['form','table','layer','laypage','hour','pagination','projectile','ajax'],function(){
    var form = layui.form,
        table = layui.table,
        layer = layui.layer,
        $ = layui.jquery
        ,hour = layui.hour
        ,pagination = layui.pagination//自定义分页
        ,projectile = layui.projectile//自定义弹框
        ,ajax = layui.ajax//自定义
        ,pageFlag = true
        ,userPageFlag = true
        ,searchObj = {}//查询参数
        ,searchObjUser = {}
        ,dataLength = 0
        ,userDataLength = 0
        ,limitNumber = 10;//表格每页显示的条数
        //,url = "https://www.easy-mock.com/mock/5c0107c04ed9b43d7590d502/heartHome/gauge";

    var missionId = $("#missionId").val();
    getMissionById(missionId);
    function getMissionById(id){
        ajax.request("/misMission/getMissionById",'GET',{"id":id},function(res){
            var missionType = "";
            if(res.type == 1){
                missionType = "配属选拔";
            }else if(res.type == 2){
                missionType = "训练提升";
            }else if(res.type == 3){
                missionType = "日常监测";
            }
            $("#missionType").html(missionType);
            $("#missionName").html(res.name);
            $("#descrition").html(res.descrition);
            $("#visible").html(res.visible == 0 ? "人个不能查看报告" : "个人可以查看报告");
            $("#createTime").html(res.createTime);
            $("#username").html(res.username);
            $("#totalCount").html(res.totalCount);
            $("#unFinishCount").html(res.totalCount - res.finishCount);
            var contentArr = res.misContents;
            var misContents = "";
            for(i in contentArr){
                misContents += "、" + contentArr[i].contentName;
            }
            $("#misContents").html(misContents.substring(1));
        });
    }

    //表格无数据时的样式
    $(".layui-none").text("").append('<p>数据加载中！</p>');
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
                    {type: 'checkbox', align:'center',width:'5%'}
                    ,{type:'numbers', align:'center',title: '编号', width: '5%'}
                    , {field: 'username', title: '账号', width: '15%'}
                    ,{field: 'name', title: '姓名', width: '10%'}
                    , {field: 'type', title: '测评类型', width: '10%',templet: function (d) {
                        if (d.type == "1") {return "配属选拔";
                        } else if (d.type == "2") {return "训练提升";
                        } else if (d.type == "3") {return "日常监测";}
                    }}
                    , {field: 'scaleName', title: '测评名称', width: '15%'}
                    , {field: 'finishTime', align:'center', title: '测评时间', width: '15%'}
                    , {title: '操作', align:'center', width: '25%', templet: function (d) {
                        /*"<a class='layui-btn layui-btn-xs' lay-event='edit_btn'>导出报告</a>"+
                            "<a class='layui-btn layui-btn-xs' lay-event='del_btn'>导出原始分</a>"+*/
                        return "<a class='layui-btn layui-btn-xs' lay-event='details'>查看报告</a>";
                    }}
                ]
            ]
        });
    }
    //分页渲染
    function laypageCurr(res) {
        if (pageFlag) {
            pagination.paging({data:res,num:limitNumber,elem:'page'},function (obj, first) {
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
        var params = searchObj;
        params.missionId = missionId;
        params.pageNum = pageNumber;
        params.pageSize = pageSize;
        ajax.request('/testResult/missionPeoples','GET',params,function(res){
            dataLength = res.list.length;
            tablePlay(res.list);
            laypageCurr(res);
            //删除loding
            // parent.tools.stop();
        });
    }
    //初始化加载
    getCadreList();
    //监听操作
    table.on('tool(test)', function(obj){
        if(obj.event === 'edit_btn'){//操作—编辑
            // layer.msg('编辑');
            // window.location.href="editingTask.html";
        }else if(obj.event === 'del_btn'){//操作—删除

        }else if(obj.event === 'details'){//操作—详情
            window.open("/testResultContent/report?resultId="+ obj.data.resultId);
        }
    });


    $(".export").click(function () {

        if(dataLength == 0 || dataLength == undefined){
            layer.msg("暂无数据！");
            return false;
        }

        var type = $(this).data("id");
        var text =  $(this).text();
        var url = "";
        var ids = "";
        var param = new Object();
        var checkStatus = table.checkStatus("enquiry")
            ,data = checkStatus.data; //获取选中项

        if(type == "batchExportScore"){
            if(data.length == 0){
                layer.msg("请选择要导出的数据");
                return false;
            }
            for (var i=0; i < data.length; i++) {
                ids +=data[i].resultId + ",";
            }
            param.resultIds = ids;
            url = "/testResult/batchExportScore";

        }else if(type == "exportAllScore"){

            param = searchObj;
            param.missionId = missionId;
            url = "/testResult/exportAllScore";

        }else if(type == "batchExportReport"){
            if(data.length == 0){
                layer.msg("请选择要导出的数据");
                return false;
            }
            for (var i=0; i < data.length; i++) {
                ids +=data[i].resultId + ",";
            }
            param.resultIds = ids;
            url = "/testResult/batchExportReport";

        }else if(type == "exportAllReport"){

            param = searchObj;
            param.missionId = missionId;
            url = "/testResult/exportAllReport";
        }
        projectile.elastic({title:text, area:['450px','280px'], content:$("#export")},function () {

        });
        exportData(url,param);
    });
    function exportData(url,param){
        form.on('submit(confirm)', function(data){
            var loadIndex = layer.load(0, {shade: [0.3,'#c7edcc']});
            var fileName = data.field.fileName;
            param.fileName = fileName;
            $.ajax({
                url:url,
                data:param,
                type:"GET",
                dataType:"json",
                success:function(data){
                    if (data.code == 200) {
                        layer.closeAll();
                        layer.msg('生成成功！');
                    }else {
                        layer.closeAll();
                        layer.msg(res.message,{icon: 5});
                    }
                }
            });
            return false; //阻止表单跳转。如果需要表单跳转，去掉这段即可。
        });
    }

    //点击导出任务列表
    $("#exportList").click(function(){
        if(dataLength == 0 || dataLength == undefined){
            layer.msg("暂无数据！");
            return false;
        }
        var requestURL = "";
        searchObj.missionId = missionId;
        for(var obj in searchObj){
            requestURL += "&" + obj + "=" + searchObj[obj];
        }
        window.location.href = "/testResult/exportMissionPeoples?" + requestURL.substring(1);
    });

    //点击查找---监听submit提交
    form.on("submit(addNews)",function(data){
        pageFlag = true;
        searchObj = data.field;
        getCadreList();
        return false; //阻止表单跳转
    });

    //todo 2019.12.06 添加******start***************************************
    $(".view_list").click(function () {
        tablePlay1([]);
        var finish = $(this).data("finish");
        projectile.elastic({title:"查看列表", area:['850px','480px'], content:$("#viewList")},function () {
            userPageFlag = true;
            searchObjUser = {};
            searchObjUser.finish = finish;
            getCadreList1();
        });
    });

    $("#viewExportList").click(function () {
        if(userDataLength == 0){
            layer.msg("暂无数据");
            return;
        }
        window.location.href = "/misMission/exportMissionUserList?id=" + missionId + "&finish=" + searchObjUser.finish;
    });

    //表格渲染
    function tablePlay1(data) {
        table.render({
            id: "enquiry_table",
            elem: "#viewList_table",
            data: data,
            skin: 'line',
            limit:limitNumber,
            cols: [//设置表头参数
                [
                    {type:'numbers', align:'center',title: '编号', width: '10%'}
                    ,{field: 'name', title: '姓名', width: '20%'}
                    , {field: 'username', title: '账号', width: '25%'}
                    , {field: 'sex', align:'center', title: '性别', width: '10%',templet: function (d) {
                        if (d.sex == "0") {return "女";
                        } else if (d.sex == "1") {return "男";}
                    }}
                    , {field: 'age', align:'center', title: '年龄', width: '10%'}
                    , {field: 'status', align:'center', title: '完成情况', width: '25%',templet: function (d) {
                        return d.finishCount+"/"+d.totalCount;
                    }}
                ]
            ]
        });
    }
    //分页渲染
    function laypageCurr1(res) {
        if (userPageFlag) {
            pagination.paging({data:res,num:limitNumber,elem:'page1'},function (obj, first) {
                limitNumber = obj.limit;
                if (!first) {
                    userPageFlag = false;
                    getCadreList1(obj.curr, obj.limit)
                }
            });
        }
    }
    //加载数据
    function getCadreList1(pageNumber,pageSize){
        var params = searchObjUser;
        params.pageNum = pageNumber;
        params.pageSize = pageSize;
        params.id = missionId;
        ajax.request('/misMission/getMissionFinishList','GET',params,function(res){
            userDataLength = res.list.length;
            tablePlay1(res.list);
            laypageCurr1(res);
        });
    }

    // todo *******end***************************************
});

