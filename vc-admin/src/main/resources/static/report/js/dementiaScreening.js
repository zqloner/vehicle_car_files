

//图形方法
var chartFunction = {
    //老年痴呆总分分布图
    columnChart: function (data) {
        //根据得分赋值颜色
        if(data[0].y >= 0 && data[0].y <= 5){
            data[0].color = '#6DE12E';
        }else if(data[0].y >= 5.5 && data[0].y < 8){
            data[0].color = '#FAB447';
        }else if(data[0].y >= 8){
            data[0].color = '#FA7147';
        }else{
            alert('分值异常');
        }
        //初始化图表
        $('#column_container').highcharts({
            chart: {
                type: 'column'
            },
            title: {
                text: null
            },
            xAxis: {
                labels:{
                  enabled:false
                },
                gridLineWidth:0,
                tickLength:0
            },
            yAxis: {
                min: 0,
                max:32,
                title: {
                    text: null
                },
                lineWidth: 1,
                tickWidth:1,
                tickInterval: 8
            },
            plotOptions: {
                column: {
                    pointPadding: 0.2,
                    borderWidth: 0,
                    dataLabels:{
                        enabled:true,
                        format:'{point.y:.1f}'
                    }
                }
            },
            series: [{
                data: data
            }],
            legend: {
                enabled: false
            },
            tooltip: {
                enabled:false
            },
            credits: {
                enabled:false
            },
            exporting: {
                enabled:false
            }
        });
    },
    //老年痴呆各维度得分分布图
    barChart: function (data) {
        //初始化图表
        $('#bar_container').highcharts({
            chart: {
                type: 'bar'
            },
            title: {
                text: null
            },
            xAxis: {
                categories:['思考和记忆','日常生活'],
                gridLineWidth:1,
                tickLength:10
            },
            yAxis: {
                min: 0,
                max:18,
                title: {
                    text: null
                },
                lineWidth: 1,
                tickWidth:1,
                tickInterval: 6
            },
            plotOptions: {
                bar: {
                    pointPadding: 0.2,
                    borderWidth: 0,
                    dataLabels:{
                        enabled:true,
                        format:'{point.y:.1f}'
                    }
                }
            },
            series: [{
                data: data
            }],
            legend: {
                enabled: false
            },
            tooltip: {
                enabled:false
            },
            credits: {
                enabled:false
            },
            exporting: {
                enabled:false
            }
        });
    }
}


var topCall={
	"level_1" : "该老年人没有老年痴呆。",
	"level_2" : "该老年人可能患有老年痴呆。",
	"level_3" : "该老年人患有老年痴呆的可能性极大。"
} 

var scoreCall={
	"score1" : "该老年人的总得分为totalScore分，没有老年痴呆。",
	"score2" : "该老年人的总得分为totalScore分，可能患有老年痴呆。",
	"score3" : "该老年人的总得分为totalScore分，患有老年痴呆的可能性极大。"
} 

var queCall={
	"1" : "日常活动有改变",
	"2" : "精神状态减退",
	"3" : "记东西困难",
	"4" : "忘记自己放的东西在哪",
	"5" : "忘记东西平时放的地方",
	"6" : "忘记朋友的名字",
	"7" : "忘记家人的名字",
	"8" : "忘记自己要说的话",
	"9" : "用词有困难",
	"10" : "说错误的词语",
	"11" : "总谈及过去",
	"12" : "忘记上次见面时间",
	"13" : "忘记前天发生的事",
	"14" : "忘记自己在哪里",
	"15" : "容易迷路",
	"16" : "在自己家迷路",
	"17" : "做家务活有困难",
	"18" : "忘记以前的技能或爱好",
	"19" : "支付钱财有困难",
	"20" : "适应日常生活有困难",
	"21" : "思维和理解力变弱",
	"22" : "自己吃饭困难",
	"23" : "自己穿衣服有困难",
	"24" : "自己上厕所有困难",
	"25" : "睡眠习惯改变"
}

