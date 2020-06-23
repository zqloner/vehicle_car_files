function renderPersonality(d1,d2,d3,d4) {
	//highcharts生成图表js
    $('#container').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text:  null,
            style:{
                color:'#999'
            }
        },
        legend: {
            enabled: false
        },
        xAxis: {
            categories: [
                '内外向',
                '神经质',
                '精神质',
                '掩饰'
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
            data: [d1,d2,d3,d4]
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