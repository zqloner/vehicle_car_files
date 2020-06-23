function renderCharts(dimensions1Score,dimensions2Score){
    var reverse1 = dimensions1Score.reverse();
    var reverse2 = dimensions2Score.reverse();
    //var reverse1 = dimensions1Score;
    //var reverse2 = dimensions2Score;
/*人格因素生成曲线图*/
    $('#container16PF').highcharts({
        chart: {
            type: 'spline',
            plotBackgroundImage: '/report/images/h.jpg',
            plotBorderColor: '#000',
            plotBorderWidth: 0,
            inverted: true
        },
        title: {
            text: null
        },
        subtitle: {
            text: null
        },
        xAxis: {
            min:0,
            labels: {
                enabled: false
            },
            max: 15,
            tickInterval: 1,
            tickLength:0,
            reversed: false,
            showLastLabel: true
        },
        yAxis: {
            labels: {
                enabled: false
            },
            opposite: true,
            gridLineWidth: 0,//去掉Y轴线
            title: {
                text: null
            },
            lineWidth: 0,
            tickInterval: 1,
            min : 1,
            max : 10
        },
        legend: {
            enabled: false
        },
        tooltip: {
            enabled: false
        },
        plotOptions: {
            spline: {
                marker: {
                    enable: false
                },
                dataLabels:{
                    enabled:true
                }
            }
        },
        series: [{
            name: '人格因素得分',
            data: reverse1,
            color:'#B22222'
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

    /*次元人格生成曲线图*/
    $('#container16PFpersonality').highcharts({
        chart: {
            type: 'spline',
            plotBackgroundImage: '/report/images/cy.jpg',
            plotBorderColor: '#000',
            plotBorderWidth: 0,
            inverted: true
        },
        title: {
            text: null
        },
        subtitle: {
            text: null
        },
        xAxis: {
            labels: {
                enabled: false
            },
            tickInterval:1,
            tickLength:0,
            reversed: false,
            showLastLabel: true
        },
        yAxis: {
            labels: {
                enabled: false
            },
            opposite: true,
            gridLineWidth: 0,//去掉Y轴线
            title: {
                text: null
            },
            lineWidth: 0,
            tickInterval: 1,
            min : 1,
            max : 10
        },
        legend: {
            enabled: false
        },
        tooltip: {
            formatter: function() {
                tooltip.enabled = false;
            }
        },
        plotOptions: {
            spline: {
                marker: {
                    enable: false
                },
                dataLabels:{
                    enabled:true
                }
            }
        },
        series: [{
            name: '次元人格因素得分',
            data: reverse2,
            color:'#B22222'
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

    /*
    * 强行修改源码绘图区域宽度和高度.
    * 人格因素图
    * */
    var $width =  $("#container16PF .highcharts-background").attr("width");
    var $height =  $("#container16PF .highcharts-background").attr("height");
    $("#container16PF .highcharts-background").next().attr("width",$width);
    $("#container16PF .highcharts-background").next().attr("height",$height);
    $("#container16PF .highcharts-background").next().attr("x",0);
    $("#container16PF .highcharts-background").next().attr("y",0);
    $("#container16PF .highcharts-background").next().next().next().next().attr("width",$width);
    $("#container16PF .highcharts-background").next().next().next().next().attr("height",$height);
    $("#container16PF .highcharts-background").next().next().next().next().attr("x",0);
    $("#container16PF .highcharts-background").next().next().next().next().attr("y",0);
    $("#container16PF .highcharts-axis path").attr("style","display:none");

    /*
     * 强行修改源码绘图区域宽度和高度.
     * 次元人格因素
     * */
    var $width =  $("#container16PFpersonality .highcharts-background").attr("width");
    var $height =  $("#container16PFpersonality .highcharts-background").attr("height");
    $("#container16PFpersonality .highcharts-background").next().attr("width",$width);
    $("#container16PFpersonality .highcharts-background").next().attr("height",$height);
    $("#container16PFpersonality .highcharts-background").next().attr("x",0);
    $("#container16PFpersonality .highcharts-background").next().attr("y",0);
    $("#container16PFpersonality .highcharts-background").next().next().next().next().attr("width",$width);
    $("#container16PFpersonality .highcharts-background").next().next().next().next().attr("height",$height);
    $("#container16PFpersonality .highcharts-background").next().next().next().next().attr("x",0);
    $("#container16PFpersonality .highcharts-background").next().next().next().next().attr("y",0);
    $("#container16PFpersonality .highcharts-axis path").attr("style","display:none");

};

