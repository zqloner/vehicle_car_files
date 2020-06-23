var ztmiaoshu = {
        		"0":{
        			"1-3":"恭喜！您的压力等级为x级。您近期压力较小，身心处于比较放松的状态，希望您能享受这段悠闲的时光！与此同时，这也意味着您还有很大的自我挑战的潜力哦。如果您愿意，不妨现在就开足马力踏上挑战自己的征程吧！ ",
        			"4-6":"您的压力等级为x级。适度的压力能够有效促进工作效率，您现在就处于这种状态之中，只是您可能尚未感知到压力的存在。在不经意间，一些不适感对您已经偶有打扰啦，还请多关爱自己哦。",
        			"7-8":"您也许觉得自己没什么压力，但您的压力等级为x级，有一点高哦。您的身体、情绪、认知、行为等已经向您发出了求助信号，再不关注就晚啦！ ",
        			"9-10":"您也许觉得自己没什么压力，但您的压力等级为x级，压力值已经爆表了！您可能需要和咨询师聊一聊，从而有效缓解压力。希望您勇敢地迈出求助的第一步！"
        		},
        		"1":{
        			"1-3":"您的压力等级为x级。您感到自己在承受着一定的压力，但其实，压力并未给您带来过多影响。请相信自己的抗压能力，整理心情，重新出发吧！ ",
        			"4-6":"您已经感受到了一定的压力，您的压力等级为x级。研究表明，x级的压力能够有效促进工作效率，但一些不适感已经对您造成了困扰。希望您在积极进取的同时，还请多关爱自己哦。",
        			"7-8":"您的压力等级为x级。尽管您感受到了一些压力，但您可能低估了其对您造成的影响。您的身体、情绪、认知、行为等已经向您发出求助信号，请关注自己的身心健康哦。",
        			"9-10":"您的压力等级为x级。您感受到了一定的压力，但您可能还没意识到，您的压力值已经爆表了！您也许需要和咨询师聊一聊，从而有效缓解压力。希望您勇敢地迈出求助的第一步！"
        		},
        		"2":{
        			"1-3":"您感到自己的压力巨大，但实际上，您的压力等级为x级。压力并未给您带来过多影响。请相信自己的抗压能力，整理心情，重新出发吧！ ",
        			"4-6":"您的压力等级为x级。也许您感到自己的压力很大，不得不应对生活中的一些困扰。但目前的压力对您来说是适度的、具有激励作用的，希望您不要过度担心。",
        			"7-8":"您的压力等级为x级。您目前处于比较大的压力之下，压力也对您造成了不小的影响。压力像弹簧，您弱它就强。在抗压的路上，我们陪您战斗到底！",
        			"9-10":"您的压力等级为x级，压力值已经爆表！它严重影响了您的生活质量，甚至让您觉得疲惫不堪。您可能需要和咨询师聊一聊。希望您勇敢地迈出求助的第一步！"
        		}
        }

function yaliWeiDuChart(shengliScore,qingxvScore,xingweiScore,renzhiScore){
	$('#container_1').highcharts({
        chart: {
            polar: true,
            spacingLeft: 20,
            spacingRight:20
        },
        title: {
            text: null
        },
        xAxis: {
            categories: ['生理', '情绪', '行为', '认知'],
            lineWidth:2,
            //lineColor: '#FF0000',  //设置X轴线颜色
            tickmarkPlacement: 'on'
        },
        yAxis: {
            gridLineInterpolation: 'circle',
            tickInterval: 1,
            gridLineWidth: 0,
            title: {
                text: null
            },
            labels: {
                enabled: false
            },
            min: 0,
            max:10
        },
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
        series: [{
            type: 'area',
            data: [{
                y:shengliScore,
                dataLabels: {
                    enabled: true
                }
            },{
                y:qingxvScore,
                dataLabels: {
                    enabled: true
                }
            },{
                y:xingweiScore,
                dataLabels: {
                    enabled: true
                }
            },{
                y:renzhiScore,
                dataLabels: {
                    enabled: true
                }
            }],
            pointPlacement: 'on'
        }]
    });
}

