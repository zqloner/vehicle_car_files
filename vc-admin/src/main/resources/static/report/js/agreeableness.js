$(function () {
	
	var data = $("#data").text();
	var obj = JSON.parse(data);
	     
	var totalScore = obj[0].totalScore;
	//得分和常模
	$(".mar_tab").append("<tr><td>宜人性</td><td>"+totalScore+"</td><td>30.4～48.4</td></tr>");
	
	var level = obj[0].level;//等级  1高分  2中分   3低分
	var lev = Number(level);
	if(lev == 1){//高分
		$("#title").text("您的宜人性较好。");
		$(".wrap").append('<div class="marBottom10px"><b>您的得分略高于大多数人。您的典型特征是：乐于助人、可靠、充满同情心、注重合作而不是竞争。</b></div>');
		$(".wrap").append('<div class="marBottom10px">鉴于您的情况，建议您在乐于助人的同时，也别忘了要坚持自己认为对的事情。</div>');
	}else if(lev == 2){
		$("#title").text("您的宜人性中等。");
		$(".wrap").append('<div class="marBottom10px"><b>您的得分与大多数人相当。您典型特征是：平易近人，能够帮助别人，有合作精神，同时也能够为了自己的利益而斗争。</b></div>');
	}else if(lev == 3){
		$("#title").text("您的宜人性较差。");
		$(".wrap").append('<div class="marBottom10px"><b>您的得分略低于大多数人。您的典型特征是：表现出敌意的态度,对他人多持怀疑的态度,喜欢为了自己的利益和信念而争斗。</b></div>');
		$(".wrap").append('<div class="marBottom10px">鉴于您的情况，建议您可以多尝试理解他人的立场以及想法，别忘了多换位思考，多关心帮助周围别人，这样与人相处沟通时就能更加融洽。</div>');
	}
	
    $('#containerMood').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: null
        },
        xAxis: {
            categories: ['宜人性'],
            tickLength:0
        },
        yAxis: {
            min: 0,
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
                name: '宜人性',
                y: totalScore
            }]
        }]
    });
});