function fillChart01(d1,d2,d3,d4){
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


$(function () {
    
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
                if(content.score >= 2&& content.score<3){
                    context.beginPath();
                    context.fillStyle="#FDBF18";
                    context.font= 'Bold 12px Sans-Serif';
                    context.closePath();
                }else if(content.score >= 3 && content.score<4){
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
                if(content.score >= 2&& content.score<3){
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
                if(content.score >= 2&& content.score<3){
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
            alert("drawLine function error");
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
            //alert("drawLine function error");
        }
    });
}

