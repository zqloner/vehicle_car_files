function render(parameters,chartsTitle){
    renderCanvas(parameters);
    setScore(parameters);
    for (var key in parameters){
        var data = initChartsData(parameters[key]);
        if (key == "cognition"){
           renderSpecial(data);
       }else {
           renderGeneral(key,data,chartsTitle);
       }

    }

}

function renderSpecial(data){
    /*根据后台返回数据生成柱形图*/
    $('#cognition').highcharts({
        /*图表 type=column 柱形图*/
        chart: {
            type: 'column'
        },
        title: {
            text:null,
            style:{
                color:'#999'
            }
        },
        /*legend 图例
         enabled=false 禁用点击显示隐藏数据列*/
        legend: {
            enabled: false
        },
        /*xAxis X坐标轴 categories定义轴名称 初始为null*/
        xAxis: {
            enabled:function(){
                enabled.enabled = false;
            },
            categories: data.categories,
            tickLength: 0
        },
        /*yAxis Y坐标轴 说 stackLabels enabled=true 启用堆叠标签*/
        yAxis: {
            min: 0,
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
        /*数据点提示框  enabled=false 禁用数据提示框*/
        tooltip: {
            formatter: function() {
                tooltip.enabled = false;
            }
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
            data: data.seriesData
        }],
        /*去掉右下角.com*/
        credits: {
            enabled:false
        },
        /*去掉右上角print&download*/
        exporting: {
            enabled:false
        }
    });
}
function initChartsData(parameters){
    var datas = parameters["childDimensions"];
    var categories = [];
    var seriesData = [];
    for(var index = 0 ;index < datas.length;index++){
        data = datas[index];
        var name = data["name"];
        categories.push(name);
        seriesData.push({"name":name,y:Number(data["score"])});
    }
    setColor(seriesData);
    return {"categories": categories, "seriesData": seriesData};
}

function getColor(index){
    var colors = ["#aa99c3","#bacc95","#d09392","#91aad0","#db833e","#4399b0","#71598b",
        "#88a64c","#aa4644","#4573a7","#ea8815","#d85f23","#0db496","#1689cc"];

    var color = colors[Math.floor(Math.random()*colors.length)];
    return colors[index] == null? color:colors[index];
}
function  setColor(seriesData){
    for(var i = 0;i<seriesData.length;i++){
        var data = seriesData[i];
        data["color"] = getColor(i);
    }
}

function renderGeneral(key,data,chartsTitle){
    $("#"+key).highcharts({
        chart: {
            type: 'bar'
        },
        title: {
            text: chartsTitle[key],
            style:{
                fontSize:"16px"
            }
        },
        xAxis: {
            categories: data.categories,
            tickLength:0
        },
        yAxis: {
            min: 0,
            title: {
                text: null
            },
            tickInterval: 1
        },
        credits: {
            enabled:false
        },
        exporting: {
            enabled:false
        },
        tooltip: {
            formatter: function() {
                tooltip.enabled = false;
            }
        },
        legend: {
            enabled: false
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
            data: data.seriesData
        }]
    });
}


function getColor(score){
    var color = "";
    if(score >=1 && score <=3 ){
        color = "#336699"
    }else if (score >= 4 && score <= 6){
        color = "#669900";
    }else if (score >= 7 && score <= 8){
        color = "#FF6600";
    }else{
        color = "#990000";
    }
    return color;
}

//页面加载后执行getdata方法.从后台回去数据后赋值变量进行判断生成图表.
function renderCanvas(parameters){
    var physiology = {
        "level":Number(parameters.physiology.level),
        "color":getColor(parameters.physiology.level)
    };

    var emotion = {
        "level":Number(parameters.emotion.level),
        "color":getColor(parameters.emotion.level)
};
    var perceive = {
        "level":Number(parameters.cognition.level),
        "color":getColor(parameters.cognition.level)
};
    var behavior = {
        "level":Number(parameters.behavior.level),
        "color":getColor(parameters.behavior.level)
};



    //得分1-3  color:"#336699",，得分4-6 color:"#669900"，得分7-8 color:"#FF6600", 得分9-10 color:"#990000",

    /*压力反应各维度得分情况图*/
    $('#containerColumn').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: null
        },
        legend: {
            enabled: false
        },
        xAxis: {
            categories: [
                '情绪 ',
                '生理 ',
                '行为 ',
                '认知 '
            ],
            tickLength:0
        },
        yAxis: {
            min: 0,
            max:10,
            title: {
                text: null
            },
            tickInterval: 1
        },
        tooltip: {
            enabled:false
        },
        plotOptions: {
            column: {
                borderWidth: 0,
                dataLabels:{
                    enabled:true
                }
            }
        },
        series: [{
            data: [{
                name: '情绪',
                color:emotion["color"],
                y: emotion["level"]
            }, {
                name: '生理',
                color:physiology["color"],
                y: physiology["level"]
            }, {
                name: '行为',
                color:behavior["color"],
                y: behavior["level"]
            }, {
                name: '认知',
                color:perceive["color"],
                y: perceive["level"]
            }]
        }],
        /*去掉右下角.com*/
        credits: {
            enabled:false
        },
        /*去掉右上角print&download*/
        exporting: {
            enabled:false
        }
    });

}

function setScore(parameters){
    for (var key in parameters){
        $("#"+key+"_score").text(parameters[key]["level"]);
    }
}