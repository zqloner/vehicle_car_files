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
    /*绘制儿童孤独症行为评定量表得分分布图*/
    drawShapeAutism(deviceWidth,score);
});
/*绘制儿童孤独症行为评定量表得分分布图*/
function drawShapeAutism(deviceWidth,score){
    var xWidth = deviceWidth-2;
    var yHeight = $("#canvas").attr("height");
    var canvas = document.getElementById('canvas');
    if(canvas.getContext){
        var ctx = canvas.getContext("2d");

        /*绘制矩形1*/
        ctx.fillStyle = "rgb(192,80,77)";
        ctx.fillRect(40,20,xWidth/2,182);
        /*绘制矩形2*/
        ctx.fillStyle = "rgb(247,150,70)";
        ctx.fillRect(40,202,xWidth/2,28);
        /*绘制矩形3*/
        ctx.fillStyle = "rgb(155,187,89)";
        ctx.fillRect(40,230,xWidth/2,106);

        /*绘制数值*/
        ctx.font= 'Bold 15px Sans-Serif';
        ctx.fillStyle="#000000";
        ctx.fillText('158',2,25);
        ctx.fillText('67',10,208);
        ctx.fillText('53',10,235);
        ctx.fillText('0',16,340);

        /*绘制y轴*/
        ctx.lineWidth=2;
        ctx.strokeStyle = "#000000"
        ctx.beginPath();
        ctx.moveTo(34,21);
        ctx.lineTo(40,21);
        ctx.lineTo(40,335);
        ctx.lineTo(34,335);
        ctx.stroke();

        /*绘制文本1*/
        ctx.fillStyle="#FFFFFF";
        ctx.font= 'Bold 12px Sans-Serif';
        ctx.fillText('非孤独症',xWidth/4+20,20+182+18+63);
        /*绘制文本2*/
        ctx.fillText('怀疑患有孤独症',xWidth/4,20+182+18);
        /*绘制文本3*/
        ctx.fillText('初步诊断孤独症',xWidth/4,20+91);


        /*绘制总分数线条*/
        var xAxle = xWidth/2+45;
        if(score>=0 && score<=53){
            /*绘制三角形*/
            ctx.beginPath();
            ctx.fillStyle="#666666";
            ctx.moveTo(xAxle,360-20-53);
            ctx.lineTo(xAxle+15,360-20-53-8);
            ctx.lineTo(xAxle+15,360-20-53+8);
            ctx.closePath();
            ctx.fill();
            /*绘制文本*/
            ctx.fillStyle="#666666";
            ctx.font= 'Bold 11px Sans-Serif';
            ctx.fillText('你的得分:'+score,xAxle+20,360-16-53);
        }else if(score>53 && score<=67){
            /*绘制三角形*/
            ctx.beginPath();
            ctx.fillStyle="#666666";
            ctx.moveTo(xAxle,360-20-124);
            ctx.lineTo(xAxle+15,360-20-124-8);
            ctx.lineTo(xAxle+15,360-20-124+8);
            ctx.closePath();
            ctx.fill();
            /*绘制文本*/
            ctx.fillStyle="#666666";
            ctx.font= 'Bold 11px Sans-Serif';
            ctx.fillText('你的得分:'+score,xAxle+20,360-20-106-14);
        }else if(score>67 && score<=158){
            /*绘制三角形*/
            ctx.beginPath();
            ctx.fillStyle="#666666";
            ctx.moveTo(xAxle,360-20-233);
            ctx.lineTo(xAxle+15,360-20-233-8);
            ctx.lineTo(xAxle+15,360-20-233+8);
            ctx.closePath();
            ctx.fill();
            /*绘制文本*/
            ctx.fillStyle="#666666";
            ctx.font= 'Bold 11px Sans-Serif';
            ctx.fillText('你的得分:'+score,xAxle+20,360-20-215-14);
        }else{
            alert("errorScore");
        }
    }
}
