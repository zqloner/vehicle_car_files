function renderCharts(names,scores){
	$('#containerSubjectivity').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: null
        },
        xAxis: {
            categories: names,
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
                    enabled:true
                }
            }
        },
        series: [{
            data: [{
                name: '心理健康体验',
                color:'rgb(155,144,88)',
                y: scores[0]
            },{
                name: '心态平衡体验',
                color:'rgb(91,150,224)',
                y: scores[1]
            },{
                name: '人际适应体验',
                color:'rgb(229,159,157)',
                y: scores[2]
            },{
                name: '身体健康体验',
                color:'rgb(208,228,166)',
                y: scores[3]
            },{
                name: '目标价值体验',
                color:'rgb(178,162,199)',
                y: scores[4]
            },{
                name: '知足充裕体验',
                color:'rgb(255,202,151)',
                y: scores[5]
            },{
                name: '社会信心体验',
                color:'rgb(204,204,204)',
                y: scores[6]
            },{
                name: '成长进步体验',
                color:'rgb(255,255,162)',
                y: scores[7]
            },{
                name: '自我接受体验',
                color:'rgb(162,162,255)',
                y: scores[8]
            },{
                name: '家庭氛围体验',
                color:'rgb(157,217,234)',
                y: scores[9]
            }]
        }]
    });
}