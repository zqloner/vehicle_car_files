$(function () {
	var jsonVal = document.getElementById("data").innerHTML;
	var myobj=eval('(' + jsonVal + ')');
	var obj = JSON.parse(jsonVal);
	var objArr = myobj[0].data;
	
	for (var i = 0; i < objArr.length; i++) {
		
		var getScore = objArr[i].dimensionGetScore;
		var dimensionLevel = objArr[i].dimensionLevel;
		var dimensionName = objArr[i].dimensionName;
		var dimensionScore = objArr[i].dimensionScore;
		if(dimensionName=="qxwd"){
			$('#wdbz').val(dimensionScore);
			document.getElementById("stabilize").innerHTML=dimensionScore;
			if(dimensionLevel==1){
			  document.getElementById("stabilizeNR").innerHTML="在这一方面，你的得分低于常模指数范围，说明你的得分低于多数人。";
			  document.getElementById("wdbx").innerHTML="情绪通常表现得很不稳定，易激动、烦恼等；生活和学习上遇到困难的时候常常会情绪沮丧，不易恢复；容易受环境的支配，而使心神不定；不能面对现实时会急躁不安、心身疲乏，甚至于有失眠、噩梦、恐惧等情况出现。";
			}else if(dimensionLevel==2){
			  document.getElementById("stabilizeNR").innerHTML="在这一方面，你的得分在常模指数范围内，说明你的得分与多数人相当。";
			  document.getElementById("wdbx").innerHTML="如果得分偏向高分，情绪稳定而成熟，能沉着应对各种场合及遇到的事情，坚强，不杞人忧天。"
 			+"  如果得分偏向低分，情绪通常表现得很不稳定，易激动、烦恼等；生活和学习上遇到困难的时候常常会情绪沮丧，不易恢复；容易受环境的支配，变得心神不定；不能面对现实时会急躁不安、心身疲乏，甚至于有失眠、噩梦、恐惧等情况出现。";
			}else if(dimensionLevel==3){
			  document.getElementById("stabilizeNR").innerHTML="在这一方面，你的得分高于常模指数范围，说明你的得分高于多数人。";
			  document.getElementById("wdbx").innerHTML="在情绪稳定而成熟，能面对现实。通常以沉着的态度应付现实中的各种问题。";
			}
		}else if(dimensionName=="zrwd"){
			$('#zrbz').val(dimensionScore);
			document.getElementById("duty").innerHTML=dimensionScore;
			
			if(dimensionLevel==1){
			  document.getElementById("dutyNR").innerHTML="在这一方面，你的得分低于常模指数范围，说明你的得分低于多数人。";
			  document.getElementById("zrbx").innerHTML="做事责任心不强，自私、不讲原则、不守规则，敷衍了事。通常缺乏远大的目标和理想，缺乏责任感。";
			}else if(dimensionLevel==2){
			  document.getElementById("dutyNR").innerHTML="在这一方面，你的得分在常模指数范围内，说明你的得分与多数人相当。";
			  document.getElementById("zrbx").innerHTML="如果得分偏向高分，说明责任感高，真诚、稳重、执著、有毅力、道德感强、做事细心周到、尽职尽责；明辨是非善恶；做事情很有原则。"
  	          + "如果得分偏向低分，说明做事责任心不强，自私、不讲原则、不守规则，敷衍了事。通常缺乏远大的目标和理想，缺乏责任感。";
			}else if(dimensionLevel==3){
			  document.getElementById("dutyNR").innerHTML="在这一方面，你的得分高于常模指数范围，说明你的得分高于多数人。";
			  document.getElementById("zrbx").innerHTML="责任感高，真诚、稳重、执著、有毅力、道德感强、做事细心周到、尽职尽责；明辨是非善恶；做事情很有原则。";
			}
		}else if(dimensionName=="gwwd"){
			$('#gwbz').val(dimensionScore);
			document.getElementById("boldness").innerHTML=dimensionScore;
			if(dimensionLevel==1){
			  document.getElementById("boldnessNR").innerHTML="在这一方面，你的得分低于常模指数范围，说明你的得分低于多数人。";
			  document.getElementById("gwbx").innerHTML="不能主动参加团体活动，表现退缩；缺乏自信，不敢大胆面对挑战；不善于发言，不喜欢和陌生人交谈，在人多的场合经常感到害羞。";
			}else if(dimensionLevel==2){
			  document.getElementById("boldnessNR").innerHTML="在这一方面，你的得分在常模指数范围内，说明你的得分与多数人相当。";
			  document.getElementById("gwbx").innerHTML="如果得分偏向高分，表现为乐于参加团体活动，并敢于表现自己；通常不畏缩，有敢作敢为的精神，喜欢做富有挑战的事情，愿意通过各种挑战获得承认、实现自我。"
    			+"如果得分偏向低分，表现为不愿意参加团体活动，缺乏自信，表现出退缩行为；通常在人多的场合感到很害羞；不善于发言，不愿意和陌生人交谈。";
			}else if(dimensionLevel==3){
			  document.getElementById("boldnessNR").innerHTML="在这一方面，你的得分高于常模指数范围，说明你的得分高于多数人。";
			  document.getElementById("gwbx").innerHTML="乐于参加团体活动，并敢于表现自己；通常不畏缩，有敢作敢为的精神，喜欢做富有挑战的事情，愿意通过各种挑战获得承认、实现自我。";
			}
		}else if(dimensionName=="gqwd"){
			$('#gqbz').val(dimensionScore);
			document.getElementById("clever").innerHTML=dimensionScore;
			if(dimensionLevel==1){
			  document.getElementById("cleverNR").innerHTML="在这一方面，你的得分低于常模指数范围，说明你的得分低于多数人。";
			  document.getElementById("gqbx").innerHTML="在日常生活或学习过程中表现得很拘谨、孤僻，给人感觉难以接近。建议多与同学交往，改善自己孤僻的个性特点。";
			}else if(dimensionLevel==2){
			  document.getElementById("cleverNR").innerHTML="在这一方面，你的得分在常模指数范围内，说明你的得分与多数人相当。";
			  document.getElementById("gqbx").innerHTML="如果得分偏向高分，表现为尊敬长辈，懂礼貌；热情、随和，并经常得到老师或长辈的赞扬。"
    			+ "如果得分偏向低分，说明在日常生活或学习过程中表现得很拘谨、孤僻，给人难以接近的感觉。";
			}else if(dimensionLevel==3){
			  document.getElementById("cleverNR").innerHTML="在这一方面，你的得分高于常模指数范围，说明你的得分高于多数人。";
			  document.getElementById("gqbx").innerHTML="尊敬长辈，懂礼貌；热情、随和，并经常得到老师或长辈的赞扬。";
			}
		}else if(dimensionName=="kfwd"){
			$('#kfbz').val(dimensionScore);
			document.getElementById("dispark").innerHTML=dimensionScore;
			if(dimensionLevel==1){
			  document.getElementById("disparkNR").innerHTML="在这一方面，你的得分低于常模指数范围，说明你的得分低于多数人。";
			  document.getElementById("kfbx").innerHTML="保守，固守一些传统的观念与行为标准；不愿接受新事物，有时会抵触或反对当前的一些流行事物。";
			}else if(dimensionLevel==2){
			  document.getElementById("disparkNR").innerHTML="在这一方面，你的得分在常模指数范围内，说明你的得分与多数人相当。";
			  document.getElementById("kfbx").innerHTML="如果得分偏向高分，表现为思想自由、开放、激进，紧跟时代的步伐；好奇，喜欢尝试各种新鲜事物。 如果得分偏向低分，说明保守，固守一些传统的观念与行为标准；不愿接受新事物，甚至激烈反对当下流行的事物。";
			}else if(dimensionLevel==3){
			  document.getElementById("disparkNR").innerHTML="在这一方面，你的得分高于常模指数范围，说明你的得分高于多数人。";
			  document.getElementById("kfbx").innerHTML="思想自由、开放、激进；好奇，紧跟时代的步伐，喜欢尝试各种新鲜事物。";
			}
		}
	}
    var c = document.getElementById("myCanvas");
    var cxt = c.getContext("2d");
    cxt.strokeStyle = "#000";
    cxt.moveTo(0, 15);
    cxt.lineTo(300, 15);
    cxt.moveTo(0, 45);
    cxt.lineTo(300, 45);
    cxt.moveTo(0, 75);
    cxt.lineTo(300, 75);
    cxt.moveTo(0, 105);
    cxt.lineTo(300, 105);
    cxt.moveTo(0, 140);
    cxt.lineTo(300, 140);
    cxt.moveTo(102, 0);
    cxt.lineTo(102, 250);
    cxt.moveTo(177, 0);
    cxt.lineTo(177, 250);
    cxt.stroke();
    var stabilize = $('#wdbz').val();
    var duty = $('#zrbz').val();
    var boldness = $('#gwbz').val();
    var clever = $('#gqbz').val();
    var dispark = $('#kfbz').val();
	
    if (stabilize == "1") {
        cxt.moveTo(25, 15);
        dutyEnd()
    } else {
        if (stabilize == "2") {
            cxt.moveTo(45, 15);
            dutyEnd()
        } else {
            if (stabilize == "3") {
                cxt.moveTo(75, 15);
                dutyEnd()
            } else {
                if (stabilize == "4") {
                    cxt.moveTo(105, 15);
                    dutyEnd()
                } else {
                    if (stabilize == "5") {
                        cxt.moveTo(125, 15);
                        dutyEnd()
                    } else {
                        if (stabilize == "6") {
                            cxt.moveTo(155, 15);
                            dutyEnd()
                        } else {
                            if (stabilize == "7") {
                                cxt.moveTo(180, 15);
                                dutyEnd()
                            } else {
                                if (stabilize == "8") {
                                    cxt.moveTo(205, 15);
                                    dutyEnd()
                                } else {
                                    if (stabilize == "9") {
                                        cxt.moveTo(235, 15);
                                        dutyEnd()
                                    } else {
                                        if (stabilize == "10") {
                                            cxt.moveTo(270, 15);
                                            dutyEnd()
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    cxt.stroke();
    function dutyEnd() {
        if (duty == "1") {
            cxt.lineTo(25, 45);
            boldnessEnd()
        } else {
            if (duty == "2") {
                cxt.lineTo(45, 45);
                boldnessEnd()
            } else {
                if (duty == "3") {
                    cxt.lineTo(75, 45);
                    boldnessEnd()
                } else {
                    if (duty == "4") {
                        cxt.lineTo(105, 45);
                        boldnessEnd()
                    } else {
                        if (duty == "5") {
                            cxt.lineTo(125, 45);
                            boldnessEnd()
                        } else {
                            if (duty == "6") {
                                cxt.lineTo(155, 45);
                                boldnessEnd()
                            } else {
                                if (duty == "7") {
                                    cxt.lineTo(180, 45);
                                    boldnessEnd()
                                } else {
                                    if (duty == "8") {
                                        cxt.lineTo(205, 45);
                                        boldnessEnd()
                                    } else {
                                        if (duty == "9") {
                                            cxt.lineTo(235, 45);
                                            boldnessEnd()
                                        } else {
                                            if (duty == "10") {
                                                cxt.lineTo(270, 45);
                                                boldnessEnd()
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        cxt.stroke()
    }

    function boldnessEnd() {
        if (boldness == "1") {
            cxt.lineTo(25, 75);
            cleverEnd()
        } else {
            if (boldness == "2") {
                cxt.lineTo(45, 75);
                cleverEnd()
            } else {
                if (boldness == "3") {
                    cxt.lineTo(75, 75);
                    cleverEnd()
                } else {
                    if (boldness == "4") {
                        cxt.lineTo(105, 75);
                        cleverEnd()
                    } else {
                        if (boldness == "5") {
                            cxt.lineTo(125, 75);
                            cleverEnd()
                        } else {
                            if (boldness == "6") {
                                cxt.lineTo(155, 75);
                                cleverEnd()
                            } else {
                                if (boldness == "7") {
                                    cxt.lineTo(180, 75);
                                    cleverEnd()
                                } else {
                                    if (boldness == "8") {
                                        cxt.lineTo(205, 75);
                                        cleverEnd()
                                    } else {
                                        if (boldness == "9") {
                                            cxt.lineTo(235, 75);
                                            cleverEnd()
                                        } else {
                                            if (boldness == "10") {
                                                cxt.lineTo(270, 75);
                                                cleverEnd()
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        cxt.stroke()
    }

    function cleverEnd() {
        if (clever == "1") {
            cxt.lineTo(25, 105);
            disparkEnd()
        } else {
            if (clever == "2") {
                cxt.lineTo(45, 105);
                disparkEnd()
            } else {
                if (clever == "3") {
                    cxt.lineTo(75, 105);
                    disparkEnd()
                } else {
                    if (clever == "4") {
                        cxt.lineTo(105, 105);
                        disparkEnd()
                    } else {
                        if (clever == "5") {
                            cxt.lineTo(125, 105);
                            disparkEnd()
                        } else {
                            if (clever == "6") {
                                cxt.lineTo(155, 105);
                                disparkEnd()
                            } else {
                                if (clever == "7") {
                                    cxt.lineTo(180, 105);
                                    disparkEnd()
                                } else {
                                    if (clever == "8") {
                                        cxt.lineTo(205, 105);
                                        disparkEnd()
                                    } else {
                                        if (clever == "9") {
                                            cxt.lineTo(235, 105);
                                            disparkEnd()
                                        } else {
                                            if (clever == "10") {
                                                cxt.lineTo(270, 105);
                                                disparkEnd()
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        cxt.stroke()
    }

    function disparkEnd() {
        if (dispark == "1") {
            cxt.lineTo(25, 140)
        } else {
            if (dispark == "2") {
                cxt.lineTo(45, 140)
            } else {
                if (dispark == "3") {
                    cxt.lineTo(75, 140)
                } else {
                    if (dispark == "4") {
                        cxt.lineTo(105, 140)
                    } else {
                        if (dispark == "5") {
                            cxt.lineTo(125, 140)
                        } else {
                            if (dispark == "6") {
                                cxt.lineTo(155, 140)
                            } else {
                                if (dispark == "7") {
                                    cxt.lineTo(180, 140)
                                } else {
                                    if (dispark == "8") {
                                        cxt.lineTo(205, 140)
                                    } else {
                                        if (dispark == "9") {
                                            cxt.lineTo(235, 140)
                                        } else {
                                            if (dispark == "10") {
                                                cxt.lineTo(270, 140)
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        cxt.stroke()
    }
});