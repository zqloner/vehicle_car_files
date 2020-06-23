var descList={
		"desc1":{
			"1":"您比大多数家长的沟通水平要低一些。",
			"2":"您和大多数家长的沟通水平相当。",
			"3":"您比大多数家长的沟通水平要高一些。"
		},
		"desc2":{
				"1":"低于常模指数范围，说明您比大多数家长的沟通水平要低一些。",
				"2":"在常模指数范围内，说明您和大多数家长的沟通水平相当。",
				"3":"超过了常模指数范围，说明您比大多数家长的沟通水平要高一些。"
		},
		"desc3":{
				"1":"与孩子之间存在沟通障碍，孩子不愿意敞开心扉交流，通常都是将自己的真实感受和心事都隐藏起来。孩子可能会觉得不被理解；认为家长老是以高高的姿态教育他。也可能以往的经历让孩子缺乏了信任，觉得家长没有能力帮他/她解决问题，或是觉得不会从孩子角度去考虑问题，只会埋怨、责骂。建议仔细询问孩子的真实感受，双方尝试换位思考，像朋友那样平等交流，共同努力营造一种好的沟通氛围。",
				"2":"与孩子之间的沟通属于一般水平。双方也会有说有笑，但是孩子可能会有所保留，回避某些话题或隐藏自己的部分感受。孩子可能在主观上愿意交流，但因为害怕不理解和责骂而比较谨慎。建议要注意与孩子平等交流，学会倾听孩子的心声，消除孩子的恐惧感。",
				"3":"与孩子能够很好地沟通。是孩子信任的朋友，可以与他/她分享心事，会平等地讨论问题。家长的沟通方式让孩子觉得亲切而友好，孩子能很轻松地侃侃而谈。沟通状况如此良好，相信与孩子的感情会很好，在遇到困难时也能齐心协力地应对。请细心呵护!"
		}
}
$(function () {
	var data = $("#data").text();
    var json = JSON.parse(data)[0];
    var demion = json.data;
    var level = demion.level;
    $('#containerFamily').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: null
        },
        xAxis: {
            categories: ['家庭沟通'],
            tickLength:0
        },
        yAxis: {
            min: 0,
            title: {
                text: null
            },
            tickInterval: 0.5
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
                name: '家庭沟通',
                color:'rgb(85,137,200)',
                y: parseInt(demion.score)
            }]
        }]
    });
    //描述信息
    var descStr1 = descList["desc1"][level];
    var descStr2 = descList["desc2"][level];
    var descStr3 = descList["desc3"][level];
    $("#descDiv1").html(descStr1);
    $("#descDiv2").html(descStr2);
    $("#descDiv3").html(descStr3);
    $("#tableScore").html(demion.score);
    $("#spanScore").html(demion.score);
});