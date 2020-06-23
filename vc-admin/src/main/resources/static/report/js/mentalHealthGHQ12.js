$(function () {
    /*获取总分*/
    var score = $("#score").text();
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

        /*绘制良好*/
        var lh = ctx.createLinearGradient(1,0,0,40);
        lh.addColorStop(0, '#7CD254');
        lh.addColorStop(1, '#7CD254');
        /*绘制欠佳*/
        var qj = ctx.createLinearGradient(1,0,0,40);
        qj.addColorStop(0, '#E9918A');
        qj.addColorStop(1, '#E9918A');

        /*绘制良好矩形*/
        ctx.fillStyle = lh;
        ctx.fillRect(1,30,xWidth*0.416,40);
        /*绘制欠佳矩形*/
        ctx.fillStyle = qj;
        ctx.fillRect(xWidth*0.416,30,xWidth,40);

        /*绘制数值*/
        ctx.font= 'Bold 15px Sans-Serif';
        ctx.fillStyle="#000000";
        ctx.fillText('12',2,15);
        var font27 = xWidth*0.416-10;
        ctx.fillText('27',font27,15);
        var font48 = xWidth-15;
        ctx.fillText('48',font48,15);


        /*绘制良好文本*/
        ctx.fillStyle="#000000";
        ctx.font= 'Bold 15px Sans-Serif';
        var lhText = xWidth*0.208-15;
        ctx.fillText('良好',lhText,55);
        /*绘制欠佳文本*/
        var qjText = xWidth*0.694;
        ctx.fillText('欠佳',qjText,55);

        /*绘制总分数线条*/
        var scoreLine = score - 12 ;
        scoreLine = xWidth * (scoreLine / 36);
        if(score==12){
            /*得分==0线条绘制*/
            ctx.beginPath();
            ctx.strokeStyle = "rgb(132,176,211)";
            ctx.moveTo(scoreLine+2,70);
            ctx.lineTo(scoreLine+15,90);
            ctx.stroke();
            /*得分==0三角形绘制*/
            ctx.beginPath();
            ctx.fillStyle="rgb(132,176,211)";
            ctx.moveTo(scoreLine+15,95);
            ctx.lineTo(scoreLine+15-5,90);
            ctx.lineTo(scoreLine+15+5,90);
            ctx.fill();
            ctx.closePath();
            /*得分==0分数绘制*/
            ctx.beginPath();
            ctx.fillStyle="#000000";
            ctx.font= 'Bold 11px 微软雅黑';
            ctx.fillText("您的得分为 "+score+" 分",scoreLine+12,110);
            ctx.fill();
            ctx.closePath();
        }else if(score>=13 && score<=27){
            /*正常绘制分数线条*/
            ctx.beginPath();
            ctx.strokeStyle = "rgb(132,176,211)";
            ctx.moveTo(scoreLine,75);
            ctx.lineTo(scoreLine,95);
            ctx.stroke();
            /*绘制三角形*/
            ctx.beginPath();
            ctx.fillStyle="rgb(132,176,211)";
            ctx.moveTo(scoreLine,70);
            ctx.lineTo(scoreLine-5,75);
            ctx.lineTo(scoreLine+5,75);
            ctx.closePath();
            ctx.fill();
            /*score>=13 && score<=27 分数绘制*/
            ctx.beginPath();
            ctx.fillStyle="#000000";
            ctx.font= 'Bold 11px 微软雅黑';
            ctx.fillText("您的得分为 "+score+" 分",scoreLine-5,110);
            ctx.fill();
            ctx.closePath();
        }else if(score>27 && score<38){
            /*正常绘制分数线条*/
            ctx.beginPath();
            ctx.strokeStyle = "rgb(132,176,211)";
            ctx.moveTo(scoreLine,75);
            ctx.lineTo(scoreLine,95);
            ctx.stroke();
            /*绘制三角形*/
            ctx.beginPath();
            ctx.fillStyle="rgb(132,176,211)";
            ctx.moveTo(scoreLine,70);
            ctx.lineTo(scoreLine-5,75);
            ctx.lineTo(scoreLine+5,75);
            ctx.closePath();
            ctx.fill();
            /*score>27 && score<48 分数绘制*/
            ctx.beginPath();
            ctx.fillStyle="#000000";
            ctx.font= 'Bold 11px 微软雅黑';
            ctx.fillText("您的得分为 "+score+" 分",scoreLine-5,110);
            ctx.fill();
            ctx.closePath();
        }else if(score>=38 && score<=47){
            /*正常绘制分数线条*/
            ctx.beginPath();
            ctx.strokeStyle = "rgb(132,176,211)";
            ctx.moveTo(scoreLine,75);
            ctx.lineTo(scoreLine,95);
            ctx.stroke();
            /*绘制三角形*/
            ctx.beginPath();
            ctx.fillStyle="rgb(132,176,211)";
            ctx.moveTo(scoreLine,70);
            ctx.lineTo(scoreLine-5,75);
            ctx.lineTo(scoreLine+5,75);
            ctx.closePath();
            ctx.fill();
            /*score>27 && score<48 分数绘制*/
            ctx.beginPath();
            ctx.fillStyle="#000000";
            ctx.font= 'Bold 11px 微软雅黑';
            ctx.fillText("您的得分为 "+score+" 分",scoreLine-90,110);
            ctx.fill();
            ctx.closePath();
        }else if(score==48){
            /*score==48 线条绘制*/
            ctx.beginPath();
            ctx.strokeStyle = "rgb(132,176,211)";
            ctx.moveTo(scoreLine,70);
            ctx.lineTo(scoreLine-15,90);
            ctx.stroke();
            /*score==48 三角形绘制*/
            ctx.beginPath();
            ctx.fillStyle="rgb(132,176,211)";
            ctx.moveTo(scoreLine-15,95);
            ctx.lineTo(scoreLine-15-5,90);
            ctx.lineTo(scoreLine-15+5,90);
            ctx.fill();
            ctx.closePath();
            /*score==48 分数绘制*/
            ctx.beginPath();
            ctx.fillStyle="#000000";
            ctx.font= 'Bold 11px 微软雅黑';
            ctx.fillText("您的得分为 "+score+" 分",scoreLine-100,110);
            ctx.fill();
            ctx.closePath();
        }else{
            alert("errorScore");
        }
    }
}
