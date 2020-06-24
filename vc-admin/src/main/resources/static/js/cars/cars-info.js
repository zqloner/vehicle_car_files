layui.config({
    base : "/js/"
}).use(['form','table','layer','laypage','hour','pagination','ajax'],function() {
    var form = layui.form,
        table = layui.table,
        layer = layui.layer,
        $ = layui.jquery
        , hour = layui.hour
        , pagination = layui.pagination//自定义分页
        , ajax = layui.ajax//自定义
        , pageFlag = true
        , searchObj = {}//查询参数
        , dataLength = 0
        , limitNumber = 10//表格每页显示的条数
    //  ,url = "https://www.easy-mock.com/mock/5c0107c04ed9b43d7590d502/heartHome/gauge";
    /*
        var roleSetting = [
            {id:'1',taskType:'配属选拔',taskName:'111102033',taskStatus:'1',creationTime:'2019.10.10-2019.11.10',
                acquisitionTools:'4',completed:'78',immature:'6',publisher:'admin1',releaseTime:'2019.10.10',produce:'0'},
            {id:'2',taskType:'训练提升',taskName:'111102033',taskStatus:'0',creationTime:'2019.10.10-2019.11.10',
                acquisitionTools:'5',completed:'86',immature:'4',publisher:'admin2',releaseTime:'2019.10.10',produce:'1'},
            {id:'3',taskType:'日常监测',taskName:'111102033',taskStatus:'2',creationTime:'2019.10.10-2019.11.10',
                acquisitionTools:'3',completed:'69',immature:'7',publisher:'admin3',releaseTime:'2019.10.10',produce:'0'},
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
            limit: limitNumber,
            cols: [//设置表头参数
                [
                    // {type:'checkbox'},
                    {field: 'carVin', align: "center", title: 'vin码', width: '12%', unresize: true}
                    /* , {field: 'missionStatus', align:'center', title: '状态', width: '8%',unresize:true,templet: function (d) {
                         if (d.missionStatus == "1") {return "未开始";
                         } else if (d.missionStatus == "2") {return "进行中";
                         } else if (d.missionStatus == "3") {return "已过期";}
                     }}*/
                    /*, {field: 'startTime', align:'center', title: '起止日期', width: '16%',unresize:true,templet: function (d) {
                        return d.startTime + "-" + d.endTime;
                    }}*/
                    , {field: 'carNumber', align: 'center', title: '车牌号', width: '10%', unresize: true}
                    , {field: 'province', align: 'center', title: '省份', width: '10%', unresize: true}
                    , {field: 'city', align: 'center', title: '城市', width: '10%', unresize: true}
                    , {field: 'countyInfo', align: 'center', title: '区县', width: '8%', unresize: true}
                    , {field: 'vehicleCustomer', align: 'center', title: '整车客户', width: '10%', unresize: true}
                    , {field: 'batteryType', align: 'center', title: '电池类型', width: '10%', unresize: true}
                    , {
                    title: '操作', align: 'center', width: '15%', templet: function (d) {
                        /*  var deleteDiv = '';
                          if (d.produce == "0") {
                              deleteDiv = "<a class='layui-btn layui-btn-xs' lay-event='del_btn'>删除</a>"
                          } else if (d.produce == "1") {
                              deleteDiv = "<a class='layui-btn layui-btn-xs notClickable' lay-event='del_btn'>删除</a>"
                          }*/
                        return "<a class='layui-btn layui-btn-xs' lay-event='del_btn'>删除</a>" +
                            "<a class='layui-btn layui-btn-xs' lay-event='edit_btn'>编辑</a>" +
                            "<a class='layui-btn layui-btn-xs' lay-event='details'>详情</a>";
                    }
                }
                ]
            ]
        });
    }

    //分页渲染
    function laypageCurr(res) {
        if (pageFlag) {
            pagination.paging({data: res, num: limitNumber, elem: 'page'}, function (obj, first) {
                limitNumber = obj.limit;
                if (!first) {
                    pageFlag = false;
                    getCadreList(obj.curr, obj.limit)
                }
            });
        }
    }

    //加载数据
    function getCadreList(pageNumber, pageSize) {
        var params = searchObj;
        params.pageNum = pageNumber == undefined? 1:pageNumber;
        params.pageSize = pageSize == undefined? 10:pageSize;
        searchObj.pageNum = pageNumber;
        searchObj.pageSize = pageSize;
        ajax.request('/mglVehicleCarInfo/list', 'GET', params, function (res) {
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
    table.on('tool(test)', function (obj) {
        if (obj.event === 'edit_btn') {//操作—编辑
            // layer.msg('编辑');
            window.location.href = "/changeViews?views=cars/cars-info-add&carId=" + obj.data.id;
        } else if (obj.event === 'del_btn') {//操作—删除
            layer.confirm('确定要删除此数据吗？', {icon: 3, title: '提示', move: false, resize: false}, function (index) {
                deleteMission(obj.data.id);
            });
        } else if (obj.event === 'details') {//操作—详情
            // layer.msg('详情');
            window.location.href = "/changeViews?views=cars/cars-info-detail&carId=" + obj.data.id;
        }
    });

    //点击新建任务
    $("#newTask").click(function () {
        // layer.msg('新建任务');
        window.location.href = "/changeViews?views=cars/cars-info-add";
    });

    //删除
    function deleteMission(id) {
        ajax.request("/mglVehicleCarInfo/delete", 'POST', {"id": id}, function (res) {
            layer.msg("删除成功！");
            pageFlag = true;
            getCadreList();
        });
    }

    //点击导出任务列表
    $("#exportTask").click(function () {
        if (dataLength == 0 || dataLength == undefined) {
            layer.msg("暂无数据！");
            return false;
        }
        var requestURL = "";
        for (var obj in searchObj) {
            requestURL += "&" + obj + "=" + searchObj[obj];
        }
        debugger;
        window.location.href = "/mglVehicleCarInfo/exportList?" + requestURL.substring(1);
    });

    //点击查找---监听submit提交
    form.on("submit(addNews)", function (data) {
        pageFlag = true;
        searchObj = data.field;
        getCadreList();
        return false; //阻止表单跳转
    });

    // 添加
    // 批量添加
    $("#batchExport").click(function () {
        window.location.href = "/changeViews?views=cars/cars-info-addMore";
    });
});