function shengliFanYing(child,sexStr){
	var bwDesc = new Array();
	var wuBwDesc = new Array();
	var isBW = 0;
	var isWuBW = 0;
	var bwArr = child[0]["childDimension"];
	var wuBwArr = child[1]["childDimension"];
	for(var i=0;i<bwArr.length;i++){
		if(Number(bwArr[i]["score"])>=2){
			if(isBW == 0){
				isBW =1;
			}
			bwDesc.push({ dimension:bwArr[i]["name"] , score:Number(bwArr[i]["score"])});
		}
	}
	for(var j=0;j<wuBwArr.length;j++){
		if(Number(wuBwArr[j]["score"])>=2){
			if(isWuBW == 0){
				isWuBW =1;
			}
			wuBwDesc.push(wuBwArr[j]["name"]);
		}
	}
	if(isBW == 0){
		$("#quti").attr("style","display:none");
	}else{
		var data = {
		        sex:sexStr,
		        sexDimension: bwDesc
		    }
	    var canvas=document.getElementById("myCanvas");
	    if(canvas.getContext){
	        var context = canvas.getContext("2d");
	        var img= new Image();

	        //判断是男人or女人
	        if(data.sex == "man"){
	            img.src = "report/images/pressure_3.png";
	            //男孩生理维度小人示意图加载后绘制
	            img.onload = function () {
	                //向canvas绘制相小人示意图图片
	                context.drawImage(img,34,34,220,220);
	                //调用绘制男人生理维度小人示意图方法
	                drawMan(context,data);
	            }
	        }else{
	            img.src = "report/images/pressure_4.png";
	            //女孩生理维度小人示意图加载后绘制
	            img.onload = function () {
	                //向canvas绘制相小人示意图图片
	                context.drawImage(img,34,34,220,220);
	                //调用绘制女人生理维度小人示意图方法
	                drawWoman(context,data);
	            }
	        }
	    }
	    if(isWuBW ==1){
	    	$("#wuquti").html("<p>除此之外，您会感到"+wuBwDesc.join("、")+"。</p>");
	    }
	}
	if(isWuBW == 0){
		$("#wuquti").attr("style","display:none");
	}else{
		if(isBW == 0){
			$("#wuquti").html("<p>您会感到"+wuBwDesc.join("、")+"。</p>");
		}
	}
	if(isBW == 0 && isWuBW == 0){
		$("#shengliDesc").html("<p>在压力状态下，您没有出现明显的躯体不适，这表明压力对您的身体健康影响较小。希望您能保持当下的健康状况以更好地迎接未来的挑战！</p>");
	}
}

