var miaoshuStr={
		"情绪症状":{
			"2":"你出现XXXX反应的频率不低，建议你有针对性地学习一些情绪管理的技巧，以缓解不良情绪给你带来的影响。",
			"3":"你经常出现XXXX反应，建议你寻求家长和老师的帮助，尽早摆脱负性情绪的困扰。"
		},
		"品行问题":{
			"2":"你没有表现出明显的品行问题，但是出现的一些行为也需要加以关注，如XXXX。",
			"3":"你存在一定程度的品行问题，如XXXX，建议你加强自制力的锻炼，学会控制自己的一些不良情绪和行为。"
		},
		"多动":{
			"2":"你会出现多动和注意力不集中的情况，如XXXX。建议你及时寻求老师和家长的帮助，避免多动或注意力方面的问题更加严重。",
			"3":"你明显存在多动症状和注意力不集中的情况，如XXXX。建议你在家长或老师的陪同下，结合其他手段如其他心理测试或前往医院诊断，进一步检查是否患有多动症。"
		},
		"同伴交往问题":{
			"2":"你在交朋友或保持友谊方面没有表现出明显的问题，但是也有一些轻度的困扰，如XXXX。建议你加强与同学、朋友之间的沟通交流。",
			"3":"你在交朋友或保持友谊上存在一定的问题，如XXXX。建议你积极主动与同学、朋友沟通交流，多参加集体活动，也可以学习一些人际交往的方法和技巧，从而扩大自己的朋友圈，增进与同学之间的友谊。"
		},
		"亲社会行为":{
			"2":"你的亲社会行为表现程度中等，在一些方面表现欠佳，如XXXX。建议你主动帮助别人，慢慢体会帮助他人的乐趣。",
			"3":"你很少表现出亲社会行为，如XXXX。建议你主动帮助他人，理解他人，与他人分享，体会与他人互动的乐趣。"
		}
}
var biaoxianStr ={
				"3":"身体不舒服（由不良情绪引起）",
				"8":"担忧",
				"13":"不快乐",
				"16":"紧张",
				"24":"恐惧",
				
				"6":"经常独自玩耍",
				"11":"没有好朋友",
				"14":"同龄人不喜欢你",
				"19":"遭受欺负",
				"23":"与同辈相处不融洽",
				
				"2":"不能长时间保持安静",
				"10":"经常坐立不安或不耐烦",
				"15":"注意力很难集中",
				"21":"做事前不考虑清楚",
				"25":"无法做好当前的事",
				
				"5":"容易发怒",
				"7":"不按吩咐做事",
				"12":"爱与人争执",
				"18":"爱撒谎",
				"22":"拿别人的东西",
				
				"1":"很少关心别人的感受",
				"4":"不爱与他人分享东西",
				"9":"很少帮助有需要的人",
				"17":"很少友善对待低龄孩子",
				"20":"很少自愿帮助别人",
				
				"29":"家庭生活",
				"30":"朋友的关系",
				"31":"上课学习",
				"32":"课外休闲活动"
 			}

function renderChart(data){
	//根据得分赋值颜色
    for(var i=0;i<data.length;i++){
        switch(data[i].name){
            case '情绪症状':
                if(data[i].y >= 0 && data[i].y <= 5){
                    data[i].color = '#92D050';
                }else if(data[i].y == 6){
                    data[i].color = '#FF9900';
                }else if(data[i].y >= 7 && data[i].y <= 10){
                    data[i].color = '#FF0000';
                }else{
                    alert('分值异常');
                }
                break;
            case '品行问题':
                if(data[i].y >= 0 && data[i].y <= 3){
                    data[i].color = '#92D050';
                }else if(data[i].y == 4){
                    data[i].color = '#FF9900';
                }else if(data[i].y >= 5 && data[i].y <= 10){
                    data[i].color = '#FF0000';
                }else{
                    alert('分值异常');
                }
                break;
            case '多动':
                if(data[i].y >= 0 && data[i].y <= 5){
                    data[i].color = '#92D050';
                }else if(data[i].y == 6){
                    data[i].color = '#FF9900';
                }else if(data[i].y >= 7 && data[i].y <= 10){
                    data[i].color = '#FF0000';
                }else{
                    alert('分值异常');
                }
                break;
            case '同伴交往问题':
                if(data[i].y >= 0 && data[i].y <= 3){
                    data[i].color = '#92D050';
                }else if(data[i].y >= 4 && data[i].y <= 5){
                    data[i].color = '#FF9900';
                }else if(data[i].y >= 6 && data[i].y <= 10){
                    data[i].color = '#FF0000';
                }else{
                    alert('分值异常');
                }
                break;
            case '亲社会行为':
                if(data[i].y >= 6 && data[i].y <= 10){
                    data[i].color = '#92D050';
                }else if(data[i].y == 5){
                    data[i].color = '#FF9900';
                }else if(data[i].y >= 0 && data[i].y <= 4){
                    data[i].color = '#FF0000';
                }else{
                    alert('分值异常');
                }
                break;
            default :
                alert('返回维度名称不匹配');
                break;
        }
    }
    //初始化图表
    $('#container').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: null
        },
        xAxis: {
            categories: [
                '情绪症状',
                '品行问题',
                '多动',
                '同伴交往问题',
                '亲社会行为'
            ],
            gridLineWidth:1,
            tickLength:10
        },
        yAxis: {
            min: 0,
            max:10,
            title: {
                text: null
            },
            lineWidth: 1,
            tickWidth:1,
            tickInterval: 1
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