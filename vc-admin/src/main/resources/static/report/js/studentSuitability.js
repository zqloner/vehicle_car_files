function displayScore(score) {
	$('#container').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: null
        },
        xAxis: {
            categories: ['适应能力得分'],
            gridLineWidth:0,
            tickLength:10
        },
        yAxis: {
            min: 0,
            max: 150,
            title: {
                text: null
            },
            plotLines:[{
                color:'#CB0001',
                dashStyle:'solid',
                value:60,
                width:1,
                zIndex:5
            }],
            lineWidth: 1,
            tickWidth:1,
            tickInterval: 30
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
        // 得分>=60 #4BDA63
        // 得分<60 #FFCC33
        series: [{
            data: [{
                y:score,
                color:"#4BDA63"
            }]
        }],
        legend: {
            enabled: false
        },
        tooltip: {
            enabled:false
        },
        credits: {
            enabled:false
        },
        exporting: {
            enabled:false
        }
    });
}

/*function displayScore(score) {
    获取设备屏幕宽度
    var deviceWidth = document.body.clientWidth*0.9;
    将设备屏幕宽度赋值给画布
    $("#canvas").attr("width",""+deviceWidth+"");
    绘制图形
    drawShape(deviceWidth,score);
}*/

/*创建渐变矩形*/
function drawShape(deviceWidth,score){
    var xWidth = deviceWidth-2;
    var canvas = document.getElementById('canvas');
    if(canvas.getContext){
        var ctx = canvas.getContext("2d");
        /*绘制线性渐变效果*/
        var lingrad = ctx.createLinearGradient(1,0,xWidth,30);
        lingrad.addColorStop(0, 'rgb(99,189,89)');
        lingrad.addColorStop(0.6, 'rgb(196,171,92)');
        lingrad.addColorStop(0.9, 'rgb(254,104,97)');
        ctx.fillStyle = lingrad;
        /*绘制矩形轮廓*/
        ctx.strokeRect(1,20,xWidth,30);
        /*绘制矩形*/
        ctx.fillRect(1,20,xWidth,30);
        /*绘制数值---60、150*/
        ctx.font= 'Bold 20px Sans-Serif';
        var font60 = xWidth*0.4-10;
        ctx.fillText('60',font60,15);
        var font150 = xWidth-32;
        ctx.fillText('150',font150,15);
        /*绘制60分割线*/
        var line = xWidth*0.4;
        ctx.beginPath();
        ctx.moveTo(line,20);
        ctx.lineTo(line,50);
        ctx.stroke();
        /*绘制文本---差*/
        var lhLocation = line/2;
        ctx.fillStyle="#000000";
        ctx.font= 'Bold 15px Sans-Serif';
        ctx.fillText('差',lhLocation,41);
        /*绘制文本---强*/
        var qjLocation = xWidth/1.3;
        ctx.fillText('强',qjLocation,41);
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
            ctx.fillStyle="#ff0000";
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
        }else if(score>=10 && score<=140){
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
            /*score>10 && score<=140 分数绘制*/
            ctx.beginPath();
            ctx.fillStyle="#ff0000";
            ctx.font= 'Bold 15px Sans-Serif';
            ctx.fillText(""+score+"",scoreLine-14,90);
            ctx.fill();
            ctx.closePath();
            /*score>10 && score<=140 “分字绘制”*/
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
        }else if(score>140 && score <=150){
            /*score>140 && score <=150 线条绘制*/
            ctx.beginPath();
            ctx.moveTo(scoreLine,50);
            ctx.lineTo(scoreLine-15,70);
            ctx.stroke();
            /*score>140 && score <=150 三角形绘制*/
            ctx.beginPath();
            ctx.fillStyle="#000000";
            ctx.moveTo(scoreLine-15,75);
            ctx.lineTo(scoreLine-15-5,70);
            ctx.lineTo(scoreLine-15+5,70);
            ctx.fill();
            ctx.closePath();
            /*score>140 && score <=150 分数绘制*/
            ctx.beginPath();
            ctx.fillStyle="#ff0000";
            ctx.font= 'Bold 15px Sans-Serif';
            ctx.fillText(""+score+"",scoreLine-24-14,90);
            ctx.fill();
            ctx.closePath();
            /*score>140 && score <=150“分字绘制”*/
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