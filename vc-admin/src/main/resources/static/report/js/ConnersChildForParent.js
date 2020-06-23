$(function () {
	var data = $("#data").text();
	var obj = JSON.parse(data);
	var result2 = obj[0]["result"];
	var resultList = obj[0]["data"]
	$("#result2").html(result2);
	$("#result22").html(result2);
	var show = "";
	var score = new Array(resultList.length);
	for(var i = 0;i < resultList.length;i++){
		var resultObj = resultList[i];
		if("typeResult" in resultObj){
			show += "<div class='marBottom10px'> <b>"+resultObj.name+":</b>";
			show += resultObj.typeResult+"</div>";
			
		}
		var scoreObj = {};
		scoreObj.name = resultObj.name;
		scoreObj.y = resultObj.score;
		score[i] = scoreObj;
	}
	$("#show").html(show);
	if(show == ""){
		$("#jtbx").hide();
	}
    $('#containerConners').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: null
        },
        xAxis: {
            categories: [
                '品行问题',
                '学习问题',
                '心身障碍',
                '冲动-多动',
                '焦虑',
                '多动指数'
            ],
            tickLength:0
        },
        yAxis: {
            min: 0,
            title: {
                text: null
            },
            tickInterval: 0.5
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
            data: score
        }]
    });
});