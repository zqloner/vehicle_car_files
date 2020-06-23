$(function () {

	var jsonVal = document.getElementById("data").innerHTML;
	var myobj=eval('(' + jsonVal + ')');
	var objArr = myobj[0].data;
	var totalLevel = myobj[0].totalLevel;
	document.getElementById("totalScore").innerHTML=myobj[0].totalScore;
	document.getElementById("totalScore01").innerHTML=myobj[0].totalScore;
	document.getElementById("totalScore02").innerHTML=myobj[0].totalScore;
	if(totalLevel==1){
		document.getElementById("zonghe").innerHTML='您的人际关系得分低于常模指数范围，说明您人际关系水平好于大多数人，拥有良好的人际关系网络。总的来说，您在与朋友相处上的困扰较少，善于与朋友相处，人缘很好，获得许多的好感和赞同。您善于交谈，性格开朗，主动，关心别人，您对周围的朋友都比较好，愿意和他们在一起，朋友也都喜欢您。而且，您能够从与朋友相处中，得到乐趣；您的生活是比较充实、丰富多彩的，与异性朋友也相处得比较好。';
		document.getElementById("zonghe01").innerHTML='您的人际关系得分低于常模指数范围，说明您人际关系水平好于大多数人，拥有良好的人际关系网络。总的来说，您在与朋友相处上的困扰较少，善于与朋友相处，人缘很好，获得许多的好感和赞同。您善于交谈，性格开朗，主动，关心别人，您对周围的朋友都比较好，愿意和他们在一起，朋友也都喜欢您。而且，您能够从与朋友相处中，得到乐趣；您的生活是比较充实、丰富多彩的，与异性朋友也相处得比较好。';
	}else if(totalLevel==2){
		document.getElementById("zonghe").innerHTML='您的人际关系得分在常模指数范围内，说明您和大多数人的水平相当，还需改善您的人际交往能力。总的来说，您与他人相处有一定困扰，人缘一般，与他人的关系并不牢固，时好时坏，经常处于一种起伏变动之中。';
		document.getElementById("zonghe01").innerHTML='您的人际关系得分在常模指数范围内，说明您和大多数人的水平相当，还需改善您的人际交往能力。总的来说，您与他人相处有一定困扰，人缘一般，与他人的关系并不牢固，时好时坏，经常处于一种起伏变动之中。';
	}else if(totalLevel==3){
		document.getElementById("zonghe").innerHTML='您的人际关系得分高于常模指数范围，说明您的人际关系比大多数人差，需要学习一些人际交往技巧。总的来说，您在与他人相处时存在较多的困扰。您可能不善于交谈，也可能在个性方面有些孤僻，不开朗，或者有明显的自高自大的行为。';
		document.getElementById("zonghe01").innerHTML='您的人际关系得分高于常模指数范围，说明您的人际关系比大多数人差，需要学习一些人际交往技巧。总的来说，您在与他人相处时存在较多的困扰。您可能不善于交谈，也可能在个性方面有些孤僻，不开朗，或者有明显的自高自大的行为。';
	}
	
	for (i=0;i<objArr.length ;i++ ){
		var level = objArr[i].dimensionLevel;
		var name  = objArr[i].dimensionName;
		if(name=="qtjt"){
			if(level==1){
				document.getElementById("qtjt").innerHTML='您有较高的交谈能力和技巧，善于利用恰当的说话方式来交流思想感情，因而在与别人建立友情方面，往往更容易获得成功。';
			}else if(level==2){
				document.getElementById("qtjt").innerHTML='您的交谈能力一般，能够诉说自己的感受，但不能讲得条理清晰。如果您与对方不太熟悉，开始时往往表现得比较拘谨与沉默，不太愿意与对方交谈。但这种状况一般不会持续太久。经过一段时间的接触，您可能会主动与人搭话，这方面的困扰也就会随之减轻或消除。';
			}else if(level==3){
				document.getElementById("qtjt").innerHTML='您不善于交谈，只有在极需要的情况下才同别人交谈，总难于表达自己的感受，无论是愉快还是烦恼；您不是个很好的倾听者，往往无法专心听别人说话或只对单独的话题感兴趣。';
			}
			
		}else if(name=="rcjl"){
			if(level==1){
				document.getElementById("rcjy").innerHTML='您对人较为真诚和热情，不存在人际交往困扰。';
			}else if(level==2){
				document.getElementById("rcjy").innerHTML='您在社交与交友方面存在一定的困扰。您不喜欢一个人呆着，需要和朋友在一起，但却不善于创造条件并积极主动地寻找知心朋友。';
			}else if(level==3){
				document.getElementById("rcjy").innerHTML='您在社交活动与交友方面存在较多的行为困扰。例如，在正常集体活动与社交场合，比大多数同伴更为拘谨；有陌生人在场时，往往感到更加紧张；往往过多考虑自己的形象而使自己处于越来越被动和孤立的境地。';
			}	
		}else if(name=="drjw"){
			if(level==1){
				document.getElementById("drjw").innerHTML='您较尊重别人，敢于承担责任，对环境的适应性强。您常常以自己的真诚、宽容、责任心强等个性特点，获得众人的好感与赞同。';
			}else if(level==2){
				document.getElementById("drjw").innerHTML='您是个多侧面的人，也许是一个较圆滑的人。对待不同的人，您有不同的态度，而不同的人对您也有不同的评价。您讨厌某人或者被某人讨厌，但却非常喜欢一个人或者被另一个人喜欢。您的朋友关系某些方面是和谐的、良好的，某些方面却是紧张的、恶劣的。因此，您的情绪很不稳定，内心极不平衡，常常处于矛盾状态中。';
			}else if(level==3){
				document.getElementById("drjw").innerHTML='您缺乏待人接物的机智与技巧。在实际的人际交往中，您也许有意无意地伤害别人，或者过分羡慕别人以致在内心嫉妒别人。因此，可能受到别人的冷漠、排斥，甚至愚弄。';
			}
		}else if(name=="yxjw"){
			if(level==1){
				document.getElementById("yxjw").innerHTML='您知道如何正确处理与异性朋友之间的关系。您对异性持公正的态度，能大方自然地与他们交往，并且在与异性朋友交往中，得到了许多从同性朋友那里得不到的东西。您可能是一个比较受欢迎的人。无论是同性朋友还是异性朋友，多数人都比较喜欢和赞赏您。';
			}else if(level==2){
				document.getElementById("yxjw").innerHTML='您与异性交往的行为困扰程度一般。有时您可能觉得与异性交往是一件愉快的事，有时又可能觉得这种交往似乎是一种负担，不知道如何与异性交往最适宜。';
			}else if(level==3){
				document.getElementById("yxjw").innerHTML='您在与异性交往的过程中存在较多的困扰。也许您对异性存有过分的思慕，或者对异性持有偏见。这两种态度都有片面之处。也许是不知如何把握好与异性交往的分寸而陷入困扰之中。';
			}
		}
	}

    $('#containerInterpersonal').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: null
        },
        xAxis: {
            categories: [
                '倾听与交谈',
                '日常交友',
                '待人接物',
                '异性交往'
            ],
            tickLength:0
        },
        yAxis: {
            min: 0,
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
            data: [{
                name: '倾听与交谈',
                y: parseInt(objArr[0].dimensionGetScore)
            }, {
                name: '日常交友',
                y: parseInt(objArr[1].dimensionGetScore)
            }, {
                name: '待人接物',
                y: parseInt(objArr[2].dimensionGetScore)
            }, {
                name: '异性交往',
                y: parseInt(objArr[3].dimensionGetScore)
            }]
        }]
    });
});