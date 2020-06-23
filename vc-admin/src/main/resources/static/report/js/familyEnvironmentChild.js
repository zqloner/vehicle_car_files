function renderCharts(data) {
    $('#containerFamilyEnvironmentChild').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: null
        },
        xAxis: {
            categories: [
                '亲密度',
                '情感表达',
                '矛盾性',
                '独立性',
                '成功性',
                '知识性',
                '娱乐性',
                '道德宗教观',
                '组织性',
                '控制性'
            ],
            tickLength: 0
        },
        yAxis: {
            min: 0,
            title: {
                text: null
            },
            tickInterval: 1
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
            data: [data["亲密度"], data["情感表达"], data["矛盾性"], data["独立性"], data["成功性"], data["知识性"], data["娱乐性"], data["道德宗教观"], data["组织性"], data["控制性"]]
        }]
    });
}