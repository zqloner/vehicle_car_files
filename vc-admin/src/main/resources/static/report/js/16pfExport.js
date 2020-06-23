function renderCharts(dimensions1Score, dimensions2Score) {
	var reverse1 = dimensions1Score.reverse();
	var reverse2 = dimensions2Score.reverse();
    /*人格因素生成曲线图*/
    $('#container16PF').highcharts({
        chart: {
            type: 'spline',
            plotBackgroundImage: '/report/images/h.jpg',
            plotBorderColor: '#000',
            plotBorderWidth: 0,
            inverted: true
        },
        title: {
            text: null
        },
        subtitle: {
            text: null
        },
        xAxis: {
            min:0,
            labels: {
                enabled: true,
                style: {
                    color: '#000000',
                    fontWeight:'bold'
                }
            },
            categories: ['紧张性', '自律性','独立性', '开放性','忧虑性', '世故性',
                '幻想性', '怀疑性','敏感性', '敢为性','有恒性', '兴奋性','恃强性',
                '稳定性','智慧性', '乐群性'],
            max: 15,
            tickInterval: 1,
            tickLength:0,
            reversed: false
        },
        yAxis: {
            labels: {
                enabled: true,
                style: {
                    color: '#000000',
                    fontWeight:'bold'
                }
            },
            opposite: true,
            gridLineWidth: 0,
            title: {
                text: null
            },
            lineWidth: 0,
            tickInterval: 1,
            min : 1,
            max : 10
        },
        legend: {
            enabled: false
        },
        tooltip: {
            enabled: false
        },
        plotOptions: {
            spline: {
                marker: {
                    enable: false
                },
                dataLabels:{
                    enabled:true
                }
            }
        },
        series: [{
            name: '人格因素得分',
            color:'#B22222',
            data: reverse1
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

    /*次元人格生成曲线图*/
    $('#container16PFpersonality').highcharts({
        chart: {
            type: 'spline',
            plotBackgroundImage: '/report/images/cy.jpg',
            plotBorderColor: '#000',
            plotBorderWidth: 0,
            inverted: true
        },
        title: {
            text: null
        },
        subtitle: {
            text: null
        },
        xAxis: {
            labels: {
                enabled: true,
                style: {
                    color: '#000000',
                    fontWeight:'bold'
                }
            },
            categories:['果敢与怯懦性','感情用事与安详机警性','内向与外向性','适应与焦虑性'],
            tickInterval:1,
            tickLength:0,
            reversed: false,
            showLastLabel: true
        },
        yAxis: {
            labels: {
                enabled: true,
                style: {
                    color: '#000000',
                    fontWeight:'bold'
                }
            },
            opposite: true,
            gridLineWidth: 0,
            title: {
                text: null
            },
            lineWidth: 0,
            tickInterval: 1,
            min : 1,
            max : 10
        },
        legend: {
            enabled: false
        },
        tooltip: {
            enabled: false
        },
        plotOptions: {
            spline: {
                marker: {
                    enable: false
                },
                dataLabels:{
                    enabled:true
                }
            }
        },
        series: [{
            name: '次元人格因素得分',
            color:'#B22222',
            data: reverse2
        }],
        credits: {
            enabled:false
        },
        exporting: {
            enabled:false
        }
    });
}