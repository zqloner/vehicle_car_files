var descList={
		"desc1":{
			"对成功责任的感知":{
				"1":"你在遇到成功事件的时候，往往把原因归于外界因素。",
				"2":"你在遇到成功事件的时候，往往把原因归于内在和外在因素共同所致。",
				"3":"你在遇到成功事件的时候，往往把原因归于内在因素。"
			},"对失败责任的感知":{
				"1":"你在遭遇失败或挫折的时候，往往把原因归于外界因素。",
				"2":"你在遭遇失败或挫折的时候，往往把原因归于内在和外在因素共同所致。",
				"3":"你在遭遇失败或挫折的时候，往往把原因归于内在因素。"
			}
		},
		"desc2":{
			"对成功责任的感知":{
				"1":"你的得分低于常模指数范围，说明你的得分低于大多数人。",
				"2":"你的得分在常模指数范围内，说明你的得分与大多数人相当。",
				"3":"你的得分超过了常模指数范围，说明你的得分高于大多数人。"
			},"对失败责任的感知":{
				"1":"你的得分低于常模指数范围，说明你的得分低于大多数人。",
				"2":"你的得分在常模指数范围内，说明你的得分与大多数人相当。",
				"3":"你的得分超过了常模指数范围，说明你的得分高于大多数人。"
			}
		},
		"desc3":{
			"对成功责任的感知":{
				"1":"你在遇到成功事件的时候，往往把原因归于外界因素。例如，在学习或考试中取得好成绩，认为并不是自身努力的结果，而是外在因素所造成的，例如运气好、考题简单、老师教得好等。",
				"2":"你在遇到成功事件的时候，往往把原因归于内在和外在因素共同所致。例如，自己在学习或考试中取得好成绩，认为部分是由于自己的努力，部分是由于外在因素的影响。",
				"3":"你在遇到成功事件的时候，往往把原因归于内在因素。例如，在学习或考试中取得好成绩，认为是自身努力的结果。"
			},"对失败责任的感知":{
				"1":"你在遭遇失败或挫折的时候，往往把原因归于外界因素。例如，在学习中遇到的失败和挫折时，认为不是自己的原因，而是诸如：考试题目出得过难、考试时身体不舒服、老师教学水平低、别的同学影响自己的学习等。这种想法虽然可以避免陷入过于自责的境地，但往往会让你丧失责任感，认为失败都与自己无关，因而不去努力避免失败。",
				"2":"你在遭遇失败或挫折的时候，往往把原因归于内在和外在因素共同所致。例如，在学习中遇到挫折时，你会认为有些是由于外界因素造成的，有些是因为自己的能力存在问题或不够努力。",
				"3":"你在遭遇失败或挫折的时候，往往把原因归于内在因素。例如，在学习中遇到挫折时，认为是由于自身因素造成的，觉得自己脑子笨、天赋差、不努力、贪玩等。虽然这种想法可以督促自己更加努力学习，但有时过分的自责会导致对自己的负面评价过多，产生自卑感，甚至有“破罐子破摔”的想法。"
			}
		}
}

$(function () {
	var data = $("#data").text();
    var json = JSON.parse(data)[0].data;
    var successScore,successLevel,failScore,failLevel;
    for(var i=0;i<json.length;i++){
    	  if(json[i].name == '对成功责任的感知'){
    	      successScore = parseFloat(json[i].score);
    	      successLevel = parseInt(json[i].level);
    	  }else if(json[i].name == '对失败责任的感知'){
    		  failScore = parseFloat(json[i].score);
    		  failLevel = parseInt(json[i].level);
    	  }
    }
    //曲线值填充
    $('#containerAcademic').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: null
        },
        xAxis: {
            categories: ['对成功的归因', '对失败的归因'],
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
                name: '对成功的归因',
                color: '#FF9912',
                y:successScore
            }, {
                name: '对失败的归因',
                color: '#32CD32',
                y:failScore
            }]
        }]
    });
    //表格值显示
    $("#tableSuccessScore").html(successScore);
    $("#tableFailScore").html(failScore);
    //描述信息填充
    var firstDesc = "";
    firstDesc = (descList["desc1"]["对成功责任的感知"][successLevel]) + (descList["desc1"]["对失败责任的感知"][failLevel]);
    var successDesc1 = descList["desc2"]["对成功责任的感知"][successLevel];
    var successDesc2 = descList["desc3"]["对成功责任的感知"][successLevel];
    var failDesc1 = descList["desc2"]["对失败责任的感知"][failLevel];
    var failDesc2 = descList["desc3"]["对失败责任的感知"][failLevel];
    $("#firstDesc").html(firstDesc);
    $("#successDesc1").html(successDesc1);
    $("#successDesc2").html(successDesc2);
    $("#failDesc1").html(failDesc1);
    $("#failDesc2").html(failDesc2);
    
})