var descList={
		"desc1":{
				"1":"你不存在网络成瘾现象。",
				"2":"你存在轻度的网络成瘾现象。",
				"3":"由于沉迷于网络，你的生活已经受了一些影响。",
				"4":"上网已经给你的生活带来了很多问题，严重影响了学习和生活。"
		},
		"desc2":{
				"1":"你的得分在常模指数范围内，说明你的得分与多数人相当。你不存在网络成瘾现象。你能很好地控制上网时间，并利用网络获得积极的信息。希望你继续保持这种良好的上网习惯。",
				"2":"你的得分高于常模指数范围，说明你的得分高于多数人。你存在轻度的网络成瘾现象。有时你上网时间上会多一些，但总体上仍是能够自我控制，尚未沉溺于此。",
				"3":"你的得分远超出常模指数范围，说明你的得分高于大多数人。由于沉迷于网络，你的生活已经受了一些影响。",
				"4":"你的得分已经远远高于常模指数范围，说明你的得分高于绝大多数人。上网已经给你的生活带来了很多问题，严重影响了学习和生活。"
		},
		"desc3":{
				"1":"",
				"2":"",
				"3":"{desc}。建议你谨慎对待过度上网给你和你的家庭成员带来的消极影响，减少上网量。",
				"4":"{desc}。建议你尽快正视并解决这些问题，以减少网络成瘾给你带来的危害。"
		},
		"desc4":{
			"1":"正常",
			"2":"轻度",
			"3":"中度",
			"4":"重度"
		},
		"desc5":{
			"1":"上网时间比预期长",
			"2":"因上网而忽略要做的事",
			"3":"更愿意上网而不是和朋友相处",
			"4":"在网上结交新朋友",
			"5":"朋友或者家人抱怨你上网多",
			"6":"因上网影响了工作和学习",
			"7":"不顾身边需解决的问题上网查看邮箱",
			"8":"因上网影响了日常生活",
			"9":"担心网络中的隐私被人知道",
			"10":"因心情不好去上网",
			"11":"渴望下一次上网",
			"12":"无法上网时感到空虚",
			"13":"因被别人打扰上网而发脾气",
			"14":"上网到深夜不睡",
			"15":"虽离开网络，但仍想着网上的事",
			"16":"上网时对自己说“就再玩一会”",
			"17":"无法减少上网时间",
			"18":"对别人隐瞒上网时间",
			"19":"宁愿上网也不和朋友出去玩",
			"20":"因不能上网变得焦躁不安、喜怒无常"
	}
}
$(function () {
	var data = $("#data").text();
    var json = JSON.parse(data)[0];
    var demion = json.data;
    var quesList =json.quesMarks;
    //alert(demion.score+','+quesList.length);
    var score = parseInt(demion.score);
    var level = demion.level;
	
    /*根据后台返回数据生成柱形图*/
    $('#containerNetwork').highcharts({
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
            enabled:function(){
                enabled.enabled = false;
            },
            categories: [' '],
            tickLength:0
        },
        yAxis: {
            min: 0,
            title: {
                text: null
            },
            stackLabels: {
                enabled: true,
                style: {
                    fontWeight: 'bold'
                }
            }
        },
        tooltip: {
            formatter: function() {
                tooltip.enabled = false;
            }
        },
        /*数据点配置*/
        plotOptions: {
            column: {
                stacking: 'normal',
                dataLabels: {
                    enabled: false
                }
            },
            series: {
                pointWidth:150 //柱子之间的距离值
            }
        },
        /*数据列*/
        series: [{
            data: [{
                name:"网络成瘾量表",
                y:score,
                color:"#FFE384"
            }]
        }],
        credits: {
            enabled:false
        },
        exporting: {
            enabled:false
        }
    });
    //描述信息
    var descStr1 = descList["desc1"][level];
    var descStr2 = descList["desc2"][level];
    $("#divDesc1").html(descStr1);
    $("#divDesc2").html(descStr2);
    var levelStr =descList["desc4"][level];
    $("#tableScore").html(score);
    $("#scoreSpan").html(score);
    $("#levelSpan").html(levelStr);
    if(parseInt(level)>2){
    	   var descStr3 = descList["desc3"][level];
    	    if(score >= 60){
    	    	var behaviorStr = "";
    	    	for(var i=0;i<quesList.length;i++){
    	    		 behaviorStr = behaviorStr + descList["desc5"][quesList[i]];
    	    		 if(i != (quesList.length -1)){
    	    			 behaviorStr = behaviorStr + ","
    	    		 }
    	    	}
    	    	descStr3 = descStr3.replace("{desc}",behaviorStr);
    	    }
    	    $("#divDesc3").html(descStr3);
    }else{
    	$("#divDesc3").hide();
    	$("#divInfo3").hide();
    }
 
});