layui.config({
    base : "../../js/"
}).use(['form','table','layer','hour','pagination','projectile','fileUpload','ajax','verify'],function(){
    var form = layui.form,
        table = layui.table,
        layer = layui.layer,
        $ = layui.jquery
        ,hour = layui.hour
        ,pagination = layui.pagination//自定义分页
        ,projectile = layui.projectile//自定义弹框
        ,fileUpload = layui.fileUpload//自定义文件上传
        ,ajax = layui.ajax//自定义
        ,verify = layui.verify//自定义正则
        ,pageFlag = true
        ,searchObj = {}//查询参数
        ,dataLength = 0
        ,limitNumber = 10;//表格每页显示的条数
        //,url = "https://www.easy-mock.com/mock/5c0107c04ed9b43d7590d502/heartHome/gauge";

/*    var roleSetting = [
        {id:'1',username:'张三丰',managerNum:'111102033',gender:'1',age:'23',nation:'汉族',politicalOutlook:'党员',education:'大专及以下',marriage:'单身'},
        {id:'2',username:'张淑芳',managerNum:'111102033',gender:'0',age:'28',nation:'回族',politicalOutlook:'预备党员',education:'本科',marriage:'已婚'},
        {id:'3',username:'谭思敏',managerNum:'111102033',gender:'1',age:'25',nation:'维吾尔族',politicalOutlook:'团员',education:'研究生',marriage:'未婚'},
    ];*/
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
                    , {title: '操作', align:'center', width: '15%', templet: function (d) {
                        return "<a class='layui-btn layui-btn-xs' lay-event='edit_btn'>编辑</a>"+
                            "<a class='layui-btn layui-btn-xs' lay-event='del_btn'>删除</a>"+
                            "<a class='layui-btn layui-btn-xs' lay-event='reset_pass'>重置密码</a>";
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
        params.pageNum = pageNumber;
        params.pageSize = pageSize;
        ajax.request('/userUser/userList','GET',params,function(res){
            dataLength = res.list.length;
            tablePlay(res.list);
            laypageCurr(res);
            //删除loding
            // parent.tools.stop();
        });
    }
    //初始化加载
    getCadreList();

    //渲染民族
    getNationList();
    function getNationList(){
        ajax.request("/sysNation/nationList",'GET',"",function(res){
            var value = "<option value=''>请选择</option>";
            for(var i = 0;i < res.length;i++){
                value += "<option value="+ res[i].id +">"+ res[i].name +"</option>"
            }
            $("[name=nationId]").html(value);
            form.render();
        });
    }

    //监听操作
    table.on('tool(test)', function(obj){
        if(obj.event === 'edit_btn'){//操作—编辑
            projectile.elastic({title:"编辑", area:['650px','400px'], content:$("#addSingle")},function () {
                form.val('addSingle', {
                    "id": obj.data.id
                    ,"name": obj.data.name
                    ,"username": obj.data.username
                    ,"sex": obj.data.sex
                    ,"birthTime": obj.data.birthTime
                    ,"joinUpTime": obj.data.joinUpTime
                    ,"nationId": obj.data.nationId
                    ,"educationId": obj.data.educationId
                    ,"politicalOutlook": obj.data.politicalOutlook
                    ,"marriageType": obj.data.marriageType
                });
            });
        }else if(obj.event === 'del_btn'){//操作—删除
            layer.confirm('确定要删除此账号吗？',{icon:3, title:'提示',move: false,resize: false}, function(index){
                delUser(obj.data.id);
                // layer.msg('该用户已产生数据，不能删除！');
            });
        }else if(obj.event === 'reset_pass'){//操作—重置密码
            layer.confirm('重置后，密码将变为111111',{title:'提示',move: false,resize: false}, function(index){
                layer.close(index);
                resetPsw(obj.data.id);
            });
        }
    });

    //点击单个添加
    $("#singleAdd").click(function(){
        projectile.elastic({title:"单个添加", area:['650px','400px'], content:$("#addSingle")},function () {
            form.val('addSingle', {
                "id": ""
                ,"name":""
                ,"username": ""
                ,"sex": "1"
                ,"birthTime": ""
                ,"joinUpTime": ""
                ,"nationId": "1"
                ,"educationId": "1"
                ,"politicalOutlook": "1"
                ,"marriageType": "1"
            });
        });
    });
    //点击批量添加
    $("#batchAdd").click(function(){
        projectile.elastic({title:"批量添加", area:['500px','310px'], content:$("#addBatch")},function () {
            form.val('addBatch', {"papers": ""});
            $("#appoint").off('click')
            $("#choice").off('click')
            $("#choice").off('change')
            $("#choice").data('haveEvents', false);
            fileUpload.appoint({
                elem:'#choice',
                url:'/userUser/batchAddUser',
                //data:{},
                size:'',
                bindAction:'#appoint'
            }, function(data, index, upload){  //执行上传请求后的回调
                if(data.code == 200){
                    layer.closeAll();
                    layer.msg(data.data);
                    pageFlag = true;
                    getCadreList();
                }else{
                    layer.msg(data.message);
                }
                layer.closeAll('loading'); //关闭loading
            });
        });
    });

    //点击批量删除
    $("#batchDeletion").click(function () {
        var ids = [];
        var checkStatus = table.checkStatus("enquiry")
            ,data = checkStatus.data; //获取选中项
        if(data.length == 0){
            layer.msg("请选择要删除的数据");
            return false;
        }
        for (var i=0; i < data.length; i++) {
            ids.push(data[i].id);
        }
        batchDelUser(ids);
    });

    //取消
    $(".cancel").click(function () {
        layer.closeAll(); //关闭所有层
    });

    //点击查找---监听submit提交
    form.on("submit(addNews)",function(data){
        pageFlag = true;
        searchObj = data.field;
        getCadreList();
        return false; //阻止表单跳转
    });

    //单个添加--点击确认---监听submit提交
    form.on("submit(confirm)",function(data){
        data.field.birthTime = data.field.birthTime + " 00:00:00";
        data.field.joinUpTime = data.field.joinUpTime + " 00:00:00";
        ajax.request("/userUser/editUser",'POST',data.field,function(res){
            layer.closeAll(); //关闭所有层
            layer.msg("操作成功！");
            getCadreList(null, null);
        });
        return false; //阻止表单跳转
    });

    //删除
    function delUser(id){
        ajax.request("/userUser/delUser",'GET',{"id":id},function(res){
            layer.msg("删除成功！");
            getCadreList(null, null);
        });
    }

    //批量删除
    function batchDelUser(ids){
        ajax.request("/userUser/batchDelUser",'GET',{"ids":ids},function(res){
            layer.msg(res);
            getCadreList(null, null);
        });
    }
    //重启密码
    function resetPsw(id){
        ajax.request("/userUser/resetPsw",'GET',{"id":id},function(res){
            layer.msg('密码重置成功！');
        });
    }

    //点击导出列表
    $("#derivedData").click(function () {
        if(dataLength == 0 || dataLength == undefined){
            layer.msg("暂无数据！");
            return false;
        }
        var requestURL = "";
        for(var obj in searchObj){
            requestURL += "&" + obj + "=" + searchObj[obj];
        }
        window.location.href = "/userUser/userListExport?" + requestURL.substring(1);
    })


});