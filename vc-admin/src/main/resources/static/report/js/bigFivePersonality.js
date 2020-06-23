$(function () {
	
	var data = $("#data").text();
	var obj = JSON.parse(data);

	
	var shengJinZhi = obj[0].shengJingZhi;
	var waiQinXing = obj[0].waiQingXing;
	var kaiFangXing = obj[0].kaiFangXing;
	var yiRenXing = obj[0].yiRenXing;
	var jingZeXing = obj[0].jingZeXing;
	
	$(".sjzScore").html(shengJinZhi);
	$(".wqxScore").html(waiQinXing);
	$(".kfxScore").html(kaiFangXing);
	$(".yrxScore").html(yiRenXing);
	$(".jzxScore").html(jingZeXing);
	
	if(shengJinZhi >= 39){
		$(".sjzHigh").show();
		$(".sjzMid").hide();
		$(".sjzLow").hide();
	} else if(shengJinZhi < 39 && shengJinZhi >= 21){
		$(".sjzHigh").hide();
		$(".sjzMid").show();
		$(".sjzLow").hide();
	} else if(shengJinZhi < 21){
		$(".sjzHigh").hide();
		$(".sjzMid").hide();
		$(".sjzLow").show();
	}
	
	if(waiQinXing >= 43){
		$(".wqxHigh").show();
		$(".wqxMid").hide();
		$(".wqxLow").hide();
	} else if(waiQinXing >= 27 && waiQinXing < 43){
		$(".wqxHigh").hide();
		$(".wqxMid").show();
		$(".wqxLow").hide();
	} else if(waiQinXing < 27) {
		$(".wqxHigh").hide();
		$(".wqxMid").hide();
		$(".wqxLow").show();
	}
	
	if(kaiFangXing >= 48){
		$(".kfxHigh").show();
		$(".kfxMid").hide();
		$(".kfxLow").hide();
	} else if(kaiFangXing < 48 && kaiFangXing >= 33){
		$(".kfxHigh").hide();
		$(".kfxMid").show();
		$(".kfxLow").hide();
	} else if(kaiFangXing < 33){
		$(".kfxHigh").hide();
		$(".kfxMid").hide();
		$(".kfxLow").show();
	}
	
	if(yiRenXing >= 49){
		$(".yrxHigh").show();
		$(".yrxMid").hide();
		$(".yrxLow").hide();
	} else if(yiRenXing >= 31 && yiRenXing < 49){
		$(".yrxHigh").hide();
		$(".yrxMid").show();
		$(".yrxLow").hide();
	} else if(yiRenXing < 31){
		$(".yrxHigh").hide();
		$(".yrxMid").hide();
		$(".yrxLow").show();
	}
	
	if(jingZeXing >= 45){
		$(".jzxHigh").show();
		$(".jzxMid").hide();
		$(".jzxLow").hide();
	} else if(jingZeXing >= 29 && jingZeXing < 45){
		$(".jzxHigh").hide();
		$(".jzxMid").show();
		$(".jzxLow").hide();
	} else if(jingZeXing < 29){
		$(".jzxHigh").hide();
		$(".jzxMid").hide();
		$(".jzxLow").show();
	}
	
	
    $('#containerBigFive').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: null
        },
        xAxis: {
            categories: [
                '神经质',
                '外倾性',
                '开放性',
                '宜人性',
                '尽责性'
            ],
            tickLength:0
        },
        yAxis: {
            min: 12,
            title: {
                text: null
            },
            tickInterval: 6
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
            data: [shengJinZhi,waiQinXing,kaiFangXing,yiRenXing,jingZeXing]
        }]
    });
});