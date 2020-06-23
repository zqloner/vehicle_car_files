//$(function(){
function Echarts(score){
    var obj = {value:score};
    rosenberg(obj);
    function rosenberg(data){
        var myChart=echarts.init(document.getElementById('echarts'));
        // var num=data.length,Arr=[];
        // for(var i=0;i<num;i++){
        //     Arr.push(data[i].name);
        // }
        var  option = {
            title:{
                left:'center',
                bottom:'40',
                text:'认知融合得分图',
                textStyle:{
                    fontSize:16
                }
            },
            legend: {//配置legend，这里的data，要对应type为‘bar’的series数据项的‘name’名称，作为图例的说明
                data:['低分：<21','中分：(21-41)','高分：>41'],
                selectedMode:false,  //图例禁止点击
                top:0,
                itemWidth:23,
                itemHeight:6,
                textStyle: {
                    color: '#707070',
                    fontStyle: 'normal',
                    fontWeight: 'normal',
                    fontFamily: 'sans-serif',
                    fontSize: 12
                }
            },
            grid: {
                z:1,//grid作为柱状图的坐标系，其层级要和仪表图层级不同，同时隐藏
                show:false,
                left: '-30%',
                right: '4%',
                bottom: '2%',
                containLabel: true,
                splitLine:{
                    show: false    //隐藏分割线
                }
            },
            xAxis : [   //这里有很多的show，必须都设置成不显示
                {
                    type : 'category',
                    data : [],
                    axisLine: {
                        show: false
                    },
                    splitLine:{
                        show: false
                    },
                    splitArea: {
                        interval: 'auto',
                        show: false
                    }
                }
            ],
            yAxis : [ //这里有很多的show，必须都设置成不显示
                {
                    type : 'value',
                    axisLine: {
                        show: false
                    },
                    splitLine:{
                        show: false
                    }
                }
            ],
            toolbox: {
                show: false
            },
            series : [
                {
                    name: '结果分析',
                    type: 'gauge',
                    startAngle:200,
                    endAngle:-20,
                    top:50,
                    min:9,
                    max:63,
                    detail: {formatter:'{value}'},
                    axisLine: {
                        show: true,
                        lineStyle: {
                            width: 30,
                            shadowBlur: 0,
                            color: [
                                [0.22222222, '#ff0000'],
                                [0.59259259, '#ffc000'],
                                [1, '#43e32d']
                            ]
                        }
                    },
                    axisTick: {
                        show: false
                    },
                    axisLabel: {
                        show: false
                    },
                    splitLine: {
                        show: false
                    },
                    data: data//数据获取
                },
                {
                    name:'低分：<21',//图例
                    type:'bar',
                    barWidth: '60%',  //不显示，可以随便设置
                    data:[0],
                    itemStyle: {
                        normal: {
                            color: '#ff0000'  //这里的图例要注意，颜色设置和仪表盘的颜色对应起来
                        }
                    }
                },
                {
                    name:'中分：(21-41)',//图例
                    type:'bar',
                    barWidth: '60%',
                    data:[0],
                    itemStyle: {
                        normal: {
                            color: '#ffc000'
                        }
                    }
                },
                {
                    name:'高分：>41',//图例
                    type:'bar',
                    barWidth: '60%',
                    data:[0],
                    itemStyle: {
                        normal: {
                            color: '#43e32d'
                        }
                    }
                }
            ]
        };
        myChart.setOption(option);
    }
} 
//})