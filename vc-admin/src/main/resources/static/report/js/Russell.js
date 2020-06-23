$(function () {
		
		var low_title = "低于常模指数范围，说明您对烟草的依赖程度低于大多数人，希望您继续保持健康的生活方式！";
		var mid_title = "在常模指数范围内，说明您对烟草的依赖程度与大多数人相当，对烟可能有依赖。";
		var high_title = "超过了常模指数范围，说明您比大多数人的烟草依赖程度高，对烟的依赖程度严重！";
		var interp = {
			"XinLiYiXiang": {"name":"心理意象", "desc":"有时候觉得吸烟是一种老练和成熟的标志。建议尝试着从其他方面来寻找这种感觉，注重从内而外的成熟，而不是单单的追求自认为的成熟的外在表现形式。"},
			"KouShouHuoDong": {"name":"口手活动","desc":"吸烟是一种习惯，是为了口中、手里有一种东西，如果不吸烟会很不自在，觉得手没有地方放，嘴里也没味。可以通过其他方式来弥补这种空缺，比如可以咀嚼口香糖让嘴“忙碌”起来。"},
			"XiangLe":{"name":"享乐","desc":"吸烟是一种享受，是一件舒服、悠然自得的事情。应该改变这种想法，寻找其他的享受生活的方式，毕竟吸烟对身体是有害的。"},
			"ZhengJing":{"name":"镇静","desc":"在比较平和的环境中，是很少吸烟的，只是在紧张、焦虑或遇到突发的不良事件时，才频繁吸烟，把吸烟作为了一种缓解负性情绪的手段。建议通过深呼吸、聆听放松音乐、倾诉等健康的方式缓解不良情绪。"},
			"CiJi":{"name":"刺激", "desc":"把吸烟作为提高大脑皮层兴奋性的一种手段，常在疲劳后需要集中注意的脑力劳动时吸烟。烟中的某些成分确实会起到提神的作用，但长久下去对身体是很不利的，可用茶和咖啡代替，但注意也不要饮用过度，产生依赖性。"},
			"Ying":{"name":"瘾","desc":"对吸烟有依赖性，起码是心理上的依赖，对烟很渴求。注意戒烟时要采用循序渐进的方式一点点的减少吸烟量。"},
			"ZiDong":{"name":"自动","desc":"吸烟行为有时是下意识的自动行为，如不知不觉中就把烟点上了，意识不到自己在吸烟。平时注意不要把烟放到离自己很近的地方，比如书桌旁，茶几上，这会很有效的减少吸烟量。"},
			"ZiKong":{"name":"自控","desc":"总是不能控制自己，如果不吸烟，哪怕是一小时，也会感觉很难过。可以做些集中精力的事件，分散对烟的关注。"}
		};
	function bubbleSort(arr) {
	var i = arr.length, j;
	var tempExchangVal;
	while (i > 0) {
		for (j = 0; j < i - 1; j++) {
			if (arr[j].score < arr[j + 1].score) {
				tempExchangVal = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = tempExchangVal;
			}
		}
		i--;
	}
	return arr;
	}
	
	function displayDetailedDescription(obj){
		if(obj[0].score > obj[1].score){
			$("#interp1_name").html(interp[obj[0].name].name + "：");
			$("#interp1_desc").html(interp[obj[0].name].desc);
			$("#interp2_name").html(interp[obj[1].name].name + "：");
			$("#interp2_desc").html(interp[obj[1].name].desc);
		} else {
			var i = 0;
			do{
				$("#juTiBiaoXian").append(
					"<div><b>" + interp[obj[i].name].name + "：</b>" +interp[obj[i].name].desc + "</div>");
				i ++;
			}while( i < obj.length && obj[i-1].score == obj[i].score )
		}
	}
	
	var data = $("#data").text();
    var obj = JSON.parse(data);
	var total;
	for(var i = 0; i < obj.length; i++){
		if(obj[i]["name"] == "Total"){
			total = obj[i];
			obj.splice(i,1);
		}
	}

	var obj = bubbleSort(obj);

	$(".totalScore").html(total.score);
	
	if(total.score <= 6){
		$("#juTiBiaoXian").hide();
		$(".description").html(low_title);

	} else if(total.score >= 7 && total.score <= 19){
		$(".description").html(mid_title);
		displayDetailedDescription(obj);
	} else {
		$(".description").html(high_title);
		displayDetailedDescription(obj);
	}
	
	var xinLiYiXiang;
	var kouShouHuoDong;
	var xiangLe;
	var zhengJing;
	var ciJi;
	var ying;
	var ziDong;
	var ziKong;
	for(var i=0;i < obj.length;i++){
		switch(obj[i]["name"]){
			case "XinLiYiXiang":
			xinLiYiXiang = obj[i]["score"];
			break;
			case "KouShouHuoDong":
			kouShouHuoDong = obj[i]["score"];
			break;
			case "XiangLe":
			xiangLe = obj[i]["score"];
			break;
			case "ZhengJing":
			zhengJing = obj[i]["score"];
			break;
			case "CiJi":
			ciJi = obj[i]["score"];
			break;
			case "Ying":
			ying = obj[i]["score"];
			break;
			case "ZiDong":
			ziDong = obj[i]["score"];
			break;
			case "ZiKong":
			ziKong = obj[i]["score"];
			break;
			default:
			break;
		}
	}
    $('#containerRussell').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: null
        },
        xAxis: {
            categories: [
                '心理意象',
                '口手活动',
                '享乐',
                '镇静',
                '刺激',
                '瘾',
                '自动',
                '自控'
            ],
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
                name: '心理意象',
                y: xinLiYiXiang
            }, {
                name: '口手活动',
                y: kouShouHuoDong
            }, {
                name: '享乐',
                y: xiangLe
            }, {
                name: '镇静',
                y: zhengJing
            }, {
                name: '刺激',
                y: ciJi
            }, {
                name: '瘾',
                y: ying
            }, {
                name: '自动',
                y: ziDong
            }, {
                name: '自控',
                y: ziKong
            }]
        }]
    });
});