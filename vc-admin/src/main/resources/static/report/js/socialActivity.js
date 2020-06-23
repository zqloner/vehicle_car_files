$(function () {
	
	
	var data = $("#data").text();
	var obj = JSON.parse(data);
	var jiaolv = obj[0].jiaolv;
	var huibi = obj[0].huibi;
	
	$("#jiaolvScore").text(jiaolv);
	$("#huibiScore").text(huibi);
	
	if(0 <= jiaolv && jiaolv < 14){
		$(".jiaolvLow").show();
		$(".jiaolvMid").hide();
		$(".jiaolvHigh").hide();
	} else if(14 <= jiaolv && jiaolv < 28){
		$(".jiaolvLow").hide();
		$(".jiaolvMid").show();
		$(".jiaolvHigh").hide();
	} else if(28 <= jiaolv && jiaolv <= 42){
		$(".jiaolvLow").hide();
		$(".jiaolvMid").hide();
		$(".jiaolvHigh").show();
	}
	
	if(0 <= huibi && huibi < 15){
		$(".huibiLow").show();
		$(".huibiMid").hide();
		$(".huibiHigh").hide();
	} else if(15 <= huibi && huibi < 29) {
		$(".huibiLow").hide();
		$(".huibiMid").show();
		$(".huibiHigh").hide();
	} else if(29 <= huibi && huibi <= 42){
		$(".huibiLow").hide();
		$(".huibiMid").hide();
		$(".huibiHigh").show();
	}
	
    $('#containerSocial').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: null
        },
        xAxis: {
            categories: ['回避','焦虑'],
            tickLength:0
        },
        yAxis: {
            min: 0,
            title: {
                text: null
            },
            tickInterval: 10
        },
        tooltip: {
            enabled: false
        },
        legend: {
            enabled: false
        },
        credits: {
            enabled:false
        },
        exporting: {
            enabled:false
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
                name: '回避',
                y: obj[0].huibi
            },{
                name: '焦虑',
                y: obj[0].jiaolv
            }]
        }]
    });
});