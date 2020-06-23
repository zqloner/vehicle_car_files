$(function(){
	
	var map = {
		"DanZhi" : {"name":"胆汁","desc":"性情开朗、热情、坦率，但脾气急躁，好争论；情感易于冲动但不持久；精力旺盛，经常以极大地热情从事工作，但有时缺乏耐心；思维具有一定的灵活性，但对问题的理解具有粗枝大叶、不求甚解的倾向；职业方面喜欢跳槽，更换工作单位，渴望寻求不同的工作环境。这种气质类型的人不足是存在急躁、易生气，易激动，建议加强在耐心、沉着和自制力等方面的心理修养。"},
		"DuoXie" : {"name":"多血","desc":"活泼好动，善于交际，思维敏捷；易于产生情感，但体验不深刻；工作学习上富有精力而效率高，善于适应环境变化，易于接受新鲜事物；精力充沛，意志坚强，能在自己喜欢的领域大显身手。这种气质类型的人不足是情感易变，如果事业上不顺利，热情可能消失，其速度与投身事业一样迅速，因此要加强在刻苦钻研、有始有终、严格要求等方面的心理修养。"},
		"NianYe" : {"name":"粘液","desc":"安静，稳重，情绪不容易外露，注意力稳定而不容易转移，思维灵活性较差，但比较细致，喜欢沉思，在意志力方面具有耐性，对自己的行为有较大的自制力；办事谨慎细致，从不鲁莽。这种气质类型的人不足是容易因循守旧，有些事情不够灵活，不善于转移自己的注意力，对新的工作较难适应。因此注意在思维方式上要注意多元性。"},
		"YiYu" : {"name":"抑郁","desc":"情绪体验深刻，易多愁善感；富于想象，聪明且观察力敏锐；胆小孤僻，优柔寡断，受到挫折后常心神不宁，但对力所能及的工作表现出坚忍的精神；对外部环境变化敏感，内心体验深刻。这种气质类型的人不足是外表行为较迟缓，怯弱，孤僻，优柔寡断。因此需要培养在决策方面的果断，尽量克服犹豫不决，反复考虑的习惯。"}
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
	
    var data = $("#data").text();
    var obj = JSON.parse(data);
	obj = bubbleSort(obj);
	if(obj[0].score - obj[1].score >= 4){
		if(obj[0].score > 20){
			$("#title").html("你的气质类型属于典型" + map[obj[0].name].name + "质");
			$("#desc_title").html("你的气质类型属于典型" + map[obj[0].name].name + "质");
		} else if(obj[0].score >=10 && obj[0].score <= 20){
			$("#title").html("你的气质类型属于一般" + map[obj[0].name].name + "质");
			$("#desc_title").html("你的气质类型属于一般" + map[obj[0].name].name + "质");
		} else{
			$("#title").html("你的气质类型属于" + map[obj[0].name].name + "质");
			$("#desc_title").html("你的气质类型属于" + map[obj[0].name].name + "质");
		}
		$("#desc_desc").html(map[obj[0].name].desc);
	} else if(obj[0].score - obj[1].score <= 3 && obj[1].score - obj[2].score >= 4){		
			$("#title").html("你的气质类型属于" + map[obj[0].name].name + "质---" + map[obj[1].name].name + "质混合型");
			$("#desc_title").html("你的气质类型属于" + map[obj[0].name].name + "质---" + map[obj[1].name].name + "质混合型");
			$("#desc_desc").html("<div>" + map[obj[0].name].name + "质:<div>" + map[obj[0].name].desc + "<div>" + 
				map[obj[1].name].name + "质:<div>" + map[obj[1].name].desc)
	} else if(obj[0].score - obj[1].score <= 3 && 
				obj[1].score - obj[2].score <= 3 && 
				obj[0].score - obj[2].score <= 3 && obj[2].score > obj[3].score){
				var type = "你的气质类型属于" + map[obj[0].name].name + "质---" + map[obj[1].name].name + "质---" + map[obj[2].name].name + "质混合型";
				$("#title").html(type);
				$("#desc_title").html(type);
				$("#desc_desc").html("<div>" + map[obj[0].name].name + "质:<div>" + map[obj[0].name].desc + "<div>" + 
				map[obj[1].name].name + "质:<div>" + map[obj[1].name].desc + "<div>" + 
				map[obj[2].name].name + "质:<div>" + map[obj[2].name].desc);
	}else{
		var type = "你的气质类型属于" + 
		map[obj[0].name].name + "质---" + 
		map[obj[1].name].name + "质---" + 
		map[obj[2].name].name + "质---" + 
		map[obj[3].name].name + "质混合型";
		$("#title").html(type);
		$("#desc_title").html(type);
		$("#desc_desc").html("<div>" + 
				map[obj[0].name].name + "质:<div>" + map[obj[0].name].desc + "<div>" + 
				map[obj[1].name].name + "质:<div>" + map[obj[1].name].desc + "<div>" + 
				map[obj[2].name].name + "质:<div>" + map[obj[2].name].desc + "<div>" + 
				map[obj[3].name].name + "质:<div>" + map[obj[3].name].desc);
	}
	
	
	
    var danZhiScore = 0;
	var duoXieScore = 0;
	var nianYeScore = 0;
	var yiYuScore = 0;
    for(var i=0;i < obj.length;i++){
		if(obj[i].name == "DanZhi"){
			danZhiScore = obj[i].score;
		} else if(obj[i].name == "DuoXie"){
			duoXieScore = obj[i].score;
		} else if(obj[i].name == "NianYe"){
			nianYeScore = obj[i].score;
		} else if(obj[i].name == "YiYu"){
			yiYuScore = obj[i].score;
		}
	}
    $('#containerTemperamentType').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: null,
            style:{
                color:'#999'
            }
        },
        legend: {
            enabled: false
        },
        xAxis: {
            categories: [
                '胆汁质',
                '多血质',
                '粘液质',
                '抑郁质'
            ],
            tickLength:0
        },
        yAxis: {
            title: {
                text: null
            }
        },
        tooltip: {
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
                name:"胆汁质",
                y:danZhiScore,
                color:"rgb(150,191,239)"
            },{
                name:"多血质",
                y:duoXieScore,
                color:"rgb(227,240,200)"
            },{
                name:"粘液质",
                y:nianYeScore,
                color:"rgb(207,196,201)"
            },{
                name:"抑郁质",
                y:yiYuScore,
                color:"rgb(192,233,243)"
            }]
        }],
        /*去掉右下角.com*/
        credits: {
            enabled:false
        },
        /*去掉右上角print&download*/
        exporting: {
            enabled:false
        }
    });
});