$(function(){
    /*获取总分*/
    var score = $("#score").text();
    //记忆障碍自评得分
    var dataColumn_1 = [
        {
            name:'记忆障碍自评得分',
            y:Number(score)
        }
    ];
    renderChart(dataColumn_1);
});
function renderChart (data) {
    //根据得分赋值颜色
    if(data[0].y < 2){
        data[0].color = '#6DE12E';
    }else if(data[0].y >= 2){
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
            categories: ['记忆障碍自评得分'],
            tickLength:0
        },
        yAxis: {
            min: 0,
            max:8,
            title: {
                text: null
            },
            tickInterval: 8,
            lineWidth:1,
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
/*创建渐变矩形
function drawShape(deviceWidth,score){
    var xWidth = deviceWidth-2;
    var canvas = document.getElementById('canvas');
    if(canvas.getContext){
        var ctx = canvas.getContext("2d");
        绘制线性渐变效果
        var lingrad = ctx.createLinearGradient(1,0,xWidth,30);
        lingrad.addColorStop(0, 'rgb(99,189,89)');
        lingrad.addColorStop(0.5, 'rgb(196,171,92)');
        lingrad.addColorStop(0.8, 'rgb(254,104,97)');
        ctx.fillStyle = lingrad;
        绘制矩形轮廓
        ctx.strokeRect(1,20,xWidth,30);
        绘制矩形
        ctx.fillRect(1,20,xWidth,30);
        绘制数值
        ctx.font= 'Bold 20px Sans-Serif';
        ctx.fillStyle="#000000";
        ctx.fillText('0',0,15);
        var font2 = xWidth*0.25-5;
        ctx.fillText('2',font2,15);
        var fontWidth = xWidth-10;
        ctx.fillText('8',fontWidth,15);
        绘制2分割线
        var line = xWidth*0.25;
        ctx.beginPath();
        ctx.moveTo(line,20);
        ctx.lineTo(line,50);
        ctx.stroke();
        绘制文本正常
        var lhLocation = line/2.8;
        ctx.fillStyle="#000000";
        ctx.font= 'Bold 15px Sans-Serif';
        ctx.fillText('正常',lhLocation,41);
        绘制文本可能存在认知障碍
        var qjLocation = xWidth/2.3;
        ctx.fillText('可能存在记忆障碍',qjLocation,41);
        绘制总分数线条
        var scoreLine = xWidth * (score/8);
        if(score==0){
            得分==0线条绘制
            ctx.beginPath();
            ctx.moveTo(scoreLine,50);
            ctx.lineTo(scoreLine+15,70);
            ctx.stroke();
            得分==0三角形绘制
            ctx.beginPath();
            ctx.fillStyle="#000000";
            ctx.moveTo(scoreLine+15,75);
            ctx.lineTo(scoreLine+15-5,70);
            ctx.lineTo(scoreLine+15+5,70);
            ctx.fill();
            ctx.closePath();
            得分==0分数绘制
            ctx.beginPath();
            ctx.fillStyle="#000000";
            ctx.font= 'Bold 15px Sans-Serif';
            ctx.fillText(""+score+"",scoreLine+24-14,90);
            ctx.fill();
            ctx.closePath();
            得分==0“分字绘制”
            ctx.beginPath();
            ctx.fillStyle="#000000";
            ctx.font= 'Bold 15px Sans-Serif';
            ctx.fillText("分",scoreLine+33-14,90);
            ctx.fill();
            ctx.closePath();
        }else if(score>=1 && score<8){
            正常绘制分数线条
            ctx.beginPath();
            ctx.moveTo(scoreLine,50);
            ctx.lineTo(scoreLine,70);
            ctx.stroke();
            绘制三角形
            ctx.beginPath();
            ctx.moveTo(scoreLine,75);
            ctx.lineTo(scoreLine-5,70);
            ctx.lineTo(scoreLine+5,70);
            ctx.closePath();
            ctx.fill();
            score>=1 && score<8 分数绘制
            ctx.beginPath();
            ctx.fillStyle="#000000";
            ctx.font= 'Bold 15px Sans-Serif';
            ctx.fillText(""+score+"",scoreLine-14,90);
            ctx.fill();
            ctx.closePath();
            score>=1 && score<8 “分字绘制”
            ctx.beginPath();
            ctx.fillStyle="#000000";
            ctx.font= 'Bold 15px Sans-Serif';
            ctx.fillText(""+score+"分",scoreLine-14,90);
            ctx.fill();
            ctx.closePath();
        }else if(score==8){
            score==8 线条绘制
            ctx.beginPath();
            ctx.moveTo(scoreLine,50);
            ctx.lineTo(scoreLine-15,70);
            ctx.stroke();
            score==8 三角形绘制
            ctx.beginPath();
            ctx.fillStyle="#000000";
            ctx.moveTo(scoreLine-15,75);
            ctx.lineTo(scoreLine-15-5,70);
            ctx.lineTo(scoreLine-15+5,70);
            ctx.fill();
            ctx.closePath();
            score==8 分数绘制
            ctx.beginPath();
            ctx.fillStyle="#f000000";
            ctx.font= 'Bold 15px Sans-Serif';
            ctx.fillText(""+score+"",scoreLine-28,90);
            ctx.fill();
            ctx.closePath();
            score==8“分字绘制”
            ctx.beginPath();
            ctx.fillStyle="#000000";
            ctx.font= 'Bold 15px Sans-Serif';
            ctx.fillText("分",scoreLine-18,90);
            ctx.fill();
            ctx.closePath();
        }else{
            alert("errorScore");
        }
    }
}*/