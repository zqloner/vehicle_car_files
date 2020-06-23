$(function () {
	var jsonVal = document.getElementById("data").innerHTML;
	var myobj=eval('(' + jsonVal + ')');
	var objArr = myobj[0].data[0]; 
	var dimensionName = objArr.dimensionName;
	var dimensionGetScore = objArr.dimensionGetScore;
	document.getElementById("score").innerHTML=dimensionGetScore;
	document.getElementById("score1").innerHTML=dimensionGetScore;
	if(dimensionGetScore<50){
		document.getElementById("range1").innerHTML="您所在的组织的激励机制低于平均水平。";
		document.getElementById("range").innerHTML="低于常模指数范围";
		document.getElementById("rangeDetail").innerHTML="您所在的组织的激励机制低于平均水平。在激励机制建设，员工培训学习，激励创新，保护员工的工作热情等方面做得较差，需要加强理论学习，提高认识，争取早日健全组织的激励机制。";
	}else if(dimensionGetScore>=50&&dimensionGetScore<=59){
		document.getElementById("range1").innerHTML="您所在的组织的激励机制建设处于平均水平。";
		document.getElementById("range").innerHTML="在常模指数范围之内";
		document.getElementById("rangeDetail").innerHTML="您所在的组织的激励机制建设处于平均水平。激励机制建设的任务还很重，需要加大工作力度，加强激励理论的学习，进一步提高管理水平。";
	}else if(dimensionGetScore>=60&&dimensionGetScore<=69){
		document.getElementById("range1").innerHTML="您所在的组织的激励机制略高于平均水平。";
		document.getElementById("range").innerHTML="高于常模指数范围";
		document.getElementById("rangeDetail").innerHTML="您所在的组织的激励机制略高于平均水平。离高效激励机制还有较大差距，需要加快激励机制建设，以求达到更高的水平。";
	}else if(dimensionGetScore>=70&&dimensionGetScore<=79){
		document.getElementById("range1").innerHTML="您所在的组织具备高效激励组织的一些基本特征，但还不是很健全。";
		document.getElementById("range").innerHTML="高于常模指数范围";
		document.getElementById("rangeDetail").innerHTML="您所在的组织具备高效激励组织的一些基本特征，但还不是很健全。有较多方面还存在不足，需要加强激励机制建设，进一步提高员工积极性。";
	}else if(dimensionGetScore>=80&&dimensionGetScore<=89){
		document.getElementById("range1").innerHTML="您所在的组织有比较健全的激励机制。";
		document.getElementById("range").innerHTML="高于常模指数范围";
		document.getElementById("rangeDetail").innerHTML="您所在的组织有比较健全的激励机制。员工工作热情较高，责任心较强，能够积极参与组织决策，但组织在激励机制建设方面还有待提高。";
	}else if(dimensionGetScore>=90&&dimensionGetScore<=100){
		document.getElementById("range1").innerHTML="您所在的组织具备健全的激励机制。";
		document.getElementById("range").innerHTML="高于常模指数范围";
		document.getElementById("rangeDetail").innerHTML="您所在的组织具备健全的激励机制。说明单位在激发员工积极性，制度建设，鼓励创新等方面做得好，员工工作热情高，积极参与组织决策，管理者与员工及时沟通，员工意见少，干劲足，思想积极向上。";
	}
    $('#containerOrganization').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: null
        },
        xAxis: {
            categories: ['组织激励机制'],
            tickLength:0
        },
        yAxis: {
            min: 0,
            title: {
                text: null
            },
            tickInterval: 20
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
                name: '组织激励机制',
                y: parseFloat(dimensionGetScore)
            }]
        }]
    });
});