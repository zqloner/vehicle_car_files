$(function () {
	var data = $("#data").text();
	var obj = JSON.parse(data);
	     
	var totalScore = obj[0].totalScore;
	//得分和常模
	$(".mar_tab").append("<tr><td>避免失败</td><td>"+totalScore+"</td><td>20～39</td></tr>");
	
	var level = obj[0].level;//等级  1一级  2二级   3三级  4四级  5五级
	var lev = Number(level);
	$(".wrap").append('<div class="marBottom20px"><b>在避免失败上，您的得分是<span class="colorFF9933">'+totalScore+'</span>分。</b></div>');
	if(lev == 1){
		$("#title").text("您做事往往很少考虑失败的后果。");
		$(".wrap").append('<div class="marBottom20px">在生活和工作中常常会表现出欠考虑、思虑不周，领导交派的不能胜任的工作也会不计后果满口答应。由于很少估计到失败的可能性，可能会时常出现“眼高手低”的情况。</div>');
		$(".wrap").append('<div>建议您做事之前，先要仔细思考，避免过于冲动带来的烦恼。</div>');
	}else if(lev == 2){
		$("#title").text("您不太在意失败，认为成败乃兵家常事。");
		$(".wrap").append('<div class="marBottom20px">您不太在意失败，认为成败乃兵家常事，可以坦然地面对。在实际工作中属于乐观积极者，您乐于接受挑战，在不确定情形下，勇于承担风险，驾驭情景并进行决策，在具有风险性的现实选择中表现出很强的能动性。</div>');
		$(".wrap").append('<div>建议您在面对任务和事情时，做好风险管理。</div>');
	}else if(lev == 3){
		$("#title").text("您做事之前会考虑失败的可能性但是不会因此止步不前。");
		$(".wrap").append('<div class="marBottom20px"> 您在做事情的时候，会考虑到事情失败的可能性，但是不会被这种想法完全束缚。您考虑事情或者任务失败的主要目的是使自己不盲目乐观或者冒险，所以，您在任务开始以及过程中都会告诉自己成功和失败的各种可能性，提高警惕。您能比较客观地看待目标成功实现的可能性，也知道这是任何事情都不可避免的。</div>');
		$(".wrap").append('<div>建议您继续在把握良机的同时以及做好风险规划。</div>');
	}else if(lev == 4){
		$("#title").text("您十分谨慎做事之前会优先考虑失败的可能性。");
		$(".wrap").append('<div class="marBottom20px">您比较谨慎，做事情考虑比较周到，做事前首先要考虑任务失败的后果，为了避免因失败而带来的负面情绪，倾向于选择不用努力便可达成的目标，尽量避开有挑战性的工作，如果没有十足的把握，您不会去尝试一项新的工作内容。这是一种理性行为，可以为大家分析清楚事情发展的情况以及可能的发展方向，但是需要注意的是，不要让自己的顾虑和担心打击自己或者其他人的士气，也不要因此而贬低自己和团队的能力。</div>');
		$(".wrap").append('<div>建议您正确评估任务的难度，更加相信自己的能力，遇到一些有难度但是有意义地事要更勇于挑战。</div>');
	}else if(lev == 5){
		$("#title").text("您很可能因为害怕失败错失良机。");
		$(".wrap").append('<div class="marBottom20px">您很害怕失败。在做事情之前，一想到有可能出现的失败结果就不敢去做任何尝试。如果失败真的出现了，会一味的埋怨自己，认为自己能力不足，因此，为了防止失败带来的消极情绪体验，在选择工作内容时，只会选择那些曾经做过且不用通过努力便可顺利完成的任务。非常在意失败，很难接受失败带来的打击。</div>');
		$(".wrap").append('<div>建议您在生活中提高自信和心理素质，在行动之前努力做好准备，避免因为过分担忧事情的结果而放弃可能的机遇。</div>');
	}
	
    $('#containerMood').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: null
        },
        xAxis: {
            categories: ['避免失败'],
            tickLength:0
        },
        yAxis: {
            min: 0,
            max:60,
            title: {
                text: null
            }
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
                name: '避免失败',
                y: totalScore
            }]
        }]
    });
});