$(function () {
	
	var data = $("#data").text();
	var obj = JSON.parse(data);
	var biaoDaYiZhi,chongXinPingJia;
	for(var i =0; i < obj.length;i++){
		switch(obj[i].name){
			case "BiaoDaYiZhi":
			biaoDaYiZhi = obj[i].score;
			break;
			case "ChongXinPingJia":
			chongXinPingJia = obj[i].score;
			break;
			default:
			break;
		}
	}
	
	$("#biaoDaYiZhiScore").html(biaoDaYiZhi);
	$("#chongXingPingJiaScore").html(chongXinPingJia);
	
	if(biaoDaYiZhi < 22.83){
		$("#biaoDaYiZhiDesc").html("您的得分低于常模指数范围，说明相比大多数人，您更少地使用表达抑制的调节策略。");
	} else if( biaoDaYiZhi >= 22.83 && biaoDaYiZhi < 38.25){
		$("#biaoDaYiZhiDesc").html("您的得分在常模指数范围内，说明您使用表达抑制调节策略的情况与大多数人相当。");
	} else {
		$("#biaoDaYiZhiDesc").html("您的得分超过了常模指数范围，说明相比大多数人，您更多地使用表达抑制的调节策略。");
	}

	if(chongXinPingJia < 29.29){
		$("#chongXingPingJiaDesc").html("您的得分低于常模指数范围，说明相比大多数人，您更少地使用重新评价的调节策略。");
	} else if (chongXinPingJia >= 29.29 && chongXinPingJia < 42.21){
		$("#chongXingPingJiaDesc").html("您的得分在常模指数范围内，说明您使用重新评价调节策略的情况与大多数人相当。");
	} else {
		$("#chongXingPingJiaDesc").html("您的得分超过了常模指数范围，说明相比大多数人，您更多地使用重新评价的调节策略。");
	}
	
	if(biaoDaYiZhi > chongXinPingJia){
		$("#descName").html("表达抑制");
		$("#topTitle").html("表达抑制");
		$("#descDesc").html("您主要是通过抑制将要发生或正在发生的情绪表达行为，从而降低主观情绪体验。表达抑制的调节策略只是控制了情绪的表达，改变了外部情绪表现，但不能减少消极情绪体验，反而降低对积极情绪的体验。研究还表明，习惯性地压抑情绪容易导致抑郁和焦虑症状。因此，建议您更少的使用表达抑制策略，可以使用重新评价等其他策略来调节您的情绪。");
	} else if(biaoDaYiZhi < chongXinPingJia){
		$("#descName").html("重新评价");
		$("#topTitle").html("重新评价");
		$("#descDesc").html("您经常通过从认知上改变对情绪事件意义的看法和态度来调节情绪，从而改变情绪体验，通常是以一种更加积极的方式来理解使您产生挫折、生气和厌恶等负性情绪事件。使用重新评价的调节策略可以使您的抑郁更少，消极情绪体验更少，生活满意度增加。因此，建议您继续使用这种情绪调节策略。");
	} else {
	    $("#topDesc").html("您使用重新评价和表达抑制两种策略来调节情绪");
		$("#desc").html("您使用重新评价和表达抑制两种策略来调节情绪");
		$("#descDesc").html("您既从认知上改变对情绪事件意义的看法和态度来调节情绪，也通过抑制将要发生或正在发生的情绪表达行为来降低主观情绪体验。两种调节策略相较而言，使用重新评价策略会使人们的抑郁更少，负性情绪体验更少，生活满意度增加。因此，建议您以后更多地采用重新评价策略来调节情绪。");
	}
	
    $('#containerEmotion').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: null
        },
        xAxis: {
            categories: [
                '重新评价',
                '表达抑制'
            ],
            tickLength:0
        },
        yAxis: {
            min: 0,
            title: {
                text: null
            },
            tickInterval: 7
        },
        credits: {
            enabled:false
        },
        exporting: {
            enabled:false
        },
        tooltip: {
            enabled: false
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
                name: '重新评价',
                y: chongXinPingJia
            }, {
                name: '表达抑制',
                y: biaoDaYiZhi
            }]
        }]
    });
});