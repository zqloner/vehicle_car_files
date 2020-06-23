
 var topCall={
		"1" : "你的总体生活质量较好。",
		"2" : "你的总体生活质量处于中等水平",
		"3" : "你的总体生活质量较差。"
	}
	
 var highScore={
		 "1" : "你与老师的关系较好。你喜欢自己的老师，同时也很受老师的喜欢。而且，老师对你很好，当你遇到困难时能够得到老师的关心和帮助。",
		 "2" : "你与朋友的关系较好。你朋友很多并且都很关心你，在你需要帮助时，能够找到可信赖的朋友。在班里，同学对你也很友好。",
		 "3" : "你与父母的关系很好。你喜欢与父母相处，遇到困难也愿意向父母倾诉，父母也很理解你的想法。",
		 "4" : "你有较强的学习能力和良好的学习态度。你的学习速度较快，在学习上遇到困难能够坚持不懈。在完成作业之后，也愿意做其他的练习。",
		 "5" : "你的自我概念良好，表现为自我评价非常好，对自己很有信心，在课程和活动中勇于表达自己的意见。",
		 "6" : "你近来身体比较健康，很少感到身体不舒服，并且精力也很充沛。",
		 "7" : "你的负面情绪很少，平时精神状况很好，很少有紧张、忧虑和烦恼等不良情绪。",
		 "8" : "你做作业的态度很积极，喜欢写作业，很少在写作业时中途休息，完成作业的速度快。",
		 "9" : "你家附近的生活比较便利，交通方便，容易购买到日用品。",
		 "10" : "你有很多参加活动的机会，如参加自己喜欢的课余活动，看展览、参加各种比赛等。",
		 "11" : "你的运动能力很强，平时经常参加体育锻炼，而且对自己参加体育活动的能力很满意。",
		 "12" : "你的自我满意度很高，对自己的记忆力、睡眠、精力等各方面都很满意，认为自己的生活过得很快乐。",
		 "13" : "在生活环境方面，你家周围的环境非常安静。在饮食习惯方面，没有偏食的习惯。"
 }
 
 var middleScore={
		 "1" : "你与老师的关系一般。老师对你的关心程度一般，遇到困难时得到老师的关心和帮助和大多数同学一样。",
		 "2" : "你与朋友的关系一般。朋友不是很多但也有几个关心自己的朋友，在你需要帮助时，能够找到信赖的朋友不多。",
		 "3" : "你与父母的关系一般。你大多数时候喜欢与父母相处，但是你对父母会有所保留，在父母面前会回避某些话题或隐藏自己部分的感受。",
		 "4" : "你的学习能力和学习态度与大多数学生一样，一般情况下能够记住新学的知识，按时完成作业。",
		 "5" : "你的自我概念一般，表现为对自己的评价与大多数学生一样，有相对客观的自我认识和行为方式。",
		 "6" : "你大多数时候身体比较健康，偶尔会有身体不舒服，精力不足的情况。",
		 "7" : "你感受到的负性情绪与大多数学生一样，只是偶尔会受到紧张、忧虑等不良情绪的困扰。",
		 "8" : "你做作业的态度一般，既不喜欢做作业也不讨厌做作业，完成作业的速度与大多数同学一样。",
		 "9" : "你家附近的生活便利性一般，交通和购物便利程度与大多数同学一样。",
		 "10" : "你参加活动的机会与大多数同学一样，有一些看展览、比赛以及参加课余活动的机会。",
		 "11" : "你的运动能力一般，平时会参加一些体育锻炼，对自己参加体育活动能力的满意度处于中等水平。",
		 "12" : "你的自我满意度一般，对自己的记忆力、睡眠、精力等各方面的满意度处于中等水平。",
		 "13" : "你的生活环境和饮食习惯方面的情况与大多数学生一样。在生活环境方面，家周围的环境偶尔有一点吵。在饮食习惯方面，有时会有一点偏食。"
 }
 
 var lowScore={
		 "1" : "你与老师的关系较差。你比较不满意自己与老师的关系，老师很少关心你，当你遇到困难时也很少得到老师的关心和帮助。",
		 "2" : "你与朋友的关系较差。你朋友很少，很少有朋友关心你，在你需要帮助时，很难找到信赖的朋友。",
		 "3" : "你与父母的关系较差。你不喜欢与父母相处，也不愿与父母进行交流，觉得父母根本不了解你。",
		 "4" : "你的学习能力和学习态度较差。你的学习速度较慢，遇到困难不容易坚持。在完成作业之后，很少做一些其他的练习。",
		 "5" : "你的自我概念较低，表现为不够自信，在学习和生活中可能呈现出消极态度和退缩行为，甚至会出现自我贬低的倾向。",
		 "6" : "你经常感到身体不舒服，觉得累，没精神，感到生活没有意思。",
		 "7" : "你感受到的负面情绪较多，平时容易紧张和自责，经常担心自己做错事，常为一些事情烦恼。",
		 "8" : "你做作业的态度很消极，一写作业就心烦，写作业时总会多次中途休息，常常花费很长的时间来完成作业。",
		 "9" : "你家附近的生活不便利，交通不太方便，而且较难在家附近买到生活和学习用品。",
		 "10" : "你参加活动的机会很少，很少有机会看展览、比赛或是参加自己喜欢的课余活动。",
		 "11" : "你的运动能力较差，平时很少参加体育锻炼，也不太满意自己参加体育活动的能力。",
		 "12" : "你的自我满意度较低，对自己的记忆力、睡眠和精力等方面不太满意，认为自己的生活过得不快乐。",
		 "13" : "在生活环境方面，你家周围的环境很吵。在饮食习惯方面，会有偏食的习惯。"
 }
 


