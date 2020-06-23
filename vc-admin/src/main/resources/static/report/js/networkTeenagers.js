function renderCharts(score) {
    /*绘制总得分图形参数配置*/
//    var score = $("#score").text();
   /* var deviceWidth = document.body.clientWidth*0.9;
    $("#canvas").attr("width",""+deviceWidth+"");
    drawShape(deviceWidth,score);*/
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
	            min: 20,
	            max:100,
	            tickInterval:20,
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
	                y:Number(score),
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
}
	/*创建总得分矩形*/
	function drawShape(deviceWidth,score){
	    var xWidth = deviceWidth;
	    var canvas = document.getElementById('canvas');
	    if(canvas.getContext){
	        var ctx = canvas.getContext("2d");
	        /*绘制矩形*/
	        ctx.beginPath();
	        ctx.fillStyle="#91CF50";
	        ctx.fillRect(1,30,xWidth*0.25,40);
	        ctx.beginPath();
	        ctx.fillStyle="#FDFD01";
	        ctx.fillRect(xWidth*0.25,30,xWidth*0.25,40);
	        ctx.beginPath();
	        ctx.fillStyle="#FDBF01";
	        ctx.fillRect(xWidth*0.50,30,xWidth*0.25,40);
	        ctx.beginPath();
	        ctx.fillStyle="#BF0001";
	        ctx.fillRect(xWidth*0.75,30,xWidth*0.25,40);

	        /*绘制数值*/
	        ctx.font= 'Bold 15px Sans-Serif';
	        ctx.fillStyle="#000000";
	        ctx.fillText('20',0,15);

	        var font40 = xWidth*0.25-10;
	        ctx.fillText('40',font40,15);

	        var font60 = xWidth*0.50-10;
	        ctx.fillText('60',font60,15);

	        var font80 = xWidth*0.75-10;
	        ctx.fillText('80',font80,15);

	        var fontWidth = xWidth-25;
	        ctx.fillText('100',fontWidth,15);

	        /*绘制文本*/
	        ctx.fillStyle="#000000";
	        ctx.font= 'Bold 13px Sans-Serif';

	        ctx.fillText('正常',xWidth*0.25/2-12,55);
	        ctx.fillText('轻度',xWidth*0.50/2 + xWidth*0.125-12,55);
	        ctx.fillText('中度',xWidth*0.75/2 + xWidth*0.25-12,55);
	        ctx.fillText('重度',xWidth*0.75/2 + xWidth*0.50-12,55);


	        ctx.fillStyle="#404040";
	        ctx.font= 'Bold 15px Sans-Serif';
	        var scoreLine;
	        /*得分结果绘制*/
	        if(score>=20 && score<=40){
	            scoreLine = xWidth*0.25/2-12;
	            ctx.beginPath();
	            ctx.moveTo(scoreLine+15,80);
	            ctx.lineTo(scoreLine+15-10,95);
	            ctx.lineTo(scoreLine+15+10,95);
	            ctx.fill();

	            ctx.beginPath();
	            ctx.fillText(""+score+"",scoreLine+6,110);
	            ctx.fill();
	        }else if(score >40 && score<=60){
	            scoreLine = xWidth*0.50/2 + xWidth*0.125-12;
	            ctx.beginPath();
	            ctx.moveTo(scoreLine+15,80);
	            ctx.lineTo(scoreLine+15-10,95);
	            ctx.lineTo(scoreLine+15+10,95);
	            ctx.fill();

	            ctx.beginPath();
	            ctx.fillText(""+score+"",scoreLine+6,110);
	            ctx.fill();
	        }else if(score >60 && score<=80){
	            scoreLine = xWidth*0.75/2 + xWidth*0.25-12;
	            ctx.beginPath();
	            ctx.moveTo(scoreLine+15,80);
	            ctx.lineTo(scoreLine+15-10,95);
	            ctx.lineTo(scoreLine+15+10,95);
	            ctx.fill();

	            ctx.beginPath();
	            ctx.fillText(""+score+"",scoreLine+6,110);
	            ctx.fill();
	        }else if(score >80 && score<=100){
	            scoreLine = xWidth*0.75/2 + xWidth*0.50-12
	            ctx.beginPath();
	            ctx.moveTo(scoreLine+15,80);
	            ctx.lineTo(scoreLine+15-10,95);
	            ctx.lineTo(scoreLine+15+10,95);
	            ctx.fill();

	            ctx.beginPath();
	            ctx.fillText(""+score+"",scoreLine+6,110);
	            ctx.fill();
	        }else{
	            alert("errorScore");
	        }
	    }
	}