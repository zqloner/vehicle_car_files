var ztDesc ={
		"1":"你的总体生活满意度较差。",
		"2":"你的总体生活满意度处于中等水平。",
		"3":"你的总体生活满意度较好。"
}
var wdDesc ={
		"友谊满意度":{
			"1":"你与朋友的关系较差。你朋友很少，很少有朋友关心你、尊重你，在你需要帮助时，很难找到信赖的朋友。",
			"2":"你与朋友的关系一般。朋友不是很多但也有几个关心自己、尊重自己的朋友，在你需要帮助时，能够找到信赖的朋友不多。",
			"3":"你与朋友的关系较好。你愿意结交不同的朋友，你朋友很多，并且在朋友中威信很高，大家都很尊重你，在你需要帮助时，能够找到可信赖的朋友。"
		},
		"家庭满意度":{
			"3":"你与父母的关系良好。在与父母在相处时都会很愉快、很和睦。",
			"2":"你与父母的关系一般。你大多数时候喜欢与父母相处，但有时感觉与父母之间不够平等。",
			"1":"你与父母的关系较差。你不喜欢与父母相处，也不愿与父母进行交流，觉得父母根本不了解你。"
		},
		"学业满意度":{
			"1":"你的学业状况较差。在学业上没有较多的成就和荣誉、发展不全面。",
			"2":"你的学业状况一般，在学业上取得的成就、荣誉和大多数同学一样。",
			"3":"你的学业状况良好。在学业上取得了很多的成就和荣誉、发展较全面，很有成就感。"
		},
		"自由满意度":{
			"1":"你基本上不能按照自己的想法做事，常常受到别人的干涉或强迫你干自己不愿做的事。",
			"2":"你自主选择的程度与大多数同学一样，大部分情况都可以按照自己的想法做事，但有时也会受到别人的干涉或强迫你干自己不愿做的事。",
			"3":"你基本上可以按照自己的想法做事，基本没有人干涉或强迫你干自己不愿做的事。"
		},
		"学校满意度":{
			"1":"你不喜欢学校，不喜欢校园生活，学校的很多活动你都不喜欢参加。",
			"2":"你对学校的喜欢程度与大多数同学一样，学校的大部分活动都比较喜欢，但有时也不喜欢参加。",
			"3":"你喜欢学校，喜欢校园生活，感觉学校有很多有趣的事情。"
		},
		"环境满意度":{
			"1":"在居住环境方面，你家周围的环境较差，如周围嘈杂、治安混乱、风气败坏等。",
			"2":"在居住环境方面，你家周围的环境一般情况下较为良好，但偶尔会出现环境较差的情况。",
			"3":"在居住环境方面，你家周围的环境良好，如治安社会风气较好、周边宁静祥和。"
		}
}

$(function () {
	
	var data = $("#data").text();
    var obj = JSON.parse(data);
    var dimensions = obj[0].data;
    var totalDim = obj[0].totalDim;
    var dimArray = dimensions.weidu;//维度信息数据
    var dfArray = dimensions.difen;//低分维度信息
    var zfArray = dimensions.zhongfen;//中分维度信息
    var gfArray = dimensions.gaofen;//高分维度信息
    //总体描述
    $("#ztDesc").text(ztDesc[totalDim.level]);
    //图表数据
    var dimData =new Array();
    for(var i=0;i<dimArray.length;i++){
		var id = dimArray[i].id;
		var dname = dimArray[i].name;
		var dlevel = dimArray[i].level;
		var dscore = dimArray[i].score;
		dimData.push({"name":dname,"y":parseInt(dscore)});
    }
    renderChart(dimData);
    //结果解释
    $("#ztMiaoShu").text(ztDesc[totalDim.level]);
    var totalLevel=totalDim.level;
    var gfHtml = "";
    if(totalLevel=="3"){
    	gfHtml=gfHtmlDesc(gfArray);
    }else{
    	gfHtml=htmlDesc(gfArray,"较高");
    }
    var dfHtml = htmlDesc(dfArray,"较差");
    var zfHtml = htmlDesc(zfArray,"中等");
    if(totalLevel=="1"){
    	$("#miaoshuDesc").html(dfHtml+zfHtml+gfHtml);
    }else if(totalLevel=="2"){
    	$("#miaoshuDesc").html(zfHtml+gfHtml+dfHtml);
    }else{
    	$("#miaoshuDesc").html(gfHtml+zfHtml+dfHtml);
    }
});

