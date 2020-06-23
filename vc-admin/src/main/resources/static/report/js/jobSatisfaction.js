function renderCharts(totalDimensions) {
    $('#containerJob').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: null
        },
        xAxis: {
            categories: [
                '上级满意',
                '公司认同',
                '工作内容',
                '工作量',
                '同事关系',
                '工作环境',
                '经济奖励',
                '事业前景'
            ],
            tickLength: 0
        },
        yAxis: {
            min: 0,
            title: {
                text: null
            },
            tickInterval: 0.5
        },
        credits: {
            enabled: false
        },
        exporting: {
            enabled: false
        },
        tooltip: {
            enabled: false
        },
        legend: {
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
                name: '上级满意',
                y: totalDimensions['上级满意']
            }, {
                name: '公司认同',
                y: totalDimensions['公司认同']
            }, {
                name: '工作内容',
                y: totalDimensions['工作内容']
            }, {
                name: '工作量',
                y: totalDimensions['工作量']
            }, {
                name: '同事关系',
                y: totalDimensions['同事关系']
            }, {
                name: '工作环境',
                y: totalDimensions['工作环境']
            }, {
                name: '经济奖励',
                y: totalDimensions['经济奖励']
            }, {
                name: '事业前景',
                y: totalDimensions['事业前景']
            }]
        }]
    });
}