$(function(){
	
	var data = $("#data").text();
	var obj = JSON.parse(data);
	

	

	
	var sex = obj[0].sex;
	var lie = obj[0].result91To110.total;
	var total = obj[0].result1To90.total;
	var posiCounts = obj[0].result1To90.allPositives.length;
	var allPositives = obj[0].result1To90.allPositives;
	var dimensions = obj[0].result1To90.dimensions;

	var itemList = JSON.parse($("#itemlist").text());

	if(sex == "1"){
		itemList = itemList.female;
	} else {
		itemList = itemList.male;
	}
	
	$("#score").html(total);
	$(".positiveCount").html(posiCounts);
	var largerDims = [];
	for(i = 0; i < dimensions.length; i++){
		if(dimensions[i].score >= 2){
			largerDims.push(dimensions[i]);
		}
	}

	if(largerDims.length == 0 && posiCounts < 43 && total < 160){
		$(".allLow").show();
		$(".allLowTotalHigh").hide();
		$(".someHigh").hide();
	} else if(largerDims.length == 0 && (posiCounts >= 43 || total >= 160)){
		$(".allLow").hide();
		$(".allLowTotalHigh").show();
		$(".someHigh").hide();
		
		for(i = 0; i < dimensions.length; i++){
		console.log("ran");
			var posiReasons = [];
			for(j = 0; j < dimensions[i].posiItems.length; j ++){
				var reason = itemList[dimensions[i].posiItems[j] - 1];
				posiReasons.push(reason);
			}
			$("." + dimensions[i].name + "Desc").append(posiReasons.join("；")).append("。");
		}
		
	} else if(largerDims.length > 0){
		$(".allLow").hide();
		$(".allLowTotalHigh").hide();
		$(".someHigh").show();
		for(i = 0; i < dimensions.length; i++){
			$("." + dimensions[i].name).hide();
		}
		
		for(i = 0; i < largerDims.length; i++){
			$("." + largerDims[i].name).show();
			var posiReasons = [];
			for(j = 0; j < largerDims[i].posiItems.length; j++){
				var reason = itemList[largerDims[i].posiItems[j] - 1];
				posiReasons.push(reason);
			}
			$("." + largerDims[i].name + "Desc").append(posiReasons.join("；")).append("。");
		}
	}
	
	var lieUpperBond, lieLowerBond;
	if(sex == "1"){
		lieUpperBond = 12.1;
		lieLowerBond = 5.7;
	} else {
		lieUpperBond = 10.4;
		lieLowerBond = 4
	}
	
	if(lie > lieUpperBond){
		$(".lieHigh").show();
		$(".lieMid").hide();
		$(".lieLow").hide();
	} else if(lie >= lieLowerBond && lie <= lieUpperBond){
		$(".lieHigh").hide();
		$(".lieMid").show();
		$(".lieLow").hide();
	} else {
		$(".lieHigh").hide();
		$(".lieMid").hide();
		$(".lieLow").show();
	}
	
	function decideColor( score ){
		if(score < 2){
			return "#00CD00";
		} else if(score >= 2 && score < 3){
			return "#FFFF00";
		} else if(score >= 3 && score < 4){
			return "#FFA500";
		} else if(score >= 4){
			return "#FF0000";
		}
	}
	
	var qth,qp,rjgx,yy,jl,ddx,kb,pz,jsbx,qt;
	

	for(i = 0; i < dimensions.length; i++){

		switch(dimensions[i].name){
			case "quTiHua":
			qth = {};
			qth.score = Math.round(dimensions[i].score * 100) / 100;
			qth.posi = dimensions[i].posiItems;
			qth.color = decideColor(qth.score);
			break;
			case "qiangPoZhengZhuang":
			qp = {};
			qp.score = Math.round(dimensions[i].score * 100) / 100;
			qp.posi = dimensions[i].posiItems;
			qp.color = decideColor(qp.score);
			break;
			case "renJiGuanXi":
			rjgx = {};
			rjgx.score = Math.round(dimensions[i].score * 100) / 100;
			rjgx.posi = dimensions[i].posiItems;
			rjgx.color = decideColor(rjgx.score);
			break;
			case "yiYu":
			yy = {};
			yy.score = Math.round(dimensions[i].score * 100) / 100;
			yy.posi = dimensions[i].posiItems;
			yy.color = decideColor(yy.score);
			break;
			case "jiaoLv":
			jl = {};
			jl.score = Math.round(dimensions[i].score * 100) / 100;
			jl.posi = dimensions[i].posiItems;
			jl.color = decideColor(jl.score);
			break;
			case "diDui":
			ddx = {};
			ddx.score = Math.round(dimensions[i].score * 100) / 100;
			ddx.posi = dimensions[i].posiItems;
			ddx.color = decideColor(ddx.score);
			break;
			case "kongBu":
			kb = {};
			kb.score = Math.round(dimensions[i].score * 100) / 100;
			kb.posi = dimensions[i].posiItems;
			kb.color = decideColor(kb.score);
			break;
			case "pianZhi":
			pz = {};
			pz.score = Math.round(dimensions[i].score * 100) / 100;
			pz.posi = dimensions[i].posiItems;
			pz.color = decideColor(pz.score);
			break;
			case "jingShenBing":
			jsbx = {};
			jsbx.score = Math.round(dimensions[i].score * 100) / 100;
			jsbx.posi = dimensions[i].posiItems;
			jsbx.color = decideColor(jsbx.score);
			break;
			case "others":
			qt = {};
			qt.score = Math.round(dimensions[i].score * 100) / 100;
			qt.posi = dimensions[i].posiItems;
			qt.color = decideColor(qt.score);
			break;
			default:
			break;
		}
	}
	
	
    $('#containerStudent').highcharts({
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
                '躯体化',
                '强迫',
                '人际关系',
                '抑郁',
                '焦虑',
                '敌对性',
                '恐怖',
                '偏执',
                '精神病性',
                '其他'
            ],
            tickLength:0
        },
        yAxis: {
            min: 0,
            title: {
                text: null
            },
            tickInterval: 1
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
                    rotation:90,
                    y:-15
                }
            }
        },
        series: [{
            data: [{
                name:"躯体化",
                y:qth.score,
                color:qth.color
            },{
                name:"强迫",
                y:qp.score,
                color:qp.color
            },{
                name:"人际关系",
                y:rjgx.score,
                color:rjgx.color
            },{
                name:"抑郁",
                y:yy.score,
                color:yy.color
            },{
                name:"焦虑",
                y:jl.score,
                color:jl.color
            },{
                name:"敌对性",
                y:ddx.score,
                color:ddx.color
            },{
                name:"恐怖",
                y:kb.score,
                color:kb.color
            },{
                name:"偏执",
                y:pz.score,
                color:pz.color
            },{
                name:"精神病性",
                y:jsbx.score,
                color:jsbx.color
            },{
                name:"其他",
                y:qt.score,
                color:qt.color
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
    /*获取总分*/
    var score = $("#score").text();
    /*获取设备屏幕宽度*/
    var deviceWidth = document.body.clientWidth*0.9;
    /*将设备屏幕宽度赋值给画布*/
    $("#canvas").attr("width",""+deviceWidth+"");
    /*绘制图形*/
    drawShape(deviceWidth,score);
});
function drawShape(deviceWidth,score){
    var xWidth = deviceWidth-2;
    var canvas = document.getElementById('canvas');
    if(canvas.getContext){
        var ctx = canvas.getContext("2d");
        /*绘制线性渐变效果*/
        var lingrad = ctx.createLinearGradient(1,0,xWidth,30);
        lingrad.addColorStop(0, 'rgb(99,189,89)');
        lingrad.addColorStop(0.5, 'rgb(196,171,92)');
        lingrad.addColorStop(0.8, 'rgb(254,104,97)');
        ctx.fillStyle = lingrad;
        /*绘制矩形轮廓*/
        ctx.strokeRect(1,20,xWidth,30);
        /*绘制矩形*/
        ctx.fillRect(1,20,xWidth,30);
        /*绘制数值*/
        ctx.font= 'Bold 20px Sans-Serif';
        ctx.fillText('90',0,15);
        var font160 = xWidth/450*160-15;
        ctx.fillText('160',font160,15);
        var fontWidth = xWidth-36;
        ctx.fillText('450',fontWidth,15);
        /*绘制160分割线*/
        var line = xWidth/450*160;
        ctx.beginPath();
        ctx.moveTo(line,20);
        ctx.lineTo(line,50);
        ctx.stroke();
        /*绘制文本良好*/
        var lhLocation = line/2;
        ctx.fillStyle="#000000";
        ctx.font= 'Bold 15px Sans-Serif';
        ctx.fillText('良好',lhLocation,41);
        /*绘制文本欠佳*/
        var qjLocation = xWidth/1.8;
        ctx.fillText('欠佳',qjLocation,41);
        /*绘制总分数线条*/
        if(score==90){
            var scoreLine = xWidth/450*score;
            scoreLine = scoreLine-scoreLine
        }else{
            var scoreLine = xWidth/450*score;
        }
        /*得分结果绘制*/
        if(score==90){
            /*score==90 线条绘制*/
            ctx.beginPath();
            ctx.moveTo(scoreLine,50);
            ctx.lineTo(scoreLine+15,70);
            ctx.stroke();
            /*得分score==90 三角形绘制*/
            ctx.beginPath();
            ctx.fillStyle="#000000";
            ctx.moveTo(scoreLine+15,75);
            ctx.lineTo(scoreLine+15-5,70);
            ctx.lineTo(scoreLine+15+5,70);
            ctx.fill();
            ctx.closePath();
            /*得分score==90 分数绘制*/
            ctx.beginPath();
            ctx.fillStyle="#000000";
            ctx.font= 'Bold 15px Sans-Serif';
            ctx.fillText(""+score+"",scoreLine+24-14,90);
            ctx.fill();
            ctx.closePath();
            /*得分 score==90“分字绘制”*/
            ctx.beginPath();
            ctx.fillStyle="#000000";
            ctx.font= 'Bold 15px Sans-Serif';
            ctx.fillText("分",scoreLine+43-14,90);
            ctx.fill();
            ctx.closePath();
        }else if(score>90 && score<410){
            /*正常绘制分数线条*/
            ctx.beginPath();
            ctx.moveTo(scoreLine,50);
            ctx.lineTo(scoreLine,70);
            ctx.stroke();
            /*绘制三角形*/
            ctx.beginPath();
            ctx.moveTo(scoreLine,75);
            ctx.lineTo(scoreLine-5,70);
            ctx.lineTo(scoreLine+5,70);
            ctx.closePath();
            ctx.fill();
            /*score>90 && score<440 分数绘制*/
            ctx.beginPath();
            ctx.fillStyle="#000000";
            ctx.font= 'Bold 15px Sans-Serif';
            ctx.fillText(""+score+"",scoreLine-14,90);
            ctx.fill();
            ctx.closePath();
            /*score>90 && score<440 “分字绘制”*/
            ctx.beginPath();
            ctx.fillStyle="#000000";
            ctx.font= 'Bold 15px Sans-Serif';
            ctx.fillText("分",scoreLine+10,90);
            ctx.fill();
            ctx.closePath();
        }else if(score>=410 && score <=450){
            /*score>=440 && score <=450 线条绘制*/
            ctx.beginPath();
            ctx.moveTo(scoreLine,50);
            ctx.lineTo(scoreLine-15,70);
            ctx.stroke();
            /*score>=440 && score <=450 三角形绘制*/
            ctx.beginPath();
            ctx.fillStyle="#000000";
            ctx.moveTo(scoreLine-15,75);
            ctx.lineTo(scoreLine-15-5,70);
            ctx.lineTo(scoreLine-15+5,70);
            ctx.fill();
            ctx.closePath();
            /*score>=440 && score <=450 分数绘制*/
            ctx.beginPath();
            ctx.fillStyle="#000000";
            ctx.font= 'Bold 15px Sans-Serif';
            ctx.fillText(""+score+"",scoreLine-43,90);
            ctx.fill();
            ctx.closePath();
            /*score>=440 && score <=450“分字绘制”*/
            ctx.beginPath();
            ctx.fillStyle="#000000";
            ctx.font= 'Bold 15px Sans-Serif';
            ctx.fillText("分",scoreLine-14,90);
            ctx.fill();
            ctx.closePath();
        }else{
            alert("errorScore");
        }
    }
}