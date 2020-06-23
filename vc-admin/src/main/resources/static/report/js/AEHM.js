$(function(){
var jsonVal = document.getElementById("data").innerHTML;
var myobj=eval('(' + jsonVal + ')');
var objArr = myobj[0].data;
var score = objArr[0].dimensionGetScore;
var titleStr = objArr[0].titleStr;
var str ='['+score+']';
var myobj1=eval('(' + str + ')');
document.getElementById("score").innerHTML=score;
document.getElementById("score1").innerHTML=score;
if(score>32.01){
	document.getElementById("title").innerHTML="超过了常模指数范围，说明他比大多数阿尔茨海默病患者的生活质量要好。";
	document.getElementById("result").innerHTML="超过了常模指数范围，说明他比大多数阿尔茨海默病患者的生活质量要好。建议其照顾者继续耐心细致的做好护理，精心呵护其饮食起居，不断提高护理质量。";

}else if(score>=24.93&&score<=32.01){
	document.getElementById("title").innerHTML="在常模指数范围内，说明他的生活质量水平与大多数阿尔茨海默病患者相当。";
	document.getElementById("result").innerHTML="在常模指数范围内，说明他的生活质量水平与大多数阿尔茨海默病患者相当。具体表现为：在"+titleStr+"题方面需提高护理质量。建议其主要照顾者提高相关的护理知识和应对技巧，从而提高受测者的生活质量。";

}else if(score<24.93){
	document.getElementById("title").innerHTML="低于常模指数范围，说明他比大多数阿尔茨海默病患者的生活质量水平要差。";
	document.getElementById("result").innerHTML="低于常模指数范围，说明他比大多数阿尔茨海默病患者的生活质量水平要差。具体表现为：在"+titleStr+"题方面需提高护理质量。建议根据受测者的经济能力、居住条件、身体健康状况等采取合理的措施，稳定他的情绪，提高他对事物的兴趣，同时亲人朋友应加强对受测者的关心和支持。";

}	


    $('#containerAEHM').highcharts({
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
            categories: ['总分'],
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
            enabled:false
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
            data: myobj1
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
