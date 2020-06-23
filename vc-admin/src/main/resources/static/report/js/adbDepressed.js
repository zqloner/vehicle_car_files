
	var queCall1={
		"1" : "对事物不感兴趣",
		"2" : "悲观",
		"3" : "自责",
		"4" : "焦虑、担心",
		"5" : "无故感到害怕",
		"6" : "应付能力降低",
		"7" : "失眠",
		"8" : "悲伤",
		"9" : "哭泣",
		"10" : "伤害自己"	
	}
	
	var queCall2={
		"1" : "对事物感兴趣",
		"2" : "乐观",
		"3" : "不会过度自责",
		"4" : "不会无缘无故地焦虑",
		"5" : "不会无故害怕",
		"6" : "应对能力良好",
		"7" : "睡眠良好",
		"8" : "感到快乐",
		"9" : "不会因坏心情而哭泣",
		"10" : "懂得爱惜自己"	
	}

$(function () {
	
	var data = $("#data").text();
	var obj = JSON.parse(data);
	//总分
	var totalScore = obj[0].totalScore;
	var dataScore =[{value: totalScore}];
	$("#score").text('');
	$("#score").append(totalScore);
	
	//每道题对应的分数
	var scoreMap = obj[0].scoreMap;
	
	var que1 = Number(scoreMap['1']);
	var que2 = Number(scoreMap['2']);
	var que3 = Number(scoreMap['3']);
	var que4 = Number(scoreMap['4']);
	var que5 = Number(scoreMap['5']);
	var que6 = Number(scoreMap['6']);
	var que7 = Number(scoreMap['7']);
	var que8 = Number(scoreMap['8']);
	var que9 = Number(scoreMap['9']);
	var que10 = Number(scoreMap['10']);
	
	if(totalScore>12){
		$("#title").text('');
		$("#title").append("您表现出抑郁症状。");
		$("#resultCall").append("目前存在抑郁症状。");
		
		var score1="<p class='marBottom10px'>偶尔会出现：score1的情况。</p>";
		var score2Or3="<p class='marBottom40px'>经常出现：score2Or3的情况。</p>";
		var score1Call='';
		var score2Or3Call='';
		if(que1==1){
			score1Call += queCall1[1]+"；";
		}else if(que1==2 || que1==3){
			score2Or3Call += queCall1[1]+"；";
		}
		if(que2==1){
			score1Call += queCall1[2]+"；";
		}else if(que2==2 || que2==3){
			score2Or3Call += queCall1[2]+"；";
		}
		if(que3==1){
			score1Call += queCall1[3]+"；";
		}else if(que3==2 || que3==3){
			score2Or3Call += queCall1[3]+"；";
		}
		if(que4==1){
			score1Call += queCall1[4]+"；";
		}else if(que4==2 || que4==3){
			score2Or3Call += queCall1[4]+"；";
		}
		if(que5==1){
			score1Call += queCall1[5]+"；";
		}else if(que5==2 || que5==3){
			score2Or3Call += queCall1[5]+"；";
		}
		if(que6==1){
			score1Call += queCall1[6]+"；";
		}else if(que6==2 || que6==3){
			score2Or3Call += queCall1[6]+"；";
		}
		if(que7==1){
			score1Call += queCall1[7]+"；";
		}else if(que7==2 || que7==3){
			score2Or3Call += queCall1[7]+"；";
		}
		if(que8==1){
			score1Call += queCall1[8]+"；";
		}else if(que8==2 || que8==3){
			score2Or3Call += queCall1[8]+"；";
		}
		if(que9==1){
			score1Call += queCall1[9]+"；";
		}else if(que9==2 || que9==3){
			score2Or3Call += queCall1[1]+"；";
		}
		if(que10==1){
			score1Call += queCall1[10]+"；";
		}else if(que10==2 || que10==3){
			score2Or3Call += queCall1[10]+"；";
		}
		
		
		if(score1Call !=''){
			score1Call=score1Call.substring(0,score1Call.length-1);
			$("#bigDiv").append(score1.replace('score1',score1Call));
		}
		if(score2Or3Call !=''){
			score2Or3Call=score2Or3Call.substring(0,score2Or3Call.length-1);
			$("#bigDiv").append(score2Or3.replace('score2Or3',score2Or3Call));
		}
		
		$("#bigDiv").append("<p class='marBottom20px'><strong class='colorRed'>建议您去专业机构做进一步的检查，寻求专业医生的帮助，尽早地识别和及时地治疗，会更有效地减轻或缓解抑郁情绪。</strong></p>");
		$("#bigDiv").append("<p class='marBottom10px'>除了接受专业帮助之外，您同时也可以采取一些自我调适的措施，例如：</p>");
		$("#bigDiv").append("<p class='marBottom10px'>尽量使自己放松，学习、练习使用一些放松的方法，如：呼吸放松、肌肉放松等；</p>");
		$("#bigDiv").append("<p class='marBottom10px'>和您的配偶多多交流，保证有足够的时间和配偶在一起，并保持亲昵的交流；</p>");
		$("#bigDiv").append("<p class='marBottom10px'>把您的情绪表达出来，向您的爱人和朋友们说出您对于未来的担忧；</p>");
		$("#bigDiv").append("<p class='marBottom10px'>学会寻求家人的帮助，请他们多陪自己说说话，及时告诉自己一些育儿的经验；</p>");
		$("#bigDiv").append("<p class='marBottom10px'>修养中适度增加运动，这能够转移注意力，不再将注意力集中在烦心的事情上。</p>");
		$("#bigDiv").append("<p class='marBottom40px'>最后，不要急躁，抑郁情绪的调节需要时间。</p>");
		$("#bigDiv").append("<p><strong class='color9933'>注：本测验仅能作为您目前心理状况的一个初步筛选，并不能仅根据此结果诊断是否存在疾病。如有需求，请做进一步的检查。</strong></p>");
		
	}else{
		$("#title").text('');
		$("#title").append("您目前没有抑郁症状。");
		$("#resultCall").append("不存在抑郁症状。");
		
		var score0="<p class='marBottom10px'>平时score0。</p>";
		var score1="<p class='marBottom10px'>多数时候score1。</p>";
		var score2Or3="<p class='marBottom40px'>但有时您也会出现一些不好的情绪和状态，score2Or3。不用过分担心，您可以采取一些自我调适措施来应对偶尔的不良情绪，如：尽量使自己放松，学习、练习使用一些放松的方法，如：呼吸放松、肌肉放松等；和您的配偶多多交流，保证有足够的时间和配偶在一起，并保持亲昵的交流；把您的情绪表达出来，向您的爱人和朋友们说出您对于未来的担忧；学会寻求家人的帮助，请他们多陪自己说说话，及时告诉自己一些育儿的经验；修养中适度增加运动，这能够转移注意力，不再将注意力集中在烦心的事情上。</p>";
		var score0Call='';
		var score1Call='';
		var score2Or3Call='';
		if(que1==0){
			score0Call += queCall2[1]+"；";
		}else if(que1==1){
			score1Call += queCall2[1]+"；";
		}else{
			score2Or3Call += queCall1[1]+"；";
		}
		if(que2==0){
			score0Call += queCall2[2]+"；";
		}else if(que2==1){
			score1Call += queCall2[2]+"；";
		}else{
			score2Or3Call += queCall1[2]+"；";
		}
		if(que3==0){
			score0Call += queCall2[3]+"；";
		}else if(que3==1){
			score1Call += queCall2[3]+"；";
		}else{
			score2Or3Call += queCall1[3]+"；";
		}
		if(que4==0){
			score0Call += queCall2[4]+"；";
		}else if(que4==1){
			score1Call += queCall2[4]+"；";
		}else{
			score2Or3Call += queCall1[4]+"；";
		}
		if(que5==0){
			score0Call += queCall2[5]+"；";
		}else if(que5==1){
			score1Call += queCall2[5]+"；";
		}else{
			score2Or3Call += queCall1[5]+"；";
		}
		if(que6==0){
			score0Call += queCall2[6]+"；";
		}else if(que6==1){
			score1Call += queCall2[6]+"；";
		}else{
			score2Or3Call += queCall1[6]+"；";
		}
		if(que7==0){
			score0Call += queCall2[7]+"；";
		}else if(que7==1){
			score1Call += queCall2[7]+"；";
		}else{
			score2Or3Call += queCall1[7]+"；";
		}
		if(que8==0){
			score0Call += queCall2[8]+"；";
		}else if(que8==1){
			score1Call += queCall2[8]+"；";
		}else{
			score2Or3Call += queCall1[8]+"；";
		}
		if(que9==0){
			score0Call += queCall2[9]+"；";
		}else if(que9==1){
			score1Call += queCall2[9]+"；";
		}else{
			score2Or3Call += queCall1[9]+"；";
		}
		if(que10==0){
			score0Call += queCall2[10]+"；";
		}else if(que10==1){
			score1Call += queCall2[10]+"；";
		}else{
			score2Or3Call += queCall1[10]+"；";
		}
		
		if(score0Call !=''){
			score0Call=score0Call.substring(0,score0Call.length-1);
			var score0Embody=score0.replace('score0',score0Call);
			$("#bigDiv").append(score0Embody);
		}
		if(score1Call !=''){
			score1Call=score1Call.substring(0,score1Call.length-1);
			$("#bigDiv").append(score1.replace('score1',score1Call));
		}
		if(score2Or3Call !=''){
			score2Or3Call=score2Or3Call.substring(0,score2Or3Call.length-1);
			$("#bigDiv").append(score2Or3.replace('score2Or3',score2Or3Call));
		}
		
		$("#bigDiv").append("<p><strong class='color9933'>注：本测验仅能作为您目前心理状况的一个初步筛选，并不能仅根据此结果诊断是否存在疾病。如有需求，请做进一步的检查。</strong></p>");
		
	}
	
	
	
	
    var myChart = echarts.init(document.getElementById('Echarts'));
    var option = {
        tooltip : {
            show:false
        },
        toolbox: {
            show:false
        },
        grid:{x:0,y:0,x2:0,y2:0},
        series: [
            {
                type: 'gauge',
                center:['50%', '65%'],
                radius: '100%',
                startAngle:200,
                endAngle:-20,
                min:0,
                max:30,
                splitNumber:1,
                splitLine: {
                    show: false
                },
                axisLine: {
                    show: false,
                    lineStyle: {
                        color: [[0.4, '#92D050'],[1, '#F79646']],
                        width: 40
                    }
                },
                pointer:{
                    length:"50%"
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    show: true,
                    distance: 15,
                    textStyle: {
                        color: '#000',
                        fontWeight: "bold"
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#7FB1B0'
                    }
                },
                detail: {
                    formatter:'{value}',
                    textStyle: {
                        color: '#ff0000',
                        fontWeight:600,
                        fontSize: 16
                    }
                },
                data: dataScore
            }
        ],
        backgroundColor:"#fff"
    };
    myChart.setOption(option);
});