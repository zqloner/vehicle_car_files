layui.config({
    base : "/js/"
}).use(['form','table','layer','hour','pagination','ajax'],function(){
    var form = layui.form,
        table = layui.table,
        layer = layui.layer,
        $ = layui.jquery
        ,hour = layui.hour
        ,pagination = layui.pagination//自定义分页
        ,ajax = layui.ajax//自定义
        ,pageFlag = true
        ,limitNumber = 10//表格每页显示的条数
        ,url = "/userUser/userList";

    var searchObj = new Object();
    var roleSetting = [
        // {id:'1',username:'张三丰',managerNum:'111102033',gender:'1',age:'23',armyAge:'2.5',nation:'汉族',politicalOutlook:'党员',education:'大专及以下',marriage:'单身'},
        // {id:'2',username:'张淑芳',managerNum:'111102033',gender:'0',age:'28',armyAge:'3',nation:'回族',politicalOutlook:'预备党员',education:'本科',marriage:'已婚'},
        // {id:'3',username:'谭思敏',managerNum:'111102033',gender:'1',age:'25',armyAge:'4.5',nation:'维吾尔族',politicalOutlook:'团员',education:'研究生',marriage:'未婚'},
    ];

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
                    {type:'numbers', align:'center',title: '编号', width: '5%'}
                    ,{field: 'name', title: '姓名', width: '10%',unresize:true}
                    , {field: 'username', title: '账号', width: '10%',unresize:true}
                    , {align:'center', title: '性别', width: '5%',unresize:true,templet: function (d) {
                        if (d.sex == "0") {return "女";
                        } else if (d.sex == "1") {return "男";}
                    }}
                    , {field: 'age', align:'center', title: '年龄', width: '10%',unresize:true}
                    , {field: 'armyAge', align:'center', title: '军龄', width: '10%',unresize:true}
                    , {field: 'nationName', title: '民族', width: '10%',unresize:true}
                    , { field:'politicalOutlookName',title: '政治面貌', width: '10%',unresize:true}
                    , {field: 'educationName', title: '文化程度', width: '10%',unresize:true}
                    , {field: 'marriageTypeName', align:'center', title: '婚恋程度', width: '10%',unresize:true}
                    , {title: '操作', align:'center', width: '10%', templet: function (d) {
                        return "<a class='layui-btn layui-btn-xs' lay-event='see_btn'>查看档案</a>";
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
        searchObj.type = $("[name=type]").val();
        ajax.request(url,'GET',searchObj,function(res){
            tablePlay(res.list);
            laypageCurr(res);
            //删除loding
            // parent.tools.stop();
        });
        // tablePlay(roleSetting);
        // laypageCurr({total:20});
    }
    //初始化加载
    getCadreList();
    //监听操作
    table.on('tool(test)', function(obj){
        if(obj.event === 'see_btn'){//操作—查看档案
            window.location.href="/changeViews?views=fileManagement/basicIndexDetails&userId="+obj.data.id+"&type="+searchObj.type;

        }
    });

    //监听select选择（关键字选择）
    form.on('select(keyword)', function(data){
    });

    //点击查找---监听submit提交
    form.on("submit(addNews)",function(data){
        pageFlag = true;
        searchObj.educationId = $("[name=educationId]").val();
        searchObj.marriageType = $("[name=marriage]").val();
        searchObj.endTime = $("[name=endTime]").val();
        searchObj.nationId = $("[name=nationId]").val();
        searchObj.politicalOutlook = $("[name=politicalOutlook]").val();
        searchObj.sex = $("[name=sex]").val();
        searchObj.startTime = $("[name=startTime]").val();
        searchObj.name = $("[name=username]").val();
        // searchObj = data.field;
        getCadreList();
        // layer.msg('提交成功！！！');
        //console.log(data.elem); //被执行事件的元素DOM对象，一般为button对象
        //console.log(data.form); //被执行提交的form对象，一般在存在form标签时才会返回
        //console.log(data.field); //当前容器的全部表单字段，名值对形式：{name: value}
        return false; //阻止表单跳转
    });
});

