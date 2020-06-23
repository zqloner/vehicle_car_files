$(function () {
	
	var data = $("#data").text();
	var obj = JSON.parse(data);
	     
	var totalScore = obj[0].totalScore;
	//得分和常模
	$(".mar_tab").append("<tr><td>表达能力</td><td>"+totalScore+"</td><td>26～32</td></tr>");
	
	var level = obj[0].level;//等级  1高分  2中分   3低分
	var lev = Number(level);
	if(lev == 1){
		$("#title").text("您的表达能力较强。");
		$(".wrap").append('<div class="marBottom10px"><b>在表达能力方面，您的得分为'+totalScore+'分，超过了常模指数范围，说明您具有很强的表达能力，善于通过各种方式表达清楚自己的意识。请继续保持即可。</b></div>');
	}else if(lev == 2){
		$("#title").text("您的表达能力中等。");
		$(".wrap").append('<div class="marBottom10px"><b>在表达能力方面，您的得分为'+totalScore+'分，在常模指数范围内，说明您具备一定的表达能力，一般情况下，在和人交流时能够表达清楚自己的意思。');
		$(".wrap").append('<div class="marBottom10px">建议您多了解学习沟通技巧类知识，表达时别忘了与对方确认是否也能理解顺畅。</div>');
	}else if(lev == 3){
		$("#title").text("您的表达能力较差。");
		$(".wrap").append('<div class="marBottom10px"><b>在表达能力方面，您的得分为'+totalScore+'分，低于常模指数范围，说明您的表达能力有待提高，在明确清楚地表达自己意思方面还需要提升。');
		$(".wrap").append('<div class="marBottom10px">建议您多了解学习沟通技巧类知识，提升自信，锻炼口语表达时的逻辑性，抓住各种机会多说话、多与身边人沟通交流。</div>');
	}
	
    $('#containerMood').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: null
        },
        xAxis: {
            categories: ['表达能力'],
            tickLength:0
        },
        yAxis: {
            min: 0,
            max:40,
            title: {
                text: null
            }
        },
        credits: {
            enabled:false
        },
        exporting: {
            enabled:false
        },
        tooltip: {
            formatter: function() {
                tooltip.enabled = false;
            }
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
                name: '表达能力',
                y: totalScore
            }]
        }]
    });
});