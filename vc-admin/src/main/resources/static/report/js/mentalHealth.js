$(function () {
	var myArray=new Array();
	myArray[0]="头痛";myArray[1]="神经过敏，心中不踏实";myArray[2]="头脑中有不必要的想法或字句盘旋";myArray[3]="头晕或晕倒";myArray[4]="对异性的兴趣减退";
	myArray[5]="对旁人责备求全";myArray[6]="感到别人能控制你的思想";myArray[7]="责怪别人制造麻烦";myArray[8]="忘性大";myArray[9]="担心自己的衣饰是否整齐及仪态是否端正";
	myArray[10]="容易烦恼和激动";myArray[11]="胸痛";myArray[12]="害怕空旷的场所或街道";myArray[13]="感到自己的精力下降，活动减慢";myArray[14]="想结束自己的生命";
	myArray[15]="听到旁人听不到的声音";myArray[16]="发抖";myArray[17]="感到大多数人都不可信任";myArray[18]="胃口不好";myArray[19]="容易哭泣";
	myArray[20]="同异性相处时感到害羞不自在";myArray[21]="感到受骗，中了圈套或有人想抓住你";myArray[22]="无缘无故的突然感到害怕";myArray[23]="自己不能控制的大发脾气";myArray[24]="怕单独出门";
	myArray[25]="经常责怪自己";myArray[26]="腰痛";myArray[27]="感到难以完成任务";myArray[28]="感到孤独";myArray[29]="感到苦闷";
	myArray[30]="过分担忧";myArray[31]="对事物不感兴趣";myArray[32]="感到害怕";myArray[33]="感情容易受到伤害";myArray[34]="旁人能知道你的私下想法";
	myArray[35]="感到别人不理解你，不同情你";myArray[36]="感到人们对你不友好，不喜欢你";myArray[37]="做事必需做得很慢以保证做得正确";myArray[38]="心跳的很厉害";myArray[39]="恶心或胃部不舒服";
	myArray[40]="感到比不上他人";myArray[41]="肌肉酸痛";myArray[42]="感到有人在监视你、谈论你";myArray[43]="难以入睡";myArray[44]="做事必须反复检查";
	myArray[45]="难以做出决定";myArray[46]="怕乘电车、公共汽车、地铁或火车";myArray[47]="呼吸困难";myArray[48]="一阵阵发冷或发热";myArray[49]="因为感到害怕而避开某些东西、场合或活动";
	myArray[50]="脑子变空了";myArray[51]="身体发麻或刺痛";myArray[52]="喉咙有梗塞感";myArray[53]="感到前途没有希望";myArray[54]="不能够集中注意";
	myArray[55]="感到身体的某一部分软弱无力";myArray[56]="感到紧张或容易紧张";myArray[57]="感到手或脚发重";myArray[58]="想到死亡的事";myArray[59]="吃得太多";
	myArray[60]="当别人看着你或谈论你时感到不自在";myArray[61]="有一些不属于你自己的想法";myArray[62]="有想打人或伤害他人的冲动";myArray[63]="醒得太早";myArray[64]="必须反复洗手、点数";
	myArray[65]="睡得不稳不深";myArray[66]="有想摔坏或破坏东西的想法";myArray[67]="有一些别人没有的想法";myArray[68]="感到对别人神经过敏";myArray[69]="在商店或电影院等人多地方感到不自在";
	myArray[70]="感到任何事情都很困难";myArray[71]="一阵阵恐惧或惊慌";myArray[72]="感到公共场合吃东西很不舒服";myArray[73]="经常与人争论";myArray[74]="单独一人时神经很紧张";
	myArray[75]="别人对你的成绩没有做出恰当的评价";myArray[76]="即使和别人在一起也感到孤独";myArray[77]="感到坐立不安心神不宁";myArray[78]="感到自己没有什么价值";myArray[79]="感到熟悉的东西变成陌生或不像是真的";
	myArray[80]="大叫或摔东西";myArray[81]="害怕会在公共场合晕倒";myArray[82]="感到别人想占你的便宜";myArray[83]="为一些有关性的想法而很苦恼";myArray[84]="你认为应该因为自己的过错而受到惩罚";
	myArray[85]="感到要很快把事情做完";myArray[86]="感到自己的身体有严重问题";myArray[87]="从未感到和其他人很亲近";myArray[88]="感到自己有罪";myArray[89]="感到自己的脑子有毛病";

	
	var jsonVal = document.getElementById("data").innerHTML;
	var myobj=eval('(' + jsonVal + ')');
	var objArr = myobj[0].data; 
	

	var qutihua =0.00;
	var qiangpo =0.00;
	var renji =0.00;
	var yiyu =0.00;
	var jiaolv =0.00;
	var didui =0.00;
	var kongju =0.00;
	var pianzhi =0.00;
	var jingshen =0.00;
	var other =0.00;
	var str = "[";
	var flag = 0;
	var container ='';
	for (i=0;i<10 ;i++ )
	{
		
		var name = objArr[i].dimensionName;
		if(name=='qutihua'){
			qutihua = objArr[i].dimensionScore;
			var re = "y:"+ parseFloat(qutihua);
			
			if(parseFloat(qutihua)<3){
				
				var colo ='#00CC66';
			}else if(3<=parseFloat(qutihua)&&parseFloat(qutihua)<4){
				var colo ='#FF6600';
				
			}else{
				var colo ='#FF0000';
				
			}
			str +="{ color:'"+colo+"',"+re+"},";
			if(qutihua>=3){
				container +=name+',';
				flag = 1;
			}
		}else if(name=='qiangpo'){
			qiangpo = objArr[i].dimensionScore;
			var re = "y:"+ parseFloat(qiangpo);
			if(parseFloat(qiangpo)<3){
				var colo ='#00CC66';
			}else if(3<=parseFloat(qiangpo)&&parseFloat(qiangpo)<4){
				var colo ='#FF6600';
			}else{
				var colo ='#FF0000';
			}
			str +="{ color:'"+colo+"',"+re+"},";
			if(qiangpo>=3) {
				container +=name+',';
				flag = 1;
			}
			//str +=qiangpo+',';
		}else if(name=='renji'){
			renji = objArr[i].dimensionScore;
			var re = "y:"+ parseFloat(renji);
			if(parseFloat(renji)<3){
				var colo ='#00CC66';
			}else if(3<=parseFloat(renji)&&parseFloat(renji)<4){
				var colo ='#FF6600';
			}else{
				var colo ='#FF0000';
			}
			str +="{ color:'"+colo+"',"+re+"},";
			if(renji>=3) {
				container +=name+',';
				flag = 1;
			}
			//str +=renji+',';
		}else if(name=='yiyu'){
			yiyu = objArr[i].dimensionScore;
			var re = "y:"+ parseFloat(yiyu);
			if(parseFloat(yiyu)<3){
				var colo ='#00CC66';
			}else if(3<=parseFloat(yiyu)&&parseFloat(yiyu)<4){
				var colo ='#FF6600';
			}else{
				var colo ='#FF0000';
			}
			str +="{ color:'"+colo+"',"+re+"},";
			if(yiyu>=3) {
				container +=name+',';
				flag = 1;
			}
			//str +=yiyu+',';
		}else if(name=='jiaolv'){
			jiaolv = objArr[i].dimensionScore;
			var re = "y:"+ parseFloat(jiaolv);
			if(parseFloat(jiaolv)<3){
				var colo ='#00CC66';
			}else if(3<=parseFloat(jiaolv)&&parseFloat(jiaolv)<4){
				var colo ='#FF6600';
			}else{
				var colo ='#FF0000';
			}
			str +="{ color:'"+colo+"',"+re+"},";
			if(jiaolv>=3){
				container +=name+',';
				flag = 1;
			}
			//str +=jiaolv+',';
		}else if(name=='didui'){
			didui = objArr[i].dimensionScore;
			var re = "y:"+ parseFloat(didui);
			if(parseFloat(didui)<3){
				var colo ='#00CC66';
			}else if(3<=parseFloat(didui)&&parseFloat(didui)<4){
				var colo ='#FF6600';
			}else{
				var colo ='#FF0000';
			}
			str +="{ color:'"+colo+"',"+re+"},";
			if(didui>=3) {
				container +=name+',';
				flag = 1;
			}
			//str +=didui+',';
		}else if(name=='kongju'){
			kongju = objArr[i].dimensionScore;
			var re = "y:"+ parseFloat(kongju);
			if(parseFloat(kongju)<3){
				var colo ='#00CC66';
			}else if(3<=parseFloat(kongju)&&parseFloat(kongju)<4){
				var colo ='#FF6600';
			}else{
				var colo ='#FF0000';
			}
			str +="{ color:'"+colo+"',"+re+"},";
			if(kongju>=3) {
				container +=name+',';
				flag = 1;
			}
			//str +=kongju+',';
		}else if(name=='pianzhi'){
			pianzhi = objArr[i].dimensionScore;
			var re = "y:"+ parseFloat(pianzhi);
			if(parseFloat(pianzhi)<3){
				var colo ='#00CC66';
			}else if(3<=parseFloat(pianzhi)&&parseFloat(pianzhi)<4){
				var colo ='#FF6600';
			}else{
				var colo ='#FF0000';
			}
			str +="{ color:'"+colo+"',"+re+"},";
			if(pianzhi>=3) {
				container +=name+',';
				flag = 1;
			}
			//str +=pianzhi+',';
		}else if(name=='jingshen'){
			jingshen = objArr[i].dimensionScore;
			var re = "y:"+ parseFloat(jingshen);
			if(parseFloat(jingshen)<3){
				var colo ='#00CC66';
			}else if(3<=parseFloat(jingshen)&&parseFloat(jingshen)<4){
				var colo ='#FF6600';
			}else{
				var colo ='#FF0000';
			}
			str +="{ color:'"+colo+"',"+re+"},";
			if(jingshen>=3) {
				container +=name+',';
				flag = 1;
			}
			//str +=jingshen+',';
		}else if(name=='qita'){
			other = objArr[i].dimensionScore;
			var re = "y:"+ parseFloat(other);
			if(parseFloat(other)<3){
				var colo ='#00CC66';
			}else if(3<=parseFloat(other)&&parseFloat(other)<4){
				var colo ='#FF6600';
			}else{
				var colo ='#FF0000';
			}
			str +="{ color:'"+colo+"',"+re+"},";
			if(other>=3) {
				container +=name+',';
				flag = 1;
			}
			//str +=other+',';
		}
	}
	
	str = str.substring(0,str.length-1)+']';
	container = container.substring(0,container.length-1);
	var containerArr =container.split(',');
	
	var aa=eval('(' + str + ')');
	
	var data = [
	{color:"#000",y:"3"},
	{color:"#111",y:"2"},
	{color:"#222",y:"4"},
	{color:"#333",y:"3"},
	{color:"#444",y:"2"},
	{color:"#555",y:"1"},
	{color:"#444",y:"2"},
	{color:"#555",y:"1"},
	{color:"#444",y:"2"},
	{color:"#555",y:"1"}
];

	document.getElementById("masculineTotal").innerHTML=objArr[10].masculineTotal;
	var masculineTotal = objArr[10].masculineTotal;
	document.getElementById("score").innerHTML=objArr[10].totalScore;
	var totalScore = objArr[10].totalScore;

	if(flag==0 && objArr[10].masculineTotal<43 && objArr[10].totalScore<200){
	
		document.getElementById("theOne01").innerHTML="您的各项得分都在正常范围内，表明近来您的心理健康状况良好，请继续保持！说明：鉴于“心理健康测评”仅反应您近期的心理健康状态，且“心理健康程度”是一个随着生活事件动态变化的过程，所以建议您定期评估自己的心理健康状况，随时关注自身心理健康。具体各维度得分情况解释：";
		document.getElementById("theOne").innerHTML="近来您的心理健康状况良好。";
		document.getElementById("typeOne").style.display ="";
	}
	var masculineTitleNum = objArr[10].masculineTitleNum;
	
	var masculineTitleNumArr = masculineTitleNum.split(',');
	if(flag==1){
		document.getElementById("theOne01").innerHTML="您的心理健康状况欠佳。一些具体症状表现为：";
		document.getElementById("theOne").innerHTML="您的心理健康状况欠佳。";
		var r=1;
		for(s=0;s<masculineTitleNumArr.length;s++){
			document.getElementById("title"+r).style.display ="";
			
			var sss = $('#title'+r).children("span").eq(1).html(myArray[masculineTitleNumArr[s]-1]);
			r++;
		}
		document.getElementById("zhuanjia").style.display ="";
		for(z=0;z<containerArr.length;z++){
			
			if(containerArr[z]=="qutihua"){
				document.getElementById("qutihua").style.display ="";
			}else if(containerArr[z]=="qiangpo"){
				document.getElementById("qiangpo").style.display ="";
			}else if(containerArr[z]=="renji"){
				document.getElementById("renji").style.display ="";
			}else if(containerArr[z]=="yiyu"){
				document.getElementById("yiyu").style.display ="";
			}else if(containerArr[z]=="jiaolv"){
				document.getElementById("jiaolv").style.display ="";
			}else if(containerArr[z]=="didui"){
				document.getElementById("didui").style.display ="";
			}else if(containerArr[z]=="kongju"){
				document.getElementById("kongju").style.display ="";
			}else if(containerArr[z]=="pianzhi"){
				document.getElementById("pianzhi").style.display ="";
			}else if(containerArr[z]=="jingshen"){
				document.getElementById("jingshen").style.display ="";
			}else if(containerArr[z]=="qita"){
				document.getElementById("qita").style.display ="";
			}

		}
	}
	if(flag==0){
		if(objArr[10].masculineTotal>=43 || objArr[10].totalScore>=200){
			document.getElementById("theOne01").innerHTML="近来身心健康状况欠佳，可能有不良情绪产生、身体感觉不适或不适当行为表现等情况发生，建议进行进一步检查。一些具体症状表现为：";
			document.getElementById("theOne").innerHTML="近来身心健康状况欠佳，可能有不良情绪产生、身体感觉不适或不适当行为表现等情况发生，建议进行进一步检查。";

			for(s=0;s<masculineTitleNumArr.length;s++){
				document.getElementById("title"+masculineTitleNumArr[s]).style.display ="";
			}
		}
	}
    $('#containerMental').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: null
        },
        xAxis: {
            categories: [
                '躯体化',
                '强迫',
                '人际关系',
                '抑郁',
                '焦虑',
                '敌对性',
                '恐怖',
                '偏执',
                '精神病性',
                '其他'
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
            enabled:false
        },
        legend: {
            enabled: false
        },
        plotOptions: {
			
            column: {
                pointPadding: 0.2,
                borderWidth: 0,
                pointWidth:20,
                dataLabels:{
                    enabled:true,
                    rotation:90,
                    y:20,
                    style:{
                        textOutline:'none'
                    }
                }
            }
        },
        series: [{
            data:  aa
        }]
    });
    /*获取总分*/
    var score = $("#score").text();
    var totalData = [{name:'心理健康总分',y:Number(score)}];
    renderChart2(totalData);
});
//渲染总分图表
function renderChart2 (data) {
    //根据得分赋值颜色
    if(data[0].y < 200){
        data[0].color = '#6DE12E';
    }else if(data[0].y >= 200){
        data[0].color = '#FA7147';
    }else{
        alert('分值异常');
    }
    //初始化图表
    $('#container_2').highcharts({
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
            categories: ['心理健康总分'],
            tickLength:0
        },
        yAxis: {
            min: 90,
            max:450,
            title: {
                text: null
            },
            tickInterval: 30
        },
        tooltip: {
            enabled:false
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0,
                dataLabels:{
                    enabled:true,
                    style:{
                        textOutline:'none'
                    }
                }
            }
        },
        series: [{
            data: data
        }],
        credits: {
            enabled:false
        },
        exporting: {
            enabled:false
        }
    });
}