function qingxvFanYing(child){
	var qxArray = new Array();
	var yyArray = new Array();//抑郁检出
	var jlArray = new Array();//焦虑检出
	var chartData = new Array();
	var chartX = new Array();
	var ynscore =0;
	var yyscore =0;
	var gdscore =0;
	var zkscore=0;
	var wnscore=0;
	var jlscore=0;
	for(var i=0;i<child.length;i++){
		var color ="#00b150";
		if(Number(child[i]["score"]).toFixed(2) >= 2){
			qxArray.push({"name":child[i]["name"],"score":child[i]["score"]});
			color="#c10000";
		}
		if(child[i]["name"] =="抑郁"){
			yyscore = Number(child[i]["score"]);
			chartData.push({name:"抑郁",color:color,y:yyscore});
			var childDimenYY= child[i]["childDimension"];
			for(var j=0;j<childDimenYY.length;j++){
				if(Number(childDimenYY[j]["score"]).toFixed(2) >=2){
					yyArray.push({"name":childDimenYY[j]["name"],"score":childDimenYY[j]["score"]});
				}
			}
		}
		if(child[i]["name"] =="焦虑"){
			jlscore = Number(child[i]["score"]);
			chartData.push({name:"焦虑",color:color,y:jlscore});
			var childDimenJL= child[i]["childDimension"];
			for(var m=0;m<childDimenJL.length;m++){
				if(Number(childDimenJL[m]["score"]).toFixed(2) >=2){
					jlArray.push({"name":childDimenJL[m]["name"],"score":childDimenJL[m]["score"]});
				}
			}
		}
		if(child[i]["name"] == "易怒"){
			ynscore = Number(child[i]["score"]);
			chartData.push({name:"易怒",color:color,y:ynscore});
		}else if(child[i]["name"] == "孤独"){
			gdscore = Number(child[i]["score"]);
			chartData.push({name:"孤独",color:color,y:gdscore});
		}else if(child[i]["name"] == "抓狂"){
			zkscore = Number(child[i]["score"]);
			chartData.push({name:"抓狂",color:color,y:zkscore});
		}else if(child[i]["name"] == "无奈"){
			wnscore = Number(child[i]["score"]);
			chartData.push({name:"无奈",color:color,y:wnscore});
		}
	}
	chartData.sort(compare("y"));
	for(var m=0;m<chartData.length;m++){
		chartX[m]=chartData[m]["name"];
	}
	qxChart(chartData,chartX);
	if(qxArray.length > 0){
		qxArray.sort(compare("score"));
		var qxDesc = "";
		$.each(qxArray,function(index,qx){
			qxDesc += qx["name"]+"、";
		});
		qxDesc = qxDesc.substring(0,qxDesc.length-1);
		$("#jianchuInfo").html("<p>在情绪方面，您的压力反应主要表现为"+qxDesc+"。</p>");
	    if(yyscore.toFixed(2) >=2 && jlscore.toFixed(2) >=2){
	    	yyArray.sort(compare("score"));
	    	jlArray.sort(compare("score"));
	    	var yyDesc="";
	    	var jlDesc="";
	    	$.each(yyArray,function(index,yy){
	    		yyDesc += yy["name"]+"、";
			});
	    	yyDesc = yyDesc.substring(0,yyDesc.length-1);
	    	$.each(jlArray,function(index,jl){
	    		jlDesc += jl["name"]+"、";
			});
	    	jlDesc = jlDesc.substring(0,jlDesc.length-1);
	    	$("#jianchuDesc").html("<p>其中，抑郁、焦虑的情绪表现较为复杂，对身心健康有着较严重的影响。对这两种情绪有更多了解能帮助您有针对性地进行自我调适或寻求专业帮助。您的抑郁情绪具体表现为："+yyDesc+"。您的焦虑情绪具体表现为："+jlDesc+"。</p>");
	    }else if(yyscore.toFixed(2)< 2 && jlscore.toFixed(2) < 2){
    		$("#jianchuDesc").attr("style","display:none");
    	}else{
	    	if(yyscore.toFixed(2) >=2){
	    		var yyDesc="";
	    		yyArray.sort(compare("score"));
	    		$.each(yyArray,function(index,yy){
		    		yyDesc += yy["name"]+"、";
				});
	    		yyDesc = yyDesc.substring(0,yyDesc.length-1);
	    		$("#jianchuDesc").html("<p>其中，抑郁情绪较为复杂，对身心健康有着较严重的影响。对抑郁情绪有更多的了解有助于您有针对性地进行自我调适或寻求专业帮助。您的抑郁情绪的具体表现为："+yyDesc+"。</p>");
	    	}
	    	if(jlscore.toFixed(2) >=2){
	    		jlArray.sort(compare("score"));
		    	var jlDesc="";
		    	$.each(jlArray,function(index,jl){
		    		jlDesc += jl["name"]+"、";
				});
		    	jlDesc = jlDesc.substring(0,jlDesc.length-1);
		    	$("#jianchuDesc").html("<p>其中，焦虑情绪较为复杂，对身心健康有着较严重的影响。对焦虑情绪有更多的了解有助于您有针对性地进行自我调适或寻求专业帮助。您的焦虑情绪具体表现为："+jlDesc+"。</p>");
	    	}
	    }
	}else{
		$("#jianchuInfo").attr("style","display:none");
		$("#jianchuDesc").attr("style","display:none");
		$("#qxjianchuDesc").attr("style","display:none");
		$("#wuqxjianchu").html("<p>压力尚未对您的情绪造成消极影响。希望您能保持当前的愉快心情，健康的生活！</p>");
	}
}

