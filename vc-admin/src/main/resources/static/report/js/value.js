function renderCharts(data){
    //highcharts生成图表js
    $('#container').highcharts({
        chart: {
            type: 'column',
            plotBackgroundImage: '/report/images/columnBg.png',
            plotBorderColor: '#000',
            plotBorderWidth: 1
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
            categories: [
                '金钱权力',
                '名望成就',
                '家庭',
                '性爱',
                '生命',
                '知识技能',
                '道德',
                '法律',
                '舆论从众'
            ],
            tickLength:0,
            labels: {
                style: {
                    color: '#000', //刻度字体颜色
                    fontWeight: 'bold', //刻度字体加粗
                    fontSize:12 //刻度字体大小
                }
            }
        },
        yAxis: {
            gridLineWidth: 0,//去掉Y轴线
            min: 0,
            title: {
                text: null
            },
            max: 10,
            tickInterval: 1,
            labels: {
                align: 'right',
                x: -8,
                y: 5,
                style: {
                    color: '#000', //刻度字体颜色
                    fontWeight: 'bold', //刻度字体加粗
                    fontSize:12 //刻度字体大小
                }
            }
        },
        tooltip: {
            formatter: function() {
                tooltip.enabled = false;
            }
        },
        plotOptions: {
            series: {
                dataLabels: {
                    enabled: true,
                    rotation:90,
                    formatter: function () {    //格式化数值保留小数点后两位
                        return Highcharts.numberFormat(this.point.y, 2, ".", "")
                    },
                    y:-20
                }
            },
            column: {
                pointPadding: 0.2,
                borderWidth: 1,
                pointWidth:15
            }
        },
        series: [{
            data: data,
            color:'red'
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
    $(".highcharts-tracker rect").attr("height","3px");
}
function renderTable(data){
    for(var i = 0;i<data.length;i++){
        $("#"+(i+1)).text(data[i]);
    }
}
