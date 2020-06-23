function renderCharts(score) {
    $('#containerFamilyChildren').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: null
        },
        xAxis: {
            categories: [' '],
            tickLength: 0
        },
        yAxis: {
            min: 0,
            title: {
                text: null
            },
            tickInterval: 0.5
        },
        tooltip: {
            enabled: false
        },
        legend: {
            enabled: false
        },
        credits: {
            enabled: false
        },
        exporting: {
            enabled: false
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0,
                dataLabels: {
                    enabled: true
                }
            }
        },
        series: [{
            data: [{
                name: '家庭沟通',
                color: 'rgb(85,137,200)',
                y: score
            }]
        }]
    });
}