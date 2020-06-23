$(function () {
	
	var data = $("#data").text();
	var obj = JSON.parse(data);
	     
	var totalScore = obj[0].totalScore;
	//得分和常模
	$(".mar_tab").append("<tr><td>情绪稳定性</td><td>"+totalScore+"</td><td>33.2～51.6</td></tr>");
	
	var level = obj[0].level;//等级  1高分  2中分   3低分
	var lev = Number(level);
	if(lev == 1){
		$("#title").text("您的情绪稳定性较高。");
		$(".wrap").append('<div class="marBottom10px"><b>您的情绪稳定性较高，在这一方面，您的得分略高于大多数人。处于您这个分数段的人的典型特征是：通常是平静的，不容易感到紧张或慌乱。幸福程度和对生活满意度较高。</b></div>');
		$(".wrap").append('<div class="marBottom10px">鉴于您的情况，建议您保持现有良好状态的基础上，增加生活中的积极体验。</div>');
	}else if(lev == 2){
		$("#title").text("您的情绪稳定性中等。");
		$(".wrap").append('<div class="marBottom10px"><b>您的情绪稳定性中等，在这一方面，您的得分与大多数人相当。处于您这个分数段的人的典型特征是：情绪稳定，会体验到焦虑不安等情绪，但影响不会很大，对情绪的调节能力强，不会有不现实的想法及过多的要求和冲动。</b></div>');
		$(".wrap").append('<div class="marBottom10px">鉴于您的情况，建议您在面对事情时，继续保持较好的心态，客观冷静地对待事情。</div>');
	}else if(lev == 3){
		$("#title").text("您的情绪稳定性较低。");
		$(".wrap").append('<div class="marBottom10px"><b>您的情绪稳定性较低，在这一方面，您的得分略低于大多数人。处于您这个分数段的人的典型特征是：会觉得焦虑,沮丧,害怕,不安,情绪化,个体倾向于有心理压力、不现实的想法、过多的要求和冲动以及不适应的应对反应。</b></div>');
		$(".wrap").append('<div class="marBottom10px">鉴于您的情况，建议您遇事学会顺其自然，对于超出自己控制的事情，冷静客观的看待，避免过多地受到情绪的困扰。</div>');
	}
	
    $('#containerMood').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: null
        },
        xAxis: {
            categories: ['情绪稳定性'],
            tickLength:0
        },
        yAxis: {
            min: 12,
            max: 60,
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
                name: '情绪稳定性',
                y: totalScore
            }]
        }]
    });
});