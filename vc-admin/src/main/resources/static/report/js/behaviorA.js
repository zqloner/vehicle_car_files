$(function () {
	var jsonVal = document.getElementById("data").innerHTML;
	var myobj=eval('(' + jsonVal + ')');
	var objArr = myobj[0].data; 
	var timeGetScore = objArr[0].dimensionGetScore;
	var jzGetScore = objArr[1].dimensionGetScore;
	var shGetScore = objArr[2].dimensionGetScore;
	var totalScore = myobj[0].totalScore;
	document.getElementById("timeScore").innerHTML=timeGetScore;
	document.getElementById("jzScore").innerHTML=jzGetScore;
	document.getElementById("shScore").innerHTML=shGetScore;
	document.getElementById("score").innerHTML=totalScore;
	if(totalScore>=1&&totalScore<=19){
		document.getElementById("NormIndexScope").innerHTML=", 超过常模指数范围 ,";
		document.getElementById("typeName").innerHTML="B";
		document.getElementById("typeStyle").innerHTML="您属于典型的B型行为风格。";

		document.getElementById("topTitle").innerHTML="您属于典型的B型行为风格，您的生活是按部就班、有条不紊的，您不喜欢过于紧张的情境，总是以比较松弛、稳健的方式来处理问题和完成任务。您不会加班加点、双手不颤动，您经常放松地坐着谈话，把生活看成是某种享受而不是战斗。 ";
		document.getElementById("middleTitle").innerHTML="您并不争强好胜，以自己的方式和观点看待事物。在面对很多个事务时，您会先认真的加以权衡，然后做出抉择，必要时，您会明智的放弃。您比较关注自己的身心状态甚于外部事物带来的得失，因此，您可能对名利非常淡然，在您所属的领域内，您可能不是最突出的，这与您的价值观和处世哲学有关。    在人群中，您会奉行一种低调的行为准则，没有强烈的支配欲、占有欲和控制欲。在遇到挫折时，您也能很好的进行自我调节，不会产生过激的情绪反应。您的这些行为方式可能使您具有一种大隐于世的君子的气质。 ";
		document.getElementById("bottomTitle").innerHTML=" 给您的建议是，虽然冲动是魔鬼，但是没有激情和冲动的生活不免有些单调，所以适当的追求成功可以让您证明您并不比别人差。";
	}else if(totalScore>=20&&totalScore<=26){
		document.getElementById("NormIndexScope").innerHTML=", 在常模指数范围内 ,";
		document.getElementById("typeName").innerHTML="B-"; 
		document.getElementById("typeStyle").innerHTML="您虽然不是典型的B型行为风格，但是您的行为模式还是比较倾向B型行为风格特征。";

		document.getElementById("topTitle").innerHTML="您虽然不是典型的B型行为风格，但是您的行为模式还是比较倾向B型行为风格特征。这表示您的生活方式是比较轻松的，知道何时该放松，也知道如何放松，不会让自己被一堆事情压的喘不过气；亦不会因放松而有罪恶感。";
		document.getElementById("middleTitle").innerHTML="在做事上比较慢条斯理，不会急躁，有耐心，很少有时间的压力，所以不会为自己设定很短的完成期限。虽然也具有进取心和成就感，但不是很在意成就是否一定要比别人高。您的个性比较随和，不喜欢竞争，即使在竞争的情境下，也不会强求一定要胜利；不易动怒，相信基本上人是值得信赖与托付的，所以您周遭的人与您相处时大多可以感觉蛮舒适的，不会有压力与威胁。";
		document.getElementById("bottomTitle").innerHTML="只是您需要确定不会因过度的放松与避免竞争，而错失了良机，有时给自己适度的挑战与压力，是必要的，它可以激发您的潜力与斗志，试着在您认为重要的事情上，多尽一份的努力与投入，相信在您保有身心健康的同时，会有更好的人生成就。 ";
	}else if(totalScore>=27&&totalScore<=29){
		document.getElementById("NormIndexScope").innerHTML=", 在常模指数范围内 ,";
		document.getElementById("typeName").innerHTML="M";
		document.getElementById("typeStyle").innerHTML="您的行为风格介于A型与B型行为风格之间，您似乎可以在工作与休闲之间取得良好的平衡。";

		document.getElementById("topTitle").innerHTML="您的行为风格介于A型与B型行为风格之间，您似乎可以在工作与休闲之间取得良好的平衡。您知道何时该放松，也知道如何放松，不会让自己被一堆事情压的喘不过气。";
		document.getElementById("middleTitle").innerHTML="同时，您又不会太放任自己，了解如何接受挑战及何时该努力一点，并会为自己制定合理的目标，以获得令人满意的成就与绩效表现。这使得您会让自己在适度的压力下，借适度的压力激发您的潜力，却又不致于给自己太大的压力。";
		document.getElementById("bottomTitle").innerHTML="一般来说，您不至于太急躁、不会过度完美主义也没有过高的成就需求，这使得您能与他人和睦相处，不会过份挑剔与暴躁，所以您周遭的人与您相处时应该是感觉蛮舒适的，不会有压力与威胁，同时也能感受到您对自己及对大家的期许。";
	}else if(totalScore>=30&&totalScore<=36){
		document.getElementById("NormIndexScope").innerHTML=", 在常模指数范围内 ,";
		document.getElementById("typeName").innerHTML="A-";
		document.getElementById("typeStyle").innerHTML="您虽然不是典型的A型行为风格，但是您的行为模式还是比较倾向A型行为风格特征。";

		document.getElementById("topTitle").innerHTML="您虽然不是典型的A型行为风格，但是您的行为模式还是比较倾向A型行为风格特征。由于您具有成功欲望及对工作的投入，通常会有不错的成就；但您似乎不够放松，大多数时候会感到时间紧迫，并具有竞争意识，工作努力，雄心勃勃而又急躁易怒，偶尔也会令自己处于放松的状态中，把生活看成是享受而不是战斗，以自己的方式和观点处理问题。 ";
		document.getElementById("middleTitle").innerHTML="您的时间观念较强，做事不拖沓，对待工作和学习富有激情。与简单的任务比较，您更愿意接受有挑战性工作，能够主动克服困难，努力达到目标。您喜欢在有竞争的情境下工作，对成功有渴望、有激情，但也不至于令自己过于紧张，很多时候仍然可以松弛稳健的处理问题和完成任务。";
		document.getElementById("lastTitle").innerHTML=" 在人群中，您喜欢成为核心，大部分时间处于控制支配别人的角色。在您周遭的人可能会因为您的出现而感到威胁与紧张，没有耐性及无法对他人完全信任亦会破坏和谐的气氛。"
		document.getElementById("bottomTitle").innerHTML="面对挫折，首先您的反应是易被激惹，容易产生攻击性和敌意，但也会逐渐找到调节自己和解决问题的途径。 ";
	}else if(totalScore>=37&&totalScore<=50){
		document.getElementById("NormIndexScope").innerHTML=", 低于常模指数范围 ,";
		document.getElementById("typeName").innerHTML="A";
		document.getElementById("typeStyle").innerHTML="您是典型的A型行为风格。";

		document.getElementById("topTitle").innerHTML="您是典型的A型行为风格，好胜心强、雄心勃勃、努力工作而又急躁易怒，常有时间紧迫感和竞争敌意倾向。 您喜欢在有竞争的情境下以有激情的高效方式工作，因为这能激起您的斗志，让您精神抖擞、摩拳擦掌。与那些稀松平常的任务比较，您更愿意接受有挑战性工作，并且有强烈的动机克服困难，努力达到目标。";
		document.getElementById("middleTitle").innerHTML="您的时间观念很强，常有紧迫感，因为您认为时间是宝贵的，不能浪费，因此您会比别人更早地投入工作，悠闲拖沓绝不是您的风格。";
		document.getElementById("lastTitle").innerHTML="对成功的渴望和激情使您更少感受到压力和疲劳，您会认为没有什么做不到的。这使您在很多时候比别人做的更出色，同时也会增加您成功的可能性。在人群中，您喜欢成为核心，控制支配别人而不是被别人支配。"
		document.getElementById("bottomTitle").innerHTML="在挫折情境中，您会变得易激惹，容易产生攻击性和敌意。";
	}
	if(timeGetScore>=15&&timeGetScore<=25){
		document.getElementById("timeDesc").innerHTML="您惜时如金，生活和工作节奏快，总有一种匆匆忙忙、感到时间不够用的感觉。渴望在最短的时间内完成最多的事情，对于节奏缓慢和浪费时间的工作或事会不耐烦、不适应。容易粗心大意，急躁。";
	}else if(timeGetScore>=0&&timeGetScore<15){
		document.getElementById("timeDesc").innerHTML="您的时间利用率不高，生活、工作节奏不快，悠闲自得，心态平和，喜欢休闲和娱乐，做事有耐心，四平八稳，容易给人一种慢条斯理的感觉。";
	}
	if(jzGetScore>=15&&jzGetScore<=25){
		document.getElementById("jzDesc").innerHTML="您的生活及工作压力大，渴望事业有所成就，竞争意识强烈，争强好胜，希望能出人投地，并对阻碍自己发展的人或事表现出激烈的反感或攻击意识。";
	}else if(jzGetScore>=0&&jzGetScore<15){
		document.getElementById("jzDesc").innerHTML="您与世无争，容易与人平和相处，生活和工作压力不大，也可能生活标准要求不高，随遇而安，也可能是过于现实。";
	}
	if(shGetScore>=7){
		document.getElementById("shDesc").innerHTML="您喜欢掩饰对自己不利的评价，为人容易表现出虚伪、圆滑，也可能是由于自身定位不准确，自我认识不清或理解能力不足造成的。";
	}else if(shGetScore<7){
		document.getElementById("shDesc").innerHTML="您的社会掩饰性不高，没有刻意掩饰对自己不利的评价，作答真实可靠。";
	}
    $('#containerBehaviorA').highcharts({
        chart: {
            type: 'bar'
        },
        title: {
            text: null
        },
        xAxis: {
            categories: [
                '时间紧迫感',
                '竞争性倾向',
                '社会掩饰性'
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
            bar: {
                dataLabels: {
                    enabled: true
                }
            }
        },
        series: [{
            color:'rgb(148,82,82)',
            data: [{
                name: '时间紧迫感',
                y: parseInt(timeGetScore)
            },{
                name: '竞争性倾向',
                y: parseInt(jzGetScore)
            },{
                name: '社会掩饰性',
                y: parseInt(shGetScore)
            }]
        }]
    });
    /*获取总分*/
    var score = $("#score").text();
    if(Number(score)<20){
    	$("#tr1").addClass("active");
    }else if(Number(score)>=20 && Number(score)<=26){
    	$("#tr2").addClass("active");
    }else if(Number(score)>=27 && Number(score)<=29){
    	$("#tr3").addClass("active");
    }else if(Number(score)>=30 && Number(score)<=36){
    	$("#tr4").addClass("active");
    }else if(Number(score)>=37){
    	$("#tr5").addClass("active");
    }
    
});
/*创建渐变矩形
function drawShape(deviceWidth,score){
    var xWidth = deviceWidth-2;
    var canvas = document.getElementById('canvas');
    if(canvas.getContext){
        var ctx = canvas.getContext("2d");
        绘制线性渐变效果
        var lingrad = ctx.createLinearGradient(1,0,xWidth,30);
        lingrad.addColorStop(0.26, 'rgb(203,252,252)');
        lingrad.addColorStop(1, 'rgb(96,120,120)');

        绘制矩形
        ctx.beginPath()
        ctx.lineWidth = 2;
        ctx.strokeStyle = "#000000";
        ctx.strokeRect(1,50,xWidth,30);
        ctx.fillStyle = lingrad;
        ctx.fillRect(1,50,xWidth,30);
        ctx.closePath();

        绘制数值
        ctx.fillStyle="#000000";
        ctx.font= 'Bold 20px Sans-Serif';
        ctx.fillText('1',0,45);
        var font20 = xWidth*0.4;
        ctx.fillText('20',font20,45);
        var font36 = xWidth*0.72;
        ctx.fillText('36',font36,45);
        var font50 = xWidth-20;
        ctx.fillText('50',font50,45);

        绘制得分范围分割线
        ctx.beginPath();
        ctx.lineWidth = 1;
        ctx.strokeStyle ="#000000";
        ctx.moveTo(1,80);
        ctx.lineTo(1,130);
        ctx.stroke();
        ctx.moveTo(font20+10,80);
        ctx.lineTo(font20+10,130);
        ctx.stroke();
        ctx.moveTo(xWidth*0.52+10,80);
        ctx.lineTo(xWidth*0.52+10,130);
        ctx.stroke();
        ctx.moveTo(xWidth*0.58+10,80);
        ctx.lineTo(xWidth*0.58+10,130);
        ctx.stroke();
        ctx.moveTo(font36+10,80);
        ctx.lineTo(font36+10,130);
        ctx.stroke();
        ctx.moveTo(font50+20,80);
        ctx.lineTo(font50+20,130);
        ctx.stroke();
        ctx.closePath();
        绘制文本B型
        var b = font20/2
        ctx.fillStyle="#000000";
        ctx.font= 'Bold 11px Sans-Serif';
        ctx.fillText('B型',b,110);
        绘制文本B-型
        var b1 = xWidth*0.456
        ctx.fillStyle="#000000";
        ctx.font= 'Bold 11px Sans-Serif';
        ctx.fillText('B-型',b1,110);
        绘制文本M
        var m = xWidth*0.573
        ctx.fillStyle="#000000";
        ctx.font= 'Bold 11px Sans-Serif';
        ctx.fillText('M',m,105);
        绘制文本型
        var xing = xWidth*0.564
        ctx.fillStyle="#000000";
        ctx.font= 'Bold 11px Sans-Serif';
        ctx.fillText('型',xing,118);
        绘制文本A-型
        var a1 = xWidth*0.64
        ctx.fillStyle="#000000";
        ctx.font= 'Bold 11px Sans-Serif';
        ctx.fillText('A-型',a1,110);
        绘制文本A型
        var a = xWidth*0.85
        ctx.fillStyle="#000000";
        ctx.font= 'Bold 11px Sans-Serif';
        ctx.fillText('A型',a,110);

        if(score>=1 && score<=19){
            绘制向下箭头
            ctx.beginPath();
            var scoreLine = xWidth*0.225
            ctx.fillStyle ="rgb(255,204,153)";
            ctx.moveTo(scoreLine,45);
            ctx.lineTo(scoreLine-10,35);
            ctx.lineTo(scoreLine-5,35);
            ctx.lineTo(scoreLine-5,15);
            ctx.lineTo(scoreLine+5,15);
            ctx.lineTo(scoreLine+5,35);
            ctx.lineTo(scoreLine+10,35);
            ctx.fill();
            ctx.closePath();
        }else if(score>=20 && score<=26){
            绘制向下箭头
            ctx.beginPath();
            var scoreLine = xWidth*0.49
            ctx.fillStyle ="rgb(255,204,153)";
            ctx.moveTo(scoreLine,45);
            ctx.lineTo(scoreLine-10,35);
            ctx.lineTo(scoreLine-5,35);
            ctx.lineTo(scoreLine-5,15);
            ctx.lineTo(scoreLine+5,15);
            ctx.lineTo(scoreLine+5,35);
            ctx.lineTo(scoreLine+10,35);
            ctx.fill();
            ctx.closePath();
        }else if(score>=27 && score<=29){
            绘制向下箭头
            ctx.beginPath();
            var scoreLine = xWidth*0.58
            ctx.fillStyle ="rgb(255,204,153)";
            ctx.moveTo(scoreLine,45);
            ctx.lineTo(scoreLine-10,35);
            ctx.lineTo(scoreLine-5,35);
            ctx.lineTo(scoreLine-5,15);
            ctx.lineTo(scoreLine+5,15);
            ctx.lineTo(scoreLine+5,35);
            ctx.lineTo(scoreLine+10,35);
            ctx.fill();
            ctx.closePath();
        }else if(score>=30 && score<=36){
            绘制向下箭头
            ctx.beginPath();
            var scoreLine = xWidth*0.675
            ctx.fillStyle ="rgb(255,204,153)";
            ctx.moveTo(scoreLine,45);
            ctx.lineTo(scoreLine-10,35);
            ctx.lineTo(scoreLine-5,35);
            ctx.lineTo(scoreLine-5,15);
            ctx.lineTo(scoreLine+5,15);
            ctx.lineTo(scoreLine+5,35);
            ctx.lineTo(scoreLine+10,35);
            ctx.fill();
            ctx.closePath();
        }else if(score>=37 && score<=50){
            绘制向下箭头
            ctx.beginPath();
            var scoreLine = xWidth*0.87
            ctx.fillStyle ="rgb(255,204,153)";
            ctx.moveTo(scoreLine,45);
            ctx.lineTo(scoreLine-10,35);
            ctx.lineTo(scoreLine-5,35);
            ctx.lineTo(scoreLine-5,15);
            ctx.lineTo(scoreLine+5,15);
            ctx.lineTo(scoreLine+5,35);
            ctx.lineTo(scoreLine+10,35);
            ctx.fill();
            ctx.closePath();
        }else{
            alert("errorScore");
        }

    }
}
*/