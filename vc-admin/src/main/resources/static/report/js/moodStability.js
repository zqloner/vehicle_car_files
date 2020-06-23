function renderCharts(data){
	 $('#containerMood').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: null
        },
        xAxis: {
            categories: ['情绪稳定性'],
            tickLength:0
        },
        yAxis: {
            min: 20,
            title: {
                text: null
            },
            tickInterval: 5
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
            data: [{
                name: '情绪稳定性',
                y: data
            }]
        }]
    });
}