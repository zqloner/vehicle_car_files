function gad7(score) {
    $('#containerGAD7').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: null
        },
        xAxis: {
            categories: ['焦虑得分'],
            tickLength:0,
            lineColor:"rgb(255,173,92)"
        },
        yAxis: {
            min: 0,
            lineWidth: 1,
            tickWidth:1,
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
                    },
                    y:50
                }
            }
        },
        series: [{
            data: [{
                name: '焦虑得分',
                color:'#FFCB9F',
                y: score
            }]
        }]
    });
}