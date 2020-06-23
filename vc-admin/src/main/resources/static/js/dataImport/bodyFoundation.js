layui.config({
    base : "/js/"
}).use(['form','table','layer','hour','pagination','ajax','projectile','fileUpload'],function(){
    var form = layui.form,
        table = layui.table,
        layer = layui.layer,
        $ = layui.jquery
        ,hour = layui.hour
        ,pagination = layui.pagination//自定义分页
        ,ajax = layui.ajax//自定义
        ,projectile = layui.projectile//自定义弹框
        ,fileUpload = layui.fileUpload//自定义文件上传
        ,pageFlag = true
        ,totalMarke = 0
        ,limitNumber = 10//表格每页显示的条数
        ,url = "/testDataImport/getCommonList";

    var searchObj = new Object();

    searchObj.type = $("[name=type]").val();

    // function htmlType() {
    //     if(searchObj.type.type==1){
    //         $("#typeData").html('身体基础数据');
    //     }
    //     else if(searchObj.type.type==1){
    //         $("#typeData").html('身体基础数据');
    //     }
    //     else if(searchObj.type.type==1){
    //         $("#typeData").html('身体基础数据');
    //     }
    //     else if(searchObj.type.type==1){
    //         $("#typeData").html('身体基础数据');
    //     }
    //     else if(searchObj.type.type==1){
    //         $("#typeData").html('身体基础数据');
    //     }
    //     else if(searchObj.type.type==1){
    //         $("#typeData").html('身体基础数据');
    //     }
    //     else if(searchObj.type.type==1){
    //         $("#typeData").html('身体基础数据');
    //     }
    //     else if(searchObj.type.type==1){
    //         $("#typeData").html('身体基础数据');
    //     }
    //     else if(searchObj.type.type==1){
    //         $("#typeData").html('身体基础数据');
    //     }
    // }

    var typer = {1:"身体基础数据.xlsx",2:"选拔体能数据.xlsx",3:"触觉交互数据.xlsx",4:"管理学团队训练数据.xlsx",5:"心智共享团队训练数据.xlsx",
        6:"脑电数据.xlsx",7:"生理指标数据.xlsx",8:"生物数据.xlsx", 9: "特色体能训练数据.xlsx"};
    function attrHref() {
        $("#importTemplate").prop("href","http://filecdn.yalixinli.com/specialWarfare/importTemplates/"+typer[searchObj.type])
    }
    attrHref();

    var typeObj = {1:"身体基础数据",2:"选拔体能数据",3:"触觉交互数据",4:"管理学团队训练数据",5:"心智共享团队",
        6:"脑电数据",7:"生理指标数据",8:"生物数据", 9: "特色体能训练数据"};
    function typeData(type) {
        $("#typeData").html(typeObj[type]);
        form.render();
    }
    typeData(searchObj.type);
    var roleSetting = [
        // {id:'1',username:'张三丰',managerNum:'111102033',gender:'1',age:'23',armyAge:'2.5',nation:'汉族',politicalOutlook:'党员',education:'大专及以下',marriage:'单身',surveyDate:'2019.12.12'},
        // {id:'2',username:'张淑芳',managerNum:'111102033',gender:'0',age:'28',armyAge:'2.5',nation:'回族',politicalOutlook:'预备党员',education:'本科',marriage:'已婚',surveyDate:'2019.12.12'},
        // {id:'3',username:'谭思敏',managerNum:'111102033',gender:'1',age:'25',armyAge:'2.5',nation:'维吾尔族',politicalOutlook:'团员',education:'研究生',marriage:'未婚',surveyDate:'2019.12.12'},
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
            limit:limitNumber,
            cols: [//设置表头参数
                [
                    {type: 'checkbox', align:'center',width:'5%'}
                    ,{type:'numbers', align:'center',title: '编号', width: '5%'}
                    , {field: 'username', title: '账号', width: '10%'}
                    ,{field: 'name', title: '姓名', width: '8%'}
                    , { align:'center', title: '性别', width: '5%',templet: function (d) {
                        if (d.sex == "0") {return "女";
                        } else if (d.sex == "1") {return "男";}
                    }}
                    , {field: 'age', align:'center', title: '年龄', width: '5%'}
                    , {field: 'armyAge', align:'center', title: '军龄', width: '5%'}
                    , {field: 'nationName', title: '民族', width: '8%'}
                    , {title: '政治面貌', width: '8%',templet: function (d) {
                        if (d.politicalOutlook == "1") {return "群众";
                        } else if (d.politicalOutlook == "2") {return "共青团员";}
                        else if (d.politicalOutlook == "3") {return "共产党员（含预备党员）";}
                        else if (d.politicalOutlook == "4") {return "其他党派";}
                    }}
                    , {title: '文化程度', width: '8%',templet: function (d) {
                        if (d.educationId == "1") {return "高中及以下";
                        } else if (d.educationId == "2") {return "大专";}
                        else if (d.educationId == "3") {return "大学本科";}
                        else if (d.educationId == "4") {return "硕士研究生及以上";}
                    }}
                    , {align:'center', title: '婚恋程度', width: '8%',templet: function (d) {
                        if (d.marriageType == "1") {return "未婚单身";
                        } else if (d.marriageType == "2") {return "未婚恋爱";}
                        else if (d.marriageType == "3") {return "已婚";}
                        else if (d.marriageType == "4") {return "其他";}
                    }}
                    , {field: 'createTime', title: '创建日期', width: '8%'}

                    , {title: '操作', align:'center', width: '17%', templet: function (d) {
                        return"<a class='layui-btn layui-btn-xs' lay-event='details_btn'>查看详情</a>"+
                            "<a class='layui-btn layui-btn-xs' lay-event='del_btn'>删除</a>";
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
    //获取民族列表
    function getNationList() {
        ajax.request("/sysNation/nationList",'GET',searchObj,function(res){
            var nationHtml = '<option value=""></option>';
           for(var i=0;i<res.length;i++){
               nationHtml += '<option value="'+res[i].id+'">'+res[i].name+'</option>'
           }
            $("[name=nationId]").html(nationHtml);
            form.render();
        });
    }

    getNationList();
    //加载数据
    function getCadreList(pageNumber,pageSize){
        searchObj.pageNum = pageNumber;
        searchObj.pageSize = pageSize;
        searchObj.type = $("[name=type]").val();
        ajax.request(url,'POST',searchObj,function(res){
            totalMarke = res.list.length;
            tablePlay(res.list);
            laypageCurr(res);
            //删除loding
            // parent.tools.stop();
        });
        tablePlay(roleSetting);
        laypageCurr({total:20});
    }
    //初始化加载
    getCadreList();
    //监听操作
    table.on('tool(test)', function(obj){
        if(obj.event === 'export_btn'){//操作—数据导出
            layer.msg('数据导出');
        }else if(obj.event === 'details_btn'){//操作—查看详情
            // layer.msg('查看详情');
            window.location.href="/changeViews?views=dataImport/bodyFoundationDetails&dataId="+obj.data.id+"&typeId="+searchObj.type;
            // /changeViews?views=dataImport/bodyFoundation&type=7
        }else if(obj.event === 'del_btn'){//操作—删除
            var myParams = new Object();
            var ids = [];
            ids.push(obj.data.id);
            myParams.ids = ids;
            layer.confirm('确定要删除该数据？',{icon:3, title:'提示',move: false,resize: false}, function(index){
                ajax.request("/testDataImport/deleteByIds",'POST',myParams,function(res){
                    layer.msg("删除成功");
                    pageFlag = true;
                    getCadreList();
                });
                layer.close(index);
            });
        }
    });
    //点击数据导入
    $("#importData").click(function(){
        projectile.elastic({title:"批量添加", area:['500px','310px'], content:$("#addBatch")},function () {
            form.val('addBatch', {"papers": ""});
            $("#appoint").off('click')
            $("#choice").off('click')
            $("#choice").off('change')
            $("#choice").data('haveEvents', false);

            fileUpload.appoint({
                elem:'#choice',
                url:'/testDataImport/importData',
                data:{"type":searchObj.type},
                size:'',
                bindAction:'#appoint'
            }, function(res, index, upload){  //执行上传请求后的回调
                if(res.code == 200){
                    layer.closeAll(); //关闭loading
                    layer.msg(res.message);
                    pageFlag = true;
                    getCadreList();
                }else{
                    layer.msg(res.message);
                }
                layer.closeAll('loading'); //关闭loading
            });
        });
    });
    //点击批量导出
    $("#derivedData").click(function () {
        var checkStatus = table.checkStatus("enquiry")
            ,data = checkStatus.data; //获取选中项
        if(totalMarke==0){
            layer.msg("暂无数据");
            return false;
        }
        var ids = [];
        for(var i=0;i<data.length;i++){
            ids.push(data[i].id);
        }
        searchObj.idss = ids;
        var requestURL = "?";
        var boolean = true;
        for(var obj in searchObj){
            if(boolean){
                if(obj=="pageNum" || obj=="pageSize"){
                    continue;
                }
                requestURL += obj + "=" + searchObj[obj];
                boolean = false;
            }else {
                if(obj!="pageNum" && obj!="pageSize") {
                    requestURL += "&" + obj + "=" + searchObj[obj];
                }
            }
        }
        window.location.href = "/testDataImport/download"+requestURL;
        // ajax.request("/testDataImport/download",'GET',JSON.stringify(searchObj),function(res){
        //     // debugger;
        //     // tablePlay(res);
        //     // form.render();
        //     // laypageCurr(res);
        //     //删除loding
        //     // parent.tools.stop();
        // });
        // for (var i=0; i<roleSetting.length; i++) {
        //     for (var j=0; j<data.length; j++) {
        //         if (roleSetting[i].id == data[j].id) {
        //             roleSetting.splice(i, 1);    //删除一项
        //         }
        //     }
        // }
        // debugger;
        // tablePlay(roleSetting);
    });

    //点击批量删除
    $("#batchDeletion").click(function () {
        var checkStatus = table.checkStatus("enquiry")
            ,data = checkStatus.data; //获取选中项
        if(data.length==0){
            layer.msg("请选择要删除的数据");
            return false;
        }
        var ids = [];
        for(var i=0;i<data.length;i++){
            ids.push(data[i].id);
        }
        ajax.request("/testDataImport/deleteByIds",'POST',{"ids":ids},function(res){
            layer.msg("删除成功");
            pageFlag = true;
            getCadreList();
        });
        for (var i=0; i<roleSetting.length; i++) {
            for (var j=0; j<data.length; j++) {
                if (roleSetting[i].id == data[j].id) {
                    roleSetting.splice(i, 1);    //删除一项
                }
            }
        }
        tablePlay(roleSetting);
    });
    //监听select选择（关键字选择）
    form.on('select(keyword)', function(data){
        console.log(data.elem); //得到select原始DOM对象
        console.log(data.value); //得到被选中的值
        console.log(data.othis); //得到美化后的DOM对象
    });

    //点击查找---监听submit提交
    form.on("submit(addNews)",function(data){
        console.log(JSON.stringify(data.field));
        searchObj.educationId = $("[name=educationId]").val();
        searchObj.marriageType = $("[name=marriage]").val();
        searchObj.endTime = $("[name=endTime]").val();
        searchObj.nationId = $("[name=nationId]").val();
        searchObj.politicalOutlook = $("[name=politicalOutlook]").val();
        searchObj.sex = $("[name=sex]").val();
        searchObj.startTime = $("[name=startTime]").val();
        searchObj.username = $("[name=username]").val();
        // searchObj = data.field;
        pageFlag = true;
        getCadreList();
        // layer.msg('提交成功！！！');
        //console.log(data.elem); //被执行事件的元素DOM对象，一般为button对象
        //console.log(data.form); //被执行提交的form对象，一般在存在form标签时才会返回
        //console.log(data.field); //当前容器的全部表单字段，名值对形式：{name: value}
        return false; //阻止表单跳转
    });

    //数据导入--点击取消---监听submit提交
    $(".cancel").click(function () {
        layer.closeAll(); //关闭所有层
    });
});

