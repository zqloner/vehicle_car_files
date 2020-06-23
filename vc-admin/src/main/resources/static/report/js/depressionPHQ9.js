$(function () {
    /*获取总分*/
    var score = $("#score").text();
    /*获取设备屏幕宽度*/
    var deviceWidth = document.body.clientWidth*0.9;
    /*将设备屏幕宽度赋值给画布*/
    $("#canvas").attr("width",""+deviceWidth+"");
    /*绘制抑郁症状筛查测验PHQ-9得分分布图*/
    drawShapeAutism(deviceWidth,score);
});
/*绘制抑郁症状筛查测验PHQ-9得分分布图*/
function drawShapeAutism(deviceWidth,score){
    var xWidth = deviceWidth-2;
    var yHeight = $("#canvas").attr("height");
    var canvas = document.getElementById('canvas');
    if(canvas.getContext){
        var ctx = canvas.getContext("2d");

        /*绘制矩形1*/
        ctx.fillStyle = "#49612D";
        ctx.fillRect(30,20,xWidth/3,72);
        /*绘制矩形2*/
        ctx.fillStyle = "#6c9042";
        ctx.fillRect(30,92,xWidth/3,45);
        /*绘制矩形3*/
        ctx.fillStyle = "#C2D894";
        ctx.fillRect(30,137,xWidth/3,45);
        /*绘制矩形4*/
        ctx.fillStyle = "#D8E5B7";
        ctx.fillRect(30,182,xWidth/3,46);
        /*绘制矩形5*/
        ctx.fillStyle = "#EAF1DB";
        ctx.fillRect(30,228,xWidth/3,36);

        /*绘制数值*/
        ctx.font= 'Bold 15px Sans-Serif';
        ctx.fillStyle="#000000";
        ctx.fillText('27',5,30);
        ctx.fillText('0',10,264);

        /*绘制文本1*/
        ctx.fillStyle="#FFFFFF";
        ctx.font= 'Bold 12px Sans-Serif';
        ctx.fillText('重度抑郁',xWidth/6,62);
        /*绘制文本2*/
        ctx.fillText('中重度抑郁',xWidth/6,120.5);
        /*绘制文本3*/
        ctx.fillStyle="#000000";
        ctx.fillText('中度抑郁',xWidth/6,162.5);
        /*绘制文本4*/
        ctx.fillText('轻度抑郁',xWidth/6,208.5);
        /*绘制文本5*/
        ctx.fillText('没有抑郁',xWidth/6,250.5);


        /*绘制总分数线条*/
        var xAxle = xWidth/3+45;
        if(score>=0 && score<=4){
            /*绘制箭头*/
            ctx.beginPath();
            ctx.lineWidth=3;
            ctx.strokeStyle = "#6C9042"
            ctx.moveTo(xAxle,300-54);
            ctx.lineTo(xAxle+10,300-54-8);
            ctx.moveTo(xAxle,298-54);
            ctx.lineTo(xAxle+10,300-54+6);
            ctx.moveTo(xAxle+5,298-56);
            ctx.lineTo(xAxle+30,298-56);
            ctx.moveTo(xAxle+5,298-50);
            ctx.lineTo(xAxle+30,298-50);
            ctx.moveTo(xAxle+29,298-57);
            ctx.lineTo(xAxle+29,298-50);
            ctx.stroke();
            ctx.closePath();
            /*绘制文本*/
            ctx.fillStyle="#000";
            ctx.font= 'Bold 11px Sans-Serif';
            ctx.fillText('您的得分为 '+score+" 分",xAxle+40,300-54+3);
        }else if(score>4 && score<=9){
            /*绘制箭头*/
            ctx.beginPath();
            ctx.lineWidth=3;
            ctx.strokeStyle = "#6C9042"
            ctx.moveTo(xAxle,300-92);
            ctx.lineTo(xAxle+10,300-92-8);
            ctx.moveTo(xAxle,298-92);
            ctx.lineTo(xAxle+10,300-92+6);
            ctx.moveTo(xAxle+5,298-94);
            ctx.lineTo(xAxle+30,298-94);
            ctx.moveTo(xAxle+5,298-88);
            ctx.lineTo(xAxle+30,298-88);
            ctx.moveTo(xAxle+29,298-95);
            ctx.lineTo(xAxle+29,298-88);
            ctx.stroke();
            ctx.closePath();
            /*绘制文本*/
            ctx.fillStyle="#000";
            ctx.font= 'Bold 11px Sans-Serif';
            ctx.fillText('您的得分为 '+score+" 分",xAxle+40,300-92+3);
        }else if(score>9 && score<=14){
            /*绘制箭头*/
            ctx.beginPath();
            ctx.lineWidth=3;
            ctx.strokeStyle = "#6C9042"
            ctx.moveTo(xAxle,300-137.5);
            ctx.lineTo(xAxle+10,300-137.5-8);
            ctx.moveTo(xAxle,298-137.5);
            ctx.lineTo(xAxle+10,300-137.5+6);
            ctx.moveTo(xAxle+5,298-139.5);
            ctx.lineTo(xAxle+30,298-139.5);
            ctx.moveTo(xAxle+5,298-133.5);
            ctx.lineTo(xAxle+30,298-133.5);
            ctx.moveTo(xAxle+29,298-140.5);
            ctx.lineTo(xAxle+29,298-133.5);
            ctx.stroke();
            ctx.closePath();
            /*绘制文本*/
            ctx.fillStyle="#000";
            ctx.font= 'Bold 11px Sans-Serif';
            ctx.fillText('您的得分为 '+score+" 分",xAxle+40,300-137.5+3);
        }else if(score>14 && score<=19){
            /*绘制箭头*/
            ctx.beginPath();
            ctx.lineWidth=3;
            ctx.strokeStyle = "#6C9042"
            ctx.moveTo(xAxle,300-182.5);
            ctx.lineTo(xAxle+10,300-182.5-8);
            ctx.moveTo(xAxle,298-182.5);
            ctx.lineTo(xAxle+10,300-182.5+6);
            ctx.moveTo(xAxle+5,298-184.5);
            ctx.lineTo(xAxle+30,298-184.5);
            ctx.moveTo(xAxle+5,298-179.5);
            ctx.lineTo(xAxle+30,298-179.5);
            ctx.moveTo(xAxle+29,298-185.5);
            ctx.lineTo(xAxle+29,298-179.5);
            ctx.stroke();
            ctx.closePath();
            /*绘制文本*/
            ctx.fillStyle="#000";
            ctx.font= 'Bold 11px Sans-Serif';
            ctx.fillText('您的得分为 '+score+" 分",xAxle+40,300-182.5+3);
        }else if(score>19 && score<=27){
            /*绘制箭头*/
            ctx.beginPath();
            ctx.lineWidth=3;
            ctx.strokeStyle = "#6C9042"
            ctx.moveTo(xAxle,300-241);
            ctx.lineTo(xAxle+10,300-241-8);
            ctx.moveTo(xAxle,298-241);
            ctx.lineTo(xAxle+10,300-241+6);
            ctx.moveTo(xAxle+5,298-243);
            ctx.lineTo(xAxle+30,298-243);
            ctx.moveTo(xAxle+5,298-238);
            ctx.lineTo(xAxle+30,298-238);
            ctx.moveTo(xAxle+29,298-244);
            ctx.lineTo(xAxle+29,298-238);
            ctx.stroke();
            ctx.closePath();
            /*绘制文本*/
            ctx.fillStyle="#000";
            ctx.font= 'Bold 11px Sans-Serif';
            ctx.fillText('您的得分为 '+score+" 分",xAxle+40,300-241+3);
        }else{
            alert("errorScore");
        }
    }
}