function xingweiFanYing(child){
	var xwArray = new Array();
	var gjArray = new Array();//攻击检出
	var xwData = new Array();
	var xwX = new Array();
	var fzscore=0;
	var byscore=0;
	var gjscore=0;
	var zzscore=0;
	var ylscore=0;
	var rjhdscore=0;
	var blxwscore=0;
	for(var i=0;i<child.length;i++){
		var color="#00b150";
		if(Number(child[i]["score"]).toFixed(2) >= 2){
			color="#c10000";
			xwArray.push({"name":child[i]["name"],"score":child[i]["score"]});
		}
		if(child[i]["name"] =="攻击"){
			gjscore=Number(child[i]["score"]);
			xwData.push({name:"攻击",color:color,y:gjscore});
			var childDimenYY= child[i]["childDimension"];
			for(var j=0;j<childDimenYY.length;j++){
				if(Number(childDimenYY[j]["score"]).toFixed(2) >=2){
					gjArray.push({"name":childDimenYY[j]["name"],"score":childDimenYY[j]["score"]});
				}
			}
		}
		if(child[i]["name"] =="烦躁"){
			fzscore =Number(child[i]["score"]);
			xwData.push({name:"烦躁",color:color,y:fzscore});
		}else if(child[i]["name"] =="抱怨"){
			byscore =Number(child[i]["score"]);
			xwData.push({name:"抱怨",color:color,y:byscore});
		}else if(child[i]["name"] =="指责"){
			zzscore =Number(child[i]["score"]);
			xwData.push({name:"指责",color:color,y:zzscore});
		}else if(child[i]["name"] =="依赖"){
			ylscore =Number(child[i]["score"]);
			xwData.push({name:"依赖",color:color,y:ylscore});
		}else if(child[i]["name"] =="人际互动减少"){
			rjhdscore =Number(child[i]["score"]);
			xwData.push({name:"人际互动减少",color:color,y:rjhdscore});
		}else if(child[i]["name"] =="饭量|吸烟量增加"){
			blxwscore =Number(child[i]["score"]);
			xwData.push({name:"饭量|吸烟量增加",color:color,y:blxwscore});
		}
	}
	xwData.sort(compare("y"));
	for(var m=0;m<xwData.length;m++){
		xwX[m]=xwData[m]["name"];
	}
	xwChart(xwData,xwX);
	if(xwArray.length >0){
		xwArray.sort(compare("score"));
		var xwDesc="";
		$.each(xwArray,function(index,qx){
			xwDesc += qx["name"]+"、";
		});
		xwDesc = xwDesc.substring(0,xwDesc.length-1);
		$("#xwjianchu").html("在行为方面，您的压力反应主要表现为"+xwDesc+"。");
		if(gjscore.toFixed(2) >=2){
    		var gjDesc="";
    		gjArray.sort(compare("score"));
    		$.each(gjArray,function(index,yy){
	    		gjDesc += yy["name"]+"、";
			});
    		gjDesc = gjDesc.substring(0,gjDesc.length-1);
    		$("#xwgjDesc").html("其中，攻击行为中的攻击性主要指向"+gjDesc+"。");
    	}else{
    		$("#xwgjDesc").html("");
    	}
	}else{
		$("#xwjianchu").attr("style","display:none");
		$("#xwgjDesc").attr("style","display:none");
		$("#xwDesc").attr("style","display:none");
		$("#wuxingweijianchu").html("压力未对您的行为造成消极影响。希望您能维持当前的健康生活，继续以积极的心态面对生活！");
	}
}

function rzFanYing(child){
	var rzArray = new Array();
	var rzData = new Array();
	var rzX = new Array();
	var zylscore=0;
	var swscore=0;
	var fyscore=0;
	var jylscore=0;
	for(var i=0;i<child.length;i++){
		var color="#00b150";
		if(Number(child[i]["score"]).toFixed(2) >= 2){
			rzArray.push({"name":child[i]["name"],"score":child[i]["score"]});
			color="#c10000";
		}
		if(child[i]["name"] =="注意力不集中"){
			zylscore =Number(child[i]["score"]);
			rzData.push({name:"注意力不集中",color:color,y:zylscore});
		}else if(child[i]["name"] =="思维不清晰"){
			swscore =Number(child[i]["score"]);
			rzData.push({name:"思维不清晰",color:color,y:swscore});
		}else if(child[i]["name"] =="反应迟钝"){
			fyscore =Number(child[i]["score"]);
			rzData.push({name:"反应迟钝",color:color,y:fyscore});
		}else if(child[i]["name"] =="记忆力减退"){
			jylscore =Number(child[i]["score"]);
			rzData.push({name:"记忆力减退",color:color,y:jylscore});
		}
	}
	rzData.sort(compare("y"));
	for(var m=0;m<rzData.length;m++){
		rzX[m]=rzData[m]["name"];
	}
	rzChart(rzData,rzX);
	if(rzArray.length >0){
		rzArray.sort(compare("score"));
		var rzDesc="";
		$.each(rzArray,function(index,qx){
			rzDesc += qx["name"]+"、";
		});
		rzDesc = rzDesc.substring(0,rzDesc.length-1);
		$("#rzjianchu").html("在认知方面，您的压力反应主要表现为"+rzDesc+"。");
	}else{
		$("#rzjianchu").attr("style","display:none");
		$("#rzDesc").html("压力未对您的认知能力造成消极影响。希望您能继续保持充沛的精力，从容面对工作和生活。");
	}
	
}

