$(function () {
	var data = $("#data").text();
	var obj = JSON.parse(data);
	var result1 = obj[0]["data"];
	var result2 = obj[0]["result"];
	$("#result1").html(result1.result);
	$("#result2").html(result2);
	var score = result1.score;
	$(".color396").html(score);
    $('#containerSuicideRisk').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: null
        },
        xAxis: {
            categories: [' '],
            tickLength:0
        },
        yAxis: {
            min: 0,
            title: {
                text: null
            },
            tickInterval: 3
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
                name: '自杀风险评估',
                y: score
            }]
        }]
    });
});