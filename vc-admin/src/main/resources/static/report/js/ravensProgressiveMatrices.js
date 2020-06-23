var levelDesc = {
		"1":"一级",
		"2":"二级",
		"3":"三级",
		"4":"四级",
		"5":"五极"
}
var desc = {
		"1":"你的思维能力很强，思维活跃。",
		"2":"你的思维能力较强，有比较强的理解力和创造力。",
		"3":"你的思维能力一般。",
		"4":"你的思维能力较弱，缺乏创造力，常常循规蹈矩。",
		"5":"你的思维能力很弱，理解力较差。"
}

var descStr = {
		"1":"思维能力水平等于或超过同年龄组95%的人（即如果有一百个人参加本测试，此测验成绩排在前五名），说明你的思维能力很强，思维活跃，能触类旁通，具有非凡的想象力和创造力，能解决别人无法解决的问题；思维敏捷，反应比别人快。",
		"2":"思维能力水平位于同年龄组75%至95%之间（即如果有一百个人参加本测试，此测验成绩排在第六名与第二十五名之间），说明你的思维能力较强，有比较强的理解力和创造力，思维比较敏捷，能举一反三。学习能力较强，在大多数情况下都可通过努力解决遇到的问题。",
		"3":"思维能力水平位于同年龄组25%至75%之间（即如果有一百个人参加本测试，此测验成绩排在第二十六名与第七十五名之间），说明你的思维能力一般，能顺利解决大多数人都能解决的问题；而对于较少人才能解决的难题，你需要花大量时间才能解决或无法解决。",
		"4":"思维能力水平位于同年龄组5%至25%之间（即如果有一百个人参加本测试，此测验成绩排在倒数第六名与第二十五名之间），说明你的思维能力较弱，缺乏创造力，常常循规蹈矩。对于大多数人都能解决的问题，有时仍感到吃力。通常需要付出比常人更多的努力和汗水，才能获得一定的成功。",
		"5":"思维能力水平低于同年龄组95%的人（即如果有一百个人参加本测试，此测验成绩排在后五名），说明你的思维能力很弱，理解力较差，常常无法顺利解决比较简单的问题，很难做到举一反三。"
}

function renderChart(score){
	$('#container').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: null
        },
        xAxis: {
            categories: [''],
            tickLength:0,
            lineColor:"#ff6600"
        },
        yAxis: {
            min: 0,
            max:100,
            lineWidth: 1,
            lineColor:'#000',
            tickWidth:1,
            tickColor:'#000',
            labels:{
              style:{
                  color:'#000'
              }
            },
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
                    enabled:true,
                    style: {
                        textShadow: '0px',
                        fontSize: "16px",
                        color:'#333'
                    }
                }
            }
        },
        series: [{
            data: [{
                name: '焦虑得分',
                color:'#ff6600',
                y: score
            }]
        }]
    });
}