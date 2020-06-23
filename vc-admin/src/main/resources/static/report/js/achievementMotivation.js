function renderCharts(data){
	$('#containerAM').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: null
        },
        xAxis: {
            categories: ['成就动机'],
            tickLength:0
        },
        yAxis: {
            title: {
                text: null
            },
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
                    enabled:true
                }
            }
        },
        series: [{
            data: [{
                name: '成就动机',
                y: data
            }]
        }]
    });
}