function htmlDesc(gfArray,str){
	var htmlDesc = "";
	if(gfArray.length != 0){
    	gfArray.sort(compare("score"));
		var nameDesc="";
		var gfDesc = '<div class="resultContent marBottom40px">';
		$.each(gfArray,function(index,qx){
			var name = qx["name"];
			var level = qx["level"];
			nameDesc += name +"、";
			gfDesc += '<div class="labelBefore icon"><b>'+name+'</b></div>';
			gfDesc += '<p>'+wdDesc[name][level]+'</p>';
		});
		gfDesc += '</div>';
		nameDesc = nameDesc.substring(0,nameDesc.length-1);
		htmlDesc=htmlDesc+'<div class="marBottom10px">你在<span class="color9933">'+nameDesc+'</span>方面处于'+str+'水平。</div>';
    	if(gfArray.length==1){
    		var name=gfArray[0].name;
    		var level =gfArray[0].level;
    		htmlDesc += '<div class="resultContent marBottom40px"><p>'+wdDesc[name][level]+'</p></div>';
    	}else{
    		htmlDesc += gfDesc;
    	}
    }
	return htmlDesc;
}

function gfHtmlDesc(gfArray){
	var htmlDesc = "";
	if(gfArray.length != 0){
    	gfArray.sort(compare("score"));
		var nameDesc="";
		var gfDesc = '<div class="resultContent marBottom40px">';
		$.each(gfArray,function(index,qx){
			var name = qx["name"];
			var level = qx["level"];
			nameDesc += name +"、";
			gfDesc += '<div class="labelBefore icon"><b>'+name+'</b></div>';
			gfDesc += '<p>'+wdDesc[name][level]+'</p>';
		});
		gfDesc += '</div>';
		nameDesc = nameDesc.substring(0,nameDesc.length-1);
		htmlDesc=htmlDesc+'<div class="marBottom10px">你较好的生活满意度主要体现在<span class="color9933">'+nameDesc+'</span>方面。</div>';
    	if(gfArray.length==1){
    		var name=gfArray[0].name;
    		var level =gfArray[0].level;
    		htmlDesc += '<div class="resultContent marBottom40px"><p>'+wdDesc[name][level]+'</p></div>';
    	}else{
    		htmlDesc += gfDesc;
    	}
    }
	return htmlDesc;
}

function renderChart(data){
	//根据得分赋值颜色
    for(var i=0;i<data.length;i++){
        switch(data[i].name){
            case '友谊满意度':
                if(data[i].y >= 0 && data[i].y < 28){
                    data[i].color = '#FA7147';
                }else if(data[i].y >= 28 && data[i].y <= 39){
                    data[i].color = '#FAB447';
                }else if(data[i].y > 39){
                    data[i].color = '#6DE12E';
                }else{
                    alert('分值异常');
                }
                break;
            case '家庭满意度':
                if(data[i].y >= 0 && data[i].y < 27){
                    data[i].color = '#FA7147';
                }else if(data[i].y >= 27 && data[i].y <= 45){
                    data[i].color = '#FAB447';
                }else if(data[i].y > 45){
                    data[i].color = '#6DE12E';
                }else{
                    alert('分值异常');
                }
                break;
            case '学业满意度':
                if(data[i].y >= 0 && data[i].y < 17){
                    data[i].color = '#FA7147';
                }else if(data[i].y >= 17 && data[i].y <= 28){
                    data[i].color = '#FAB447';
                }else if(data[i].y > 28){
                    data[i].color = '#6DE12E';
                }else{
                    alert('分值异常');
                }
                break;
            case '自由满意度':
                if(data[i].y >= 0 && data[i].y < 15){
                    data[i].color = '#FA7147';
                }else if(data[i].y >= 15 && data[i].y <= 28){
                    data[i].color = '#FAB447';
                }else if(data[i].y > 28){
                    data[i].color = '#6DE12E';
                }else{
                    alert('分值异常');
                }
                break;
            case '学校满意度':
                if(data[i].y >= 0 && data[i].y < 20){
                    data[i].color = '#FA7147';
                }else if(data[i].y >= 20 && data[i].y <= 32){
                    data[i].color = '#FAB447';
                }else if(data[i].y > 32){
                    data[i].color = '#6DE12E';
                }else{
                    alert('分值异常');
                }
                break;
            case '环境满意度':
                if(data[i].y >= 0 && data[i].y < 16){
                    data[i].color = '#FA7147';
                }else if(data[i].y >= 16 && data[i].y <= 25){
                    data[i].color = '#FAB447';
                }else if(data[i].y > 25){
                    data[i].color = '#6DE12E';
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
                '友谊满意度',
                '家庭满意度',
                '学业满意度',
                '自由满意度',
                '学校满意度',
                '环境满意度'
            ],
            gridLineWidth:1,
            tickLength:10
        },
        yAxis: {
            min: 0,
            max:50,
            title: {
                text: null
            },
            lineWidth: 1,
            tickWidth:1,
            tickInterval: 5
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