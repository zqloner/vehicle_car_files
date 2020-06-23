function renderAnxiety(score) {
	/*根据后台返回得分，判断得分范围生成图表改变图标位置*/
    //var score = $("#score").text();
    if(score>0 && score<12){
        $("#anx_tr_3 td:eq(0)").html("<img src='report/images/location.png'/>");
    }else if(score>=12 && score<=20){
        $("#anx_tr_3 td:eq(1)").html("<img src='report/images/location.png'/>");
    }else if(score>20){
        $("#anx_tr_3 td:eq(2)").html("<img src='report/images/location.png'/>");
    }else{
        alert("返回结果不在范围内！");
    }
}