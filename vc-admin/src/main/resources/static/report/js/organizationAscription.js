$(function () {
//[{"dims":{"1":5.0,"2":5.0,"3":5.0,"4":5.0,"5":5.0},"totalScore":5}]
var data = jQuery.parseJSON($('#data').html());//将所有的结果转成json格式的数据方便拿数据

//title下的div顶端调用
var totalScore = data[0].totalScore;//得到总分
var titleStr = "";
var desc2 ="您的组织归属感得分为";//调用2
var scoreLev=true;//true为高分和中分,false为低分
	if(totalScore>=3.76){
		  titleStr = "您对单位认同，有较高的归属感。";
		  desc2 = desc2+totalScore+"分,"+titleStr+"高于常模指数，说明您对单位的归属感要高于多数人，对单位认同，有较高的归属感。"
		}else if(totalScore<=2.16){
		  titleStr = "您对单位的认同度低，归属感也较低。";
		  desc2 = desc2+totalScore+"分,"+titleStr+"低于常模指数，说明您对单位的归属感低于多数人，对单位的认同度低，归属感也较低。"
		  scoreLev = false;
		}else{
		  titleStr = "您对单位的认同程度为中等，归属感一般。";
		  desc2 = desc2+totalScore+"分,"+titleStr+"在常模指数范围内，说明您对单位的归属感与多数人一致，对单位的认同程度为中等，归属感一般。"
	};
	desc2=desc2+"各方面的表现如下：";
$(".title div").html(titleStr);
//总分数
$(".colorFF9933").html(totalScore);
    $('#container').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: null
        },
        xAxis: {
            categories: ['感情原因',"规范原因","理想原因","经济原因","机会原因"],
            gridLineWidth:1
        },
        yAxis: {
            min: 0,
            max:5,
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
                name: '感情原因',
                color:'rgb(255,51,0)',
                y: data[0].dims[1]
            },{
                name: '规范原因',
                color:'rgb(255,102,0)',
                y: data[0].dims[2]
            },{
                name: '理想原因',
                color:'rgb(255,153,0)',
                y: data[0].dims[3]
            },{
                name: '经济原因',
                color:'rgb(255,204,0)',
                y: data[0].dims[4]
            },{
                name: '机会原因',
                color:'rgb(255,255,0)',
                y: data[0].dims[5]
            }]
        }]
    });
    //填充分数对比表
    var trs = $("tbody tr td:nth-child(2)");
  		$(trs[0]).html(data[0].dims[1]);
  		$(trs[1]).html(data[0].dims[2]);
  		$(trs[2]).html(data[0].dims[3]);
  		$(trs[3]).html(data[0].dims[4]);
  		$(trs[4]).html(data[0].dims[5]);
  		$(trs[5]).html(totalScore);
  //分数对比表下的评语
  $("#descr").html(desc2);
  var higthScoreLev = [];
  var midScoureLev = [];
  var lowScoureLev = [];
  //感情原因
   if(data[0].dims[1]>=3.62){
   			//高分
      higthScoreLev.push(["感情原因","您的得分高于常模指数，在这方面您得分高于多数人，您对单位的感情深厚，愿意为单位的生存与发展贡献自己的力量，甚至不计报酬，面对诱惑也不愿离职跳槽。"]);
   }else if(data[0].dims[1]<=2.14){
   			//低分
       lowScoureLev.push(["感情原因","您的得分低于常模指数，在这方面您得分低于多数人，您对单位没有什么深厚的感情，一般不愿意无私地为单位作出贡献。"]);
   }else{
    		//中分
      midScoureLev.push(["感情原因","您的得分在常模指数范围内，在这方面您得分与多数人一致，您对单位的感情一般，一定程度上愿意为单位的生存与发展贡献自己的力量。"]);
   };
   //规范原因
   if(data[0].dims[2]>=3.97){
   			 //高分
      higthScoreLev.push(["规范原因","您的得分高于常模指数，在这方面您得分高于多数人，您留在单位工作的原因，很大程度上受到规范的影响，认为自己对单位有责任感，工作应该全身投入，对单位应该忠诚热爱。"]);
   }else if(data[0].dims[2]<=2.73){
  			 //低分
       lowScoureLev.push(["规范原因","您的得分低于常模指数，在这方面您得分低于多数人，留在单位工作的原因很少是受到类似“员工对单位应该有责任感、工作应该投入、对单位应该忠诚热爱”等等规范的影响。"]);
   }else{
    		 //中分
      midScoureLev.push(["规范原因","您的得分在常模指数范围内，在这方面您得分与多数人一致，您留在单位工作的原因，在一定程度上也是受到规范的约束，认为应该对单位有责任感、工作投入、忠诚热爱。"]);
   };
   //理想原因
   if(data[0].dims[3]>=3.79){
   			 //高分
      higthScoreLev.push(["理想原因","您的得分高于常模指数，在这方面您得分高于多数人，您重视个人的成长，追求理想的实现。感觉目前的工作能使个人的专长得到发挥，同时单位能够提供各项工作条件、学习和晋升的机会来帮助自己实现理想。"]);
   }else if(data[0].dims[3]<=2.26){
   			//低分
       lowScoureLev.push(["理想原因","您的得分低于常模指数，在这方面您得分低于多数人，感觉目前的工作并不能使自己的专长得到发挥，单位提供的工作条件、学习、晋升的机会对于实现您的理想并没起到什么作用。"]);
   }else{
    		//中分
      midScoureLev.push(["理想原因","您的得分在常模指数范围内，在这方面您得分与多数人一致，一般情况下，目前的工作能使您的专长得到发挥，单位提供的工作条件、学习、晋升的机会在一定程度上也可以帮助您实现理想。"]);
   };
   
     //经济原因
   if(data[0].dims[4]>=3.50){
   //高分
      higthScoreLev.push(["经济原因","您的得分高于常模指数，在这方面您得分高于多数人，您不会轻易离开单位，因为担心离开后会丧失很多福利，蒙受过多的损失。"]);
   }else if(data[0].dims[4]<=2.02){
   //低分
       lowScoureLev.push(["经济原因","您的得分低于常模指数，在这方面您得分低于多数人，您留在单位的原因中只有很小一部分是考虑经济因素，担心离开后会丧失很多福利、蒙受损失。"]);
   }else{
    //中分
      midScoureLev.push(["经济原因","您的得分在常模指数范围内，在这方面您得分与多数人一致，您留在单位的部分原因是因为担心离开后会丧失很多福利，蒙受损失。"]);
   };
   
     //机会原因
   if(data[0].dims[5]>=3.54){
   //高分
      higthScoreLev.push(["机会原因","您的得分高于常模指数，在这方面您得分高于多数人，您待在单位的原因更多是因为找不到别的满意单位，或因自己技术水平低，没有另找工作的机会。"]);
   }else if(data[0].dims[5]<=2.10){
   //低分
       lowScoureLev.push(["机会原因","您的得分低于常模指数，在这方面您得分低于多数人，待在单位只有很小部分的原因是因为找不到满意的单位，或自己技术水平低没有机会找别的工作。"]);
   }else{
    //中分
      midScoureLev.push(["机会原因","您的得分在常模指数范围内，在这方面您得分与多数人一致，您待在单位的部分原因是因为找不到别的更为满意的单位，或感觉自己技术水平一般，没有太多另找工作的机会。"]);
   };
   //创建div层
   if(scoreLev){
		      var divH =  $(document.createElement('div'));
		        divH.attr({"class":"marBottom20px"});
		        //头的b元素
		     if(higthScoreLev.length>0){   
		          //高分头信息
				  var divHb = $(document.createElement('b'));
				      divHb.html("在五个方面,您得高分的是:"); 
				      divH.append(divHb);
				  var elementH = $("#highScore");
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
				      divHb.html("在五个方面,您得中分的是:"); 
				      divH.append(divHb);
				  var elementH = $("#highScore");
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
				      divHb.html("在五个方面,您得低分的是:"); 
				      divH.append(divHb);
				  var elementH = $("#highScore");
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
     }else{
	        var divH =  $(document.createElement('div'));
			        divH.attr({"class":"marBottom20px"});
			        //头的b元素
			      if(lowScoureLev.length>0){   
			          //高分头信息
					  var divHb = $(document.createElement('b'));
					      divHb.html("在五个方面,您得低分的是:"); 
					      divH.append(divHb);
					  var elementH = $("#highScore");
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
			  if(midScoureLev.length>0){   
			          //高分头信息
					  var divHb = $(document.createElement('b'));
					      divHb.html("在五个方面,您得中分的是:"); 
					      divH.append(divHb);
					  var elementH = $("#highScore");
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
			     if(higthScoreLev.length>0){   
			          //高分头信息
					  var divHb = $(document.createElement('b'));
					      divHb.html("在五个方面,您得高分的是:"); 
					      divH.append(divHb);
					  var elementH = $("#highScore");
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
			
     
     }

  		
});