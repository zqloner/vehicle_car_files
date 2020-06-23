/**
 * Created by wangyiran on 23/2/2016.
 */
function renderCharts(data) {
    $('#containerTotality').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: null
        },
        xAxis: {
            categories: [
                '对健康的担心',
                '精力',
                '对生活的满足和兴趣',
                '忧郁或愉快的心境',
                '对感情和行为的控制',
                '松弛与紧张'
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
            data: [{
                name: '对健康的担心',
                y: data['对健康的担心']
            }, {
                name: '精力',
                y: data['精力']
            }, {
                name: '对生活的满足和兴趣',
                y: data['对生活的满足和兴趣']
            }, {
                name: '忧郁或愉快的心境',
                y: data['忧郁或愉快的心境']
            }, {
                name: '对感情和行为的控制',
                y: data['对感情和行为的控制']
            }, {
                name: '松弛与紧张',
                y: data['松弛与紧张']
            }]
        }]
    });
}
