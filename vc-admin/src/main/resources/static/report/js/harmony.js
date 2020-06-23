function renderHarmony(score) {
	/*根据后台返回数据生成柱形图*/
    $('#container').highcharts({
        /*图表 type=column 柱形图*/
        chart: {
            type: 'column'
        },
        title: {
            text: null,
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
            categories: ['亲子融洽性问卷'],
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
            data: [{
                name:"亲子融洽性问卷",
                y:score,
                color:"#FFE384"
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