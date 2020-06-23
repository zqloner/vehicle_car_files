function renderCharts01(score1,score2){
	$('#containerMBTIcolumn').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: null
        },
        xAxis: {
            categories: ['外向 内向','实感 直觉','理性 感性','系统 弹性'],
            tickLength:0
        },
        yAxis: {
            min: 1,
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
                pointPadding: 0,
                borderWidth: 0,
                dataLabels:{
                    enabled:true
                }
            }
        },
        series: [{
            color:'rgb(119,147,60)',
            data: score1

        }, {
            color:'rgb(79,129,189)',
            data: score2
        }]
    });
}

function renderCharts02(ns,ds,ls){
	/*bar*/
    $('#containerMBTIbar').highcharts({
        chart: {
            type: 'bar'
        },
        title: {
            text: null
        },
        xAxis: {
            categories: ns,
            tickLength:0
        },
        yAxis: {
            min: 0,
            max:4,
            title: {
                text: null
            },
            tickInterval: 1,
            labels: {
                x:25,
                formatter:function(){
                    if(this.value == 0) {
                        return "轻微";
                    }else if(this.value == 1) {
                        return "中等";
                    }else if(this.value == 2){
                        return "明显";
                    }else if(this.value == 3){
                        return "强";
                    }
                }
            }
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
            bar: {
                dataLabels: {
                    enabled: false
                }
            }
        },
        series: [{
            /*
            * y:     1==轻微，2==中等，3==明显，4==强
            * color：轻微用绿色表示 rgb(140,182,95),中等用黄色表示 rgb(255,255,15),明显用橙色表示 rgb(255,196,15),强用红色表示 rgb(190,10,10)
            * */
            data: [{
                color:ls[0],
                y:ds[0]
            },{
                color:ls[1],
                y:ds[1]
            },{
                color:ls[2],
                y:ds[2]
            },{
                color:ls[3],
                y:ds[3]
            }]
        }]
    });
}

function renderCharts03(a,la,b,lb){
	//alert(la);
	 /*column*/
    $('#containerColumn').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: null
        },
        xAxis: {
            categories: ['弹性型 系统型','感性型 理性型','直觉型 实感型','内向型 外向型'],
            tickLength:0
        },
        yAxis: {
            min: 1,
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
                pointPadding: 0,
                borderWidth: 3,
                dataLabels:{
                    enabled:true
                }
            }
        },
        series: [{
            /*
            * 一共四组数据，需要对比出每一组的高分和低分，
            * 高分颜色显示 color:'rgb(101,164,242)'，低分颜色显示 color:'rgb(218,218,218)'，如果两个分数一样颜色都显示 color:'rgb(101,164,242)
            *
            * 第一组：弹性型 and 系统型
            * 第二组：理性型 and 感性型
            * 第三组：直觉型 and 实感型
            * 第四组：内向型 and 外向型
            * */
            data: [{
                name:'弹性型',
                color:la[0],
                y:a[0]
            },{
                name:'理性型',
                color:la[1],
                y:a[1]
            },{
                name:'直觉型',
                color:la[2],
                y:a[2]
            },{
                name:'内向型',
                color:la[3],
                y:a[3]
            }]
        },{
            data: [{
                name:'系统型',
                color:lb[0],
                y:b[0]
            },{
                name:'感性型',
                color:lb[1],
                y:b[1]
            },{
                name:'实感型',
                color:lb[2],
                y:b[2]
            },{
                name:'外向型',
                color:lb[3],
                y:b[3]
            }]
        }
        ]
    });
}


