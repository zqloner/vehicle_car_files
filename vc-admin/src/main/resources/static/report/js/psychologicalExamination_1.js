function chart01(d1,d2,d3,d4){
	 //压力反应各维度等级情况图
    $('#container_1').highcharts({
        chart: {
            polar: true,
            spacingLeft: 20,
            spacingRight:20
        },
        title: {
            text: null
        },
        xAxis: {
            categories: ['生理', '情绪', '行为', '认知'],
            lineWidth:2,
            //lineColor: '#FF0000',  //设置X轴线颜色
            tickmarkPlacement: 'on'
        },
        yAxis: {
            gridLineInterpolation: 'circle',
            tickInterval: 1,
            gridLineWidth: 0,
            title: {
                text: null
            },
            labels: {
                enabled: false
            },
            min: 0,
            max:10
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
        series: [{
            type: 'area',
            data: [{
                y:d1,
                color:'#22e842',
                dataLabels: {
                    color:'#22e842',
                    enabled: true
                }
            },{
                y:d2,
                color:'#22e842',
                dataLabels: {
                    color:'#22e842',
                    enabled: true
                }
            },{
                y:d3,
                color:'#22e842',
                dataLabels: {
                    color:'#22e842',
                    enabled: true
                }
            },{
                y:d4,
                color:'#22e842',
                dataLabels: {
                    color:'#22e842',
                    enabled: true
                }
            }],
            pointPlacement: 'on'
        }]
    });
}

function fillPer(data){
	var canvas=document.getElementById("myCanvas");
    if(canvas.getContext){
        var context = canvas.getContext("2d");
        var img= new Image();

        //判断是男人or女人
        if(data.sex == "man"){
            img.src = "/report/images/pressure_3.png";
            //男孩生理维度小人示意图加载后绘制
            img.onload = function () {
                //向canvas绘制相小人示意图图片
                context.drawImage(img,34,34,220,220);
                //调用绘制男人生理维度小人示意图方法
                drawMan(context,data);
            }
        }else{
            img.src = "/report/images/pressure_4.png";
            //女孩生理维度小人示意图加载后绘制
            img.onload = function () {
                //向canvas绘制相小人示意图图片
                context.drawImage(img,34,34,220,220);
                //调用绘制女人生理维度小人示意图方法
                drawWoman(context,data);
            }
        }
    }
}

function chart02(names,score){
	//情绪反应
    $('#container_2').highcharts({
        chart: {
            type: 'bar'
        },
        title: {
            text: null,
            style:{
                fontSize:"16px"
            }
        },
        xAxis: {
            categories: names,
            tickInterval: 1,
            tickLength:5
        },
        yAxis: {
            min: 0,
            max:4,
            title: {
                text: null
            },
            tickInterval: 1,
            opposite:true
        },
        credits: {
            enabled:false
        },
        exporting: {
            enabled:false
        },
        tooltip: {
            enabled:false
        },
        legend: {
            enabled: false
        },
        plotOptions: {
            bar: {
                pointPadding: 0.2,
                borderWidth: 0,
                dataLabels:{
                    enabled:true,
                    format:'{y:.2f}'
                }
            }
        },
        series: [{
            data: score
        }]
    });
}

function chart03(names,score){
	//行为反应
    $('#container_3').highcharts({
        chart: {
            type: 'bar'
        },
        title: {
            text: null,
            style:{
                fontSize:"16px"
            }
        },
        xAxis: {
            categories: names,
            tickInterval: 1
            //tickLength:5
        },
        yAxis: {
            min: 0,
            max:4,
            title: {
                text: null
            },
            tickInterval: 1,
            opposite:true
        },
        credits: {
            enabled:false
        },
        exporting: {
            enabled:false
        },
        tooltip: {
            enabled:false
        },
        legend: {
            enabled: false
        },
        plotOptions: {
            bar: {
                pointPadding: 0.2,
                borderWidth: 0,
                dataLabels:{
                    enabled:true,
                    format:'{y:.2f}'
                }
            }
        },
        series: [{
            data: score
        }]
    });
}

function chart04(names,score){
	//认知反应
    $('#container_4').highcharts({
        chart: {
            type: 'bar'
        },
        title: {
            text: null,
            style:{
                fontSize:"16px"
            }
        },
        xAxis: {
            categories: names,
            tickInterval: 1
        },
        yAxis: {
            min: 0,
            max:4,
            title: {
                text: null
            },
            tickInterval: 1,
            opposite:true
        },
        credits: {
            enabled:false
        },
        exporting: {
            enabled:false
        },
        tooltip: {
            enabled:false
        },
        legend: {
            enabled: false
        },
        plotOptions: {
            bar: {
                pointPadding: 0.2,
                borderWidth: 0,
                dataLabels:{
                    enabled:true,
                    format:'{y:.2f}'
                }
            }
        },
        series: [{
            data: score
        }]
    });
}

function xinliNengli(score_3){
	//心理调节能力总体情况
    //var score_3 = 3.98;
    var deviceWidth = document.body.clientWidth*0.9;
    $("#canvas_1").attr("width",""+deviceWidth+"");
    drawShape_3(deviceWidth,score_3);
}

function chart05(d1,d2,d3){
	//alert(d1);
	//具体表现
    $('#container_5').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: null
        },
        xAxis: {
            categories: ['抗挫折能力', '心理能量', '乐观性'],
            tickLength:-10
        },
        yAxis: {
            min: 0,
            gridLineWidth:0,
            title: {
                text: null
            },
            lineWidth:1,
            tickWidth:1,
            tickLength:-10,
            tickInterval:0.5
        },
        legend: {
            enabled: true,
            align: 'center',
            verticalAlign: 'bottom',
            symbolRadius:0
        },
        tooltip: {
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
                stacking: 'normal',
                dataLabels: {
                    enabled: false
                }
            }
        },
        series: [{
            name: '常模范围',
            color:"#17375e",
            data: [1.53,1.5,1.4]
        }, {
            name:" ",
            color:"#fff",
            data: [1.61, 1.79,1.54 ]
        }, {
            type: 'spline',
            name: '得分',
            color:'#8eb4e3',
            data: [d1,d2,d3],
            dataLabels: {
                enabled: true,
                format:'{y:.2f}',
                style:{
                    color:"#ff0000",
                    textOutline:'none'
                }
            }
        }]
    });
}

