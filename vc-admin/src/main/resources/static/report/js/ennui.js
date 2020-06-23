function renderEnnui(score1,score2,score3){
	 //highcharts生成图表js
    $('#container').highcharts({
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
                '情绪衰竭',
                '成就感低落',
                '玩世不恭'
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
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: [{
        	dataLabels: {
                enabled: true
            },
            data: [{
                name:"情绪衰竭",
                y:score1,
                color:"#D2B48C"
            },{
                name:"成就感低落",
                y:score2,
                color:"#33A1C9"
            },{
                name:"玩世不恭",
                y:score3,
                color:"#FFC0CB"
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
