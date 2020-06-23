$(function () {
	var data = $("#data").text();
	var obj = JSON.parse(data);
	var result2 = obj[0]["result"];
	var resultList = obj[0]["data"]
	$("#result1").html(resultList.result);
	$("#result2").html(result2);
	
    /*获取总分*/
    var score = resultList.score;
    /*获取设备屏幕宽度*/
    var deviceWidth = document.body.clientWidth*0.9;
    /*将设备屏幕宽度赋值给画布*/
    $("#canvas").attr("width",""+deviceWidth+"");
    /*绘制儿童多动症行为评定量表得分分布图*/
    drawShapeChild(deviceWidth,score);
});
/*绘制儿童多动症行为评定量表得分分布图*/
function drawShapeChild(deviceWidth,score){
    var xWidth = deviceWidth-2;
    var canvas = document.getElementById('canvas');
    if(canvas.getContext){
        var ctx = canvas.getContext("2d");

        /*绘制无多动症线性渐变*/
        var lowScore = ctx.createLinearGradient(1,0,0,40);
        lowScore.addColorStop(0, '#F1D9D9');
        lowScore.addColorStop(1, '#DA9B9A');
        /*绘制怀疑有多动症渐变*/
        var middleScore = ctx.createLinearGradient(1,0,0,40);
        middleScore.addColorStop(0, '#FBC091');
        middleScore.addColorStop(1, '#F79647');

        /*绘制无多动症矩形轮廓*/
        ctx.lineWidth=3;
        ctx.strokeStyle = "#C5B8D5"
        ctx.strokeRect(1,30,xWidth*0.5,40);
        /*绘制怀疑有多动症矩形轮廓*/
        ctx.strokeStyle = "#E2AFAE"
        ctx.strokeRect(xWidth*0.5,30,xWidth,40);

        /*绘制无多动症矩形*/
        ctx.fillStyle = lowScore;
        ctx.fillRect(1,30,xWidth*0.5,40);
        /*绘制怀疑有多动症矩形*/
        ctx.fillStyle = middleScore;
        ctx.fillRect(xWidth*0.5,30,xWidth,40);


        /*绘制数值*/
        ctx.font= 'Bold 15px Sans-Serif';
        ctx.fillStyle="#000000";
        ctx.fillText('0',2,15);
        var font15 = xWidth*0.5-5;
        ctx.fillText('15',font15,15);
        var font30 = xWidth-15;
        ctx.fillText('30',font30,15);

        /*绘制15分割线*/
        ctx.lineWidth=2;
        ctx.strokeStyle = "#E2AFAE"
        var line15 = xWidth*0.5;
        ctx.beginPath();
        ctx.moveTo(line15,30);
        ctx.lineTo(line15,70);
        ctx.stroke();

        /*绘制无多动症文本*/
        ctx.fillStyle="#000000";
        ctx.font= 'Bold 15px Sans-Serif';
        var lowText = line15/2-30;
        ctx.fillText('无多动症',lowText,50);
        /*绘制怀疑有多动症文本*/
        var middleText = xWidth*0.65-15;
        ctx.fillText('怀疑有多动症',middleText,50);


        /*绘制总分数线条*/
        var scoreLine = xWidth * (score/30);
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
        }else if(score>=10 && score<30){
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
        }else if(score==30){
            /*score==30 线条绘制*/
            ctx.beginPath();
            ctx.moveTo(scoreLine,70);
            ctx.lineTo(scoreLine-15,90);
            ctx.stroke();
            /*score==30 三角形绘制*/
            ctx.beginPath();
            ctx.fillStyle="#000000";
            ctx.moveTo(scoreLine-15,95);
            ctx.lineTo(scoreLine-15-5,90);
            ctx.lineTo(scoreLine-15+5,90);
            ctx.fill();
            ctx.closePath();
            /*score==30 分数绘制*/
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
