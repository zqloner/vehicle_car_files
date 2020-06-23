$(function(){
	var jsonVal = document.getElementById("data").innerHTML;
	var myobj=eval('(' + jsonVal + ')');
	var objArr = myobj[0].data;
	var str='[';
	var namestr='[';
	var totalScore = objArr[9].dimensionGetScore;
	document.getElementById("score").innerHTML=totalScore;
	for(i=8;i>=0;i--){
		var name = objArr[i].dimensionName;
		namestr+="'"+name+"',";
		if(name!='总数'){
			var score = objArr[i].dimensionGetScore;
		}
		if(name=='测谎题'){
			if(score>=7){
				document.getElementById("testResult").innerHTML='你在答题过程中可能存在不理解题意、不认真作答或故意隐瞒等情况，因此以下测验结果可能存在一定偏差，仅供参考。';
				document.getElementById("testResult1").innerHTML='你在答题过程中可能存在不理解题意、不认真作答或故意隐瞒等情况，因此以下测验结果可能存在一定偏差，仅供参考。';
			}
		}
		str +='{  name:"'+name+'", y:'+score+',';
		
		if(parseInt(score)>=8){
			str+=' color:"rgb(255,255,0)"},';
		}else {
			str+=' color:"rgb(156,189,89)"},';
		}
	}
	if(totalScore<65){
		if(objArr[0].dimensionLevel==1&&objArr[1].dimensionLevel==1&&objArr[2].dimensionLevel==1&&objArr[3].dimensionLevel==1&&objArr[4].dimensionLevel==1&&objArr[5].dimensionLevel==1&&objArr[6].dimensionLevel==1&&objArr[7].dimensionLevel==1&&objArr[8].dimensionLevel==1){
			document.getElementById("testResult").innerHTML='测验结果表明，你的各项得分都在正常范围内，表明近来你的心理健康状况良好，请继续保持！';
			document.getElementById("testResult1").innerHTML='测验结果表明，你的各项得分都在正常范围内，表明近来你的心理健康状况良好，请继续保持！';
			document.getElementById("title1").style.display ="";
			document.getElementById("title2").style.display ="";
			document.getElementById("title3").style.display ="";
			document.getElementById("title4").style.display ="";
			document.getElementById("title5").style.display ="";
			document.getElementById("title6").style.display ="";
			document.getElementById("title7").style.display ="";
			document.getElementById("title8").style.display ="";
		}else{
			document.getElementById("testResult").innerHTML=' 测验结果表明，近来你的心理健康状况良好，但是在某些方面可能存在轻度的困扰，但这些表现并不严重，不会对你的生活构成困扰，无需过于担心。';
			document.getElementById("testResult1").innerHTML=' 测验结果表明，近来你的心理健康状况良好，但是在某些方面可能存在轻度的困扰，但这些表现并不严重，不会对你的生活构成困扰，无需过于担心。';
			for(z=0;z<objArr.length-1;z++){
				var level = objArr[z].dimensionLevel;
				var name = objArr[z].dimensionName;
				if(level==2){
					if(name=="学习焦虑"){
						document.getElementById("title11").style.display ="";
					}else if(name=="交往焦虑"){
						document.getElementById("title12").style.display ="";
					}else if(name=="孤独倾向"){
						document.getElementById("title13").style.display ="";
					}else if(name=="自责倾向"){
						document.getElementById("title14").style.display ="";
					}else if(name=="敏感倾向"){
						document.getElementById("title15").style.display ="";
					}else if(name=="身体症状"){
						document.getElementById("title16").style.display ="";
					}else if(name=="恐怖倾向"){
						document.getElementById("title17").style.display ="";
					}else if(name=="冲动倾向"){
						document.getElementById("title18").style.display ="";
					}
				}
			}
		}
		

		
	}

	if(totalScore>=65){
		document.getElementById("testResult").innerHTML=' 测验结果表明，近来你的心理健康状况欠佳，在日常生活中可能有不适应行为';
		document.getElementById("testResult1").innerHTML=' 测验结果表明，近来你的心理健康状况欠佳，在日常生活中可能有不适应行为';
		for(i=8;i>=0;i--){
			var level = objArr[i].dimensionLevel;
				var name = objArr[i].dimensionName;
				if(level==2){
					if(name=="学习焦虑"){
						document.getElementById("title11").style.display ="";
					}else if(name=="交往焦虑"){
						document.getElementById("title12").style.display ="";
					}else if(name=="孤独倾向"){
						document.getElementById("title13").style.display ="";
					}else if(name=="自责倾向"){
						document.getElementById("title14").style.display ="";
					}else if(name=="敏感倾向"){
						document.getElementById("title15").style.display ="";
					}else if(name=="身体症状"){
						document.getElementById("title16").style.display ="";
					}else if(name=="恐怖倾向"){
						document.getElementById("title17").style.display ="";
					}else if(name=="冲动倾向"){
						document.getElementById("title18").style.display ="";
					}
				}
		}
	}
	str=str.substring(0,(str.length-1));
	namestr=namestr.substring(0,(namestr.length-1));
	str+=']'
	namestr+=']'
	var myobj1=eval('(' + str + ')');
	var myobj2=eval('(' + namestr + ')');


    $('#containerStudentHealth').highcharts({
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
            categories:myobj2,
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
                    enabled:true
                }
            }
        },
        series: [{
            /*
            * 后台需要判断后传值：
            * 维度得分大于等于8分为高分，用黄色标示 color:"rgb(255,255,0)",小于8分用绿色表示 color:"rgb(156,189,89)"
            * 横坐标为维度，按照维度得分从“高到低”排列。
            * */
            data: myobj1
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
    $('#container').highcharts({
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
            enabled:false,
            categories: [' '],
            tickLength:0
        },
        yAxis: {
            min: 0,
            max:150,
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
            enabled:false
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
                y:Number(totalScore),
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
    // /*获取总分*/
    // var score = $("#score").text();
    // /*获取设备屏幕宽度*/
    // var deviceWidth = document.body.clientWidth*0.9;
    // /*将设备屏幕宽度赋值给画布*/
    // $("#canvas").attr("width",""+deviceWidth+"");
    // /*绘制图形*/
    // drawShape(deviceWidth,score);
});
/*创建渐变矩形*/
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
        ctx.fillStyle="#000000";
        var font65 = xWidth*0.43-9;
        ctx.fillText('65',font65,15);
        /*绘制65分割线*/
        var line = xWidth*0.433;
        ctx.beginPath();
        ctx.moveTo(line,20);
        ctx.lineTo(line,50);
        ctx.stroke();
        /*绘制文本良好*/
        var lhLocation = line/3;
        ctx.fillStyle="#000000";
        ctx.font= 'Bold 15px Sans-Serif';
        ctx.fillText('良好',lhLocation,41);
        /*绘制文本欠佳*/
        var qjLocation = xWidth/1.35;
        ctx.fillText('欠佳',qjLocation,41);
        /*绘制总分数线条*/
        var scoreLine = xWidth * (score/150);
        if(score>=0 && score<10){
            /*得分<=10线条绘制*/
            ctx.beginPath();
            ctx.moveTo(scoreLine,50);
            ctx.lineTo(scoreLine+15,70);
            ctx.stroke();
            /*得分<=10三角形绘制*/
            ctx.beginPath();
            ctx.fillStyle="#000000";
            ctx.moveTo(scoreLine+15,75);
            ctx.lineTo(scoreLine+15-5,70);
            ctx.lineTo(scoreLine+15+5,70);
            ctx.fill();
            ctx.closePath();
            /*得分<=10分数绘制*/
            ctx.beginPath();
            ctx.fillStyle="#000000";
            ctx.font= 'Bold 15px Sans-Serif';
            ctx.fillText(""+score+"",scoreLine+24-14,90);
            ctx.fill();
            ctx.closePath();
            /*得分<=10“分字绘制”*/
            ctx.beginPath();
            ctx.fillStyle="#000000";
            ctx.font= 'Bold 15px Sans-Serif';
            ctx.fillText("分",scoreLine+33-14,90);
            ctx.fill();
            ctx.closePath();
        }else if(score>=10 && score<139){
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
            /*score>10 && score<139 分数绘制*/
            ctx.beginPath();
            ctx.fillStyle="#000000";
            ctx.font= 'Bold 15px Sans-Serif';
            ctx.fillText(""+score+"",scoreLine-14,90);
            ctx.fill();
            ctx.closePath();
            /*score>10 && score<139 “分字绘制”*/
            ctx.beginPath();
            ctx.fillStyle="#000000";
            ctx.font= 'Bold 15px Sans-Serif';
            if(score>=10 && score<100){
                ctx.fillText("分",scoreLine+16-14,90);
            }else{
                ctx.fillText("分",scoreLine+25-14,90);
            }
            ctx.fill();
            ctx.closePath();
        }else if(score>=139 && score <=150){
            /*score>=139 && score <=150 线条绘制*/
            ctx.beginPath();
            ctx.moveTo(scoreLine,50);
            ctx.lineTo(scoreLine-15,70);
            ctx.stroke();
            /*score>=139 && score <=150 三角形绘制*/
            ctx.beginPath();
            ctx.fillStyle="#000000";
            ctx.moveTo(scoreLine-15,75);
            ctx.lineTo(scoreLine-15-5,70);
            ctx.lineTo(scoreLine-15+5,70);
            ctx.fill();
            ctx.closePath();
            /*score>=139 && score <=150 分数绘制*/
            ctx.beginPath();
            ctx.fillStyle="#000000";
            ctx.font= 'Bold 15px Sans-Serif';
            ctx.fillText(""+score+"",scoreLine-24-14,90);
            ctx.fill();
            ctx.closePath();
            /*score>=139 && score <=150“分字绘制”*/
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