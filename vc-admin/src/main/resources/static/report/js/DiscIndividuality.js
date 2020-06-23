$(function(){
	var interp = {"Influence":{"name":"影响型"},
	"Consientiousness" : {"name":"尽责型"},
	"Supportiveness":{"name":"支持型"},
	"Dominance":{"name":"支配型"}};
	
    //highcharts生成图表js
	function bubbleSort(arr) {
	var i = arr.length, j;
	var tempExchangVal;
	while (i > 0) {
		for (j = 0; j < i - 1; j++) {
			if (arr[j].score < arr[j + 1].score) {
				tempExchangVal = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = tempExchangVal;
			}
		}
		i--;
	}
	return arr;
	}
	
	var data = $("#data").text();
	var obj = JSON.parse(data);
	obj = bubbleSort(obj);
	
	
	if(obj[0].score > obj[1].score){
		$("#" + obj[0].name.toLowerCase()).css("display","inherit");
		$("#title").html(interp[obj[0].name].name);
		$("#titleTitle").html(interp[obj[0].name].name);
		$(".desc_header").hide();
	} else if(obj[1].score > obj[2].score){
		$("#" + obj[0].name.toLowerCase()).css("display","inherit");
		$("#" + obj[1].name.toLowerCase()).css("display","inherit");
		$("#title").html("混合型");
		$("#titleTitle").html("混合型");
		$("#titleTitleDesc").html("兼备" + interp[obj[0].name].name + "和" + interp[obj[1].name].name + "的特征");
		$("#titleDesc").html("兼备" + interp[obj[0].name].name + "和" + interp[obj[1].name].name + "的特征");
	} else if(obj[2].score > obj[3].score){
		$("#" + obj[0].name.toLowerCase()).css("display","inherit");
		$("#" + obj[1].name.toLowerCase()).css("display","inherit");
		$("#" + obj[2].name.toLowerCase()).css("display","inherit");
		$("#title").html("混合型");
		$("#titleTitle").html("混合型");
		$("#titleTitleDesc").html("兼备" + interp[obj[0].name].name + "、" + 
		interp[obj[1].name].name + "和" + interp[obj[2].name].name + "的特征");
		$("#titleDesc").html("兼备" + interp[obj[0].name].name + "、" + 
		interp[obj[1].name].name + "和" + interp[obj[2].name].name + "的特征");
	} else{
		$("#" + obj[0].name.toLowerCase()).css("display","inherit");
		$("#" + obj[1].name.toLowerCase()).css("display","inherit");
		$("#" + obj[2].name.toLowerCase()).css("display","inherit");
		$("#" + obj[3].name.toLowerCase()).css("display","inherit");
		$("#title").html("混合型");
		$("#titleTitle").html("混合型");
		$("#titleTitleDesc").html("兼备" + interp[obj[0].name].name + "、" + 
		interp[obj[1].name].name + "、" + interp[obj[2].name].name +"和" + 
		interp[obj[3].name].name + "的特征")
		$("#titleDesc").html("兼备" + interp[obj[0].name].name + "、" + 
		interp[obj[1].name].name + "、" + interp[obj[2].name].name +"和" + 
		interp[obj[3].name].name + "的特征");
	}
	
		
	
	var influence,consientiousness,supportiveness,dominance;
	
	for(var i=0;i < obj.length;i++){
		
		switch(obj[i].name){
			case "Influence":
			influence = obj[i].score;
			break;
			case "Consientiousness":
			consientiousness = obj[i].score;
			break;
			case "Supportiveness":
			supportiveness = obj[i].score;
			break;
			case "Dominance":
			dominance = obj[i].score;
			break;
			default:
			break;
		}
	}

	
	
    $('#containerLiveSatisfactionA').highcharts({
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
                '支持型 ',
                '支配型 ',
                '尽责型 ',
                '影响型 '
            ],
            tickLength:0
        },
        yAxis: {
            min: 0,
            title: {
                text: null
            },
            tickInterval: 5
        },
        tooltip: {
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
                name:"支持型",
                y:supportiveness,
                color:"rgb(168,192,235)"
            },{
                name:"支配型",
                y:dominance,
                color:"rgb(236,225,194)"
            },{
                name:"尽责型",
                y:consientiousness,
                color:"rgb(46,125,36)"
            },{
                name:"影响型",
                y:influence,
                color:"rgb(255,183,133)"
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
