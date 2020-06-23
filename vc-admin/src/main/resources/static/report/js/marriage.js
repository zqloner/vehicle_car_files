function renderMarriage(score1,score2,score3,score4){
	//highcharts生成图表js
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
            categories: [
                '婚姻满意度',
                '性格相容性',
                '夫妻交流',
                '性生活'
            ],
            tickLength:0
        },
        yAxis: {
            min: 0,
            title: {
                text: null
            }
        },
        tooltip: {
            formatter: function() {
                tooltip.enabled = false;
            }
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: [{
        	 dataLabels: {
                enabled: true
            },
            name: '',
            data: [score1,score2,score3,score4]
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