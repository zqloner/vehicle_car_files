layui.config({
    base : "/js/"
}).use(['form','table','layer','pagination','ajax'],function(){
    var form = layui.form,
        table = layui.table,
        layer = layui.layer,
        $ = layui.jquery
        ,pagination = layui.pagination//自定义分页
        ,ajax = layui.ajax//自定义
        ,pageFlag = true
        ,limitNumber = 10//表格每页显示的条数
        ,url = "https://www.easy-mock.com/mock/5c0107c04ed9b43d7590d502/heartHome/gauge";

    var roleSetting = [
        // {id:'1',type:'批量导出原始分',taskName:'111102033',taskStatus:'1', releaseTime:'2019.10.10'},
        // {id:'2',type:'批量导出个人报告',taskName:'111102033',taskStatus:'0', releaseTime:'2019.10.10'},
        // {id:'3',type:'批量导出原始分',taskName:'111102033',taskStatus:'2',releaseTime:'2019.10.10'},
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
                    {type:'numbers', align:'center',title: '编号', width: '5%'}
                    , {field: 'name', align:'center', title: '名称', width: '20%',unresize:true}
                    , {align:'center', title: '生成时间', width: '20%',unresize:true,templet: function (d) {
                        return (new Date(d.create_time)).Format("yyyy-MM-dd") ;
                        }}
                    , { align:'center', title: '状态', width: '20%',unresize:true,templet: function (d) {
                        if (d.status == "0") {return "生成中";
                        } else if (d.status == "1") {return "已生成";}
                        else if (d.status == "2") {return "异常";}
                    }}
                    , {field:'dir_name',align:'center', title: '压缩包类型', width: '20%',unresize:true}
                    , {title: '操作', align:'center', width: '15%', templet: function (d) {
                        return "<a class='layui-btn layui-btn-xs' lay-event='download' download='filename' href='"+d.url+"'>下载</a>";
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
        var params =new Object();
        params.pageNum = pageNumber;
        params.pageSize = pageSize;
        params.name = $("[name=winrarName]").val();
        $.ajax({
            url:"/docDocument/documentList" ,
            type:"GET" ,
            data:params,
            success:function (res) {
                if(res.code==200){
                    tablePlay(res.data.list);
                    laypageCurr(res.data);
                }else {
                    layer.msg(res.message);
                }
            } ,
            dataType:"json"
        });
        return false;
        // tablePlay(roleSetting);
        // laypageCurr({total:20});
    }
    //初始化加载
    getCadreList();
    //监听操作
    table.on('tool(test)', function(obj){
        // if(obj.event === 'download'){//操作—下载
        //     debugger;
        //     layer.msg('下载');
        // }
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
});

