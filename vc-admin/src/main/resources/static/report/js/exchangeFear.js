$(function () {
    /*根据后台返回数据生成柱形图*/
	var desc = {
		"high" : {
			"intro":"您存在高度的交流恐惧症状，交流恐惧分数超过大部分人。",
				"desc":"与他人交往让您觉得很不舒服。您不愿意与人交往，很少在人多的公共场合逗留，在与人交流过程中有强烈的焦虑和紧张不安的情绪体验。您对参加集体活动有抵触情绪，在公众面前容易精神紧张、身体僵硬，甚至不能如常讲话。很多人害怕当众讲话是因为焦虑情绪与各种情境建立了潜意识条件性情绪反应，即一遇到这种情境就自动引发焦虑情绪，您可以尝试着在身体达到完全放松、心情愉快的状态下，想象一种能引起您焦虑的情境，然后设计好一段话反复训练，使其自动运行，进而形成习惯化的行为方式，然后想象更加焦虑的情境，按同样的方式加以训练。这些训练落实到现实交往时可能还会有些紧张，这时您可以运用一些方法比如绷紧放松肌肉、深呼吸、积极的自我暗示等来控制情绪，帮助您更好的沟通交流。建议您有条件的情况下，也可以向专业的心理机构寻求专业帮助。"},
		"mid" : {
			"intro":"您存在中度的交流恐惧症状，交流恐惧分数与大部分人相当。",
				"desc":"您不喜欢与人交往，害怕人多的公共场合，在与人交往过程中有焦虑和紧张不安的情绪体验。您害怕在公众面前讲话，不能按照自己的愿望表达观点。很多人害怕当众讲话是因为焦虑情绪与各种情境建立了潜意识条件性情绪反应，即一遇到这种情境就自动引发焦虑情绪，您可以尝试着在身体达到完全放松、心情愉快的状态下，想象一种能引起您焦虑的情境，然后设计好一段话反复训练，使其自动运行，进而形成习惯化的行为方式，然后想象更加焦虑的情境，按同样的方式加以训练。这些训练落实到现实交往时可能还会有些紧张，这时您可以运用一些方法比如绷紧放松肌肉、深呼吸、积极的自我暗示等来控制情绪，帮助您更好的沟通交流。"},
		"low" : {
			"intro":"您存在低度的交流恐惧症状，交流恐惧分数低于大部分人。",
				"desc":"您可能不太喜欢与他人交往，在与人交往过程中感到紧张和不安，比较在意别人对您的看法。不过您目前尚能够控制自己的焦虑和不安情绪，可以较充分地表达您自己的观点和意愿。在继续保持好的方面充分发展的前提下，建议您多参加一些活动，在活动中进一步培养沟通能力，多关注沟通中的积极感受，增强自信；寻找能够充分发挥自己特长的机会，不断提高和发展自己。"}		
	}
	var data = $("#data").text();
    var obj = JSON.parse(data);
	console.log(obj[0].dimensions);
	var totalScore = 0;
	for(var i = 0; i < obj[0].dimensions.length;i++){
		console.log(obj[0].dimensions[i].dimensionOriginalScore);
		totalScore += parseInt(obj[0].dimensions[i].dimensionOriginalScore);
	}
	$("#total_score1").html(totalScore);
	$("#total_score2").html(totalScore);
	if(totalScore <= 120 && totalScore >= 80){
		$("#title").html(desc.high.intro);
		$("#result_title").html(desc.high.intro);
		$("#result_desc").html(desc.high.desc);
	} else if(totalScore <= 79 && totalScore >= 52){
		$("#title").html(desc.mid.intro);
		$("#result_title").html(desc.mid.intro);
		$("#result_desc").html(desc.mid.desc);
	} else {
		$("#title").html(desc.low.intro);
		$("#result_title").html(desc.low.intro);
		$("#result_desc").html(desc.low.desc);	
	}
    $('#containerExchangeFear').highcharts({
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
            enabled:function(){
                enabled.enabled = false;
            },
            categories: [' '],
            tickLength:0
        },
        yAxis: {
            min: 0,
            title: {
                text: null
            },
            stackLabels: {
                enabled: true,
                style: {
                    fontWeight: 'bold'
                }
            }
        },
        tooltip: {
            enabled: false
        },
        /*数据点配置*/
        plotOptions: {
            column: {
                stacking: 'normal',
                dataLabels: {
                    enabled: false
                }
            },
            series: {
                pointWidth:150 //柱子之间的距离值
            }
        },
        /*数据列*/
        series: [{
            data: [{
                name:"交流恐惧",
                y:totalScore,
                color:"rgb(252,213,181)"
            }]
        }],
        credits: {
            enabled:false
        },
        exporting: {
            enabled:false
        }
    });
});