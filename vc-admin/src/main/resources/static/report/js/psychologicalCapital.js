$(function(){
	var jsonVal = document.getElementById("data").innerHTML;
	var myobj=eval('(' + jsonVal + ')');
	var objArr = myobj[0].data; 
	var totalLevel = myobj[0].totalLevel;
	var totalScore = myobj[0].totalScore;
	document.getElementById("totalScore").innerHTML=totalScore;
	document.getElementById("totalScore01").innerHTML=totalScore;
	document.getElementById("totalScore02").innerHTML=totalScore;
	document.getElementById("totalScore03").innerHTML=totalScore;
	if(totalLevel==1){
		document.getElementById("totalBx").innerHTML='心理资本处于较低水平。您的得分低于常模指数范围，说明您比大多数人的心理资本水平要低，您需要加强和训练您的心理资本，以应对挑战和危机。';
		document.getElementById("totalBx01").innerHTML='心理资本处于较低水平。';
	}else if(totalLevel==2){
		document.getElementById("totalBx").innerHTML='心理资本处于中等水平。您的得分在常模指数范围内，说明您的心理资本水平与大多数人相当，可以应对一般的压力和挑战。';
		document.getElementById("totalBx01").innerHTML='心理资本处于中等水平。';
	}else if(totalLevel==3){
		document.getElementById("totalBx").innerHTML='心理资本处于较高水平。您的得分超过了常模指数范围，说明您比大多数人的心理资本水平要高，可以应对较高的压力和挑战。';
		document.getElementById("totalBx01").innerHTML='心理资本处于较高水平。';
	}
	var zxygScore=0;
	var lgxwScore=0;
	var ffjqScore=0;
	var jrwqScore=0;
	var brksScore=0;
	var zjlrScore=0;
	var qxckScore=0;
	var gefxScore=0;
	for(i=0;i<objArr.length;i++){
		var level = objArr[i].dimensionLevel;
		var dimensionName = objArr[i].dimensionName;
		var dimensionGetScore = objArr[i].dimensionGetScore;
		if(dimensionName=='zxyg'){
			document.getElementById("zxygScore").innerHTML=dimensionGetScore;
			zxygScore=dimensionGetScore;
			if(level==1){
				document.getElementById("zxygbx").innerHTML='您的得分低于常模指数范围，说明您的得分低于大多数人。认为自己的工作胜任能力比较差，不敢在不同场合表现自己的工作才能。';
			}else if(level==2){
				document.getElementById("zxygbx").innerHTML='您的得分在常模指数范围内，说明您的得分与大多数人相当。认为自己的工作胜任能力一般，多数情况下敢于在不同场合表现自己的工作才能。';
			}else if(level==3){
				document.getElementById("zxygbx").innerHTML='您的得分超过了常模指数范围，说明您的得分高于大多数人。认为自己具有很强的工作胜任力，勇于在不同场合以各种方式表现自己的工作才能。';
			}
		}
		if(dimensionName=='lgxw'){
			document.getElementById("lgxwScore").innerHTML=dimensionGetScore;
			lgxwScore=dimensionGetScore;
			if(level==1){
				document.getElementById("lgxwbx").innerHTML='您的得分低于常模指数范围，说明您的得分低于大多数人。对不确定的、未发生的事情，不能抱以乐观的态度，对于已发生的不利事情，不能很快地调整好自己的情绪，容易沮丧和绝望。';
			}else if(level==2){
				document.getElementById("lgxwbx").innerHTML='您的得分在常模指数范围内，说明您的得分与大多数人相当。多数情况下，对不确定的、未发生的事情，会抱以乐观的态度，对于已发生的不利事情，也能较快地调整好自己的情绪。';
			}else if(level==3){
				document.getElementById("lgxwbx").innerHTML='您的得分超过了常模指数范围，说明您的得分高于大多数人。对不确定的、未发生的事情，会抱以乐观的态度，期待好结果出现，对于已发生的不利事情，认为是短暂的和有办法解决的，不容易沮丧和绝望。';
			}
		}
		if(dimensionName=='ffjq'){
			document.getElementById("ffjqScore").innerHTML=dimensionGetScore;
			ffjqScore=dimensionGetScore;
			if(level==1){
				document.getElementById("ffjqbx").innerHTML='您的得分低于常模指数范围，说明您的得分低于大多数人。没有很高的个人抱负，不会设定更高的追求目标，不喜欢挑战，不改进自己的做事方式。';
			}else if(level==2){
				document.getElementById("ffjqbx").innerHTML='您的得分在常模指数范围内，说明您的得分与大多数人相当。有一定的个人抱负，多数情况下在不断追求更高的目标，不断改进自己的做事方式。';
			}else if(level==3){
				document.getElementById("ffjqbx").innerHTML='您的得分超过了常模指数范围，说明您的得分高于大多数人。有很高的个人抱负，追求高目标，喜欢挑战，渴望获得成功，并表现在改进做事方式与能力提升上。';
			}
		}
		if(dimensionName=='jrwq'){
			document.getElementById("jrwqScore").innerHTML=dimensionGetScore;
			jrwqScore=dimensionGetScore;
			if(level==1){
				document.getElementById("jrwqbx").innerHTML='您的得分低于常模指数范围，说明您的得分低于大多数人。遇到困难或危机时，不能适应和忍耐不利条件，容易放弃，而且不会极力想办法改变不利局面以实现预设目标。';
			}else if(level==2){
				document.getElementById("jrwqbx").innerHTML='您的得分在常模指数范围内，说明您的得分与大多数人相当。遇到困难或危机时，多数时候能够适应和忍耐不利条件，不容易放弃，并努力想办法改变不利局面。';
			}else if(level==3){
				document.getElementById("jrwqbx").innerHTML='您的得分超过了常模指数范围，说明您的得分高于大多数人。遇到困难或危机时，沉着冷静，能够适应和忍耐不利条件，不轻易放弃、有恒心毅力，并极力想办法改变不利局面，争取实现既定目标。';
			}
		}
		if(dimensionName=='brks'){
			document.getElementById("brksScore").innerHTML=dimensionGetScore;
			brksScore=dimensionGetScore;
			if(level==1){
				document.getElementById("brksbx").innerHTML='您的得分低于常模指数范围，说明您的得分低于大多数人。不能完全接纳不同风格、性格与价值观的领导、同事，对他人的不足和过失不能给予理解包涵，对他人给自己造成的伤害不能给予宽恕。';
			}else if(level==2){
				document.getElementById("brksbx").innerHTML='您的得分在常模指数范围内，说明您的得分与大多数人相当。多数情况下能够接纳不同风格、性格与价值观的领导、同事，理解包涵他人的不足和过失，宽恕他人给自己造成的伤害。';
			}else if(level==3){
				document.getElementById("brksbx").innerHTML='您的得分超过了常模指数范围，说明您的得分高于大多数人。能完全接纳不同风格、性格与价值观的领导、同事，对他人的不足和过失能给予理解包涵，对他人给自己造成的伤害能给予宽恕。';
			}
		}
		if(dimensionName=='zjlr'){
			document.getElementById("zjlrScore").innerHTML=dimensionGetScore;
			zjlrScore=dimensionGetScore;
			if(level==1){
				document.getElementById("zjlrbx").innerHTML='您的得分低于常模指数范围，说明您的得分低于大多数人。对领导和长者不够尊敬，有时会刻意贬低他人才能，不能照顾到别人的面子；不重视礼节，不能在工作中让他人获得某种优先权。';
			}else if(level==2){
				document.getElementById("zjlrbx").innerHTML='您的得分在常模指数范围内，说明您的得分与大多数人相当。比较重视礼节，多数情况下能够尊敬领导、长者，不刻意贬低他人才能。';
			}else if(level==3){
				document.getElementById("zjlrbx").innerHTML='您的得分超过了常模指数范围，说明您的得分高于大多数人。尊敬领导、长者，不刻意贬低他人才能，能照顾到别人的面子；重视礼节，能在工作中让他人获得某种优先权。';
			}
		}
		if(dimensionName=='qxck'){
			document.getElementById("qxckScore").innerHTML=dimensionGetScore;
			qxckScore=dimensionGetScore;
			if(level==1){
				document.getElementById("qxckbx").innerHTML='您的得分低于常模指数范围，说明您的得分低于大多数人。不能客观认识和坦白自己相对他人的不足之处，且不能对他人长处加以学习和利用；为人不够稳重，没有把握的事也容易承诺别人。';
			}else if(level==2){
				document.getElementById("qxckbx").innerHTML='您的得分在常模指数范围内，说明您的得分与大多数人相当。基本上能客观认识和坦白自己的不足之处，且能对他人长处加以学习和利用；多数情况下为人稳重不轻易承诺别人。';
			}else if(level==3){
				document.getElementById("qxckbx").innerHTML='您的得分超过了常模指数范围，说明您的得分高于大多数人。能客观认识和坦白自己相对他人的不足之处，且能对他人长处加以学习和利用；为人稳重不轻易承诺别人，一旦承诺就会守信。';
			}
		}
		if(dimensionName=='gefx'){
			document.getElementById("gefxScore").innerHTML=dimensionGetScore;
			gefxScore=dimensionGetScore;
			if(level==1){
				document.getElementById("gefxbx").innerHTML='您的得分低于常模指数范围，说明您的得分低于大多数人。不能体察到他人对自己的帮助；认为人生的价值不在于奉献，也不愿意为领导、同事等提供便利。';
			}else if(level==2){
				document.getElementById("gefxbx").innerHTML='您的得分在常模指数范围内，说明您的得分与大多数人相当。基本上能体察到他人对自己的帮助，并表示感谢；多数情况下愿意为领导、同事等提供便利。';
			}else if(level==3){
				document.getElementById("gefxbx").innerHTML='您的得分超过了常模指数范围，说明您的得分高于大多数人。能体察到他人对自己的帮助，并表示感谢；认为人生的价值在于奉献，愿意为领导、同事等提供便利，能为单位利益着想。';
			}
		}
	}
    //highcharts生成图表js
    $('#containerPsychologicalCapital').highcharts({
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
            categories: [
                '自信勇敢 ',
                '乐观希望 ',
                '奋发进取 ',
                '坚韧顽强 ',
                '包容宽恕 ',
                '尊敬礼让 ',
                '谦虚诚恳 ',
                '感恩奉献 '
            ],
            tickLength:0
        },
        yAxis: {
            min: 0,
            title: {
                text: null
            },
            max: 35,
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
                    enabled:true,
                    rotation:90,
                    y:-20
                }
            }
        },
        series: [{
            data: [{
                name:"自信勇敢",
                y:parseInt(zxygScore),
                color:"rgb(82,89,107)"
            },{
                name:"乐观希望",
                y:parseInt(lgxwScore),
                color:"rgb(189,32,16)"
            },{
                name:"奋发进取",
                y:parseInt(ffjqScore),
                color:"rgb(231,186,16)"
            },{
                name:"坚韧顽强",
                y:parseInt(jrwqScore),
                color:"rgb(99,150,41)"
            },{
                name:"包容宽恕",
                y:parseInt(brksScore),
                color:"rgb(0,176,240)"
            },{
                name:"尊敬礼让",
                y:parseInt(zjlrScore),
                color:"rgb(148,138,84)"
            },{
                name:"谦虚诚恳",
                y:parseInt(qxckScore),
                color:"rgb(156,85,173)"
            },{
                name:"感恩奉献",
                y:parseInt(gefxScore),
                color:"rgb(206,195,198)"
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
