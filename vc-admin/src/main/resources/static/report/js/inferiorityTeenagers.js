
function drawColumnChart(dataArry)
{
	 $('#container').highcharts({
	        chart: {
	            type: 'column'
	        },
	        title: {
	            text: null
	        },
	        xAxis: {
	            categories: [
	                '自尊',
	                '社交自信',
	                '学习能力',
	                '外貌',
	                '体能'
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
	                dataLabels:{
	                    enabled:true
	                }
	            }
	        },
	        series: [{
	            data:dataArry
	        }]
	    });
}