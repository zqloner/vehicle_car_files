var descList={
		"desc1":{
				"1":"受测者的各项生活能力正常。",
				"0":"受测者在一些方面表现出明显的功能障碍。"
		},
		"desc2":{
				"1":"测验结果表明，受测者的各项得分都在正常范围内，表明该受测者的各项生活能力正常。",
				"0":"测验结果表明，受测者在一些方面表现出明显的功能障碍，具体的表现为："
		},
		"desc3":{
			"1":"乘公共汽车",
			"2":"行走",
			"3":"做饭菜",
			"4":"做家务",
			"5":"吃药",
			"6":"吃饭",
			"7":"穿衣",
			"8":"梳头、刷牙等",
			"9":"洗衣",
			"10":"洗澡",
			"11":"购物",
			"12":"定时上厕所",
			"13":"打电话",
			"14":"处理自己的财物"
	}
}

$(function(){
	
	var data = $("#data").text();
	var json = JSON.parse(data)[0];
    var demion = json.data;
    var total = json.total;
    var abnormalNum = json.abnormal;
    var normal = json.normal;
    $("#score").text(total);
    if(parseInt(total) < 20){
    	$("#scoreCompare").text("小于");
    }else if(parseInt(total) == 20){
    	$("#scoreCompare").text("等于");
    }else{
    	$("#scoreCompare").text("大于");
    }
    
    $("#scoreProject").text(abnormalNum);
    if(parseInt(abnormalNum) < 2){
    	$("#abnormalCompare").text("小于");
    }else if(parseInt(abnormalNum) == 2){
    	$("#abnormalCompare").text("等于");
    }else{
    	$("#abnormalCompare").text("大于");
    }
    var desc = descList["desc1"][normal];
    var descStr1 = descList["desc2"][normal];
    $("#desc").html(desc);
    if(parseInt(normal) == 1){
    	$("#showTitle").hide();
    	$("#desc1").html(descStr1);
    }else{
    	var descStr2 = "";
    	  for(var i=0 ; i<demion.length; i++){
    	    	var n1 = demion[i].name;
    	    	var s1 = parseInt(demion[i].score);
    	    	var normal1 = parseInt(demion[i].isNormal);
    	    	var abnormalList = demion[i].abNormalList;
    	    	if(normal1 == 0){
    	    		var selStr = "";
    	    		for(var j=0 ; j<abnormalList.length; j++){
    	    			selStr = selStr + descList["desc3"][abnormalList[j]];
    	    			if(j != (abnormalList.length -1)){
    	    				selStr = selStr + "、";
    	    			}
    	    		}
    	    		descStr2 = descStr2 + n1+"方面得分为"+s1+"，在"+selStr+"方面表现出功能下降。";
    	    	}else{
    	    		descStr2 = descStr2 + n1+"方面得分为"+s1+"，表明受测者的表现完全正常。";
    	    		
    	    	}
    	    	if(i==0){
	    			descStr2 = descStr2 + "</br>";
	    		}
    	    }
    	 $("#desc1").html(descStr1+descStr2);
    }
    /*--------------------------------------------------------得分图--------------------------------------------------*/
    /*获取总分*/
    var score = $("#score").text();
    //日常生活能力总分
    var dataColumn_1 = [
        {
            name:'日常生活能力总分',
            y:Number(score)
        }
    ];
    renderChart1(dataColumn_1);
    /*--------------------------------------------------------项目图--------------------------------------------------*/
    /*获取总分*/
    var scoreProject = $("#scoreProject").text();
    //阳性项目数
    var dataColumn_2 = [
        {
            name:'阳性项目数',
            y:Number(scoreProject)
        }
    ];
    renderChart2(dataColumn_2);
});
function renderChart1 (data) {
    //根据得分赋值颜色
    if(data[0].y < 20){
        data[0].color = '#6DE12E';
    }else if(data[0].y >= 20){
        data[0].color = '#FA7147';
    }else{
        alert('分值异常');
    }
    //初始化图表
    $('#container_1').highcharts({
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
            categories: ['日常生活能力总分'],
            tickLength:0
        },
        yAxis: {
            min: 0,
            max:56,
            title: {
                text: null
            },
            lineWidth:1,
            tickInterval: 56,
            plotLines:[{
                color:'#CB0001',
                dashStyle:'solid',
                value:20,
                width:1,
                zIndex:5,
                label: {
                    align: 'left',
                    text: '20',
                    style:{
                        color:'#CB0001',
                        fontSize:'11'
                    },
                    x:-28,
                    y:3

                }
            }]
        },
        tooltip: {
            enabled:false
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0,
                dataLabels:{
                    enabled:true,
                    style:{
                        textOutline:'none'
                    }
                }
            }
        },
        series: [{
            data: data
        }],
        credits: {
            enabled:false
        },
        exporting: {
            enabled:false
        }
    });
}
function renderChart2 (data) {
    //根据得分赋值颜色
    if(data[0].y < 2){
        data[0].color = '#6DE12E';
    }else if(data[0].y >= 2){
        data[0].color = '#FA7147';
    }else{
        alert('分值异常');
    }
    //初始化图表
    $('#container_2').highcharts({
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
            categories: ['阳性项目数'],
            tickLength:0
        },
        yAxis: {
            min: 0,
            max:14,
            title: {
                text: null
            },
            lineWidth:1,
            tickInterval: 14,
            plotLines:[{
                color:'#CB0001',
                dashStyle:'solid',
                value:2,
                width:1,
                zIndex:5,
                label: {
                    align: 'left',
                    text: '2',
                    style:{
                        color:'#CB0001',
                        fontSize:'11'
                    },
                    x:-28,
                    y:3

                }
            }]
        },
        tooltip: {
            enabled:false
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0,
                dataLabels:{
                    enabled:true,
                    style:{
                        textOutline:'none'
                    }
                }
            }
        },
        series: [{
            data: data
        }],
        credits: {
            enabled:false
        },
        exporting: {
            enabled:false
        }
    });
}