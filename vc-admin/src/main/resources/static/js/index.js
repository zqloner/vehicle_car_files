var tab,dataStr;
layui.config({
    base : "/js/"
}).use(['form','element','jquery','bodyTab'],function(){
    var form = layui.form,
        $ = layui.jquery
        ,element = layui.element //Tab的切换功能，切换事件监听等，需要依赖element模块
        ,navigation = [] //路径导航
        ,tab = layui.bodyTab();


    var tubiao=
        {
            ADMIN_MANAGEMENT:"&#xe612",
            TASK_MANAGEMENT:"&#xe63c;",
            DATA_IMPORTING:"&#xe629;",
            ARCHIVES_MANAGEMENT:"&#xe632;",
            SYSTEM_MANAGEMENT:"&#xe653;"
        }
    function getChildrenList(data, pid) {
        var arr = [];
        for (var j = 0; j < data.length; j++) {
            var obj = data[j];
            if (pid == obj.pid) {
                var temp = {};
                temp.icon = tubiao[obj.code];
                temp.title = obj.name;
                temp.href = obj.url;
                temp.spread = false;
                temp.children = getChildrenList(data, obj.id);
                arr.push(temp);
            }
        }
        return arr;
    }


    //注册方法
    var tools = {
        //注册全局loading
        load:function(){layer.load(0, {shade: [0.2,'#000']});},
        //关闭loading
        stop:function () {layer.close(layer.load());},
        communal:function(data){
            $(".top_menu .layui-nav-item").each(function (res) {
                if ($(this).text() == data) {
                    $(this).addClass('layui-this');
                }else {
                    $(this).removeClass('layui-this');
                }
            });
        },
        firstPersonal:function(){
            var myMenus = [];
            $.ajax({
                url: "/sysAdminUser/getCurrentMenus",
                success: function (res) {
                    if (res.code == 200) {
                        navs = [];
                        //处理数据
                        // var data = [];
                        var menus = res.data;
                        for (var i = 0; i < menus.length; i++) {
                            var obj = menus[i];
                            var temp = {}
                            temp.icon = tubiao[obj.code];
                            temp.title = obj.name;
                            temp.href = obj.url;
                            if(i == 0){
                                temp.spread = true;
                            }else{
                                temp.spread = false;
                            }
                            if (obj.pid == -1) {
                                temp.children = getChildrenList(menus, obj.id);
                                myMenus.push(temp);
                            }
                        }
                        if (myMenus.length != 0) {
                            myMenus[0].children[0].spread = true;
                            dataStr = myMenus;
                            tab.render();
                            showHistoryMenu();
                        }
                    }
                }

            });
        }
    };
    window.tools = tools;  //向外暴露
    //左侧导航默认选中
    tools.firstPersonal();
    function current(json) {
        $("#clildFrame").html('<iframe id="iframe" src="'+json+'"></iframe>');
        $("iframe").width($("#clildFrame").width());
    }
    //通过顶部导航渲染内容区
    element.on('nav(navigation)', function(elem){
        window.sessionStorage.clear();
        if($(this).data("menu")=='signOut'){
            window.location.href="/logout";
        }else if($(this).data("menu")=='install'){
            current("/changeViews?views=install");
        }
    });

    $("body").on("click","#navBar .layui-nav-tree li .layui-nav-child dd",function () {
        navigation = [];
        var src = $(this).parent().prev().text();
        navigation.push(src.substr(1,4));
        navigation.push($(this).text());
        current($(this).data("href"));
        window.sessionStorage.setItem("navigation",JSON.stringify(navigation));
        window.sessionStorage.setItem("menu",JSON.stringify($(this).data("href")));
    });

    // 添加新窗口
    $("body").on("click",".layui-nav .layui-nav-item a:not('.mobileTopLevelMenus .layui-nav-item a')",function(){
        $(this).parent("li").siblings().removeClass("layui-nav-itemed");
    });
    //刷新后还原打开的窗口
    function showHistoryMenu(){
        if(window.sessionStorage.getItem("menu") != null){
            var menu = window.sessionStorage.getItem("menu");
            var side = window.sessionStorage.getItem("navigation");
            var navigationData = dataStr
            // var navigationData = dataStr;
            current(JSON.parse(menu));
            for(var i=0;i<navigationData.length;i++){
                navigationData[i].spread = false;
                if(navigationData[i].children){
                    for(var j=0;j<navigationData[i].children.length;j++){
                        if(navigationData[i].children[j].title==JSON.parse(side)[JSON.parse(side).length-1]){
                            navigationData[i].children[j].spread = true;
                            navigationData[i].spread = true;
                        }else {
                            navigationData[i].children[j].spread = false;
                        }

                    }
                }else {
                    if(navigationData[i].title==JSON.parse(side)[JSON.parse(side).length-1]){
                        navigationData[i].spread = true;
                    }
                }
            }
            dataStr = navigationData;
            tab.render();
        }
    }
});