$(function(){
    
    
})
//canvas 绘制虚线方法
function drawDashedLine(context, x1, y1, x2, y2, dashLength) {
    dashLength = dashLength === undefined ? 5 : dashLength;
    var deltaX = x2 - x1;
    var deltaY = y2 - y1;
    var numDashes = Math.floor(
        Math.sqrt(deltaX * deltaX + deltaY * deltaY) / dashLength);
    for (var i=0; i < numDashes; ++i) {
        context[ i % 2 === 0 ? 'moveTo' : 'lineTo' ]
        (x1 + (deltaX / numDashes) * i, y1 + (deltaY / numDashes) * i);
    }
    context.stroke();
}
//绘制Man生理维度小人示意图
function drawMan(context,data){
    context.lineWidth = 1;
    context.strokeStyle ='#BF504D';

    $.each( data.sexDimension, function(index, content) {
        if(content.dimension == "头痛"){
            if(content.score != 0 && content.score != 1){
                drawDashedLine(context, 170, 50, 235, 50, 3);
                if(content.score >= 2 &&content.score < 3){
                    context.beginPath();
                    context.fillStyle="#FDBF18";
                    context.font= 'Bold 12px Sans-Serif';
                    context.closePath();
                }else if(content.score >= 3 &&content.score < 4){
                    context.beginPath();
                    context.fillStyle="#FB6919";
                    context.font= 'Bold 12px Sans-Serif';
                    context.closePath();
                }else if(content.score == 4){
                    context.beginPath();
                    context.fillStyle="#F11D1D";
                    context.font= 'Bold 12px Sans-Serif';
                    context.closePath();
                }
                context.fillText('头痛',235,53);
            }
        }else if(content.dimension == "耳鸣"){
            if(content.score != 0 && content.score != 1){
                drawDashedLine(context, 180, 80, 235, 80, 3);
                if(content.score >= 2 &&content.score < 3){
                    context.beginPath();
                    context.fillStyle="#FDBF18";
                    context.font= 'Bold 12px Sans-Serif';
                    context.closePath();
                }else if(content.score >= 3 &&content.score < 4){
                    context.beginPath();
                    context.fillStyle="#FB6919";
                    context.font= 'Bold 12px Sans-Serif';
                    context.closePath();
                }else if(content.score == 4){
                    context.beginPath();
                    context.fillStyle="#F11D1D";
                    context.font= 'Bold 12px Sans-Serif';
                    context.closePath();
                }
                context.fillText('耳鸣',235,83);
            }
        }else if(content.dimension == "肌肉酸痛"){
            if(content.score != 0 && content.score != 1){
                drawDashedLine(context, 170, 130, 235, 130, 3);
                if(content.score >= 2 &&content.score < 3){
                    context.beginPath();
                    context.fillStyle="#FDBF18";
                    context.font= 'Bold 12px Sans-Serif';
                    context.closePath();
                }else if(content.score >= 3 &&content.score < 4){
                    context.beginPath();
                    context.fillStyle="#FB6919";
                    context.font= 'Bold 12px Sans-Serif';
                    context.closePath();
                }else if(content.score == 4){
                    context.beginPath();
                    context.fillStyle="#F11D1D";
                    context.font= 'Bold 12px Sans-Serif';
                    context.closePath();
                }
                context.fillText('肌肉酸痛',235,133);
            }
        }else if(content.dimension == "心慌"){
            if(content.score != 0 && content.score != 1){
                drawDashedLine(context, 160, 155, 235, 155, 3);
                if(content.score >= 2 &&content.score < 3){
                    context.beginPath();
                    context.fillStyle="#FDBF18";
                    context.font= 'Bold 12px Sans-Serif';
                    context.closePath();
                }else if(content.score >= 3 &&content.score < 4){
                    context.beginPath();
                    context.fillStyle="#FB6919";
                    context.font= 'Bold 12px Sans-Serif';
                    context.closePath();
                }else if(content.score == 4){
                    context.beginPath();
                    context.fillStyle="#F11D1D";
                    context.font= 'Bold 12px Sans-Serif';
                    context.closePath();
                }
                context.fillText('心慌',235,158);
            }
        }else if(content.dimension == "肠胃不适"){
            if(content.score != 0 && content.score != 1){
                drawDashedLine(context, 160, 185, 235, 185, 3);
                if(content.score >= 2 &&content.score < 3){
                    context.beginPath();
                    context.fillStyle="#FDBF18";
                    context.font= 'Bold 12px Sans-Serif';
                    context.closePath();
                }else if(content.score >= 3 &&content.score < 4){
                    context.beginPath();
                    context.fillStyle="#FB6919";
                    context.font= 'Bold 12px Sans-Serif';
                    context.closePath();
                }else if(content.score == 4){
                    context.beginPath();
                    context.fillStyle="#F11D1D";
                    context.font= 'Bold 12px Sans-Serif';
                    context.closePath();
                }
                context.fillText('肠胃不适',235,188);
            }
        }else if(content.dimension == "眼睛疲劳"){
            if(content.score != 0 && content.score != 1){
                drawDashedLine(context, 123, 78, 60, 78, 3);
                if(content.score >= 2 &&content.score < 3){
                    context.beginPath();
                    context.fillStyle="#FDBF18";
                    context.font= 'Bold 12px Sans-Serif';
                    context.closePath();
                }else if(content.score >= 3 &&content.score < 4){
                    context.beginPath();
                    context.fillStyle="#FB6919";
                    context.font= 'Bold 12px Sans-Serif';
                    context.closePath();
                }else if(content.score == 4){
                    context.beginPath();
                    context.fillStyle="#F11D1D";
                    context.font= 'Bold 12px Sans-Serif';
                    context.closePath();
                }
                context.fillText('眼睛疲劳',5,81);
            }
        }else if(content.dimension == "嗓子疼"){
            if(content.score != 0 && content.score != 1){
                drawDashedLine(context, 138, 121, 60, 121, 3);
                if(content.score >= 2 &&content.score < 3){
                    context.beginPath();
                    context.fillStyle="#FDBF18";
                    context.font= 'Bold 12px Sans-Serif';
                    context.closePath();
                }else if(content.score >= 3 &&content.score < 4){
                    context.beginPath();
                    context.fillStyle="#FB6919";
                    context.font= 'Bold 12px Sans-Serif';
                    context.closePath();
                }else if(content.score == 4){
                    context.beginPath();
                    context.fillStyle="#F11D1D";
                    context.font= 'Bold 12px Sans-Serif';
                    context.closePath();
                }
                context.fillText('嗓子疼',17,124);
            }
        }else if(content.dimension == "胸闷、胸痛"){
            if(content.score != 0 && content.score != 1){
                drawDashedLine(context, 127, 147, 60, 147, 3);
                if(content.score >= 2 &&content.score < 3){
                    context.beginPath();
                    context.fillStyle="#FDBF18";
                    context.font= 'Bold 12px Sans-Serif';
                    context.closePath();
                }else if(content.score >= 3 &&content.score < 4){
                    context.beginPath();
                    context.fillStyle="#FB6919";
                    context.font= 'Bold 12px Sans-Serif';
                    context.closePath();
                }else if(content.score == 4){
                    context.beginPath();
                    context.fillStyle="#F11D1D";
                    context.font= 'Bold 12px Sans-Serif';
                    context.closePath();
                }
                context.fillText('胸闷胸痛',5,150);
            }
        }else if(content.dimension == "手脚发冷"){
            if(content.score != 0 && content.score != 1){
                drawDashedLine(context, 99, 190, 60, 190, 3);
                if(content.score >= 2 &&content.score < 3){
                    context.beginPath();
                    context.fillStyle="#FDBF18";
                    context.font= 'Bold 12px Sans-Serif';
                    context.closePath();
                }else if(content.score >= 3 &&content.score < 4){
                    context.beginPath();
                    context.fillStyle="#FB6919";
                    context.font= 'Bold 12px Sans-Serif';
                    context.closePath();
                }else if(content.score == 4){
                    context.beginPath();
                    context.fillStyle="#F11D1D";
                    context.font= 'Bold 12px Sans-Serif';
                    context.closePath();
                }
                context.fillText('手脚发冷',5,193);
            }
        }else{
            //alert("drawLine function error");
        }
    });
}
//绘制woMan生理维度小人示意图
function drawWoman(context,data){
    context.lineWidth = 1;
    context.strokeStyle ='#BF504D';

    $.each( data.sexDimension, function(index, content) {
        if(content.dimension == "头痛"){
            if(content.score != 0 && content.score != 1){
                drawDashedLine(context, 170, 55, 235, 55, 3);
                if(content.score >= 2 &&content.score < 3){
                    context.beginPath();
                    context.fillStyle="#FDBF18";
                    context.font= 'Bold 12px Sans-Serif';
                    context.closePath();
                }else if(content.score >= 3 &&content.score < 4){
                    context.beginPath();
                    context.fillStyle="#FB6919";
                    context.font= 'Bold 12px Sans-Serif';
                    context.closePath();
                }else if(content.score == 4){
                    context.beginPath();
                    context.fillStyle="#F11D1D";
                    context.font= 'Bold 12px Sans-Serif';
                    context.closePath();
                }
                context.fillText('头痛',235,59);
            }
        }else if(content.dimension == "耳鸣"){
            if(content.score != 0 && content.score != 1){
                drawDashedLine(context, 170, 75, 235, 75, 3);
                if(content.score >= 2 &&content.score < 3){
                    context.beginPath();
                    context.fillStyle="#FDBF18";
                    context.font= 'Bold 12px Sans-Serif';
                    context.closePath();
                }else if(content.score >= 3 &&content.score < 4){
                    context.beginPath();
                    context.fillStyle="#FB6919";
                    context.font= 'Bold 12px Sans-Serif';
                    context.closePath();
                }else if(content.score == 4){
                    context.beginPath();
                    context.fillStyle="#F11D1D";
                    context.font= 'Bold 12px Sans-Serif';
                    context.closePath();
                }
                context.fillText('耳鸣',235,79);
            }
        }else if(content.dimension == "肌肉酸痛"){
            if(content.score != 0 && content.score != 1){
                drawDashedLine(context, 150, 115, 235, 115, 3);
                if(content.score >= 2 &&content.score < 3){
                    context.beginPath();
                    context.fillStyle="#FDBF18";
                    context.font= 'Bold 12px Sans-Serif';
                    context.closePath();
                }else if(content.score >= 3 &&content.score < 4){
                    context.beginPath();
                    context.fillStyle="#FB6919";
                    context.font= 'Bold 12px Sans-Serif';
                    context.closePath();
                }else if(content.score == 4){
                    context.beginPath();
                    context.fillStyle="#F11D1D";
                    context.font= 'Bold 12px Sans-Serif';
                    context.closePath();
                }
                context.fillText('肌肉酸痛',235,119);
            }
        }else if(content.dimension == "心慌"){
            if(content.score != 0 && content.score != 1){
                drawDashedLine(context, 147, 132, 235, 132, 3);
                if(content.score >= 2 &&content.score < 3){
                    context.beginPath();
                    context.fillStyle="#FDBF18";
                    context.font= 'Bold 12px Sans-Serif';
                    context.closePath();
                }else if(content.score >= 3 &&content.score < 4){
                    context.beginPath();
                    context.fillStyle="#FB6919";
                    context.font= 'Bold 12px Sans-Serif';
                    context.closePath();
                }else if(content.score == 4){
                    context.beginPath();
                    context.fillStyle="#F11D1D";
                    context.font= 'Bold 12px Sans-Serif';
                    context.closePath();
                }
                context.fillText('心慌',235,136);
            }
        }else if(content.dimension == "肠胃不适"){
            if(content.score != 0 && content.score != 1){
                drawDashedLine(context, 140, 150, 235, 150, 3);
                if(content.score >= 2 &&content.score < 3){
                    context.beginPath();
                    context.fillStyle="#FDBF18";
                    context.font= 'Bold 12px Sans-Serif';
                    context.closePath();
                }else if(content.score >= 3 &&content.score < 4){
                    context.beginPath();
                    context.fillStyle="#FB6919";
                    context.font= 'Bold 12px Sans-Serif';
                    context.closePath();
                }else if(content.score == 4){
                    context.beginPath();
                    context.fillStyle="#F11D1D";
                    context.font= 'Bold 12px Sans-Serif';
                    context.closePath();
                }
                context.fillText('肠胃不适',235,154);
            }
        }else if(content.dimension == "眼睛疲劳"){
            if(content.score != 0 && content.score != 1){
                drawDashedLine(context, 109, 77, 60, 77, 3);
                if(content.score >= 2 &&content.score < 3){
                    context.beginPath();
                    context.fillStyle="#FDBF18";
                    context.font= 'Bold 12px Sans-Serif';
                    context.closePath();
                }else if(content.score >= 3 &&content.score < 4){
                    context.beginPath();
                    context.fillStyle="#FB6919";
                    context.font= 'Bold 12px Sans-Serif';
                    context.closePath();
                }else if(content.score == 4){
                    context.beginPath();
                    context.fillStyle="#F11D1D";
                    context.font= 'Bold 12px Sans-Serif';
                    context.closePath();
                }
                context.fillText('眼睛疲劳',5,80);
            }
        }else if(content.dimension == "嗓子疼"){
            if(content.score != 0 && content.score != 1){
                drawDashedLine(context, 133, 108, 60, 108, 3);
                if(content.score >= 2 &&content.score < 3){
                    context.beginPath();
                    context.fillStyle="#FDBF18";
                    context.font= 'Bold 12px Sans-Serif';
                    context.closePath();
                }else if(content.score >= 3 &&content.score < 4){
                    context.beginPath();
                    context.fillStyle="#FB6919";
                    context.font= 'Bold 12px Sans-Serif';
                    context.closePath();
                }else if(content.score == 4){
                    context.beginPath();
                    context.fillStyle="#F11D1D";
                    context.font= 'Bold 12px Sans-Serif';
                    context.closePath();
                }
                context.fillText('嗓子疼',17,112);
            }
        }else if(content.dimension == "胸闷、胸痛"){
            if(content.score != 0 && content.score != 1){
                drawDashedLine(context, 120, 125, 60, 125, 3);
                if(content.score >= 2 &&content.score < 3){
                    context.beginPath();
                    context.fillStyle="#FDBF18";
                    context.font= 'Bold 12px Sans-Serif';
                    context.closePath();
                }else if(content.score >= 3 &&content.score < 4){
                    context.beginPath();
                    context.fillStyle="#FB6919";
                    context.font= 'Bold 12px Sans-Serif';
                    context.closePath();
                }else if(content.score == 4){
                    context.beginPath();
                    context.fillStyle="#F11D1D";
                    context.font= 'Bold 12px Sans-Serif';
                    context.closePath();
                }
                context.fillText('胸闷胸痛',5,129);
            }
        }else if(content.dimension == "手脚发冷"){
            if(content.score != 0 && content.score != 1){
                drawDashedLine(context, 110, 165, 60, 165, 3);
                if(content.score >= 2 &&content.score < 3){
                    context.beginPath();
                    context.fillStyle="#FDBF18";
                    context.font= 'Bold 12px Sans-Serif';
                    context.closePath();
                }else if(content.score >= 3 &&content.score < 4){
                    context.beginPath();
                    context.fillStyle="#FB6919";
                    context.font= 'Bold 12px Sans-Serif';
                    context.closePath();
                }else if(content.score == 4){
                    context.beginPath();
                    context.fillStyle="#F11D1D";
                    context.font= 'Bold 12px Sans-Serif';
                    context.closePath();
                }
                context.fillText('手脚发冷',5,169);
            }
        }else{
           // alert("drawLine function error");
        }
    });
}
//心理调节能力总体情况
function drawShape_3(deviceWidth,score){
    var xWidth = deviceWidth-2;
    var canvas = document.getElementById('canvas_1');
    if(canvas.getContext){
        var ctx = canvas.getContext("2d");

        var lowScore = ctx.createLinearGradient(1,0,0,40);
        lowScore.addColorStop(0, '#c5d9f1');
        lowScore.addColorStop(1, '#c5d9f1');
        var middleScore = ctx.createLinearGradient(1,0,0,40);
        middleScore.addColorStop(0, '#17375d');
        middleScore.addColorStop(1, '#17375d');
        var highScore = ctx.createLinearGradient(1,0,0,40);
        highScore.addColorStop(0, '#c5d9f1');
        highScore.addColorStop(1, '#c5d9f1');

        //0-1.7
        ctx.fillStyle = lowScore;
        ctx.fillRect(1,20,xWidth*0.425,40);
        //1.7-3.09
        ctx.fillStyle = middleScore;
        ctx.fillRect(xWidth*0.425,20,xWidth*0.772,40);
        //3.09-4
        ctx.fillStyle = highScore;
        ctx.fillRect(xWidth*0.772,20,xWidth,40);

        /*绘制数值*/
        ctx.font= '15px Sans-Serif';
        ctx.fillStyle="#000000";
        ctx.fillText('0',2,15);
        var font17 = xWidth*0.425-5;
        ctx.fillText('1.7',font17,15);
        var font309 = xWidth*0.772-20;
        ctx.fillText('3.09',font309,15);
        var font4 = xWidth-15;
        ctx.fillText('4',font4,15);

        //常模范围
        ctx.fillStyle="#ff0000";
        ctx.font= '15px Sans-Serif';
        var text = xWidth/2;
        ctx.fillText('常模范围',text,46);

        /*绘制总分数线条*/
        var scoreLine = xWidth * (score/4);
        if(score>=0 && score<=0.05){
            /*得分==0线条绘制*/
            ctx.beginPath();
            ctx.moveTo(scoreLine+2,65);
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
        }else if(score>0.05 && score<3.62){
            /*正常绘制分数线条*/
            ctx.beginPath();
            ctx.moveTo(scoreLine,70);
            ctx.lineTo(scoreLine,95);
            ctx.stroke();
            /*绘制三角形*/
            ctx.beginPath();
            ctx.fillStyle="#000000";
            ctx.moveTo(scoreLine,65);
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
        }else if(score>=3.62 && score<=4){
            ctx.beginPath();
            ctx.moveTo(scoreLine,65);
            ctx.lineTo(scoreLine-15,90);
            ctx.stroke();
            ctx.beginPath();
            ctx.fillStyle="#000000";
            ctx.moveTo(scoreLine-15,95);
            ctx.lineTo(scoreLine-15-5,90);
            ctx.lineTo(scoreLine-15+5,90);
            ctx.fill();
            ctx.closePath();
            ctx.beginPath();
            ctx.fillStyle="#f000000";
            ctx.font= 'Bold 15px Sans-Serif';
            ctx.fillText(""+score+"",scoreLine-30,110);
            ctx.fill();
            ctx.closePath();
        }else{
        	/*alert(score);
            alert("errorScore");*/
        }
    }
}