$(function () {
	
	var data = $("#data").text();
	var obj = JSON.parse(data);
	     
	//是否呈现了4-28题  0：否  1:是
	var isAllAppear = obj[0].isAllAppear;
	if(isAllAppear == 0){
		$("#title").text('');
		$("#title").append('该老年人不存在老年痴呆的迹象。');
		
		$("#isAllAppear").hide();
		$("#haveGot").hide();
		
	}else{
		//总分
		var totalScore = obj[0].totalScore;
		var dims =obj[0].dims;
		//维度分
		var skhjy = dims['1'];
		var rcsh = dims['2'];
		$("#dimsScore").text('');
		$("#dimsScore").append('该老年人在“思考和记忆”方面的得分为'+skhjy+'分，在“日常生活”方面的得分为'+rcsh+'分。');
		//维度中得分大于0的题目
		var ql1 = dims['1queList'];
		var ql2 = dims['2queList'];
		
		if(totalScore >0 && totalScore <= 5){
			$("#haveGot").hide();
			
			$("#title").text('');
			$("#title").append(topCall['level_1']);
			
			$("#scoreCall").text('');
			$("#scoreCall").append(scoreCall['score1'].replace('totalScore',totalScore));
			
			var dimName="";
			if(skhjy != 0){
				dimName += "思考和记忆、";
			}
			if(rcsh != 0){
				dimName += "日常生活、";
			}
			$("#quesCall").append("<p>说明，虽然该老年人没有老年痴呆，但在“"+dimName.substring(0,dimName.length-1)+"”方面有时也会遇到些困难。</p>")
			
		}else if(5.5 <= totalScore && totalScore < 8){
			$("#noHave").hide();
			
			$("#title").text('');
			$("#title").append(topCall['level_2']);
			
			$("#scoreCall").text('');
			$("#scoreCall").append(scoreCall['score2'].replace('totalScore',totalScore));
			
			var dimName="";
			if(skhjy != 0){
				dimName += "思考和记忆、";
			}
			if(rcsh != 0){
				dimName += "日常生活、";
			}
			$("#quesCall").append("<p>说明该老年人在“"+dimName.substring(0,dimName.length-1)+"”方面会遇到困难。</p>");
			
		}else{
			$("#noHave").hide();
			
			$("#title").text('');
			$("#title").append(topCall['level_3']);
			
			$("#scoreCall").text('');
			$("#scoreCall").append(scoreCall['score3'].replace('totalScore',totalScore));
			
			var dimName="";
			if(skhjy != 0){
				dimName += "思考和记忆、";
			}
			if(rcsh != 0){
				dimName += "日常生活、";
			}
			$("#quesCall").append("<p>说明该老年人在“"+dimName.substring(0,dimName.length-1)+"”方面会遇到困难。</p>")
		}
		
		if(ql1 !=null && ql1 !="" ){
			var skhjyCall ="在“思考和记忆”方面:";
			for(var i=0; i<ql1.length ; i++){
				skhjyCall += queCall[ql1[i]]+"、";
			}
			$("#quesCall").append("<p>"+skhjyCall.substring(0,skhjyCall.length-1)+"。</p>");
		}
		
		if(ql2 !=null && ql2 !=""  ){
			var rcshCall ="在“日常生活”方面:";
			for(var i=0; i < ql2.length ;i++){
				rcshCall += queCall[ql2[i]]+"、";
			}
			$("#quesCall").append("<p>"+rcshCall.substring(0,rcshCall.length-1)+"。</p>")
		}
		
		//老年痴呆总分分布图
		var dataColumn = [
			{
				name:"老年痴呆",
				y:totalScore
			}
			];
		//老年痴呆各维度得分分布图
		var dataBar = [
			{
				name:"思考和记忆",
				y:skhjy,
				color:'#FF9900'
			},
			{
				name:"日常生活",
				y:rcsh,
				color:'#FFCC00'
			}
			];
		
		chartFunction.columnChart(dataColumn);
	    chartFunction.barChart(dataBar);
	}
    
});