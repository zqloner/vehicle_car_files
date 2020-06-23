$(function () {
	var data = $("#data").text();
	var obj = JSON.parse(data)[0];
	$(".scoreQ").html(obj.Q);
	$(".scoreL").html(obj.L);
	$(".scoreLT").html(obj["L-t"]);
	$(".scoreF").html(obj.F);
	$(".scoreFT").html(obj["F-t"]);
	$(".scoreK").html(obj.K);
	$(".scoreKT").html(obj["K-t"]);
	$(".scoreHs").html(obj.Hs);
	$(".scoreHsT").html(obj["Hs-t"]);
	$(".scoreD").html(obj.D);
	$(".scoreDT").html(obj["D-t"]);
	$(".scoreHy").html(obj.Hy);
	$(".scoreHyT").html(obj["Hy-t"]);
	$(".scorePd").html(obj.Pd);
	$(".scorePdT").html(obj["Pd-t"]);
	$(".scoreMf").html(obj.Mf);
	$(".scoreMfT").html(obj["Mf-t"]);
	$(".scorePa").html(obj.Pa);
	$(".scorePaT").html(obj["Pa-t"]);
	$(".scorePt").html(obj.Pt);
	$(".scorePtT").html(obj["Pt-t"]);
	$(".scoreSc").html(obj.Sc);
	$(".scoreScT").html(obj["Sc-t"]);
	$(".scoreMa").html(obj.Ma);
	$(".scoreMaT").html(obj["Ma-t"]);
	$(".scoreSi").html(obj.Si);
	$(".scoreSiT").html(obj["Si-t"]);

	if(obj.Q <= 22 && obj.L <= 10 && obj.F <= 25 && obj["K-t"] <= 70 ){
		$(".yxAllPass").show();
		$(".yxSomeExcep").hide();
	} else {
		$(".yxAllPass").hide();
		$(".yxSomeExcep").show();
		$(".yxQExcep").hide();
		$(".yxLExcep").hide();
		$(".yxFExcep").hide();
		$(".yxKExcep").hide();
		var toAppend = [];
		if(obj.Q > 22){
			toAppend.push("无回答（Q）");
			$(".yxQExcep").show();
		}
		if(obj.L > 10){
			toAppend.push("谎言（L）");
			$(".yxLExcep").show();
		}
		if(obj.F > 25){
			toAppend.push("诈病（F）");
			$(".yxFExcep").show();
		}
		if(obj["K-t"] > 70){
			toAppend.push("防卫性（K）");
			$(".yxKExcep").show();
		}
		$("#yxSomeExcepVar").append(toAppend.join("、"));
	}

	if(obj["Hs-t"] > 70){
		$(".lcHsHigh").show();
		$(".lcHsMid").hide();
		$(".lcHsLow").hide();
	} else if(obj["Hs-t"] <= 70 && obj["Hs-t"] >= 30){
		$(".lcHsHigh").hide();
		$(".lcHsMid").show();
		$(".lcHsLow").hide();
	} else {
		$(".lcHsHigh").hide();
		$(".lcHsMid").hide();
		$(".lcHsLow").show();
	}

	if(obj["D-t"] > 70) {
		$(".lcDHigh").show();
		$(".lcDMid").hide();
		$(".lcDLow").hide();
	} else if(obj["D-t"] <= 70 && obj["D-t"] >= 30){
		$(".lcDHigh").hide();
		$(".lcDMid").show();
		$(".lcDLow").hide();
	} else {
		$(".lcDHigh").hide();
		$(".lcDMid").hide();
		$(".lcDLow").show();
	}

	if(obj["Hy-t"] > 70){
		$(".lcHyHigh").show();
		$(".lcHyMid").hide();
		$(".lcHyLow").hide();
	} else if(obj["Hy-t"] <= 70 && obj["Hy-t"] >= 30){
		$(".lcHyHigh").hide();
		$(".lcHyMid").show();
		$(".lcHyLow").hide();
	} else {
		$(".lcHyHigh").hide();
		$(".lcHyMid").hide();
		$(".lcHyLow").show();
	}

	if(obj["Pd-t"] > 70){
		$(".lcPdHigh").show();
		$(".lcPdMid").hide();
		$(".lcPdLow").hide();
	} else if(obj["Pd-t"] <= 70 && obj["Pd-t"] >= 30){
		$(".lcPdHigh").hide();
		$(".lcPdMid").show();
		$(".lcPdLow").hide();
	} else {
		$(".lcPdHigh").hide();
		$(".lcPdMid").hide();
		$(".lcPdLow").show();
	}

	if(obj.sex == "1"){
		$(".lcfemale").show();
		$(".lcmale").hide();
	} else {
		$(".lcfemale").hide();
		$(".lcmale").show();
	}

	if(obj["Mf-t"] > 70){
		$(".lcMfHigh").show();
		$(".lcMfMid").hide();
		$(".lcMfLow").hide();
	} else if(obj["Mf-t"] <=70 && obj["Mf-t"] >= 30){
		$(".lcMfHigh").hide();
		$(".lcMfMid").show();
		$(".lcMfLow").hide();
	} else {
		$(".lcMfHigh").hide();
		$(".lcMfMid").hide();
		$(".lcMfLow").show();
	}

	if(obj["Pa-t"] > 70){
		$(".lcPaHigh").show();
		$(".lcPaMid").hide();
		$(".lcPaLow").hide();
	} else if(obj["Pa-t"] <=70 && obj["Pa-t"] >= 30){
		$(".lcPaHigh").hide();
		$(".lcPaMid").show();
		$(".lcPaLow").hide();
	} else {
		$(".lcPaHigh").hide();
		$(".lcPaMid").hide();
		$(".lcPaLow").show();
	}

	if(obj["Pt-t"] > 70){
		$(".lcPtHigh").show();
		$(".lcPtMid").hide();
		$(".lcPtLow").hide();
	} else if(obj["Pt-t"] <=70 && obj["Pt-t"] >= 30){
		$(".lcPtHigh").hide();
		$(".lcPtMid").show();
		$(".lcPtLow").hide();
	} else {
		$(".lcPtHigh").hide();
		$(".lcPtMid").hide();
		$(".lcPtLow").show();
	}

	if(obj["Sc-t"] > 70){
		$(".lcScHigh").show();
		$(".lcScMid").hide();
		$(".lcScLow").hide();
	} else if(obj["Sc-t"] <=70 && obj["Sc-t"] >= 30){
		$(".lcScHigh").hide();
		$(".lcScMid").show();
		$(".lcScLow").hide();
	} else {
		$(".lcScHigh").hide();
		$(".lcScMid").hide();
		$(".lcScLow").show();
	}

	if(obj["Ma-t"] > 70){
		$(".lcMaHigh").show();
		$(".lcMaMid").hide();
		$(".lcMaLow").hide();
	} else if(obj["Ma-t"] <=70 && obj["Ma-t"] >= 30){
		$(".lcMaHigh").hide();
		$(".lcMaMid").show();
		$(".lcMaLow").hide();
	} else {
		$(".lcMaHigh").hide();
		$(".lcMaMid").hide();
		$(".lcMaLow").show();
	}

	if(obj["Si-t"] > 70){
		$(".lcSiHigh").show();
		$(".lcSiMid").hide();
		$(".lcSiLow").hide();
	} else if(obj["Si-t"] <=70 && obj["Si-t"] >= 30){
		$(".lcSiHigh").hide();
		$(".lcSiMid").show();
		$(".lcSiLow").hide();
	} else {
		$(".lcSiHigh").hide();
		$(".lcSiMid").hide();
		$(".lcSiLow").show();
	}

    $('#containerMNSD').highcharts({
        chart: {
            type: 'line',
            plotBackgroundImage: '/report/images/MNSD.jpg',
            plotBorderColor: '#000',
            plotBorderWidth: 1
        },
        title: {
            text: null
        },
        xAxis: {
            tickInterval: 1,
            labels: {
                rotation: 90,
                formatter:function(){
                    if(this.value == 0) {
                        return " ";
                    }else if(this.value == 1) {
                        return "L";
                    }else if(this.value == 2){
                        return "F";
                    }else if(this.value == 3){
                        return "K";
                    }else if(this.value == 4){
                        return " ";
                    }else if(this.value == 5){
                        return "Hs";
                    }else if(this.value == 6){
                        return "D";
                    }else if(this.value == 7){
                        return "Hy";
                    }else if(this.value == 8){
                        return "Pd";
                    }else if(this.value == 9){
                        return "Mf";
                    }else if(this.value == 10){
                        return "Pa";
                    }else if(this.value == 11){
                        return "Pt";
                    }else if(this.value == 12){
                        return "Sc";
                    }else if(this.value == 13){
                        return "Ma";
                    }else if(this.value == 14){
                        return "Si";
                    }else if(this.value == 15){
                        return " ";
                    }
                }
            },
            tickLength:10
        },
        yAxis: [{
            min: 0,
            max:120,
            title: {
                text: null
            },
            tickLength:7,
            tickWidth:1,
            tickColor:'#000',
            tickInterval: 10
        }],
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
            series: {
                marker: {
                    enabled: false /*数据点是否显示*/
                }
            }
        },
        series: [{
            data: [null,obj["L-t"],obj["F-t"],obj["K-t"],null,
			obj["Hs-t"],obj["D-t"],obj["Hy-t"],obj["Pd-t"],
			obj["Mf-t"],obj["Pa-t"],obj["Pt-t"],obj["Sc-t"],
			obj["Ma-t"],obj["Si-t"],null]
        }]
    });

    /*得分大于70时，参考建议显示异常，并且所在行用颜色标记。*/
    var standardScoreS = $("#mar_tab .clinic td:nth-last-child(2)");
    for(var i=0;i<standardScoreS.length;i++){
        var standardScore = standardScoreS[i];
        var $standardScore = $(standardScore);
        if($standardScore.text() >70){
            $standardScore.next().text("异常");
            $standardScore.next().addClass("trBackgroundBDEEFF");
            $standardScore.addClass("trBackgroundBDEEFF");
            $standardScore.prev().addClass("trBackgroundBDEEFF");
            $standardScore.prev().prev().addClass("trBackgroundBDEEFF");
        }
    }
    /*无回答 原始分＞22 显示异常*/
    var $scoreOne = $("#mar_tab tr:nth-child(2) td:nth-last-child(3)");
    if($scoreOne.text() >22){
        $scoreOne.next().next().text("异常");
        $scoreOne.next().addClass("trBackgroundBDEEFF");
        $scoreOne.next().next().addClass("trBackgroundBDEEFF");
        $scoreOne.prev().addClass("trBackgroundBDEEFF");
        $scoreOne.addClass("trBackgroundBDEEFF");
    }
    /*谎言 原始分＞10 显示异常*/
    var $scoreTwo = $("#mar_tab tr:nth-child(3) td:nth-last-child(3)");
    if($scoreTwo.text() >10){
        $scoreTwo.next().next().text("异常");
        $scoreTwo.next().addClass("trBackgroundBDEEFF");
        $scoreTwo.next().next().addClass("trBackgroundBDEEFF");
        $scoreTwo.prev().addClass("trBackgroundBDEEFF");
        $scoreTwo.addClass("trBackgroundBDEEFF");
    }
    /*诈病 原始分＞25 显示异常*/
    var $scoreThree = $("#mar_tab tr:nth-child(4) td:nth-last-child(3)");
    if($scoreThree.text() >25){
        $scoreThree.next().next().text("异常");
        $scoreThree.next().addClass("trBackgroundBDEEFF");
        $scoreThree.next().next().addClass("trBackgroundBDEEFF");
        $scoreThree.prev().addClass("trBackgroundBDEEFF");
        $scoreThree.addClass("trBackgroundBDEEFF");
    }
});
