function renderCharts(chartsData) {
    $('#containerManage').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: null
        },
        xAxis: {
            categories: [
                '激励型',
                '控制型',
                '合作型',
                '敏感型'
            ],
            tickLength: 0
        },
        yAxis: {
            min: 0,
            title: {
                text: null
            }
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
                name: '激励型',
                color: 'rgb(171,198,242)',
                y: chartsData['激励型']
            }, {
                name: '控制型',
                color: 'rgb(255,207,135)',
                y: chartsData['控制型']
            }, {
                name: '合作型',
                color: 'rgb(106,173,255)',
                y: chartsData['合作型']
            }, {
                name: '敏感型',
                color: 'rgb(243,226,143)',
                y: chartsData['敏感型']
            }]
        }]
    });
}