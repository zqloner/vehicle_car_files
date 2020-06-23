    var dimesDesc={
   		"躯体攻击":"当你出现攻击行为时，你倾向于采用肢体上的动作来对对方造成伤害。",
   		"言语攻击":"当你进行攻击行为时，你倾向于采用口头言语上的行为来试图对对方造成伤害。",
   		"敌意":"你很容易产生敌对的心理，认为周围的人对自己都不怀好意，容易产生冲突。",
   		"愤怒":"你很容易就产生情绪波动，当发生不顺心的事情时，你很容易发火。"
   };
$(function(){
   var jsonVal =$("#data").text();
	var myObj=eval('(' + jsonVal + ')'); 
	var totalLevel=myObj[0].totalLevel; //总分级别
	var totalScore=myObj[0].totalSore; //总分
	var title="";
	if(totalLevel=="1"){
		title="攻击行为水平低于大部分中学生。";
	}else if(totalLevel=="2"){
		title="攻击行为水平与大部分中学生相当。";
	}else{
		title="攻击行为水平高于大部分中学生。";
	}
	$("#title").text("你的攻击行为总分为"+totalScore+"分，"+title);
	$("#cyDesc").text("根据测验结果，你的攻击行为总分是"+totalScore+"分，各维度的具体表现如下图所示：")
	//var data = [5, 3, 4, 2.3];
    //renderChart(data);
    var data=new Array();
	var dataHigh = new Array();
    var dimsArray=myObj[0].dims;
    var trHtml="";
    var isHigh="0";
    trHtml+='<tr><td>攻击行为</td><td>'+totalScore+'</td><td>1.49~2.83</td></tr>';
    for(var i=0;i<dimsArray.length;i++){
    	var dim=dimsArray[i];
    	if(dim.id!="5"){
    		data.push(Number(dim.score));
       	 	//加入每个维度的分数
    		trHtml+='<tr><td>'+dim.name+'</td><td>'+dim.score+'</td><td>'+dim.basic+'</td></tr>';
    		if(dim.level=="3"){
        		isHigh="1"; //存在高分维度
        		dataHigh.push({"name":dim.name,"sore":Number(dim.score)});
        	}
    	}
    }
    //alert(data);
    renderChart(data);
    $(".mar_tab tbody").append(trHtml);
    if(totalLevel=="1"){
    	//若中分为低分
    	$("#resultDesc").text("总体看来，您的攻击行为水平较低。");
    }else if(totalLevel=="2"){
    	//若总分为中分
    	$("#resultDesc").text("总体看来，您的攻击行为水平一般，和大部分中学生表现相当。");
    }else{
        //总分为高分
        $("#resultDesc").text("总体看来，您的攻击行为水平较高，攻击行为水平比大部分中学生要高。");
    }
    if(isHigh=="1"){
    	//如果有维度存在高分
        $("#div_0").show();
        var highHtml="";
        dataHigh.sort(compare("score"));
        //按从高到低的顺序输出高分维度的维度名称和结果解释
          for(var i=0;i<dataHigh.length;i++){
        	  var hName=dataHigh[i].name;
        	  highHtml+='<div class="marBottom10px"><span class="fontWeight600">'+hName+'：</span>'+dimesDesc[hName]+'</div>';
    	}
        $("#highDesc").html(highHtml);
    }
	

	

} );

//每个维度的得分图
function renderChart(data) {
        Highcharts.chart('container', {
                chart: {
                    type: 'bar'
                },
                title: {
                    text: ''
                },
                xAxis: {
                    categories: ['躯体攻击', '言语攻击', '愤怒', '敌意']
                },
                yAxis: {
                    min: 0,
                    max:5,
                    opposite:true,
                    tickInterval:1,
                    title: {
                        text: ''
                    }
                },
                plotOptions: {
                    series: {
                        dataLabels: {
                            enabled: true,
                            color:"#000",
                            borderColor:"#000",
                            format: '{point.y}分',
                            style:"textOutLine=none"
                        }
                    }
                },
                series: [{
                    name: '',
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