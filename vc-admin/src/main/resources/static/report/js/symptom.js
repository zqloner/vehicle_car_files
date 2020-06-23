function renderSymptom(names,scores){
	//highcharts生成图表js
    //根据后台返回得分判断柱形图颜色，柱状图颜色：得分＜2  绿色，2≤得分＜3  黄色，3≤得分＜4  橙色，4≤得分  红色
    $('#container').highcharts({
        chart: {
            type: 'column'
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
            categories: names,
            tickLength:0
        },
        yAxis: {
            min: 0,
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
                pointPadding: 0.2,
                borderWidth: 0,
                pointWidth:20,
                dataLabels:{
                    enabled:true,
                    rotation:90,
                    y:20,
                    style:{
                        textOutline:'none'
                    }
                }
            }
        },
        series: [{
            data: scores
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

function renderChart2 (data) {
    //根据得分赋值颜色
    if(data[0].y < 160){
        data[0].color = '#6DE12E';
    }else if(data[0].y >= 160){
        data[0].color = '#FA7147';
    }else{
        alert('分值异常');
    }
    $('#container_2').highcharts({
        chart: {
            type: 'column'
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
            categories: ['心理健康总分'],
            tickLength:0
        },
        yAxis: {
            min: 90,
            max:450,
            title: {
                text: null
            },
            tickInterval: 30
        },
        tooltip: {
            enabled:false
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0,
                dataLabels:{
                    enabled:true,
                    style:{
                        textOutline:'none'
                    }
                }
            }
        },
        series: [{
            data: data
        }],
        credits: {
            enabled:false
        },
        exporting: {
            enabled:false
        }
    });
  
}