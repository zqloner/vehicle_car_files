$(function () {
	var jsonVal = document.getElementById("data").innerHTML;
	var myobj=eval('(' + jsonVal + ')');
	var objArr = myobj[0].data; 
	var bcsfyScore = objArr[0].dimensionScore;
	var csfyScore = objArr[1].dimensionScore;
	var zjxfyScore = objArr[2].dimensionScore;
	var ysyzScore = objArr[3].dimensionScore;
	document.getElementById("bcsScore").innerHTML=bcsfyScore;
	document.getElementById("zjxfyScore").innerHTML=zjxfyScore;
	document.getElementById("csScore").innerHTML=csfyScore;
	document.getElementById("coverScore").innerHTML=ysyzScore;
	if(ysyzScore>=5){
		document.getElementById('ysyz').style.display = "none";
	}
	var max;
	var flag=0;
	if(bcsfyScore>=csfyScore){
		if(bcsfyScore!=csfyScore){
			//不成熟最大
			max=bcsfyScore;
			flag=0;
		}else{
			//成熟和不成熟得分相等
			flag=1;
			max=bcsfyScore;
		}
		
	}else{
		//成熟最大
		max=csfyScore	
		flag=2;
	}
	if(max<=zjxfyScore&&flag==2){
		if(max!=zjxfyScore){
			max=zjxfyScore;
			//中间最大
			flag=3;
		}else{
			//成熟和中间相等
			flag=4;	
		}
		
	}else if(max>zjxfyScore&&flag==2){
		max=csfyScore	
		flag=2;
	}else if(max<=zjxfyScore&&flag==1){
		if(max!=zjxfyScore){
			max=zjxfyScore;
			//中间最大
			flag=3;
		}else{
			//都相等
			flag=5;
		}
	}else if(max>zjxfyScore&&flag==1){
		//成熟和不成熟得分相等
			flag=1;
	}else if(max<=zjxfyScore&&flag==0){
		if(max!=zjxfyScore){
			max=zjxfyScore;
			//中间最大
			flag=3;
		}else{
			//不成熟和中间相等
			flag=6;
		}
	}else if(max>zjxfyScore&&flag==0){
		flag=0;
	}
	
	if(flag==0){
		document.getElementById("jizhi").innerHTML="不成熟防御机制";
		document.getElementById("mechanism").innerHTML="不成熟防御机制";
		document.getElementById("performance").innerHTML="总体来说：您在生活中遇到事件时，经常不知道如何去处理，如何表达自己的想法和情绪。经常抱怨，有时通过幻想来处理自己的不良情绪，受了挫折时表现得像个孩子，有时会伴随躯体症状，比如头痛、失眠。建议您改善防御方式，减少采用不成熟的防御方式，尝试着用更加积极的心态直接面对问题，制定一些克服困难的计划并按计划去做，努力改变现状，同时在自己解决不了问题时，可以积极主动的利用周围的资源，向他人求助来解决问题。";
	}else if(flag==2){
		document.getElementById("jizhi").innerHTML="成熟防御机制";
		document.getElementById("mechanism").innerHTML="成熟防御机制";
		document.getElementById("performance").innerHTML="总体来说：当处理事件时，您能够理智地采取适当的方法，您的防御方法不但比较有效，而且可以解除或处理现实的困难、满足自我的欲望与本能，也能为一般社会文化所接受。这说明您善于采用健康积极的防御机制来应对心理冲突，维护心理健康。这样可以让心理能量以社会认可的方式得到部分或全部的释放，属于积极的、具有建设性的应对方式，有益于维持身心的健康，请继续保持。";
	}else if(flag==3){
		document.getElementById("jizhi").innerHTML="中间型防御机制";
		document.getElementById("mechanism").innerHTML="中间型防御机制";
		document.getElementById("performance").innerHTML="总体来说：当您遇到生活中的棘手事件时，会采取表面上看起来很合理或对人无害的方法处理。比如当您心情不好时，您会选择吃东西、吸烟、喝酒等方式转移注意力，或者寻找和自己有相同遭遇的人，那样您的心理会舒服很多，觉得可以相互扶持。这些方式只能暂时缓解内心的不快，您还需要尝试着用更加积极的心态直接面对问题，制定一些克服困难的计划并按计划去做，努力改变现状，同时在自己解决不了问题时，可以积极主动地利用周围的资源，向他人求助来解决问题。";
	}else if(flag==1){
		document.getElementById("changeContent").innerHTML="以下几类防御机制必行使用";
		document.getElementById("mechanism01").innerHTML="成熟防御机制:";
		document.getElementById("biaoxian01").innerHTML="总体来说：当处理事件时，您能够理智地采取适当的方法，您的防御方法不但比较有效，而且可以解除或处理现实的困难、满足自我的欲望与本能，也能为一般社会文化所接受。这说明您善于采用健康积极的防御机制来应对心理冲突，维护心理健康。这样可以让心理能量以社会认可的方式得到部分或全部的释放，属于积极的、具有建设性的应对方式，有益于维持身心的健康，请继续保持。";
		document.getElementById("mechanism02").innerHTML="不成熟防御机制:";
		document.getElementById("biaoxian02").innerHTML="总体来说：您在生活中遇到事件时，经常不知道如何去处理，如何表达自己的想法和情绪。经常抱怨，有时通过幻想来处理自己的不良情绪，受了挫折时表现得像个孩子，有时会伴随躯体症状，比如头痛、失眠。建议您改善防御方式，减少采用不成熟的防御方式，尝试着用更加积极的心态直接面对问题，制定一些克服困难的计划并按计划去做，努力改变现状，同时在自己解决不了问题时，可以积极主动的利用周围的资源，向他人求助来解决问题。";
	}else if(flag==4){
		document.getElementById("changeContent").innerHTML="以下几类防御机制必行使用";
		document.getElementById("mechanism01").innerHTML="成熟防御机制:";
		document.getElementById("biaoxian01").innerHTML="总体来说：当处理事件时，您能够理智地采取适当的方法，您的防御方法不但比较有效，而且可以解除或处理现实的困难、满足自我的欲望与本能，也能为一般社会文化所接受。这说明您善于采用健康积极的防御机制来应对心理冲突，维护心理健康。这样可以让心理能量以社会认可的方式得到部分或全部的释放，属于积极的、具有建设性的应对方式，有益于维持身心的健康，请继续保持。";
		document.getElementById("mechanism02").innerHTML="中间型防御机制:";
		document.getElementById("biaoxian02").innerHTML="总体来说：当您遇到生活中的棘手事件时，会采取表面上看起来很合理或对人无害的方法处理。比如当您心情不好时，您会选择吃东西、吸烟、喝酒等方式转移注意力，或者寻找和自己有相同遭遇的人，那样您的心理会舒服很多，觉得可以相互扶持。这些方式只能暂时缓解内心的不快，您还需要尝试着用更加积极的心态直接面对问题，制定一些克服困难的计划并按计划去做，努力改变现状，同时在自己解决不了问题时，可以积极主动地利用周围的资源，向他人求助来解决问题。";
	}else if(flag==5){
		document.getElementById("changeContent").innerHTML="以下几类防御机制必行使用";
		document.getElementById("mechanism01").innerHTML="成熟防御机制:";
		document.getElementById("biaoxian01").innerHTML="总体来说：当处理事件时，您能够理智地采取适当的方法，您的防御方法不但比较有效，而且可以解除或处理现实的困难、满足自我的欲望与本能，也能为一般社会文化所接受。这说明您善于采用健康积极的防御机制来应对心理冲突，维护心理健康。这样可以让心理能量以社会认可的方式得到部分或全部的释放，属于积极的、具有建设性的应对方式，有益于维持身心的健康，请继续保持。";
		document.getElementById("mechanism02").innerHTML="中间型防御机制:";
		document.getElementById("biaoxian02").innerHTML="总体来说：当您遇到生活中的棘手事件时，会采取表面上看起来很合理或对人无害的方法处理。比如当您心情不好时，您会选择吃东西、吸烟、喝酒等方式转移注意力，或者寻找和自己有相同遭遇的人，那样您的心理会舒服很多，觉得可以相互扶持。这些方式只能暂时缓解内心的不快，您还需要尝试着用更加积极的心态直接面对问题，制定一些克服困难的计划并按计划去做，努力改变现状，同时在自己解决不了问题时，可以积极主动地利用周围的资源，向他人求助来解决问题。";
		document.getElementById("mechanism03").innerHTML="不成熟防御机制:";
		document.getElementById("biaoxian03").innerHTML="总体来说：您在生活中遇到事件时，经常不知道如何去处理，如何表达自己的想法和情绪。经常抱怨，有时通过幻想来处理自己的不良情绪，受了挫折时表现得像个孩子，有时会伴随躯体症状，比如头痛、失眠。建议您改善防御方式，减少采用不成熟的防御方式，尝试着用更加积极的心态直接面对问题，制定一些克服困难的计划并按计划去做，努力改变现状，同时在自己解决不了问题时，可以积极主动的利用周围的资源，向他人求助来解决问题。";
	}else if(flag==6){
		document.getElementById("changeContent").innerHTML="以下几类防御机制必行使用";
		document.getElementById("mechanism03").innerHTML="不成熟防御机制:";
		document.getElementById("biaoxian03").innerHTML="总体来说：您在生活中遇到事件时，经常不知道如何去处理，如何表达自己的想法和情绪。经常抱怨，有时通过幻想来处理自己的不良情绪，受了挫折时表现得像个孩子，有时会伴随躯体症状，比如头痛、失眠。建议您改善防御方式，减少采用不成熟的防御方式，尝试着用更加积极的心态直接面对问题，制定一些克服困难的计划并按计划去做，努力改变现状，同时在自己解决不了问题时，可以积极主动的利用周围的资源，向他人求助来解决问题。";
		document.getElementById("mechanism02").innerHTML="中间型防御机制:";
		document.getElementById("biaoxian02").innerHTML="总体来说：当您遇到生活中的棘手事件时，会采取表面上看起来很合理或对人无害的方法处理。比如当您心情不好时，您会选择吃东西、吸烟、喝酒等方式转移注意力，或者寻找和自己有相同遭遇的人，那样您的心理会舒服很多，觉得可以相互扶持。这些方式只能暂时缓解内心的不快，您还需要尝试着用更加积极的心态直接面对问题，制定一些克服困难的计划并按计划去做，努力改变现状，同时在自己解决不了问题时，可以积极主动地利用周围的资源，向他人求助来解决问题。";
	}
	
    $('#containerDefenseMode').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: null
        },
        xAxis: {
            categories: [
                '不成熟防御机制',
                '中间型防御机制',
                '成熟防御机制'
            ],
            tickLength:0
        },
        yAxis: {
            min: 1,
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
                dataLabels:{
                    enabled:true
                }
            }
        },
        series: [{
            data: [{
                name: '不成熟防御机制',
                color:'rgb(204,193,218)',
                y: parseFloat(bcsfyScore)
            },{
                name: '中间型防御机制',
                color:'rgb(252,213,181)',
                y: parseFloat(zjxfyScore)
            },{
                name: '成熟防御机制',
                color:'rgb(183,222,232)',
                y: parseFloat(csfyScore)
            }]
        }]
    });
});