function renderCharts(chartsData){
    //highcharts生成图表js
    $('#containerSchoolmate').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: null,
            style:{
                color:'#999'
            }
        },
        legend: {
            enabled: false
        },
        xAxis: {
            categories: [
                '交谈',
                '交际与交友',
                '待人接物',
                '异性交往'
            ],
            tickLength:0
        },
        yAxis: {
            min: 0,
            title: {
                text: null
            }
        },
        tooltip: {
            formatter: function() {
                tooltip.enabled = false;
            }
        },
        plotOptions: {
            column: {
                dataLabels:{
                    enabled:true,
                    style:{
                        color:'#000'
                    }
                },
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: [{
            data: [{
                name:"交谈",
                y:chartsData["A"],
                color:"#D2B48C"
            },{
                name:"交际与交友",
                y:chartsData["B"],
                color:"#33A1C9"
            },{
                name:"待人接物",
                y:chartsData["C"],
                color:"#FFC0CB"
            },{
                name:"异性交往",
                y:chartsData["D"],
                color:"#FCE6C9"
            }]
        }],
        /*去掉右下角.com*/
        credits: {
            enabled:false
        },
        /*去掉右上角print&download*/
        exporting: {
            enabled:false
        }
    });
}