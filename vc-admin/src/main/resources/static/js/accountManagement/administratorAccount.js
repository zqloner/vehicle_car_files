layui.config({
    base : "/js/"
}).use(['form','table','layer','element','laypage','hour','pagination','projectile','ajax','verify'],function(){
    var form = layui.form,
        table = layui.table,
        layer = layui.layer,
        $ = layui.jquery
        ,element = layui.element//Tab的切换功能，切换事件监听等，需要依赖element模块
        ,hour = layui.hour
        ,pagination = layui.pagination//自定义分页
        ,projectile = layui.projectile//自定义弹框
        ,ajax = layui.ajax//自定义
        ,pageFlag = true
        ,limitNumber = 10//表格每页显示的条数
        ,url = "https://www.easy-mock.com/mock/5c0107c04ed9b43d7590d502/heartHome/gauge";

    var searchAdminObj = {};
    var sysRoleParams = {};
    var sysAdminParams = {};
    var userId = $("[name=userId]").val();

    var roleSetting = [
        {id:'1',name:'基础管理员',describe:'负责用户的导入导出及信息修改',jurisdiction:'管理员账户、用户端账户'},
        {id:'2',name:'数据管理员',describe:'负责数据导入',jurisdiction:'身体形态数据导入、基因数据导入、日常锻炼数据、比武数据'},
        {id:'3',name:'档案管理',describe:'负责查看档案',jurisdiction:'基础指标档案、综合档案'},
    ];
    var administrators = [
        {id:'1',account:'admin111',role:'账户管理员',username:'张飒',phone:'13255886969',mailbox:'tianling@21psy.com',addTime:'2019.10.14'},
        {id:'1',account:'admin111',role:'账户管理员',username:'张飒',phone:'13255886969',mailbox:'tianling@21psy.com',addTime:'2019.10.14'},
        {id:'1',account:'admin111',role:'账户管理员',username:'张飒',phone:'13255886969',mailbox:'tianling@21psy.com',addTime:'2019.10.14'},
        {id:'1',account:'admin111',role:'账户管理员',username:'张飒',phone:'13255886969',mailbox:'tianling@21psy.com',addTime:'2019.10.14'}
    ];
    element.on('tab(docDemoTabBrief)', function(data){
        pageFlag = true;
        limitNumber = 10;
        /*console.log(this); //当前Tab标题所在的原始DOM元素
        console.log(data.index); //得到当前Tab的所在下标
        console.log(data.elem); //得到当前的Tab大容器*/
    });
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
                    {field: 'name', title: '角色名称', width: '25%',unresize:true}
                    , {field: 'descrition', title: '角色描述', width: '25%',unresize:true}
                    , {field: 'permissions', title: '操作权限', width: '30%',unresize:true}
                    , {title: '操作', align:'center', width: '20%', templet: function (d) {
                        return "<a class='layui-btn layui-btn-normal layui-btn-xs' lay-event='news_edit'>编辑</a>" +
                            "<a class='layui-btn layui-btn-normal layui-btn-xs' lay-event='news_del'>删除</a>";
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
    function tablePlay1(data) {
        table.render({
            id: "enquiry1",
            elem: "#table1",
            data: data,
            skin: 'line',
            limit:limitNumber,
            cols: [//设置表头参数
                [
                    {field: 'username', title: '账号', width: '15%',unresize:true}
                    , {field: 'roleName', title: '角色名称', width: '10%',unresize:true}
                    , {field: 'name', title: '姓名', width: '10%',unresize:true}
                    , {field: 'phoneNumber', title: '手机号', width: '10%',unresize:true}
                    , {field: 'email', title: '邮箱', width: '15%',unresize:true}
                    , {field: 'createTime', title: '添加时间', width: '15%',unresize:true}
                    , {title: '操作', align:'center', width: '20%', templet: function (d) {
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
            pagination.paging({data:res,num:res.pageSize,elem:'page'},function (obj, first) {
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
    function laypageCurr1(res) {
        if (pageFlag) {
            pagination.paging({data:res,num:limitNumber,elem:'page1'},function (obj, first) {
                //obj包含了当前分页的所有参数，比如：
                // console.log(obj.curr); //得到当前页，以便向服务端请求对应页的数据。
                // console.log(obj.limit); //得到每页显示的条数
                limitNumber = obj.limit;
                if (!first) {
                    pageFlag = false;
                    getCadreList1(obj.curr, obj.limit)
                }
            });
        }
    }

    //加载数据
    function getCadreList(pageNumber,pageSize){
        var params =new Object();
        params.pageNum = pageNumber;
        params.pageSize = pageSize;
        $.ajax({
            url:"/sysRole/getRoleList" ,
            type:"GET" ,
            data:params,
            success:function (res) {
                if(res.code==200){
                    tablePlay(res.data);
                    var myHtml = '<option value="">请选择</option>';
                    for(var i=0;i<res.data.length;i++){
                        myHtml += '<option value="'+res.data[i].id+'">'+res.data[i].name+'</option>'
                    }
                    $("[name=roleId]").html(myHtml);
                    $("#myRoles").html(myHtml);
                    // laypageCurr(res);
                    form.render();
                }else {
                    layer.alert(res.message);
                }
            } ,
            dataType:"json"
        });
        return false;
    }
    function getCadreList1(pageNumber,pageSize){
        searchAdminObj.pageNum = pageNumber;
        searchAdminObj.pageSize = pageSize;
        $.ajax({
            url:"/sysAdminUser/list" ,
            type:"GET" ,
            data:searchAdminObj,
            success:function (res) {
                if(res.code==200){
                    tablePlay1(res.data.list);
                    laypageCurr1(res.data);
                    form.render();
                }else {
                    layer.alert(res.message);
                }
            } ,
            dataType:"json"
        });
        return false;
    }

    //权限数据加载
    // 加载数据
    function getmMenuList() {
        $.ajax({
            url: "/sysMenu/getMenuList",
            type: "GET",
            success: function (res) {
                if (res.code == "200") {
                    var oldList = res.data;
                    // searchObj.menuList = res.data;
                    var myList = [];
                    if (oldList != undefined && oldList.length > 0) {
                        /*                     <div class="layui-input-block checkbox-margin">
                                                   <input type="checkbox" name="myPerMissions" value="14" title="网站信息管理"
                                                lay-skin="primary">
                                                    </div>
                                                    <div class="layui-input-block layui-input-block-long checkbox-margin  checkbox-second">
                                                    <input type="checkbox" name="myPerMissions" value="15" title="新闻管理" lay-skin="primary">
                                                    <input type="checkbox" name="myPerMissions" value="16" title="疗休养简介" lay-skin="primary">
                                                    <input type="checkbox" name="myPerMissions" value="17" title="疗休养管理" lay-skin="primary">
                                                    <input type="checkbox" name="myPerMissions" value="18" title="疗养路线管理" lay-skin="primary">
                                                    </div>
                                                    */


                    // <label class="layui-form-label">角色权限：</label>
                    //     <div class="layui-input-block">
                    //         <div class="layui-input-inline">
                    //         <input type="checkbox" name="checked1" lay-skin="primary" title="账户管理">
                    //         </div>
                    //         <div class="layui-form-item">
                    //         <div class="layui-input-block">
                    //         <input type="checkbox" name="checked1[1]" lay-skin="primary" title="管理员账户">
                    //         <input type="checkbox" name="checked1[1]" lay-skin="primary" title="训练方案">
                    //         </div>
                    //         </div>

                        var myHtml = '';
                        for (var i = 0; i < oldList.length; i++) {
                            var par = '<div class="layui-input-inline"><input type="checkbox" class="par" name="myPerMissions" value="' + oldList[i].id +
                                '" title="' + oldList[i].name + '" lay-filter="myPar" lay-skin="primary"></div>';
                            var chil = ' <div class="layui-form-item"><div class="layui-input-block"> ';
                            var dren = '</div></div>';
                            for (var j = 0; j < oldList[i].children.length; j++) {
                                chil += ' <input type="checkbox" class="myChild child" name="myPerMissions" value="' + oldList[i].children[j].id + '" title="' + oldList[i].children[j].name + '" ' +
                                    'lay-filter="myChild" lay-skin="primary">';
                            }
                            myHtml += par + chil + dren;
                        }
                        $("#myMenus").html(myHtml);
                        form.render();
                    }
                } else {
                    layer.msg(res.data.msg);
                }
            }
        });
    }

    // 初始化加载
    getmMenuList();

    //初始化加载
    getCadreList();
    getCadreList1();
    //监听操作
    table.on('tool(test)', function(obj){
        if(obj.event === 'news_edit'){//操作-编辑
            projectile.elastic({title:"编辑角色", area:['650px','400px'], content:$("#addRoles")},function () {
                sysRoleParams.id = obj.data.id;
                $.ajax({
                    url:"/sysRole/toUpdate" ,
                    type:"GET" ,
                    data:{"roleId": obj.data.id},
                    success:function (res) {
                        if(res.code==200){
                            form.val('addRoles', {
                                "roleName": res.data.name
                                ,"description": res.data.descrition
                            });
                            for (var i = 0; i < res.data.menuIds.length; i++) {
                                // $("[name='myPerMissions'][value='+per[i]+']").attr("checked",true)
                                $("[name='myPerMissions'][value=" + res.data.menuIds[i] + "]").attr("checked", true)
                            }
                            form.render();
                        }else {
                            layer.alert(res.message);
                        }
                    } ,
                    dataType:"json"
                });
                // form.val('addRoles', {
                //     "roleName": "2"
                //     ,"description": "xdfbdxfxhtf"
                //     ,"checked1": true
                //     ,"checked1[1]": false
                //     ,"checked1[2]": true
                //     ,"checked2": true
                //     ,"checked2[1]": true
                //     ,"checked2[2]": false
                //     ,"checked2[3]": false
                //     ,"checked3": false
                //     ,"checked3[1]": false
                //     ,"checked3[2]": true
                //     ,"checked3[3]": true
                //     ,"checked3[4]": false
                //     ,"checked4": false
                //     ,"checked4[1]": false
                //     ,"checked4[2]": false
                // });
            });
        }else if(obj.event === 'news_del'){//操作—删除
            layer.confirm('确定删除此角色？',{icon:3, title:'提示',move: false,resize: false}, function(index){
                $.ajax({
                    url:"/sysRole/del/"+obj.data.id ,
                    success:function (res) {
                        if(res.code==200){
                            layer.msg(res.message);
                            getCadreList();
                        }else {
                            layer.msg(res.message);
                        }
                    } ,
                    dataType:"json"
                });
                layer.close(index);
            });
        }
    });
    table.on('tool(test1)', function(obj){
        if(obj.event === 'edit_btn'){//操作—编辑
            projectile.elastic({title:"编辑管理员", area:['650px','400px'], content:$("#addManager")},function () {
                userId = obj.data.id;
                $.ajax({
                    url:"/sysAdminUser/toUpdate" ,
                    type:"GET" ,
                    data:{"id":obj.data.id},
                    success:function (res) {
                        if(res.code==200){
                            form.val('addManager', {
                                "username": res.data.username
                                ,"password": res.data.password
                                ,"roleId": res.data.roleId
                                ,"name": res.data.name
                                ,"phoneNumber": res.data.phoneNumber
                                ,"email": res.data.email
                                , "descrition": res.data.descrition
                            });
                            form.render();
                        }else {
                            layer.alert(res.message);
                        }
                    } ,
                    dataType:"json"
                });
                // form.val('addManager', {
                //     "managerNum": "sdfg"
                //     ,"password": "asdfcgvhjb"
                //     ,"roleName": "0"
                //     ,"accountName": "fgvbjd"
                //     ,"accountPhone": "sdfcgv"
                //     ,"accountEmail": "阿再三地服从规划"
                //     ,"remarks": "edrtfgyhjk"
                // });
            });
        }else if(obj.event === 'del_btn'){//操作—删除
            layer.confirm('确定要删除此账号吗？',{icon:3, title:'提示',move: false,resize: false}, function(index){
                $.ajax({
                    url:"/sysAdminUser/del/"+obj.data.id ,
                    success:function (res) {
                        if(res.code==200){
                            layer.msg(res.message);
                            getCadreList1();
                        }else {
                            layer.msg(res.message);
                        }
                    } ,
                    dataType:"json"
                });
                layer.close(index);
                // layer.msg('管理员账号删除成功！');
            });
        }else if(obj.event === 'reset_pass'){//操作—重置密码
            layer.confirm('重置后，密码将变为111111',{title:'提示',move: false,resize: false}, function(index){
                $.ajax({
                    url:"/sysAdminUser/resetPwd/"+obj.data.id ,
                    success:function (res) {
                        if(res.code==200){
                            layer.msg(res.message);
                        }else {
                            layer.msg(res.message);
                        }
                    } ,
                    dataType:"json"
                });
                layer.close(index);
            });
        }
    });

    // 监听多选框事件（点击一个得到其附属权限）
    form.on('checkbox(myPar)', function (data) {
        if($(this).prop("checked")){
            $(this).parent("div").next("div").children("div").find(".child").prop("checked",true);
            form.render();
        }else {
            $(this).parent("div").next("div").children("div").find(".child").prop("checked",false);
            form.render();
        }
    });
    form.on('checkbox(myChild)', function (data) {
        if($(this).parent("div").parent("div").parent("div").find(".child:checked").length>=1){
            $(this).parent("div").parent("div").prev("div").find(".par").prop("checked",true);
            form.render();
        }else {
            $(this).parent("div").parent("div").prev("div").find(".par").prop("checked",false);
            form.render();
        }
    });
    //点击添加
    $("#addition").click(function(){
        projectile.elastic({title:"添加角色", area:['650px','400px'], content:$("#addRoles")},function () {
            form.val('addRoles', {
                "roleName": ""
                ,"description": ""
                ,"checked1": false
                ,"checked1[1]": false
                ,"checked1[2]": false
                ,"checked2": false
                ,"checked2[1]": false
                ,"checked2[2]": false
                ,"checked2[3]": false
                ,"checked3": false
                ,"checked3[1]": false
                ,"checked3[2]": false
                ,"checked3[3]": false
                ,"checked3[4]": false
                ,"checked4": false
                ,"checked4[1]": false
                ,"checked4[2]": false
            });
        });
    });
    //点击添加管理员
    $("#addAccount").click(function(){
        projectile.elastic({title:"添加管理员", area:['650px','400px'], content:$("#addManager")},function () {
            form.val('addManager', {
                "managerNum": ""
                ,"password": ""
                ,"roleName": ""
                ,"accountName": ""
                ,"accountPhone": ""
                ,"accountEmail": ""
                ,"remarks": ""
            });
        });
    });
    //取消
    $(".cancel").click(function () {
        layer.closeAll(); //关闭所有层
    });
    //监听select选择（关键字选择）
    form.on('select(keyword)', function(data){
    });

    //点击查询---监听submit提交
    form.on("submit(addNews)",function(data){
        pageFlag = true;
        searchAdminObj = data.field;
        getCadreList1();
        return false; //阻止表单跳转
    });
    //添加角色--点击确认---监听submit提交
    form.on("submit(confirm)",function(data){
        $("[name=sysRoleSureBtn]").attr("disabled", true);
        var ids = [];
        $("[name=myPerMissions]:checked").each(function () {
            ids.push($(this).val());
        });
        sysRoleParams.name = data.field.roleName;
        sysRoleParams.descrition = data.field.description;
        sysRoleParams.menuIds = ids;
        // params.type = 1;
        $.ajax({
            url: "sysRole/add",
            type: "POST",
            data: sysRoleParams,
            success: function (res) {
                if (res.code == 200) {
                    window.location.href = "/changeViews?views=sys/administratorAccount";
                } else {
                    $("[name=sysRoleSureBtn]").attr("disabled", false);
                    layer.alert("新增失败");
                }
            },
            dataType: "json"
        });
        //console.log(data.elem); //被执行事件的元素DOM对象，一般为button对象
        //console.log(data.form); //被执行提交的form对象，一般在存在form标签时才会返回
        //console.log(data.field); //当前容器的全部表单字段，名值对形式：{name: value}
        return false; //阻止表单跳转
    });
    //添加管理员--点击确认---监听submit提交
    form.on("submit(accountConfirm)",function(data){
        console.log(JSON.stringify(data.field));
        sysAdminParams = data.field;
        sysAdminParams.id = userId;
        $.ajax({
            url:"/sysAdminUser/addOrUpdate" ,
            type:"POST" ,
            data:sysAdminParams,
            success:function (res) {
                if(res.code==200){
                    layer.msg(res.message);
                    window.location.href="/changeViews?views=sys/administratorAccount"
                }else {
                    layer.alert(res.message);
                }
            } ,
            dataType:"json"
        });
        //console.log(data.elem); //被执行事件的元素DOM对象，一般为button对象
        //console.log(data.form); //被执行提交的form对象，一般在存在form标签时才会返回
        //console.log(data.field); //当前容器的全部表单字段，名值对形式：{name: value}
        return false; //阻止表单跳转
    });
});

