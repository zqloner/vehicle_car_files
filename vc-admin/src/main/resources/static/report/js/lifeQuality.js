$(function () {
	var data = $("#data").text();
	var obj = JSON.parse(data);
	var result = obj[0].result;
	
	var qtgn = Math.round(result.quTiGongNeng * 100) / 100;
	var xlgn = Math.round(result.xinLiGongNeng * 100) / 100;
	var shgn = Math.round(result.sheHuiGongNeng * 100) / 100;
	var wzsh = Math.round(result.wuZhiShengHuoZhuangTai * 100) / 100;
	var total = Math.round(result.total * 100) / 100;
	
	$(".totalScore").html(total);
	$(".qtgnScore").html(qtgn);
	$(".xlgnScore").html(xlgn);
	$(".shgnScore").html(shgn);
	$(".wzshScore").html(wzsh);
	
	var stdUpperBond, stdLowerBond, qtgnBond, xlgnBond, shgnBond, wzshBond;
	
	if(result.sex == "1"){
		$(".female").show();
		$(".male").hide();
		stdUpperBond = 70.90;
		stdLowerBond = 29.50;
		qtgnBond = 60.20;
		xlgnBond = 61.50;
		shgnBond = 63.40;
		wzshBond = 71.20;
	} else {
		$(".female").hide();
		$(".male").show();
		stdUpperBond = 74.20;
		stdLowerBond = 36.40;
		qtgnBond = 68.20;
		xlgnBond = 73.70;
		shgnBond = 70.10;
		wzshBond = 73.40;
	}
	
	if(total > stdUpperBond){
		$(".high").show();
		$(".mid").hide();
		$(".low").hide();
	} else if (total >= stdLowerBond && total <= stdUpperBond){
		$(".high").hide();
		$(".mid").show();
		$(".low").hide();
	} else if( total < stdLowerBond ){
		$(".high").hide();
		$(".mid").hide();
		$(".low").show();
	}
	
	if(qtgn >= qtgnBond){
		$(".qtgnHigh").show();
		$(".qtgnLow").hide();
	} else {
		$(".qtgnHigh").hide();
		$(".qtgnLow").show();
	}
	
	if(xlgn >= xlgnBond){
		$(".xlgnHigh").show();
		$(".xlgnLow").hide();
	} else {
		$(".xlgnHigh").hide();
		$(".xlgnLow").show();
	}
	
	if(shgn >= shgnBond){
		$(".shgnHigh").show();
		$(".shgnLow").hide();
	} else {
		$(".shgnHigh").hide();
		$(".shgnLow").show();
	}
	
	if(wzsh >= wzshBond){
		$(".wzshHigh").show();
		$(".wzshLow").hide();
	} else {
		$(".wzshHigh").hide();
		$(".wzshLow").show();
	}
	
    $('#containerLifeQuality').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: null
        },
        xAxis: {
            categories: ["躯体功能","心理功能","社会功能","物质生活"],
            tickLength:0
        },
        yAxis: {
            min: 0,
            title: {
                text: null
            },
            tickInterval: 20
        },
        credits: {
            enabled:false
        },
        exporting: {
            enabled:false
        },
        tooltip: {
            enabled:false
        },
        legend: {
            enabled: false
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0,
                dataLabels:{
                    enabled:true
                }
            }
        },
        series: [{
            data: [{
                name:"躯体功能",
                y:qtgn
            },{
                name:"心理功能",
                y:xlgn
            },{
                name:"社会功能",
                y:shgn
            },{
                name:"物质生活",
                y:wzsh
            }]
        }]
    });
});