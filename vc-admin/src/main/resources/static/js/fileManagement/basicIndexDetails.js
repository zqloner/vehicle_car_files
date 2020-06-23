layui.config({
    base : "/js/"
}).use(['form','table','layer','element','pagination','ajax'],function(){
    var form = layui.form,
        table = layui.table,
        layer = layui.layer,
        $ = layui.jquery
        ,element = layui.element//Tab的切换功能，切换事件监听等，需要依赖element模块
        ,pagination = layui.pagination
        ,ajax = layui.ajax//自定义
        ,pageFlag = true
        ,limitNumber = 10
        ,url = "/testDataImport/getDataList";

    var searchObj = new Object();
    searchObj.userId = $("[name=userId]").val();

    var typeObj = {1:"身体基础数据",2:"选拔体能数据",3:"触觉交互数据",4:"管理学团队训练数据",5:"心智共享团队",
        6:"脑电数据",7:"生理指标数据",8:"生物数据", 9: "特色体能训练数据"};


    var roleSetting = [
        {id:'1',quota:'血压',result:'153',description:'1',reference:'160-190'},
        {id:'2',quota:'血氧饱和度',result:'153',description:'0',reference:'30-290'},
        {id:'3',quota:'特殊环境适应力得分',result:'153',description:'1',reference:''}
    ];
    //表格无数据时的样式
    $(".layui-none").text("").append('<p>数据加载中！</p>');
    //监听导航点击
    element.on('nav(navigation)', function(elem){
        //console.log(elem)
        // layer.msg(elem.text());
        pageFlag = true;
        limitNumber = 10;
        $("#headerMessage").html(elem.text());
        form.render();
        for(var x in typeObj){
            if(elem.text()==typeObj[x]){
                searchObj.type = x;
                getCadreList();
            }else if (elem.text()=="心理健康档案") {
                getHeartDocument();
            }
        }
        /*if(elem.text()=='身体基础数据'){

        }else if(elem.text()=='选拔体能数据'){

        }else if(elem.text()=='触觉交互数据'){

        }*/
    });
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
    //分页渲染
    function laypageCurr1(res) {
        if (pageFlag) {
            pagination.paging({data:res,num:limitNumber,elem:'page'},function (obj, first) {
                //obj包含了当前分页的所有参数，比如：
                // console.log(obj.curr); //得到当前页，以便向服务端请求对应页的数据。
                // console.log(obj.limit); //得到每页显示的条数
                limitNumber = obj.limit;
                if (!first) {
                    pageFlag = false;
                    getHeartDocument(obj.curr, obj.limit)
                }
            });
        }
    }
    //加载数据
    function getCadreList(pageNumber,pageSize){
        var params =new Object();
        params.pageNum = pageNumber;
        params.pageSize = pageSize;
        params.type = searchObj.type == undefined ? 1:searchObj.type;
        params.userId = searchObj.userId;
        ajax.request(url,'GET',params,function(res){
            var myHtml = '';
            for(var i=0;i<res.list.length;i++){
                myHtml += '<li class="time_li"><div>创建时间:'+res.list[i].createTime+'</div><a class="layui-btn layui-btn-xs" ' +
                    'href="/changeViews?views=dataImport/bodyFoundationDetails&dataId='+res.list[i].id+'&typeId='+res.list[i].typeId+'">查看报告</a></li>'
            }
            $("#myReport").html(myHtml);
            form.render();
            // tablePlay(res.list);
            pageFlag = true;
            laypageCurr(res);
            //删除loding
            // parent.tools.stop();
        });
        //
        // laypageCurr({total:20});
    }
    //初始化加载
    getCadreList();

    //加载数据
    function getBodyBasic(pageNumber,pageSize){
        var params =new Object();
        params.userId = $("[name=userId]").val();
        ajax.request("/testDataImport/getUserInfo",'GET',params,function(res){
            $("[name=name]").html(res.name);
            $("[name=username]").html(res.username);
            var strSex = "";
            if(res.sex==0){
                strSex = "女"
            }else if(res.sex==1){
                strSex = "男"
            }
            $("[name=sex]").html(strSex);
            $("[name=birthTime]").html(res.age);
            $("[name=joinUpTime]").html(res.armyAge);
            $("[name=nationName]").html(res.nationName);
            $("[name=politicalOutlook]").html(res.politicalOutlookName);
            $("[name=educationId]").html(res.educationName);
            $("[name=marriageType]").html(res.marriageTypeName);
            $("[name=createTime]").html(res.createTime);
            form.render();
        });
        // tablePlay(roleSetting);
    }
    //初始化加载
    getBodyBasic();

    //心理健康
    function getHeartDocument(pageNumber,pageSize){
        var params =new Object();
        params.pageNum = pageNumber;
        params.pageSize = pageSize;
        params.userId = searchObj.userId;
        ajax.request("/testResult/getReportByUserId",'GET',params,function(res){
            var myHtml = '';
            for(var i=0;i<res.list.length;i++){
                myHtml += '<li class="time_li"><div>'+res.list[i].content_alias+':'+new Date(res.list[i].create_time).Format("yyyy-MM-dd")+'</div><a class="layui-btn layui-btn-xs" target="view_window"' +
                    'href="/testResultContent/report?resultId='+res.list[i].id+'">查看报告</a></li>'
            }
            $("#myReport").html(myHtml);
            form.render();
            // tablePlay(res.list);
            laypageCurr1(res);
            //删除loding
            // parent.tools.stop();
        });
        //
        // laypageCurr({total:20});
    }
});

