function renderCharts(depressedscore,BIDRscore,sex){
    /*柱形图*/
    $('#HhRiskTest').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: null
        },
        xAxis: {
            categories: [' '],
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
            enabled: false
        },
        legend: {
            enabled: false
        },
        credits: {
            enabled:false
        },
        exporting: {
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
            data: [{
                name: '抑郁',
                color:'rgb(85,137,200)',
                y: depressedscore
            }]
        }]
    });
    /*获取设备屏幕宽度*/
    var deviceWidth = document.body.clientWidth*0.9;
    /*将设备屏幕宽度赋值给画布*/
    $("#canvas").attr("width",""+deviceWidth+"");
    if (sex == 0){
        /*绘制测谎结果男性图 根据性别调用不同绘图方法*/
        drawShapeMen(deviceWidth,BIDRscore);
    }else {
        /*绘制测谎结果女性图 根据性别调用不同绘图方法*/
        drawShapeWomen(deviceWidth,BIDRscore);
    }
}
/*绘制测谎结果女性图*/
function drawShapeWomen(deviceWidth,score){
    var xWidth = deviceWidth-2;
    var canvas = document.getElementById('canvas');
    if(canvas.getContext){
        var ctx = canvas.getContext("2d");

        /*绘制低分线性渐变*/
        var lowScore = ctx.createLinearGradient(1,0,0,40);
        lowScore.addColorStop(0, '#FDFCFD');
        lowScore.addColorStop(1, '#cFc3dB');
        /*绘制中分线性渐变*/
        var middleScore = ctx.createLinearGradient(1,0,0,40);
        middleScore.addColorStop(0, '#FEFCFC');
        middleScore.addColorStop(1, '#E5B6B5');
        /*绘制中分线性渐变*/
        var highScore = ctx.createLinearGradient(1,0,0,40);
        highScore.addColorStop(0, '#D48A89');
        highScore.addColorStop(0.5, '#C0524F');
        highScore.addColorStop(1, '#D89493');

        /*绘制低分矩形轮廓*/
        ctx.lineWidth=3;
        ctx.strokeStyle = "#C5B8D5"
        ctx.strokeRect(1,30,xWidth*0.285,40);
        /*绘制中分矩形轮廓*/
        ctx.strokeStyle = "#E2AFAE"
        ctx.strokeRect(xWidth*0.285,30,xWidth*0.605,40);
        /*绘制高分矩形轮廓*/
        ctx.strokeStyle = "#C45A58"
        ctx.strokeRect(xWidth*0.605,30,xWidth,40);

        /*绘制低分矩形*/
        ctx.fillStyle = lowScore;
        ctx.fillRect(1,30,xWidth*0.285,40);
        /*绘制中分矩形*/
        ctx.fillStyle = middleScore;
        ctx.fillRect(xWidth*0.285,30,xWidth*0.605,40);
        /*绘制高分矩形*/
        ctx.fillStyle = highScore;
        ctx.fillRect(xWidth*0.605,30,xWidth,40);


        /*绘制数值*/
        ctx.font= 'Bold 15px Sans-Serif';
        ctx.fillStyle="#000000";
        ctx.fillText('0',2,15);
        var font57 = xWidth*0.285-5;
        ctx.fillText('5.7',font57,15);
        var font121 = xWidth*0.605-20;
        ctx.fillText('12.1',font121,15);
        var font20 = xWidth-15;
        ctx.fillText('20',font20,15);

        /*绘制5.7分割线*/
        ctx.lineWidth=2;
        ctx.strokeStyle = "#E2AFAE"
        var line57 = xWidth*0.285;
        ctx.beginPath();
        ctx.moveTo(line57,30);
        ctx.lineTo(line57,70);
        ctx.stroke();
        /*绘制12.1分割线*/
        ctx.lineWidth=2;
        ctx.strokeStyle = "#C45A58"
        var line121 = xWidth*0.605;
        ctx.beginPath();
        ctx.moveTo(line121,30);
        ctx.lineTo(line121,70);
        ctx.stroke();

        /*绘制低分文本*/
        ctx.fillStyle="#000000";
        ctx.font= 'Bold 15px Sans-Serif';
        var lowText = line57/2-15;
        ctx.fillText('低分',lowText,50);
        /*绘制中分文本*/
        var middleText = xWidth*0.45-15;
        ctx.fillText('中分',middleText,50);
        /*绘制高分文本*/
        var highText = xWidth*0.8-15;
        ctx.fillText('高分',highText,50);

        /*绘制总分数线条*/
        var scoreLine = xWidth * (score/20);
        if(score==0){
            /*得分==0线条绘制*/
            ctx.beginPath();
            ctx.moveTo(scoreLine,70);
            ctx.lineTo(scoreLine+15,90);
            ctx.stroke();
            /*得分==0三角形绘制*/
            ctx.beginPath();
            ctx.fillStyle="#000000";
            ctx.moveTo(scoreLine+15,95);
            ctx.lineTo(scoreLine+15-5,90);
            ctx.lineTo(scoreLine+15+5,90);
            ctx.fill();
            ctx.closePath();
            /*得分==0分数绘制*/
            ctx.beginPath();
            ctx.fillStyle="#000000";
            ctx.font= 'Bold 15px Sans-Serif';
            ctx.fillText(""+score+"",scoreLine+12,110);
            ctx.fill();
            ctx.closePath();
        }else if(score>=1 && score<10){
            /*正常绘制分数线条*/
            ctx.beginPath();
            ctx.moveTo(scoreLine,75);
            ctx.lineTo(scoreLine,95);
            ctx.stroke();
            /*绘制三角形*/
            ctx.beginPath();
            ctx.moveTo(scoreLine,70);
            ctx.lineTo(scoreLine-5,75);
            ctx.lineTo(scoreLine+5,75);
            ctx.closePath();
            ctx.fill();
            /*score>=1 && score<10 分数绘制*/
            ctx.beginPath();
            ctx.fillStyle="#000000";
            ctx.font= 'Bold 15px Sans-Serif';
            ctx.fillText(""+score+"",scoreLine-5,110);
            ctx.fill();
            ctx.closePath();
        }else if(score>=10 && score<20){
            /*正常绘制分数线条*/
            ctx.beginPath();
            ctx.moveTo(scoreLine,75);
            ctx.lineTo(scoreLine,95);
            ctx.stroke();
            /*绘制三角形*/
            ctx.beginPath();
            ctx.moveTo(scoreLine,70);
            ctx.lineTo(scoreLine-5,75);
            ctx.lineTo(scoreLine+5,75);
            ctx.closePath();
            ctx.fill();
            /*score>=10 && score<20 分数绘制*/
            ctx.beginPath();
            ctx.fillStyle="#000000";
            ctx.font= 'Bold 15px Sans-Serif';
            ctx.fillText(""+score+"",scoreLine-8,110);
            ctx.fill();
            ctx.closePath();
        }else if(score==20){
            /*score==20 线条绘制*/
            ctx.beginPath();
            ctx.moveTo(scoreLine,70);
            ctx.lineTo(scoreLine-15,90);
            ctx.stroke();
            /*score==20 三角形绘制*/
            ctx.beginPath();
            ctx.fillStyle="#000000";
            ctx.moveTo(scoreLine-15,95);
            ctx.lineTo(scoreLine-15-5,90);
            ctx.lineTo(scoreLine-15+5,90);
            ctx.fill();
            ctx.closePath();
            /*score==20 分数绘制*/
            ctx.beginPath();
            ctx.fillStyle="#f000000";
            ctx.font= 'Bold 15px Sans-Serif';
            ctx.fillText(""+score+"",scoreLine-24,110);
            ctx.fill();
            ctx.closePath();
        }else{
            alert("errorScore");
        }
    }
}
/*绘制测谎结果男性图*/
function drawShapeMen(deviceWidth,score){
    var xWidth = deviceWidth-2;
    var canvas = document.getElementById('canvas');
    if(canvas.getContext){
        var ctx = canvas.getContext("2d");

        /*绘制低分线性渐变*/
        var lowScore = ctx.createLinearGradient(1,0,0,40);
        lowScore.addColorStop(0, '#FDFCFD');
        lowScore.addColorStop(1, '#cFc3dB');
        /*绘制中分线性渐变*/
        var middleScore = ctx.createLinearGradient(1,0,0,40);
        middleScore.addColorStop(0, '#FEFCFC');
        middleScore.addColorStop(1, '#E5B6B5');
        /*绘制中分线性渐变*/
        var highScore = ctx.createLinearGradient(1,0,0,40);
        highScore.addColorStop(0, '#D48A89');
        highScore.addColorStop(0.5, '#C0524F');
        highScore.addColorStop(1, '#D89493');

        /*绘制低分矩形轮廓*/
        ctx.lineWidth=3;
        ctx.strokeStyle = "#C5B8D5"
        ctx.strokeRect(1,30,xWidth*0.2,40);
        /*绘制中分矩形轮廓*/
        ctx.strokeStyle = "#E2AFAE"
        ctx.strokeRect(xWidth*0.2,30,xWidth*0.52,40);
        /*绘制高分矩形轮廓*/
        ctx.strokeStyle = "#C45A58"
        ctx.strokeRect(xWidth*0.52,30,xWidth,40);

        /*绘制低分矩形*/
        ctx.fillStyle = lowScore;
        ctx.fillRect(1,30,xWidth*0.2,40);
        /*绘制中分矩形*/
        ctx.fillStyle = middleScore;
        ctx.fillRect(xWidth*0.2,30,xWidth*0.52,40);
        /*绘制高分矩形*/
        ctx.fillStyle = highScore;
        ctx.fillRect(xWidth*0.52,30,xWidth,40);


        /*绘制数值*/
        ctx.font= 'Bold 15px Sans-Serif';
        ctx.fillStyle="#000000";
        ctx.fillText('0',2,15);
        var font4 = xWidth*0.2-5;
        ctx.fillText('4',font4,15);
        var font104 = xWidth*0.52-20;
        ctx.fillText('10.4',font104,15);
        var font20 = xWidth-15;
        ctx.fillText('20',font20,15);

        /*绘制4分割线*/
        ctx.lineWidth=2;
        ctx.strokeStyle = "#E2AFAE"
        var line4 = xWidth*0.2;
        ctx.beginPath();
        ctx.moveTo(line4,30);
        ctx.lineTo(line4,70);
        ctx.stroke();
        /*绘制10.4分割线*/
        ctx.lineWidth=2;
        ctx.strokeStyle = "#C45A58"
        var line104 = xWidth*0.52;
        ctx.beginPath();
        ctx.moveTo(line104,30);
        ctx.lineTo(line104,70);
        ctx.stroke();

        /*绘制低分文本*/
        ctx.fillStyle="#000000";
        ctx.font= 'Bold 15px Sans-Serif';
        var lowText = line4/2-15;
        ctx.fillText('低分',lowText,50);
        /*绘制中分文本*/
        var middleText = line104/2+15;
        ctx.fillText('中分',middleText,50);
        /*绘制高分文本*/
        var highText = xWidth*0.75-15;
        ctx.fillText('高分',highText,50);

        /*绘制总分数线条*/
        var scoreLine = xWidth * (score/20);
        if(score==0){
            /*得分==0线条绘制*/
            ctx.beginPath();
            ctx.moveTo(scoreLine,70);
            ctx.lineTo(scoreLine+15,90);
            ctx.stroke();
            /*得分==0三角形绘制*/
            ctx.beginPath();
            ctx.fillStyle="#000000";
            ctx.moveTo(scoreLine+15,95);
            ctx.lineTo(scoreLine+15-5,90);
            ctx.lineTo(scoreLine+15+5,90);
            ctx.fill();
            ctx.closePath();
            /*得分==0分数绘制*/
            ctx.beginPath();
            ctx.fillStyle="#000000";
            ctx.font= 'Bold 15px Sans-Serif';
            ctx.fillText(""+score+"",scoreLine+12,110);
            ctx.fill();
            ctx.closePath();
        }else if(score>=1 && score<10){
            /*正常绘制分数线条*/
            ctx.beginPath();
            ctx.moveTo(scoreLine,75);
            ctx.lineTo(scoreLine,95);
            ctx.stroke();
            /*绘制三角形*/
            ctx.beginPath();
            ctx.moveTo(scoreLine,70);
            ctx.lineTo(scoreLine-5,75);
            ctx.lineTo(scoreLine+5,75);
            ctx.closePath();
            ctx.fill();
            /*score>=1 && score<10 分数绘制*/
            ctx.beginPath();
            ctx.fillStyle="#000000";
            ctx.font= 'Bold 15px Sans-Serif';
            ctx.fillText(""+score+"",scoreLine-5,110);
            ctx.fill();
            ctx.closePath();
        }else if(score>=10 && score<20){
            /*正常绘制分数线条*/
            ctx.beginPath();
            ctx.moveTo(scoreLine,75);
            ctx.lineTo(scoreLine,95);
            ctx.stroke();
            /*绘制三角形*/
            ctx.beginPath();
            ctx.moveTo(scoreLine,70);
            ctx.lineTo(scoreLine-5,75);
            ctx.lineTo(scoreLine+5,75);
            ctx.closePath();
            ctx.fill();
            /*score>=10 && score<20 分数绘制*/
            ctx.beginPath();
            ctx.fillStyle="#000000";
            ctx.font= 'Bold 15px Sans-Serif';
            ctx.fillText(""+score+"",scoreLine-8,110);
            ctx.fill();
            ctx.closePath();
        }else if(score==20){
            /*score==20 线条绘制*/
            ctx.beginPath();
            ctx.moveTo(scoreLine,70);
            ctx.lineTo(scoreLine-15,90);
            ctx.stroke();
            /*score==20 三角形绘制*/
            ctx.beginPath();
            ctx.fillStyle="#000000";
            ctx.moveTo(scoreLine-15,95);
            ctx.lineTo(scoreLine-15-5,90);
            ctx.lineTo(scoreLine-15+5,90);
            ctx.fill();
            ctx.closePath();
            /*score==20 分数绘制*/
            ctx.beginPath();
            ctx.fillStyle="#f000000";
            ctx.font= 'Bold 15px Sans-Serif';
            ctx.fillText(""+score+"",scoreLine-24,110);
            ctx.fill();
            ctx.closePath();
        }else{
            alert("errorScore");
        }
    }
}