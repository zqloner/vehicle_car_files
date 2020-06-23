function renderCharts(totalDimensions) {

/* 1 上级满意
		2 工作内容
		3 组织认同
		4 工作量
		5 工作环境
		6 经济奖励
		7 事业前景
		8 同事关系
    */
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
                '工作内容',
                '组织认同',
                '工作量',
                '工作环境',
                '经济奖励',
                '事业前景',
                '同事关系'
            ],
            tickLength:0
        },
        yAxis: {
            min: 0,
            title: {
                text: null
            },
            tickInterval: 1
        },
        credits: {
            enabled:false
        },
        exporting: {
            enabled:false
        },
        tooltip: {
            formatter: function() {
                tooltip.enabled = false;
            }
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
        	data: totalDimensions
        }]
    });
};