function qxChart(qxData,qxX){
	/*情绪反应*/
    $('#container_2').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: null,
            style:{
                fontSize:"16px"
            }
        },
        xAxis: {
            categories: qxX,
            tickInterval: 1,
            tickLength:5
        },
        yAxis: {
            min: 0,
            max:4,
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
            formatter: function() {
                tooltip.enabled = false;
            }
        },
        legend: {
            enabled: false
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
            data: qxData
        }]
    });
}

function xwChart(xwData,xwX){
	 //行为反应
	$('#container_3').highcharts({
       chart: {
           type: 'column'
       },
       title: {
           text: null,
           style:{
               fontSize:"16px"
           }
       },
       xAxis: {
           categories: xwX,
           tickInterval: 1
           //tickLength:5
       },
       yAxis: {
           min: 0,
           max:4,
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
           formatter: function() {
               tooltip.enabled = false;
           }
       },
       legend: {
           enabled: false
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
           data:xwData 
       }]
   });
}

function rzChart(rzData,rzX){
	 /*认知反应*/
    $('#container_4').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: null,
            style:{
                fontSize:"16px"
            }
        },
        xAxis: {
            categories: rzX,
            tickInterval: 1
            //tickLength:5
        },
        yAxis: {
            min: 0,
            max:4,
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
            formatter: function() {
                tooltip.enabled = false;
            }
        },
        legend: {
            enabled: false
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
            data: rzData
        }]
    });
}

//canvas 绘制虚线方法
function drawDashedLine(context, x1, y1, x2, y2, dashLength) {
    dashLength = dashLength === undefined ? 5 : dashLength;
    var deltaX = x2 - x1;
    var deltaY = y2 - y1;
    var numDashes = Math.floor(
        Math.sqrt(deltaX * deltaX + deltaY * deltaY) / dashLength);
    for (var i=0; i < numDashes; ++i) {
        context[ i % 2 === 0 ? 'moveTo' : 'lineTo' ]
        (x1 + (deltaX / numDashes) * i, y1 + (deltaY / numDashes) * i);
    }
    context.stroke();
}

