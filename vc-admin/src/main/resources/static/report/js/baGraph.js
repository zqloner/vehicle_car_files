//注册图表
layui.define(['jquery'],function(exports){
    //声明使用
    var $ = layui.jquery;
    //定义图表渲染的方法
    var baGraph = {
        //柱形图（横向）----评估结果
        assessment:function(data){
            var category = [],reverseValue=[],max;
            for(var i=0;i < data.data.length;i++){
                category.push(data.data[i].name);
                reverseValue.push(data.data[i].value);
            }
            if(data.myChart == 'assessmentResults'){
                max = 3;
            }else if(data.myChart == 'professional'){
                max = 4;
            }
            var myChart =echarts.init(document.getElementById( data.myChart));
            var option = {
                animation:false,
                grid: {top: '20', bottom: '0', left: '0', right: '0', containLabel: true},
                xAxis : {
                    type : 'value',
                    boundaryGap: [0, 0.01],
                    axisLine:{show:false},
                    axisTick:{show:false},
                    splitArea:{show:false},
                    max:max,
                    minInterval: 1,
                    splitLine:{lineStyle:{width:2, color:'#f3f3f3',type :'dashed'}},
                    axisLabel:{show:false}
                },
                yAxis : {
                    type: 'category',
                    axisTick:{show:false},
                    splitLine:{show:false},
                    splitArea:{show:false},
                    axisLabel:{color:'#333', fontSize: 12,},
                    axisLine:{lineStyle:{width:2, color:'#f3f3f3',type :'dashed'}},
                    data : category,
                },
                series : [
                    {
                        name:'评估结果',
                        type: 'bar',
                        data: reverseValue,
                        //柱子宽度
                        barWidth: '20',
                        //柱子颜色设置
                        itemStyle: {
                            normal: {
                                color: function (val) {
                                    if(data.myChart == 'assessmentResults'){
                                        if(val.value ==1){
                                            return "#ff3b30"
                                        }else if(val.value ==2){
                                            return "#fc0"
                                        }else if(val.value ==3){
                                            return "#4cd964"
                                        }
                                    }else if(data.myChart == 'professional'){
                                        if(val.value ==1){
                                            return "#ff3b30"
                                        }else if(val.value ==2){
                                            return "#ff9500"
                                        }else if(val.value ==3){
                                            return "#fc0"
                                        }else if(val.value ==4){
                                            return "#4cd964"
                                        }
                                    }

                                }
                            }
                        }
                    }
                ]
            };
            myChart.setOption(option);
        },
        // 柱形图（横向）----人格特征/自我效能感
        resultsShow:function(data){
            var category = [],reverseValue=[];
            for(var i=0;i < data.data.length;i++){
                category.push(data.data[i].name);
                reverseValue.push(data.data[i].value);
            }
            var myChart =echarts.init(document.getElementById(data.myChart));
            var option = {
                animation:false,
                grid: {top: '20', bottom: '0', left: '0', right: '10', containLabel: true},
                xAxis : {
                    type : 'value',
                    boundaryGap: [0, 0.01],
                    axisLine:{lineStyle:{width:2, color:'#f3f3f3'}},
                    axisTick:{show:false},
                    splitArea:{show:false},
                    max:50,
                    minInterval: 1,
                    splitLine:{lineStyle:{width:2, color:'#f3f3f3',type :'dashed'}},
                    axisLabel:{color:'#333', fontSize: 12}
                },
                yAxis : {
                    type: 'category',
                    axisTick:{show:false},
                    splitLine:{show:false},
                    splitArea:{show:false},
                    axisLabel:{color:'#333', fontSize: 14,},
                    axisLine:{lineStyle:{width:2, color:'#f3f3f3'}},
                    data : category,
                },
                series : [
                    {
                        name:'评估结果',
                        type: 'bar',
                        data: reverseValue,
                        //柱子宽度
                        barWidth: '20',
                        //柱子颜色设置
                        itemStyle: {
                            normal: {
                                color: function (val) {
                                    if(data.myChart == 'personality'){
                                        if(val.value <27){
                                            return "#ff3b30"
                                        }else if(27<=val.value && val.value <34){
                                            return "#fc0"
                                        }else if(34<=val.value && val.value <=45){
                                            return "#4cd964"
                                        }
                                    }else if(data.myChart == 'selfEfficacy'){
                                        if(val.value <30){
                                            return "#ff3b30"
                                        }else if(30<=val.value && val.value <40){
                                            return "#fc0"
                                        }else if(40<=val.value && val.value <=50){
                                            return "#4cd964"
                                        }
                                    }

                                }
                            }
                        },
                        //数据点设置
                        label:{
                            normal:{
                                show:true,
                                position:'right',
                                formatter: '{c}',
                                color:'#181818'
                            },
                        },
                    }
                ]
            };
            myChart.setOption(option);
        },
        //雷达图
        radarChart:function (data) {
            var category = [],reverseValue=[];
            for(var i=0;i < data.data.length;i++){
                reverseValue.push(data.data[i].value);
            }
            var myChart=echarts.init(document.getElementById(data.myChart));
            var option = {
                radar: {
                    name: {textStyle: {color: '#666', backgroundColor: '#fff',fontSize:10}},
                    indicator: [
                        {name:"自然观察智能", max:30},
                        {name:"自知自省智能", max:30},
                        {name:"音乐-节奏智能", max:30},
                        {name:"视觉-空间智能", max:30},
                        {name:"人际交往智能", max:30},
                        {name:"身体-运动智能", max:30},
                        {name:"逻辑-数理智能", max:30},
                        {name:"言语-语言智能", max:30},
                    ],
                    radius: '48%',
                    axisLine:{lineStyle:{color:'rgba(200,200,200,0.4)'}},//设置轴线颜色
                    splitArea: {show: false},//设置隔行颜色
                    splitLine:{lineStyle:{color:'rgba(200,200,200,0.3)'}}//设置分割线的颜色
                },
                series: [{
                    name: '具体分析',
                    type: 'radar',
                    data : [
                        {
                            value:reverseValue,
                            name : '具体分析',
                            symbol: "circle",//去掉圆点
                            symbolSize: 4,
                            itemStyle:{
                                normal: {
                                    color:{
                                        formatter:function(params) {   // 颜色  颜色写在外面，就是圆点和文字同种颜色
                                            console.log(params.data);   //画重点！！！ 循环输出数据
                                            debugger;
                                            if (params.data <= 17) {
                                                return '#ff3b30';
                                            } else if (17 < params.data && params.data <= 21) {
                                                return '#fc0';
                                            } else if (21 < params.data && params.data <= 30) {
                                                return '#4cd964'
                                            }
                                        }
                                    }
                                }
                            },
                            label: {
                                normal: {
                                    show: true,
                                    formatter:function(params) {
                                        return params.value;
                                    }
                                }
                            },
                            areaStyle: {
                                normal: {
                                    opacity: 0.1,
                                    color: new echarts.graphic.RadialGradient(0.5, 0.5, 1, [
                                        {color: '#B8D3E4', offset: 0},
                                        {color: '#72ACD1', offset: 1}
                                    ])
                                }
                            },
                        }
                    ],
                    lineStyle:{
                        normal:{
                            color:'#007aff',
                            width:1
                        }
                    }

                }]
            };
            myChart.setOption(option);
        }
    };
    exports("baGraph",baGraph);
});