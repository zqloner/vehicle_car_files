$(function () {
	
	var data = $("#data").text();
	var obj = JSON.parse(data);
	console.log(obj);
	var total = obj[0].Total;
	if( total >= 0 && total <= 10){
		$(".low").show();
		$(".mid").hide();
		$(".high").hide();
	} else if (total > 10 && total <= 20){
		$(".low").hide();
		$(".mid").show();
		$(".high").hide();
	} else if (total >= 21 && total <= 30){
		$(".low").hide();
		$(".mid").hide();
		$(".high").show();
	}
	
    $('#containerDepression').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: null
        },
        xAxis: {
            categories: [" "],
            tickLength:0
        },
        yAxis: {
            min: 0,
            title: {
                text: null
            },
            tickInterval: 5
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
            data: [obj[0].Total]
        }]
    });
});