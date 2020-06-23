layui.config({
    base : "../../js/"
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
        ,url = "https://www.easy-mock.com/mock/5c0107c04ed9b43d7590d502/heartHome/gauge";

    var roleSetting = [
        {id:'1',username:'张三丰',managerNum:'111102033',gender:'1',age:'23',armyAge:'2.5',nation:'汉族',politicalOutlook:'党员',education:'大专及以下',marriage:'单身',surveyDate:'2019.12.12'},
        {id:'2',username:'张淑芳',managerNum:'111102033',gender:'0',age:'28',armyAge:'2.5',nation:'回族',politicalOutlook:'预备党员',education:'本科',marriage:'已婚',surveyDate:'2019.12.12'},
        {id:'3',username:'谭思敏',managerNum:'111102033',gender:'1',age:'25',armyAge:'2.5',nation:'维吾尔族',politicalOutlook:'团员',education:'研究生',marriage:'未婚',surveyDate:'2019.12.12'},
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
                    , {field: 'managerNum', title: '账号', width: '10%'}
                    ,{field: 'username', title: '姓名', width: '8%'}
                    , {field: 'gender', align:'center', title: '性别', width: '5%',templet: function (d) {
                        if (d.gender == "0") {return "女";
                        } else if (d.gender == "1") {return "男";}
                    }}
                    , {field: 'age', align:'center', title: '年龄', width: '5%'}
                    , {field: 'armyAge', align:'center', title: '军龄', width: '5%'}
                    , {field: 'nation', title: '民族', width: '8%'}
                    , {field: 'politicalOutlook', title: '政治面貌', width: '8%'}
                    , {field: 'education', title: '文化程度', width: '8%'}
                    , {field: 'marriage', align:'center', title: '婚恋程度', width: '8%'}
                    , {field: 'surveyDate', title: '测量日期', width: '8%'}

                    , {title: '操作', align:'center', width: '17%', templet: function (d) {
                        return "<a class='layui-btn layui-btn-xs' lay-event='export_btn'>数据导出</a>"+
                            "<a class='layui-btn layui-btn-xs' lay-event='details_btn'>查看详情</a>"+
                            "<a class='layui-btn layui-btn-xs' lay-event='del_btn'>删除</a>";
                    }}
                ]
            ]
        });
    }
    //分页渲染
    function laypageCurr(res) {
        if (pageFlag) {
            pagination.paging({data:res.total,num:limitNumber,elem:'page'},function (obj, first) {
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
            window.location.href="electroencephalogramDetails.html";
        }else if(obj.event === 'del_btn'){//操作—删除
            layer.confirm('确定要删除此账号吗？',{icon:3, title:'提示',move: false,resize: false}, function(index){
                obj.del();
                layer.close(index);
                layer.msg('删除成功！');
            });
        }
    });
    //点击批量删除
    $("#batchDeletion").click(function () {
        var checkStatus = table.checkStatus("enquiry")
            ,data = checkStatus.data; //获取选中项
        if(data.length==0){
            layer.msg("请选择要删除的数据");
            return false;
        }
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
    });
    //点击查找---监听submit提交
    form.on("submit(addNews)",function(data){
        pageFlag = true;
        getCadreList();
        layer.msg('提交成功！！！');
        //console.log(data.elem); //被执行事件的元素DOM对象，一般为button对象
        //console.log(data.form); //被执行提交的form对象，一般在存在form标签时才会返回
        //console.log(data.field); //当前容器的全部表单字段，名值对形式：{name: value}
        return false; //阻止表单跳转
    });
});

