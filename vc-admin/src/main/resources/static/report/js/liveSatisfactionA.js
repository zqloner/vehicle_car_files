$(function(){
	var jsonVal = document.getElementById("data").innerHTML;
	var myobj=eval('(' + jsonVal + ')');
	var objArr = myobj[0].data; 
	var score = objArr.dimensionGetScore;
	var dimensionLevel = objArr.dimensionLevel;
	document.getElementById("score").innerHTML=score;
	document.getElementById("score01").innerHTML=score;
	if(dimensionLevel==1){
		document.getElementById("evaluationResults01").innerHTML='您对生活的满意度很低，生活满意度指数低于大部分人，说明您对自己的当前生活状况不满意。';
		document.getElementById("evaluationResults").innerHTML='您对生活的满意度很低，生活满意度指数低于大部分人，说明您对自己的当前生活状况不满意。';
		document.getElementById("specificBx").innerHTML='认为生活的绝大部分是单调的，有时甚至觉得生活就像例行公事，没有任何事情值得去做。对许多事感到厌烦，即使参与某项活动也几乎体会不到意义或乐趣。悲观、抱怨、痛苦、感到孤独，许多时间里感到忧郁，有时在与人接触时会发脾气。生活中最重要的是快乐，不要对生活太挑剔，也不要沉浸在过去美好的生活中或是总是望着远处美好的生活，用心来享受现在，生活中不是缺少美好，而是缺少发现的眼睛。从生活的点滴去寻找快乐吧！';
	}else if(dimensionLevel==2){
		document.getElementById("evaluationResults01").innerHTML='您对生活的满意度处于中等水平，和大部分人的水平相当。';
		document.getElementById("evaluationResults").innerHTML='您对生活的满意度处于中等水平，和大部分人的水平相当。';
		document.getElementById("specificBx").innerHTML='对当前的生活满意度一般，既没有感觉自己很幸福也没有觉得生活乏味。对生活有热情，但仅限于一、二项特殊的兴趣，或仅限于某个阶段。当事情出现差错并可能妨碍积极享受生活时会表现出失望或生气，有时也会对生活淡漠。似乎从所从事的活动中得不到什么乐趣。应该学会知足常乐，是否快乐，很大程度上不是取决于外界，而是由我们的心境决定！';
	}else if(dimensionLevel==3){
		document.getElementById("evaluationResults01").innerHTML='您对生活的满意度很高，生活满意度指数超出了大部分人，说明您对自己当前的生活很满意。';
		document.getElementById("evaluationResults").innerHTML='您对生活的满意度很高，生活满意度指数超出了大部分人，说明您对自己当前的生活很满意。';
		document.getElementById("specificBx").innerHTML='感觉当前是一生中最美好的时光。喜欢做事情，甚至呆在家里也感到愉快。乐于结交朋友，追求自我完善。对生活的多个领域都表现出热情。感觉自己已经实现或即将实现自己的人生目标。生活几乎总是愉快的、乐观的，也经常能给身边的人带来快乐。';
	}
    //highcharts生成图表js
    $('#containerLiveSatisfactionA').highcharts({
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
            categories: [' '],
            tickLength:0
        },
        yAxis: {
            min: 0,
            title: {
                text: null
            },
            tickInterval: 5
        },
        tooltip: {
            formatter: function() {
                tooltip.enabled = false;
            }
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
                name:"生活满意度指数",
                y:parseInt(objArr.dimensionGetScore)
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
});