//绘制Man生理维度小人示意图
function drawMan(context,data){
    context.lineWidth = 1;
    context.strokeStyle ='#BF504D';

    $.each( data.sexDimension, function(index, content) {
        if(content.dimension=="头痛"){
            if(content.score != 0 && content.score != 1){
                drawDashedLine(context, 170, 50, 235, 50, 3);
                if(content.score == 2){
                    context.beginPath();
                    context.fillStyle="#FDBF18";
                    context.font= 'Bold 12px Sans-Serif';
                    context.closePath();
                }else if(content.score == 3){
                    context.beginPath();
                    context.fillStyle="#FB6919";
                    context.font= 'Bold 12px Sans-Serif';
                    context.closePath();
                }else if(content.score == 4){
                    context.beginPath();
                    context.fillStyle="#F11D1D";
                    context.font= 'Bold 12px Sans-Serif';
                    context.closePath();
                }
                context.fillText('头痛',235,53);
            }
        }else if(content.dimension=="耳鸣"){
            if(content.score != 0 && content.score != 1){
                drawDashedLine(context, 180, 80, 235, 80, 3);
                if(content.score == 2){
                    context.beginPath();
                    context.fillStyle="#FDBF18";
                    context.font= 'Bold 12px Sans-Serif';
                    context.closePath();
                }else if(content.score == 3){
                    context.beginPath();
                    context.fillStyle="#FB6919";
                    context.font= 'Bold 12px Sans-Serif';
                    context.closePath();
                }else if(content.score == 4){
                    context.beginPath();
                    context.fillStyle="#F11D1D";
                    context.font= 'Bold 12px Sans-Serif';
                    context.closePath();
                }
                context.fillText('耳鸣',235,83);
            }
        }else if(content.dimension=="肌肉酸痛"){
            if(content.score != 0 && content.score != 1){
                drawDashedLine(context, 170, 130, 235, 130, 3);
                if(content.score == 2){
                    context.beginPath();
                    context.fillStyle="#FDBF18";
                    context.font= 'Bold 12px Sans-Serif';
                    context.closePath();
                }else if(content.score == 3){
                    context.beginPath();
                    context.fillStyle="#FB6919";
                    context.font= 'Bold 12px Sans-Serif';
                    context.closePath();
                }else if(content.score == 4){
                    context.beginPath();
                    context.fillStyle="#F11D1D";
                    context.font= 'Bold 12px Sans-Serif';
                    context.closePath();
                }
                context.fillText('肌肉酸痛',235,133);
            }
        }else if(content.dimension=="心慌"){
            if(content.score != 0 && content.score != 1){
                drawDashedLine(context, 160, 155, 235, 155, 3);
                if(content.score == 2){
                    context.beginPath();
                    context.fillStyle="#FDBF18";
                    context.font= 'Bold 12px Sans-Serif';
                    context.closePath();
                }else if(content.score == 3){
                    context.beginPath();
                    context.fillStyle="#FB6919";
                    context.font= 'Bold 12px Sans-Serif';
                    context.closePath();
                }else if(content.score == 4){
                    context.beginPath();
                    context.fillStyle="#F11D1D";
                    context.font= 'Bold 12px Sans-Serif';
                    context.closePath();
                }
                context.fillText('心慌',235,158);
            }
        }else if(content.dimension=="肠胃不适"){
            if(content.score != 0 && content.score != 1){
                drawDashedLine(context, 160, 185, 235, 185, 3);
                if(content.score == 2){
                    context.beginPath();
                    context.fillStyle="#FDBF18";
                    context.font= 'Bold 12px Sans-Serif';
                    context.closePath();
                }else if(content.score == 3){
                    context.beginPath();
                    context.fillStyle="#FB6919";
                    context.font= 'Bold 12px Sans-Serif';
                    context.closePath();
                }else if(content.score == 4){
                    context.beginPath();
                    context.fillStyle="#F11D1D";
                    context.font= 'Bold 12px Sans-Serif';
                    context.closePath();
                }
                context.fillText('肠胃不适',235,188);
            }
        }else if(content.dimension=="眼睛疲劳"){
            if(content.score != 0 && content.score != 1){
                drawDashedLine(context, 123, 78, 60, 78, 3);
                if(content.score == 2){
                    context.beginPath();
                    context.fillStyle="#FDBF18";
                    context.font= 'Bold 12px Sans-Serif';
                    context.closePath();
                }else if(content.score == 3){
                    context.beginPath();
                    context.fillStyle="#FB6919";
                    context.font= 'Bold 12px Sans-Serif';
                    context.closePath();
                }else if(content.score == 4){
                    context.beginPath();
                    context.fillStyle="#F11D1D";
                    context.font= 'Bold 12px Sans-Serif';
                    context.closePath();
                }
                context.fillText('眼睛疲劳',5,81);
            }
        }else if(content.dimension=="嗓子疼"){
            if(content.score != 0 && content.score != 1){
                drawDashedLine(context, 138, 121, 60, 121, 3);
                if(content.score == 2){
                    context.beginPath();
                    context.fillStyle="#FDBF18";
                    context.font= 'Bold 12px Sans-Serif';
                    context.closePath();
                }else if(content.score == 3){
                    context.beginPath();
                    context.fillStyle="#FB6919";
                    context.font= 'Bold 12px Sans-Serif';
                    context.closePath();
                }else if(content.score == 4){
                    context.beginPath();
                    context.fillStyle="#F11D1D";
                    context.font= 'Bold 12px Sans-Serif';
                    context.closePath();
                }
                context.fillText('嗓子疼',17,124);
            }
        }else if(content.dimension=="胸闷、胸痛"){
            if(content.score != 0 && content.score != 1){
                drawDashedLine(context, 127, 147, 60, 147, 3);
                if(content.score == 2){
                    context.beginPath();
                    context.fillStyle="#FDBF18";
                    context.font= 'Bold 12px Sans-Serif';
                    context.closePath();
                }else if(content.score == 3){
                    context.beginPath();
                    context.fillStyle="#FB6919";
                    context.font= 'Bold 12px Sans-Serif';
                    context.closePath();
                }else if(content.score == 4){
                    context.beginPath();
                    context.fillStyle="#F11D1D";
                    context.font= 'Bold 12px Sans-Serif';
                    context.closePath();
                }
                context.fillText('胸闷胸痛',5,150);
            }
        }else if(content.dimension=="手脚发冷"){
            if(content.score != 0 && content.score != 1){
                drawDashedLine(context, 99, 190, 60, 190, 3);
                if(content.score == 2){
                    context.beginPath();
                    context.fillStyle="#FDBF18";
                    context.font= 'Bold 12px Sans-Serif';
                    context.closePath();
                }else if(content.score == 3){
                    context.beginPath();
                    context.fillStyle="#FB6919";
                    context.font= 'Bold 12px Sans-Serif';
                    context.closePath();
                }else if(content.score == 4){
                    context.beginPath();
                    context.fillStyle="#F11D1D";
                    context.font= 'Bold 12px Sans-Serif';
                    context.closePath();
                }
                context.fillText('手脚发冷',5,193);
            }
        }else{
            alert("drawLine function error");
        }
    });
}
//绘制woMan生理维度小人示意图
function drawWoman(context,data){
    context.lineWidth = 1;
    context.strokeStyle ='#BF504D';

    $.each( data.sexDimension, function(index, content) {
        if(content.dimension=="头痛"){
            if(content.score != 0 && content.score != 1){
                drawDashedLine(context, 170, 55, 235, 55, 3);
                if(content.score == 2){
                    context.beginPath();
                    context.fillStyle="#FDBF18";
                    context.font= 'Bold 12px Sans-Serif';
                    context.closePath();
                }else if(content.score == 3){
                    context.beginPath();
                    context.fillStyle="#FB6919";
                    context.font= 'Bold 12px Sans-Serif';
                    context.closePath();
                }else if(content.score == 4){
                    context.beginPath();
                    context.fillStyle="#F11D1D";
                    context.font= 'Bold 12px Sans-Serif';
                    context.closePath();
                }
                context.fillText('头痛',235,59);
            }
        }else if(content.dimension=="耳鸣"){
            if(content.score != 0 && content.score != 1){
                drawDashedLine(context, 170, 75, 235, 75, 3);
                if(content.score == 2){
                    context.beginPath();
                    context.fillStyle="#FDBF18";
                    context.font= 'Bold 12px Sans-Serif';
                    context.closePath();
                }else if(content.score == 3){
                    context.beginPath();
                    context.fillStyle="#FB6919";
                    context.font= 'Bold 12px Sans-Serif';
                    context.closePath();
                }else if(content.score == 4){
                    context.beginPath();
                    context.fillStyle="#F11D1D";
                    context.font= 'Bold 12px Sans-Serif';
                    context.closePath();
                }
                context.fillText('耳鸣',235,79);
            }
        }else if(content.dimension=="肌肉酸痛"){
            if(content.score != 0 && content.score != 1){
                drawDashedLine(context, 150, 115, 235, 115, 3);
                if(content.score == 2){
                    context.beginPath();
                    context.fillStyle="#FDBF18";
                    context.font= 'Bold 12px Sans-Serif';
                    context.closePath();
                }else if(content.score == 3){
                    context.beginPath();
                    context.fillStyle="#FB6919";
                    context.font= 'Bold 12px Sans-Serif';
                    context.closePath();
                }else if(content.score == 4){
                    context.beginPath();
                    context.fillStyle="#F11D1D";
                    context.font= 'Bold 12px Sans-Serif';
                    context.closePath();
                }
                context.fillText('肌肉酸痛',235,119);
            }
        }else if(content.dimension=="心慌"){
            if(content.score != 0 && content.score != 1){
                drawDashedLine(context, 147, 132, 235, 132, 3);
                if(content.score == 2){
                    context.beginPath();
                    context.fillStyle="#FDBF18";
                    context.font= 'Bold 12px Sans-Serif';
                    context.closePath();
                }else if(content.score == 3){
                    context.beginPath();
                    context.fillStyle="#FB6919";
                    context.font= 'Bold 12px Sans-Serif';
                    context.closePath();
                }else if(content.score == 4){
                    context.beginPath();
                    context.fillStyle="#F11D1D";
                    context.font= 'Bold 12px Sans-Serif';
                    context.closePath();
                }
                context.fillText('心慌',235,136);
            }
        }else if(content.dimension=="肠胃不适"){
            if(content.score != 0 && content.score != 1){
                drawDashedLine(context, 140, 150, 235, 150, 3);
                if(content.score == 2){
                    context.beginPath();
                    context.fillStyle="#FDBF18";
                    context.font= 'Bold 12px Sans-Serif';
                    context.closePath();
                }else if(content.score == 3){
                    context.beginPath();
                    context.fillStyle="#FB6919";
                    context.font= 'Bold 12px Sans-Serif';
                    context.closePath();
                }else if(content.score == 4){
                    context.beginPath();
                    context.fillStyle="#F11D1D";
                    context.font= 'Bold 12px Sans-Serif';
                    context.closePath();
                }
                context.fillText('肠胃不适',235,154);
            }
        }else if(content.dimension=="眼睛疲劳"){
            if(content.score != 0 && content.score != 1){
                drawDashedLine(context, 109, 77, 60, 77, 3);
                if(content.score == 2){
                    context.beginPath();
                    context.fillStyle="#FDBF18";
                    context.font= 'Bold 12px Sans-Serif';
                    context.closePath();
                }else if(content.score == 3){
                    context.beginPath();
                    context.fillStyle="#FB6919";
                    context.font= 'Bold 12px Sans-Serif';
                    context.closePath();
                }else if(content.score == 4){
                    context.beginPath();
                    context.fillStyle="#F11D1D";
                    context.font= 'Bold 12px Sans-Serif';
                    context.closePath();
                }
                context.fillText('眼睛疲劳',5,80);
            }
        }else if(content.dimension=="嗓子疼"){
            if(content.score != 0 && content.score != 1){
                drawDashedLine(context, 133, 108, 60, 108, 3);
                if(content.score == 2){
                    context.beginPath();
                    context.fillStyle="#FDBF18";
                    context.font= 'Bold 12px Sans-Serif';
                    context.closePath();
                }else if(content.score == 3){
                    context.beginPath();
                    context.fillStyle="#FB6919";
                    context.font= 'Bold 12px Sans-Serif';
                    context.closePath();
                }else if(content.score == 4){
                    context.beginPath();
                    context.fillStyle="#F11D1D";
                    context.font= 'Bold 12px Sans-Serif';
                    context.closePath();
                }
                context.fillText('嗓子疼',17,112);
            }
        }else if(content.dimension=="胸闷、胸痛"){
            if(content.score != 0 && content.score != 1){
                drawDashedLine(context, 120, 125, 60, 125, 3);
                if(content.score == 2){
                    context.beginPath();
                    context.fillStyle="#FDBF18";
                    context.font= 'Bold 12px Sans-Serif';
                    context.closePath();
                }else if(content.score == 3){
                    context.beginPath();
                    context.fillStyle="#FB6919";
                    context.font= 'Bold 12px Sans-Serif';
                    context.closePath();
                }else if(content.score == 4){
                    context.beginPath();
                    context.fillStyle="#F11D1D";
                    context.font= 'Bold 12px Sans-Serif';
                    context.closePath();
                }
                context.fillText('胸闷胸痛',5,129);
            }
        }else if(content.dimension=="手脚发冷"){
            if(content.score != 0 && content.score != 1){
                drawDashedLine(context, 110, 165, 60, 165, 3);
                if(content.score == 2){
                    context.beginPath();
                    context.fillStyle="#FDBF18";
                    context.font= 'Bold 12px Sans-Serif';
                    context.closePath();
                }else if(content.score == 3){
                    context.beginPath();
                    context.fillStyle="#FB6919";
                    context.font= 'Bold 12px Sans-Serif';
                    context.closePath();
                }else if(content.score == 4){
                    context.beginPath();
                    context.fillStyle="#F11D1D";
                    context.font= 'Bold 12px Sans-Serif';
                    context.closePath();
                }
                context.fillText('手脚发冷',5,169);
            }
        }else{
            alert("drawLine function error");
        }
    });
}

function maxDesc(arrObj){
	var desc="";
	var max = 0;
	$.each(arrObj, function(key, val) {
		max = arrObj[key] > max ? arrObj[key] :max;
	});
	$.each(arrObj, function(key, val) {
		if(arrObj[key] == max){
			desc += key+"、";
		}
	});
	return desc.substring(0,desc.length-1);
}

//数组从大到小排序
function compare(property){
    return function(a,b){
    	 var val1 = a[property];
         var val2 = b[property];
         if (!isNaN(Number(val1)) && !isNaN(Number(val2))) {
             val1 = Number(val1);
             val2 = Number(val2);
         }
         return val2 - val1;
    }
}


