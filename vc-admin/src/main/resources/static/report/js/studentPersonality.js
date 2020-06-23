function drawCharts(score) {
    $('#container').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: null
        },
        xAxis: {
            categories: ['得分'],
            tickLength:0
        },
        yAxis: {
            min: 0,
            max:60,
            lineWidth: 1,
            tickWidth:1,
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
                    enabled:true,
                    style: {
                        textShadow: '0px',
                        fontSize: "16px",
                        color:'#333'
                    }
                }
            }
        },
        series: [{
            data: [{
                name: '得分',
                color:'rgb(0,178,239)',
                y: score
            }]
        }]
    });
}