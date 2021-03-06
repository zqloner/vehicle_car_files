var topDesc={
		"1":"您的心理资本处于较低水平，需要加强和训练您的心理资本，以应对挑战和危机。",
		"2":"您的心理资本处于中等水平，可以应对一般的压力和挑战。",
		"3":"您的心理资本处于较高水平，可以应对较高的压力和挑战。"
}
var resultDesc={
		"1":"您比大多数人的心理资本水平要低，您需要加强和训练您的心理资本，以应对挑战和危机。",
		"2":"您的心理资本水平与大多数人相当，可以应对一般的压力和挑战，心理资本处于中等水平。",
		"3":"您比大多数人的心理资本水平要高，可以应对较高的压力和挑战，心理资本处于较高水平。"
}
var dimDesc={
		"自我效能":{
			"1":"处于较低水平，您在困难面前有点缺乏自信，会较多注意自己的缺点，并害怕失败，容易焦虑，并产生自我怀疑和消极期望。",
			"2":"处于中等水平。多数情况下，您是自信的、感觉自己能为组织做出贡献，但有时面对一些比较困难的问题时，您也会对自己的能力表示怀疑。",
			"3":"处于较高水平，您有较强的自信心，即使任务较难，您也倾向于当作对自己能力的挑战，会迎难而上。"
		},
		"希望":{
			"1":"处于较低水平，您会对目标不够坚持，不太会为自己设立明确的目标，不太能够为了实现目标而积极努力奋斗。",
			"2":"处于中等水平。多数情况下，您能够设定明确的目标并为之奋斗，但有时遇到困难时可能会没有足够有效的办法去实现目标或是会选择放弃目标。",
			"3":"处于较高水平，您会对目标持之以恒，能够设定明确的目标并为之奋斗，目标受阻时也能够坚信自己、并想出很多方法去实现目标。"
		},
		"韧性":{
			"1":"处于较低水平，您更容易受环境的影响，更不容易从消极状态中恢复过来，认为自己在适应工作变化和改善工作结果上存在一定程度的无力感。",
			"2":"处于中等水平。多数情况下，遇到困难时您能够从困难中恢复过来，能够解决遇到的难题，但有时也容易被困难打倒，不容易恢复。",
			"3":"处于较高水平，您在遇到问题和困难时，不会长时间沉浸在失败的情绪中，而是能够快速恢复状态并采取不同途径来应对困难，解决难题。"
		},
		"乐观":{
			"1":"处于较低水平，您在遇到问题时倾向于将问题解释为糟糕的、消极的，不太容易看到事物的积极面，在做事过程中会体验到更多的压力和焦虑。",
			"2":"处于中等水平。多数情况下，遇到问题时也能够积极地看待，相信总能解决问题，前途是光明的，但有时也会对不好的事情感到悲观、失望。",
			"3":"处于较高水平，您能用积极的眼光看待生活，即使过去曾经失败过，也能够坦然接受不完美的自己。对于不确定的未来，持有积极自信的态度，即使遇到困难也能够以乐观的态度面对，在职场上更加具有活力，善于对负面事件进行乐观的归因。"
		}
}
function levelName(level){
	var levelDesc="";
	if(level=="1"){
		levelDesc="较低";
	}else if(level=="2"){
		levelDesc="中等";
	}else if(level=="3"){
		levelDesc="较高";
	}
	return levelDesc;
}
function harmony(data){
    var myChart=echarts.init(document.getElementById('echarts'));
    var option={
        title:{
            left:'center',
            bottom:'0',
            text:'心理资本各维度得分情况图',
            textStyle:{
                fontSize:16
            }
        },
        tooltip:{
            trigger:'axis'
        },
        xAxis: {
            data: ['自我效能','乐观','希望','韧性']
        },
        yAxis: [
            {
                type:'value',
                min:0,
                // max:45,
                interval:5,//默认一次增加多少
                axisLine:{show:false},
                axisLabel:{show:false},
                axisTick:{show:false}
            }
        ],
        series:[
            {
                name:'分数',
                type:'bar',
                barWidth:40,
                itemStyle:{
                    color:'#000000',
                    normal:{
                        color:'#54A5D3',
                        label:{
                            show:true,
                            position:'top',
                            formatter:'{c}'
                        }
                    }
                },
                data:data
            }
        ]
    };
    myChart.setOption(option);
}