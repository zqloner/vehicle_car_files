$(function () {
	var data = jQuery.parseJSON($('#data').html());//将所有的结果转成json格式的数据方便拿数据
	var totalScore = data[0].totalScore;//得到总分
	var desc2 ="根据测验结果，您在本测验中总分为<span class=\"colorFF9933\">"+totalScore+"</span>分,各方面得分情况如下图所示：";//调用2
	var desc3 = ""
	if(totalScore>3){
		  titleStr = "您在工作过程中经常出现一些不良心理状态，总是很被动地完成自己份内的工作或者凭经验工作，对工作中的安全风险感到非常无助，只能听天由命。遇到不公平对待时，容易将不良情绪带到工作中，消极怠工，敷衍了事。";
		     desc3 = "您在工作过程中经常出现一些不良心理状态，总是很被动地完成自己份内的工作或者凭经验工作，对工作中的安全风险感到非常无助，只能听天由命。遇到不公平对待时，容易将不良情绪带到工作中，消极怠工，敷衍了事。";
		}else if(totalScore<=1){
		  titleStr = "您在工作过程中很少出现不良心理状态，工作状态非常健康积极，对工作中的安全风险有明确的意识并能严格遵守安全要求。";
		     desc3 = "您在工作过程中很少出现不良心理状态，工作状态非常健康积极，对工作中的安全风险有明确的意识并能严格遵守安全要求，不因为工作经验而忽略安全问题，避免产生违规行为。对于工作中可能存在的风险能主动寻求控制的方法。";
		  scoreLev = false;
		}else{
		  titleStr = "您在工作过程中有时会出现一些不良心理状态，但是您能够努力完成工作，能明确意识到工作中的安全风险。";
		     desc3 = "您在工作过程中有时会出现一些不良心理状态，比如因侥幸心理而做出一些违规行为，遇到不公平的对待时，会表现出一些逆反情绪和行为。但是您能够努力完成工作，能明确意识到工作中的安全风险。";
	};
	$(".title div").html(titleStr);
	    $("#desc2").html(desc2);
	    $("#desc3").html(desc3);
	    
    $('#container').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: null
        },
        xAxis: {
            categories: ['安全无奈感',"逆反心理","麻痹心理","临时心理"],
            gridLineWidth:1
        },
        yAxis: {
            min: 0,
            max:4,
            lineWidth: 1,
            tickWidth:1,
            title: {
                text: null
            },
            tickInterval: 1
        },
        credits: {
            enabled:false
        },
        exporting: {
            enabled:false
        },
        tooltip: {
            enabled:false
        },
        legend: {
            enabled: false
        },
        plotOptions: {
            column: {
                pointPadding: 0,
                borderWidth: 0,
                dataLabels:{
                    enabled:true,
                    style: {
                        textShadow: '0px',
                        fontSize: "16px",
                        color:'#333'
                    }
                }
            }
        },
        series: [{
            data: [{
                name: '安全无奈感',
                color:'rgb(255,51,0)',
                y: data[0].dims[1]
            },{
                name: '逆反心理',
                color:'rgb(255,102,0)',
                y: data[0].dims[2]
            },{
                name: '麻痹心理',
                color:'rgb(255,153,0)',
                y: data[0].dims[3]
            },{
                name: '临时心理',
                color:'rgb(255,204,0)',
                y: data[0].dims[4]
            }]
        }]
    });
    
      var higthScoreLev = [];
	  var midScoureLev = [];
	  var lowScoureLev = [];
	  //安全无奈感
	   if(data[0].dims[1]>3){
	   			//高分
	       higthScoreLev.push(["安全无奈感","在这一方面，您的得分较高。处于您这个分数段的典型特征是：对于安全的态度是比较悲观消极的，认为安全风险自己无法控制，只能听天由命，甚至觉得为了完成工作任务而做出一些违章行为也是合理的。"]);
	   }else if(data[0].dims[1]<=1){
	   			//低分
	       lowScoureLev.push(["安全无奈感","在这一方面，您的得分较低。处于您这个分数段的典型特征是：认为工作中安全是首要考虑因素，在生产过程中有着强烈的安全意识，对于工作中可能存在的风险能主动寻求控制的方法，不会因为工作任务重而冒险。"]);
	   }else{
	    		//中分
	       midScoureLev.push(["安全无奈感"," 在这一方面，您的得分中等。处于您这个分数段的典型特征是：有一定的安全意识，对于工作中的安全问题比较重视，会寻求一些方式来控制风险的发生，有时也会有消极悲观的想法。"]);
	   };
	   //逆反心理
	   if(data[0].dims[2]>3){
	   			 //高分
	       higthScoreLev.push(["逆反心理","在这一方面，您的得分较高。处于您这个分数段的典型特征是：工作态度消极，越是领导强调的事情，越不愿意做。遇到不公平对待时，容易将不良情绪带到工作中，消极怠工。"]);
	   }else if(data[0].dims[2]<=1){
	  			 //低分
	       lowScoureLev.push(["逆反心理","在这一方面，您的得分较低。处于您这个分数段的典型特征是：重视工作中的安全问题，工作态度健康积极，即使遇到不公平的对待，也不会消极怠工或者将不良情绪带到工作之中。"]);
	   }else{
	    		 //中分
	       midScoureLev.push(["逆反心理"," 在这一方面，您的得分中等。处于您这个分数段的典型特征是：对领导强调的安全问题有一定的重视，对待工作比较积极认真。遇到不公平的对待时，会表现出一些逆反情绪和行为。"]);
	   };
	   //麻痹心理
	   if(data[0].dims[3]>3){
	   			 //高分
	        higthScoreLev.push(["麻痹心理"," 在这一方面，您的得分略较高。处于您这个分数段的典型特征是：存有侥幸心理，认为违章作业省时省力，未必会出事故，工作凭自己的经验就可以，不需要严格遵守安全规章制度，对于其他人的违章行为也觉得习以为常。"]);
	   }else if(data[0].dims[3]<=1){
	   			//低分
	        lowScoureLev.push(["麻痹心理","在这一方面，您的得分较低。处于您这个分数段的典型特征是：工作中保持应有的警惕性，严格遵守安全规章制度，不因为工作经验而忽略安全问题，不会做出违章行为。"]);
	   }else{
	    		//中分
	         midScoureLev.push(["麻痹心理","在这一方面，您的得分中等。处于您这个分数段的典型特征是：大部分工作时间内对于安全问题能保持一定的警惕性，不会只凭经验干活。有时也会因存有侥幸心理而做出违章行为。 "]);
	   };
	   
	     //临时心理
	   if(data[0].dims[4]>3){
	  	 //高分
	         higthScoreLev.push(["临时心理"," 在这一方面，您的得分较高。处于您这个分数段的典型特征是：对工作质量和安全的关注仅限于自己的工作时间段，容易敷衍了事，经常有寻求其他工作的想法。"]);
	   }else if(data[0].dims[4]<=1){
	   	//低分
	         lowScoureLev.push(["临时心理","在这一方面，您的得分较低。处于您这个分数段的典型特征是：对于工作安全问题长期保持认真谨慎的态度，努力避免安全问题的发生。"]);
	   }else{
	     //中分
	         midScoureLev.push(["临时心理","在这一方面，您的得分中等。处于您这个分数段的典型特征是：对于工作安全问题比较认真谨慎，有时会考虑寻求其他的工作机会。"]);
	   };
	   
	   var divH =  $(document.createElement('div'));
		        divH.attr({"class":"marBottom20px"});
		        //头的b元素
		 var elementH = $("#highScore");
		     if(higthScoreLev.length>0){
		          //高分头信息
				  var divHb = $(document.createElement('b'));
				      divHb.html("在四个方面,您得高分的是:"); 
				      divH.append(divHb);
				      elementH.append(divH);
				      var resultCon = $(document.createElement('div'));
				          resultCon.attr({"class":"resultCon"});
				     for(var i = 0;i<higthScoreLev.length;i++){
				         var $div = $(document.createElement('div'));
				             $div.attr({"class":"annotation prominent"});
				             $div.html("▲"+higthScoreLev[i][0]);
				             resultCon.append($div);
				         var $p = $(document.createElement('p'));
				             $p.html(higthScoreLev[i][1]);
				             resultCon.append($p);
				     }
				     divH.append(resultCon);
		     };
		  if(midScoureLev.length>0){   
		          //高分头信息
				  var divHb = $(document.createElement('b'));
				      divHb.html("在四个方面,您得中分的是:"); 
				      divH.append(divHb);
				      elementH.append(divH);
				  var resultCon = $(document.createElement('div'));
				          resultCon.attr({"class":"resultCon"});
				     for(var i = 0;i<midScoureLev.length;i++){
				         var $div = $(document.createElement('div'));
				             $div.attr({"class":"annotation prominent"});
				             $div.html("▲"+midScoureLev[i][0]);
				             resultCon.append($div);
				         var $p = $(document.createElement('p'));
				             $p.html(midScoureLev[i][1]);
				             resultCon.append($p);
				     }
				     divH.append(resultCon);
		     };
		   if(lowScoureLev.length>0){   
		          //高分头信息
				  var divHb = $(document.createElement('b'));
				      divHb.html("在四个方面,您得低分的是:"); 
				      divH.append(divHb);
				      elementH.append(divH);
				      var resultCon = $(document.createElement('div'));
				          resultCon.attr({"class":"resultCon"});
				     for(var i = 0;i<lowScoureLev.length;i++){
				         var $div = $(document.createElement('div'));
				             $div.attr({"class":"annotation prominent"});
				             $div.html("▲"+lowScoureLev[i][0]);
				             resultCon.append($div);
				         var $p = $(document.createElement('p'));
				             $p.html(lowScoureLev[i][1]);
				             resultCon.append($p);
				     }
				     divH.append(resultCon);
		     };
	   
});