var descList={
		"desc1":{
				"1":"您的社会支持水平比大多数人低。",
				"2":"您的社会支持水平和大多数人相当。",
				"3":"您的社会支持水平比大多数人高，拥有良好的社会支持系统。"
		},
		"desc2":{
				"1":"低于常模指数范围，说明您的社会支持水平比大多数人低。",
				"2":"在常模指数范围内，说明您的社会支持水平和大多数人相当。",
				"3":"超过常模指数范围，说明您的社会支持水平比大多数人高，拥有良好的社会支持系统。"
		},
		"desc3":{
			"1":"在日常工作和生活中，您体验到的受尊重、被支持、被理解的感受较少，在遇到困难或情绪低落的时候，不愿意向亲人、朋友及其他人求助，有时会有些孤单无助的感觉，当遇到生活中较大的压力和意外事件发生时，会显得有些不知所措，对工作、对生活的不顺心比较厌烦，很容易出现疲劳、厌倦的情绪反应。另外，由于较低的社会支持，您对生活事件的解读往往带有悲观色彩，即心理特别容易受伤，常常有受欺负被欺骗的感觉，抵御挫折的能力相对较低。您可以尝试从改变自己的认知观念入手，凡事多想想其积极的一面，尽量多从积极面去解释身边发生的事，主动积极的与家人、朋友、同事交流沟通，为自己创造一个良好的潜在支持群体，将身边可利用的资源有效利用起来，帮助自己顺利度过心理低潮期。",
			"2":"在平时的生活中，您体验到的来自他人的支持处于中间状态。当遇到重大事件的时候，能从家庭、朋友那里得到一定的帮助。您可以尝试先要真诚的帮助别人，同时坦然接受他人的援助，积极为自己营造一个更为有效安全的社会支持系统。   ",
			"3":"在日常的工作和生活中，您能体验到较多的受尊重、被支持、被理解的感受，您在面临压力和挑战时，家庭、朋友、同事等都可以给您提供物质或精神上的帮助。较高的社会支持系统促使您具有较强的安全感，即使客观发生的事情不太如意，您也能从积极的角度来进行分析，积极找寻解决问题的方法，当遇到重大困难或挫折时，会主动积极的挖掘身边家人、朋友所能给您提供的资源，这些来自亲人、朋友及其他人的帮助可以提高您的心理健康水平，安然顺利的度过很多困难。"
		}
}

$(function () {
	var data = $("#data").text();
    var json = JSON.parse(data)[0];
    var demion = json.data;
    var level = demion.level;
    //加载曲线图
    $('#containerComprehend').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: null
        },
        xAxis: {
            categories: ['领悟社会支持'],
            tickLength:0
        },
        yAxis: {
            min: 12,
            title: {
                text: null
            },
            tickInterval: 12
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
                name: '领悟社会支持',
                y: parseInt(demion.score),
                color:'rgb(247,150,70)'
            }]
        }]
    });
    //描述信息
    var descStr1 = descList["desc1"][level];
    var descStr2 = descList["desc2"][level];
    var descStr3 = descList["desc3"][level];
    $("#descDiv1").html(descStr1);
    $("#descDiv2").html(descStr2);
    $("#descDiv3").html(descStr3);
    $("#tableScore").html(demion.score);
    $("#spanScore").html(demion.score);
});