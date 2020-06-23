function renderCharts(data){
	 $('#containerJobControle').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: null
        },
        xAxis: {
            categories: [' '],
            tickLength:0
        },
        yAxis: {
            min:16,
            title: {
                text: null
            },
            tickInterval: 10
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
                color:'rgb(252,213,181)',
                y: data
            }]
        }]
    });
}