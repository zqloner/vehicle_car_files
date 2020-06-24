/**
 * Created by zhuxq on 2019/9/6.
 */
layui.config({
    base : "/js/"
}).use(['form','table','layer','laypage','hour','pagination','ajax'], function () {
    var $ = layui.jquery
        , table = layui.table
        , layer = layui.layer
        , form = layui.form
        , tree = layui.tree
        , hour = layui.hour;//自定义时间选择

    form.verify({
        pass: [
            // /^[\u4e00-\u9fffa-zA-Z]{1,25}$/
           /^.{1,50}$/
            , '不能为空且不可超过50个字'
        ],
        desc:[
            // /^[\u4e00-\u9fffa-zA-Z]{1,500}$/
            /^.{0,500}$/
            , '说明不可超过500个字'
        ],
        months:function (value) {
            var checkLenth = $("[name='month']:checked");
            if(checkLenth.length<=0){
                return "请选择月份";
            }
        },
        areas:function (value) {
            var are = tree.getChecked('treeId');
            if(are.length<=0){
                return "请选择疗养地区";
            }
        },
        enterPrise:function (value) {
            var ent = checkCompany=tree.getChecked('treeCompanyId');
            if(ent.length<=0){
                return "请选择企业查看权限";
            }
        },
        comparetime:function () {
            var start = $("[name=start]").val();
            var end = $("[name=end]").val();
            if(start>=end){
                return "开始报名时间必须小于报名结束时间";
            }
        }
    });
    $("[name='cenCelBtn']").click(function () {
        window.location.href="/changeViews?views=cars/cars-info";
    });

//    加载数据
    /**
     * 修改的时候到达新增页面的ajax
     */
    checkPreId();
    function checkPreId() {
        var id = $("[name='carId']").val();
        if(id !=undefined ){
            $.ajax({
                url:"/mglVehicleCarInfo/getById" ,
                type:"GET" ,
                data:{"id":id},
                success:function (res) {
                    if(res.code == 200) {
                        $("[name='carVin']").val(res.data.carVin);
                        $("[name='carNumber']").val(res.data.carNumber);
                        $("[name='province']").val(res.data.province);
                        $("[name='city']").val(res.data.city);
                        $("[name='countyInfo']").val(res.data.countyInfo);
                        $("[name='vehicleCustomer']").val(res.data.vehicleCustomer);
                        $("[name='batteryNumber']").val(res.data.batteryNumber);
                        $("[name='orderNumber']").val(res.data.orderNumber);
                        $("[name='batteryType']").val(res.data.batteryType);
                        $("[name='singleCapacity']").val(res.data.singleCapacity);
                        $("[name='nowBcuSoftwareVersion']").val(res.data.nowBcuSoftwareVersion);
                        $("[name='originalBcuSoftwareVersion']").val(res.data.originalBcuSoftwareVersion);
                        $("[name='busRoute']").val(res.data.busRoute);
                        $("[name='busCompany']").val(res.data.busCompany);
                        $("[name='vehicleServiceTime']").val(res.data.vehicleServiceTime);
                        $("[name='mixedModel']").val(res.data.mixedModel);
                        $("[name='mainTurningNumber']").val(res.data.mainTurningNumber);
                        $("[name='galvanicCellNumber']").val(res.data.galvanicCellNumber);
                        $("[name='note']").val(res.data.note);
                        form.render();
                    }
                },
                dataType:"json"
            });
        }
    }
});

