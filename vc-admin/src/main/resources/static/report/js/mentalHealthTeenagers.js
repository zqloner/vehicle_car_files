//$(function(){
function container01(totalScore){
	$('#container_1').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: null
        },
        xAxis: {
            categories: ['心理健康得分'],
            tickLength:5
        },
        yAxis: {
            min: 0,
            max:90,
            lineWidth: 1,
            tickWidth:1,
            title: {
                text: null
            },
            plotLines:[{
                color:'#FD6601',
                dashStyle:'solid',
                value:65,
                width:2,
                zIndex:5
            }],
            tickInterval: 15
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
            column: {
                pointPadding: 0.2,
                borderWidth: 0,
                dataLabels:{
                    enabled:true,
                    style: {
                        textShadow: '0px',
                        fontSize: "16px",
                        color:'#333'
                    }
                }
            }
        },
        series: [{
            data: [{
                name: '心理健康得分',
                // 得分小于65分 用绿色表示 #8FEC7D
                // 得分大于等于65分 用橘色表示 #FDCB66
                color:'#FDCB66',
                y: totalScore
            }]
        }]
    });
}
    
function container02(names,datas){
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
        xAxis: {
            categories: names,
            gridLineWidth:1,
            tickLength:10
        },
        yAxis: {
            min: 0,
            max:14,
            title: {
                text: null
            },
            lineWidth: 1,
            tickWidth:1,
            tickInterval: 2,
            plotLines:[{
                color:'#FD6601',
                dashStyle:'solid',
                value:8,
                width:2,
                zIndex:5
            }]
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
        // 得分小于8分 用绿色表示 #8FEC7D
        // 得分大于等于8分 用橘色表示 #FDCB66
        series: [{
            data: datas
        }],
        legend: {
            enabled: false
        },
        tooltip: {
            enabled:false
        },
        credits: {
            enabled:false
        },
        exporting: {
            enabled:false
        }
    });
}
    
//});
