function renderCharts(data)
{
	
	 //根据得分赋值颜色
    for(var i=0;i<data.length;i++){
        switch(data[i].name){
            case '精神质':
                if(data[i].y < 56.7){
                    data[i].color = '#FAB447';
                }else if(data[i].y >= 56.7){
                    data[i].color = '#FA7147';
                }else{
                    alert('分值异常1');
                }
                break;
            case '内向-外向':
                if(data[i].y < 43.3){
                    data[i].color = '#6DE12E';
                }else if(data[i].y >= 43.3 && data[i].y <= 56.7){
                    data[i].color = '#FAB447';
                }else if(data[i].y > 56.7){
                    data[i].color = '#FA7147';
                }else{
                    alert('分值异常3');
                }
                break;
            case '情绪稳定性':
                if(data[i].y < 43.3){
                    data[i].color = '#6DE12E';
                }else if(data[i].y >= 43.3 && data[i].y <= 56.7){
                    data[i].color = '#FAB447';
                }else if(data[i].y > 56.7){
                    data[i].color = '#FA7147';
                }else{
                    alert('分值异常2');
                }
                break;
            case '掩饰':
                if(data[i].y >= 70){
                    data[i].color = '#FA7147';
                }else if(data[i].y < 70){
                    data[i].color = '#6de12e';
                }else{
                    alert('分值异常4');
                }
                break;
            default :
                alert('返回维度名称不匹配');
                break;
        }
    }

    $('#containerChild').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text:  null,
            style:{
                color:'#999'
            }
        },
        legend: {
            enabled: false
        },
        xAxis: {
            categories: [
                         '精神质',
                         '内向-外向',
                         '情绪稳定性',
                         '掩饰'
                     ],
            tickLength:0
        },
        yAxis: {
            min: 0,
            max:120,
            title: {
                text: null
            },
            tickInterval: 10
        },
        tooltip: {
            enabled:false
        },
        plotOptions: {
            column: {
                //pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: [{
            dataLabels: {
                enabled: true
            },
            data: data
        }],
        credits: {
            enabled:false
        },
        exporting: {
            enabled:false
        }
    });
	
   /* $('#containerChild').highcharts({
        chart: {
            type: 'line',
            plotBackgroundImage: '/report/images/personalityChild.jpg',
            plotBorderColor: '#000',
            plotBorderWidth: 1.5
        },
        title: {
            text: null
        },
        xAxis: {
            gridLineWidth: 0,
            gridLineColor: "#000",
            categories: [
                '精神质',
                '内向-外向',
                '情绪稳定性',
                '掩饰'
            ],
//            tickInterval: 1,
//            labels: {
//                formatter:function(){
//                    if(this.value == 0) {
//                        return " ";
//                    }else if(this.value == 1) {
//                        return "精神质";
//                    }else if(this.value == 2){
//                        return "内向-外向";
//                    }else if(this.value == 3){
//                        return "情绪稳定性";
//                    }else if(this.value == 4){
//                        return "掩饰";
//                    }else if(this.value == 5){
//                        return " ";
//                    }
//                }
//            },
            tickLength: 0
        },
        yAxis: [{
            min: 0,
            max: 120,
            title: {
                text: null
            },
            gridLineWidth: 0,
            tickLength: 7,
            tickWidth: 1,
            tickColor: '#000',
            tickInterval: 10
        }],
        tooltip: {
            enabled: false
        },
        legend: {
            enabled: false
        },
        credits: {
            enabled: false
        },
        exporting: {
            enabled: false
        },
        plotOptions: {
            line: {
                dataLabels: {
                    enabled: true
                },
                enableMouseTracking: false
            }
        },
        series: [{
            data: [data["精神质"], data["内向-外向"], data["情绪稳定性"], data["掩饰"]]
        }]
    });*/
}