$(function () {
	
	var data = $("#data").text();
	var obj = JSON.parse(data);
	//总分
	var totalScore = obj[0].totalScore;
	$("#totalScore").text('');
	$("#totalScore").append(totalScore);
	
	if(totalScore<30){
		$("#topCall").text('');
		$("#topCall").append(topCall[3]);
		
		$("#secondCall").text('');
		$("#secondCall").append(topCall[3]);
	}else if(totalScore>=30 && totalScore<60){
		$("#topCall").text('');
		$("#topCall").append(topCall[2]);
		
		$("#secondCall").text('');
		$("#secondCall").append(topCall[2]);
	}else{
		$("#topCall").text('');
		$("#topCall").append(topCall[1]);
		
		$("#secondCall").text('');
		$("#secondCall").append(topCall[1]);
	}
	
	var dimdata=[];
	dimdata.push(null);
	//每个维度的得分
	var dimMap = obj[0].dimMap;
	dimdata.push(Number(dimMap['1']));
	dimdata.push(Number(dimMap['2']));
	dimdata.push(Number(dimMap['3']));
	dimdata.push(Number(dimMap['4']));
	dimdata.push(Number(dimMap['5']));
	dimdata.push(Number(dimMap['6']));
	dimdata.push(Number(dimMap['7']));
	dimdata.push(Number(dimMap['8']));
	dimdata.push(Number(dimMap['9']));
	dimdata.push(Number(dimMap['10']));
	dimdata.push(Number(dimMap['11']));
	dimdata.push(Number(dimMap['12']));
	dimdata.push(Number(dimMap['13']));
	dimdata.push(null);
	
	var lowScoreCall="<div id='oneDim1' class='marBottom20px'>你在<span id='lowdims' class='color9933'></span>方面处于较差水平。</div>";
	var middleScoreCall="<div id='oneDim2' class='marBottom20px'>你在<span id='middledims' class='color9933'></span>方面处于中等水平。</div>";
	var highScoreCall="<div id='oneDim3' class='marBottom20px'>你在<span id='highdims' class='color9933'></span>方面处于较高水平。</div>";
	var highScoreCall2="<div id='oneDim3' class='marBottom20px'>你较好的生活质量主要体现在<span id='highdims' class='color9933'></span>方面。</div>";
	
	//高分维度集合
	var highScoreList = obj[0].highScoreList;
	//中分维度集合
	var middleScoreList = obj[0].middleScoreList;
	//低分维度集合
	var lowScoreList = obj[0].lowScoreList;
	
	//总分为低分先显示低分维度
	if(totalScore<30){
		//低分维度
		if( lowScoreList!='' && lowScoreList.length !=0){
			if(lowScoreList.length == 1){
				for(var i=0;i<lowScoreList.length;i++){
					$("#qlsca").append(lowScoreCall);
					$("#lowdims").text('');
					$("#lowdims").append(lowScoreList[i].name);
					$("#oneDim1").append(lowScore[lowScoreList[i].id]);
				}
			}else{
				$("#qlsca").append(lowScoreCall);
				$("#qlsca").append("<div id='lowScoreExplain' class='resultContent marBottom40px'></div>");
				var dims='';
				for(var i=0;i<lowScoreList.length;i++){
					dims += lowScoreList[i].name + "、";
					$("#lowScoreExplain").append("<div class='labelBefore'><b>"+lowScoreList[i].name+"</b></div>");
					$("#lowScoreExplain").append("<p>"+lowScore[lowScoreList[i].id]+"</p>");
				}
				$("#lowdims").text('');
				$("#lowdims").append(dims.substring(0,dims.length-1));
			}
		}
		
		//中分维度
		if( middleScoreList!='' && middleScoreList.length !=0){
			if(middleScoreList.length == 1){
				for(var i=0;i<middleScoreList.length;i++){
					$("#qlsca").append(middleScoreCall);
					$("#middledims").text('');
					$("#middledims").append(middleScoreList[i].name);
					$("#oneDim2").append(middleScore[middleScoreList[i].id]);
				}
			}else{
				$("#qlsca").append(middleScoreCall);
				$("#qlsca").append("<div id='middleScoreExplain' class='resultContent marBottom40px'></div>");
				var dims='';
				for(var i=0;i<middleScoreList.length;i++){
					dims += middleScoreList[i].name + "、";
					$("#middleScoreExplain").append("<div class='labelBefore'><b>"+middleScoreList[i].name+"</b></div>");
					$("#middleScoreExplain").append("<p>"+middleScore[middleScoreList[i].id]+"</p>");
				}
				$("#middledims").text('');
				$("#middledims").append(dims.substring(0,dims.length-1));
			}
		}
		
		//高分维度
		if( highScoreList!='' && highScoreList.length !=0){
			if(highScoreList.length == 1){
				for(var i=0;i<highScoreList.length;i++){
					$("#qlsca").append(highScoreCall);
					$("#highdims").text('');
					$("#highdims").append(highScoreList[i].name);
					$("#oneDim3").append(highScore[highScoreList[i].id]);
				}
			}else{
				$("#qlsca").append(highScoreCall);
				$("#qlsca").append("<div id='highScoreExplain' class='resultContent marBottom40px'></div>");
				var dims='';
				for(var i=0;i<highScoreList.length;i++){
					dims += highScoreList[i].name + "、";
					$("#highScoreExplain").append("<div class='labelBefore'><b>"+highScoreList[i].name+"</b></div>");
					$("#highScoreExplain").append("<p>"+highScore[highScoreList[i].id]+"</p>");
				}
				$("#highdims").text('');
				$("#highdims").append(dims.substring(0,dims.length-1));
			}
		}
	}else if(totalScore>=30 && totalScore <60){
	
		//中分维度
		if( middleScoreList!='' && middleScoreList.length !=0){
			if(middleScoreList.length == 1){
				for(var i=0;i<middleScoreList.length;i++){
					$("#qlsca").append(middleScoreCall);
					$("#middledims").text('');
					$("#middledims").append(middleScoreList[i].name);
					$("#oneDim2").append(middleScore[middleScoreList[i].id]);
				}
			}else{
				$("#qlsca").append(middleScoreCall);
				$("#qlsca").append("<div id='middleScoreExplain' class='resultContent marBottom40px'></div>");
				var dims='';
				for(var i=0;i<middleScoreList.length;i++){
					dims += middleScoreList[i].name + "、";
					$("#middleScoreExplain").append("<div class='labelBefore'><b>"+middleScoreList[i].name+"</b></div>");
					$("#middleScoreExplain").append("<p>"+middleScore[middleScoreList[i].id]+"</p>");
				}
				$("#middledims").text('');
				$("#middledims").append(dims.substring(0,dims.length-1));
			}
		}
		
		//高分维度
		if( highScoreList!='' && highScoreList.length !=0){
			if(highScoreList.length == 1){
				for(var i=0;i<highScoreList.length;i++){
					$("#qlsca").append(highScoreCall);
					$("#highdims").text('');
					$("#highdims").append(highScoreList[i].name);
					$("#oneDim3").append(highScore[highScoreList[i].id]);
				}
			}else{
				$("#qlsca").append(highScoreCall);
				$("#qlsca").append("<div id='highScoreExplain' class='resultContent marBottom40px'></div>");
				var dims='';
				for(var i=0;i<highScoreList.length;i++){
					dims += highScoreList[i].name + "、";
					$("#highScoreExplain").append("<div class='labelBefore'><b>"+highScoreList[i].name+"</b></div>");
					$("#highScoreExplain").append("<p>"+highScore[highScoreList[i].id]+"</p>");
				}
				$("#highdims").text('');
				$("#highdims").append(dims.substring(0,dims.length-1));
			}
		}
		
		//低分维度
		if( lowScoreList!='' && lowScoreList.length !=0){
			if(lowScoreList.length == 1){
				for(var i=0;i<lowScoreList.length;i++){
					$("#qlsca").append(lowScoreCall);
					$("#lowdims").text('');
					$("#lowdims").append(lowScoreList[i].name);
					$("#oneDim1").append(lowScore[lowScoreList[i].id]);
				}
			}else{
				$("#qlsca").append(lowScoreCall);
				$("#qlsca").append("<div id='lowScoreExplain' class='resultContent marBottom40px'></div>");
				var dims='';
				for(var i=0;i<lowScoreList.length;i++){
					dims += lowScoreList[i].name + "、";
					$("#lowScoreExplain").append("<div class='labelBefore'><b>"+lowScoreList[i].name+"</b></div>");
					$("#lowScoreExplain").append("<p>"+lowScore[lowScoreList[i].id]+"</p>");
				}
				$("#lowdims").text('');
				$("#lowdims").append(dims.substring(0,dims.length-1));
			}
		}
		
	}else {
		
		//高分维度
		if( highScoreList!='' && highScoreList.length !=0){
			if(highScoreList.length == 1){
				for(var i=0;i<highScoreList.length;i++){
					$("#qlsca").append(highScoreCall2);
					$("#highdims").text('');
					$("#highdims").append(highScoreList[i].name);
					$("#oneDim3").append(highScore[highScoreList[i].id]);
				}
			}else{
				$("#qlsca").append(highScoreCall2);
				$("#qlsca").append("<div id='highScoreExplain' class='resultContent marBottom40px'></div>");
				var dims='';
				for(var i=0;i<highScoreList.length;i++){
					dims += highScoreList[i].name + "、";
					$("#highScoreExplain").append("<div class='labelBefore'><b>"+highScoreList[i].name+"</b></div>");
					$("#highScoreExplain").append("<p>"+highScore[highScoreList[i].id]+"</p>");
				}
				$("#highdims").text('');
				$("#highdims").append(dims.substring(0,dims.length-1));
			}
		}
		

		//中分维度
		if( middleScoreList!='' && middleScoreList.length !=0){
			if(middleScoreList.length == 1){
				for(var i=0;i<middleScoreList.length;i++){
					$("#qlsca").append(middleScoreCall);
					$("#middledims").text('');
					$("#middledims").append(middleScoreList[i].name);
					$("#oneDim2").append(middleScore[middleScoreList[i].id]);
				}
			}else{
				$("#qlsca").append(middleScoreCall);
				$("#qlsca").append("<div id='middleScoreExplain' class='resultContent marBottom40px'></div>");
				var dims='';
				for(var i=0;i<middleScoreList.length;i++){
					dims += middleScoreList[i].name + "、";
					$("#middleScoreExplain").append("<div class='labelBefore'><b>"+middleScoreList[i].name+"</b></div>");
					$("#middleScoreExplain").append("<p>"+middleScore[middleScoreList[i].id]+"</p>");
				}
				$("#middledims").text('');
				$("#middledims").append(dims.substring(0,dims.length-1));
			}
		}
		
		
		
		//低分维度
		if( lowScoreList!='' && lowScoreList.length !=0){
			if(lowScoreList.length == 1){
				for(var i=0;i<lowScoreList.length;i++){
					$("#qlsca").append(lowScoreCall);
					$("#lowdims").text('');
					$("#lowdims").append(lowScoreList[i].name);
					$("#oneDim1").append(lowScore[lowScoreList[i].id]);
				}
			}else{
				$("#qlsca").append(lowScoreCall);
				$("#qlsca").append("<div id='lowScoreExplain' class='resultContent marBottom40px'></div>");
				var dims='';
				for(var i=0;i<lowScoreList.length;i++){
					dims += lowScoreList[i].name + "、";
					$("#lowScoreExplain").append("<div class='labelBefore'><b>"+lowScoreList[i].name+"</b></div>");
					$("#lowScoreExplain").append("<p>"+lowScore[lowScoreList[i].id]+"</p>");
				}
				$("#lowdims").text('');
				$("#lowdims").append(dims.substring(0,dims.length-1));
			}
		}
		
	}
	
	
	
    $('#container').highcharts({
        chart: {
            type: 'line'
        },
        title: {
            text: null
        },
        xAxis: {
            tickInterval: 1,
            gridLineWidth:1,
            labels: {
                rotation: 90,
                formatter:function(){
                    if(this.value == 0) {
                        return " ";
                    }else if(this.value == 1) {
                        return "师生关系";
                    }else if(this.value == 2){
                        return "同伴关系";
                    }else if(this.value == 3){
                        return "亲子关系";
                    }else if(this.value == 4){
                        return "学习能力与态度";
                    }else if(this.value == 5){
                        return "自我概念";
                    }else if(this.value == 6){
                        return "躯体感觉";
                    }else if(this.value == 7){
                        return "负性情绪";
                    }else if(this.value == 8){
                        return "作业态度";
                    }else if(this.value == 9){
                        return "生活便利性";
                    }else if(this.value == 10){
                        return "活动机会性";
                    }else if(this.value == 11){
                        return "运动能力";
                    }else if(this.value == 12){
                        return "自我满意度";
                    }else if(this.value == 13){
                        return "其他";
                    }
                }
            },
            tickLength:0
        },
        yAxis: [{
            min: 0,
            max:120,
            title: {
                text: null
            },
            tickLength:0,
            tickWidth:1,
            tickColor:'#999',
            tickInterval: 10,
            plotLines:[{
                color:'#FF0000',
                dashStyle:'ShortDash',
                value:30,
                width:1,
                zIndex:5
            },{
                color:'#92D050',
                dashStyle:'ShortDash',
                value:60,
                width:1,
                zIndex:5
            }]
        }],
        tooltip: {
            enabled: false
        },
        legend: {
            enabled: false
        },
        credits: {
            enabled:false
        },
        exporting: {
            enabled:false
        },
        plotOptions: {
            line:{
                dataLabels:{
                    enabled:true,
                    style:{
                        fontSize:'10px'
                    }
                }
            },
            series: {
                marker: {
                    enabled: true
                }
            }
        },
        series: [{
            name:'个人得分',
            data: dimdata
            //data: [null,69,46,45,60,82,65,90,62,61,70,60,45,60,null]
        }]
    });
});