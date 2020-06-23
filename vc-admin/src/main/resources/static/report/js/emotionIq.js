/**
 * 生成图表
 * @param {} data
 * @returns {} 
 */
function renderEmotion(data){
	$('#containerEmotionIq').highcharts({
        chart: {
            type: 'column',
            plotBackgroundImage: 'report/images/EmotionIqBg.jpg',
            plotBorderColor: '#000',
            plotBorderWidth: 1
        },
        title: {
            text: null,
            style:{
                color:'#999'
            }
        },
        xAxis: {
            categories: [
                '自我情绪认知',
                '情绪调控',
                '自我激励',
                '他人情绪认知',
                '人际关系管理'
            ],
            tickLength:0,
            labels: {
                style: {
                    color: '#000', //刻度字体颜色
                    fontWeight: 'bold', //刻度字体加粗
                    fontSize:12 //刻度字体大小
                }
            }
        },
        yAxis: {
            gridLineWidth: 0,
            min: 0,
            max:24,
            title: {
                text: null
            },
            tickInterval: 4,
            labels: {
                style: {
                    color: '#000', //刻度字体颜色
                    fontWeight: 'bold', //刻度字体加粗
                    fontSize:12 //刻度字体大小
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
            data: data,
            color:'red'
        }]
    });
    $(".highcharts-tracker rect").attr("height","3px");
    $("#containerEmotionIq .highcharts-background").next().next().next().next().next().find("path").attr("stroke","#000000");

}

/**
 * 生成表格数据
 * @param {} data
 * @returns {} 
 */
function renderTable(data){
    for(var i = 0;i<data.length;i++){
        $("#"+(i+1)).text(data[i]);
    }
}