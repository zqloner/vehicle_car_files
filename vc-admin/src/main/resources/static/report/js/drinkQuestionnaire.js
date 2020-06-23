$(function () {
	var jsonVal = document.getElementById("data").innerHTML;
	var myobj=eval('(' + jsonVal + ')');
	var dataObj = myobj[0].data[0];
	var getScore = dataObj.dimensionGetScore;
	var level = dataObj.dimensionLevel;
	document.getElementById("score").innerHTML=getScore;
	document.getElementById("score01").innerHTML=getScore;
	if(getScore<=11.81){
		document.getElementById("testResult01").innerHTML='您的得分在常模指数范围内，说明您和多数人的酒依赖程度相当。';
		document.getElementById("testResult").innerHTML='您的得分在常模指数范围内，说明您和多数人的酒依赖程度相当。';
	}else if(getScore>11.81){
		document.getElementById("testResult01").innerHTML='您的得分高于常模指数范围，说明您对酒的依赖程度高于多数人。';
		document.getElementById("testResult").innerHTML='您的得分高于常模指数范围，说明您对酒的依赖程度高于多数人。';
	}
	if(level==1){
		document.getElementById("testbx").innerHTML='对酒依赖的水平较低，主要表现为心理的依赖，而非躯体的。通常更愿意限制饮酒的量，而非欲断酒。 建议您遇到困境时，不要用喝酒的方式转移自己的注意力，应该尝试着用更积极的应对方式来解决问题，比如向亲人朋友求助，制定解决问题的计划努力改变现状。';
	}else if(level==2){
		document.getElementById("testbx").innerHTML='中等水平的酒依赖，主要表现为可能有与饮酒有关的社会心理问题，但以心理依赖为主，继续发展可能出现躯体依赖。可能愿意减少饮酒量，而非彻底戒酒。建议您有条件情况下可以寻求专业机构的帮助，通过接受专业的心理咨询，增强心理防御能力，树立积极向上的生活态度。';
	}else if(level==3){
		document.getElementById("testbx").innerHTML='酒依赖发展到相当的程度，主要表现为可能出现了躯体依赖，可能存在与饮酒有关的躯体障碍和社会心理问题，您应该考虑彻底戒酒，长时间的躯体依赖会对身体健康造成损害。建议戒酒要注意不要着急，要循序渐进，这样可提高戒酒的安全性。因为戒酒过猛而引发其他身体疾病应该及时到专业的医院进行诊治。';
	}else if(level==4){
		document.getElementById("testbx").innerHTML='酒依赖发展到严重的程度，主要表现为躯体依赖的可能性很大，并可能出现了与饮酒有关的躯体不适，如肝脏疾病。您需要彻底戒酒，一方面可以避免疾病加重，另一方面可以改善健康状况。建议戒酒要注意不要着急，要循序渐进，这样可提高戒酒的安全性。因为戒酒过猛而引发其他身体疾病应该及时到专业的医院进行诊治。';
	}else{
		$('#jtbx').hide();
		document.getElementById("testbx").innerHTML='没有酒依赖的表现，希望您继续保持健康的生活方式！';
	}
    $('#containerDrinkQuestionnaire').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: null
        },
        xAxis: {
            categories: [' '],
            tickLength:0
        },
        yAxis: {
            min: 0,
            title: {
                text: null
            },
            tickInterval: 10
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
                name: '饮酒问卷得分',
                y: parseInt(dataObj.dimensionGetScore)
            }]
        }]
    });
});