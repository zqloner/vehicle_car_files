//$(function(){
function Echarts(biaodaScore,lingtingScore){
    var data=[
        {value:biaodaScore},
        {value:lingtingScore}
    ];
    communication(data);
    function communication(data){
        var myChart=echarts.init(document.getElementById('echarts'));
        var option={
            title:{
                left:'center',
                bottom:'20',
                text:'沟通能力各维度得分图',
                textStyle:{
                    fontSize:16
                }
            },
            tooltip:{//鼠标悬浮
                trigger:'axis'
            },
            grid: {//调整边距
            	top: '2%',
                bottom: '25%',
                containLabel: true
            },
            xAxis: {
                data: ['表达能力','聆听能力'],
                axisLine:{show:false},
                axisTick:{show:false}//隐藏刻度
            },
            yAxis: [
                {
                    type:'value',
                    min:0,
                    max:40,
                    interval:5,//默认一次增加多少
                    axisLine:{show:false},//隐藏轴线
                    axisLabel:{show:false},//隐藏值
                    splitLine:{show:false},//隐藏分割线
                    axisTick:{show:false}//隐藏刻度
                }
            ],
            series:[
                {
                    name:'分数',
                    type:'bar',
                    barWidth:50,
                    itemStyle:{
                        normal:{
                            color: function (params){
                                var colorList = ['#ACE1E7','#FFD4AD'];
                                return colorList[params.dataIndex];
                            },
                            label:{//显示数值
                                show:true,
                                position:'top',
                                formatter:'{c}'
                            }
                        }
                    },
                    data:data
                }
            ]
        };
        myChart.setOption(option);
    }
} 
//});