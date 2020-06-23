var jobInfo = {
		"109":"工作环境好 ",
		"110":"工作发展前景好",
		"111":"工作稳定",
		"112":"待遇好，工资高，奖金多 ",
		"113":"受人尊敬 ",
		"114":"能展示自己的才能，发挥所学的知识",
		"115":"国家发展所需，能为社会做出更大贡献",
		"116":"符合自己的兴趣爱好，喜欢这份工作",
		"117":"公平对待每个人",
		"118":"工作有挑战性"
}
var dyznInfo = {
		"1":{"1":"对语言文字兴趣较低，不能较好的通过语言文字理解、解释及分析他人讲话的内容；能简单的表达自己内心所想，但缺少语言说服的能力，文字语言使用能力有待提升。",
			 "2":"对语言文字兴趣一般，能够较好的通过语言文字理解、解释及分析他人讲话的内容；能够在适当的时候清楚表达自己的内心所想，具有一般的文字语言使用能力。 ",
			 "3":"对语言文字兴趣浓厚，能够很好的通过语言文字理解、解释及分析他人讲话的内容；能够根据不同的目的，针对不同的听众，在适当的时候简洁，充满热情而又有说服力的讲话，具有较高的文字语言使用能力。"},
		"2":{"1":"对数字、符号等兴趣较低，心算能力比较困难；不太擅长将复杂问题简单的计算，假设并证明等，与人交流时，不太关注语言逻辑性，逻辑思维能力有待提升。",
			 "2":"对数字、符号等兴趣一般，心算能力一般；能够将一般的问题简单的计算，假设并证明等，与人交流时，不关注系统逻辑性的表达，逻辑思维能力一般。",
			 "3":"对数字、符号等兴趣浓厚，有较强的心算能力；能够将复杂问题简单的计算，假设并证明等，与人交流时，比较关注系统逻辑性的表达，具有较强的逻辑思维能力。"},
		"3":{"1":"对空间结构兴趣较低，不能用三度空间方式来思考，不太擅长立体几何；对知觉到的外在影像进行立体旋转能力较弱，不能准确的感觉视觉空间，并将知觉到的形象表现出来，空间感知能力有待提升。",
			 "2":"对空间结构兴趣一般，能以简单的空间方式来思考，能应对简单的立体几何；不太擅长对外在影像进行立体旋转，具有一般的感觉视觉空间，具有一般的空间感知能力。",
			 "3":"对空间结构兴趣浓厚，能以三度空间方式来思考，擅长立体几何；能对知觉到的外在影像进行立体旋转，具有准确的感觉视觉空间，将知觉到的形象表现出来，具有较强的空间感知能力。"},
		"4":{"1":"对运动兴趣较低，身体灵活协调性较弱，动手能力较差；运用双手制作或操作物体不太灵活；不太善于运用身体表达思想和情感，身体运用和表达能力有待进一步加强。",
			 "2":"对运动兴趣一般，身体灵活协调性一般，动手能力一般；能够简单的运用双手制作或操作物体；能简单运用身体表达思想和情感，具有一般的身体运用和表达能力。",
			 "3":"对运动兴趣浓厚，身体灵活协调性好，动手能力强；能够灵巧的运用双手制作或操作物体；善于运用身体表达思想和情感，具有较强的身体运用和表达能力。"},
		"5":{"1":"对音调、旋律、节奏兴趣较低，对节奏或音色不太敏感性，表演，创作及表达音乐的能力有待培养和提升。",
			 "2":"对音调、旋律、节奏兴趣一般，对节奏或音色具有一般的敏感性，拥有音乐的感知能力，具有一般的表演，模仿及思考音乐的能力。",
			 "3":"对音调、旋律、节奏兴趣浓厚，对节奏或音色具有较强的敏感性，拥有音乐的天赋，具有较高的表演，创作及思考音乐的能力。"},
		"6":{"1":"对与人交往兴趣较弱，不太能很好的理解别人，不擅长觉察他人的情绪，体会他人的感受；在人际交往中，不太能察言观色并作出适当反应，人际交往能力有待进一步加强。",
			 "2":"对与人交往兴趣一般，能较好的理解别人，能觉察他人的情绪，较能体会他人的感受；在人际交往中，能辨别不同人际关系的信息提示，具有一般的人际交往能力。",
			 "3":"对与人交往兴趣浓厚，能很好的理解别人，善于觉察他人的情绪，体会他人的感受；在人际交往中，能辨别不同人际关系的暗示并作出适当反应，具有较强的人际交往能力。"},
		"7":{"1":"对自我意识探索兴趣较弱，能够一般的认识自我，不太喜欢反思，事情发生后不太愿意分析事情的经过结果，元认知监控能力有待进一步提升。",
			 "2":"对自我意识探索兴趣一般，能够部分意识到自己的爱好、情绪、有些情况下会独立思考，具有一定的反思能力，具有一定的元认知监控能力。",
			 "3":"对自我意识探索兴趣浓厚，能够意识到自己的爱好、情绪、脾气，喜欢独立思考，善于反思得出针对事实的认识和评价，具有较强的元认知监控能力。"},
		"8":{"1":"对自然界的事物兴趣较低，不喜欢户外活动；不太善于探索观察，不太能够看到事物之间的微小差别，探索自然能力有待进一步提升。",
			 "2":"对自然界的事物兴趣一般，有时喜欢户外活动；有一般的观察能力，能够看到事物之间的部分差别，具有一般的探索自然能力。",
			 "3":"对自然界的事物兴趣浓厚，喜欢户外活动；有敏锐的观察能力，善于探索观察，能够看到事物之间的微小差别，具有较强的探索自然能力。"},
}
var rgqxInfo = {
		"1":{"1":"无忧无虑，能吃苦耐劳。即使面对压力，一般也能保持轻松；",
			 "2":"比较安静、有能力应付压力，但有时体验到内疚、愤怒或悲伤的感觉；",
			 "3":"感觉灵敏，感情脆弱，很容易体验到令人心烦意乱的感觉；"},
		"2":{"1":"内向、含蓄、庄重，喜欢孤独或只与几个密友交往；",
			 "2":"在行为和热情两方面能保持不愠不火，愿与人相处，但同时也注重个人隐私；",
			 "3":"外向、开朗、活泼、情绪高昂、大多时候愿意与人打交道；"},
		"3":{"1":"脚踏实地、讲究实际、因袭传统，固守自己的处世原则；",
			 "2":"讲求实际，但也愿意尝试新方法。在新与旧之间寻找一种平衡；",
			 "3":"喜欢经历新鲜事物，兴趣广泛，想象力丰富；"},
		"4":{"1":"斤斤计较，怀疑心重，骄傲自大，争强好胜。直截了当的表达自己的愤怒；",
			 "2":"富于同情心，信任他人，性情随和，但有时会固执己见，不乏竞争意识；",
			 "3":"极富同情心，性情温厚，渴望合作，避免冲突；"},
		"5":{"1":"生性闲散、做事缺乏条理。有时马虎大意，不愿制订计划。",
			 "2":"为人可靠，做事较有条理。目标清晰，但有时也能将手中的任务弃置一旁。",
			 "3":"责任心极强、做事有条不紊。高标准，严要求，努力实现自己的目标。"}
			 
}
var zwxnInfo = {
		"1":"对自己的期望较低，容易情绪化处理问题，在压力面前束手无策，不能持续坚持完成任务，需要时，知识才能不能有效发挥。",
		"2":"对自己的期望中等，遇事有点退缩，不太愿意挑战，对自己感兴趣的任务能坚持完成，需要时部分知识技能能发挥出来。",
		"3":"对自己的期望较高，遇事理智处理，乐于迎接挑战，对能持续坚持完成任务，需要时能发挥智慧和技能。"
}
layui.config({
    base : "/report/js/" //baGraph.js路径
}).use(['jquery','baGraph'],function() {
    //声明使用layui中的模块/自定义模块
    var $ = layui.jquery, //声明使用
        baGraph = layui.baGraph;//自定义图表js

/*    if($("#sex").text()=='男'){
        $("#male").attr("src","./img/male.png")
    }else if($("#sex").text()=='女'){
        $("#male").attr("src","./img/female.png")
    }*/

    var assessmentResults = {//评估结果
        myChart:'assessmentResults',
        data:[
            {name:"自我效能感", value:Number(zwxn.level)},
            {name:"尽责性", value:Number(rgqx["jinzexing"].level)},
            {name:"宜人性", value:Number(rgqx["yirenxing"].level)},
            {name:"开放性", value:Number(rgqx["kaifangxing"].level)},
            {name:"外倾性", value:Number(rgqx["waiqingxing"].level)},
            {name:"神经质", value:Number(rgqx["shenjingzhi"].level)},
            {name:"自然观察智能", value:Number(dyzn["ziranguancha"].level)},
            {name:"自知自省智能", value:Number(dyzn["neixing"].level)},
            {name:"音乐-节奏智能", value:Number(dyzn["yinyue"].level)},
            {name:"视觉-空间智能", value:Number(dyzn["kongjian"].level)},
            {name:"人际交往智能", value:Number(dyzn["renji"].level)},
            {name:"身体-运动智能", value:Number(dyzn["dongjue"].level)},
            {name:"逻辑-数理智能", value:Number(dyzn["luoji"].level)},
            {name:"言语-语言智能", value:Number(dyzn["yuyan"].level)}
        ]
    };
    var concreteAnalysis = {//具体分析
        myChart:'concreteAnalysis',
        data:[
        	{name:"自然观察智能", value:Number(dyzn["ziranguancha"].score)},
            {name:"自知自省智能", value:Number(dyzn["neixing"].score)},
            {name:"音乐-节奏智能", value:Number(dyzn["yinyue"].score)},
            {name:"视觉-空间智能", value:Number(dyzn["kongjian"].score)},
            {name:"人际交往智能", value:Number(dyzn["renji"].score)},
            {name:"身体-运动智能", value:Number(dyzn["dongjue"].score)},
            {name:"逻辑-数理智能", value:Number(dyzn["luoji"].score)},
            {name:"言语-语言智能", value:Number(dyzn["yuyan"].score)}
        ]
    };
    var personality = {//人格特征倾向性评估情况
        myChart:'personality',
        data:[
            {name:"神经质", value:Number(rgqx["shenjingzhi"].score)},
            {name:"外倾性", value:Number(rgqx["waiqingxing"].score)},
            {name:"开放性", value:Number(rgqx["kaifangxing"].score)},
            {name:"宜人性", value:Number(rgqx["yirenxing"].score)},
            {name:"尽责性", value:Number(rgqx["jinzexing"].score)}
        ]
    };
    var selfEfficacy = {//自我效能感评估结果显示
        myChart:'selfEfficacy',
        data:[
            {name:"自我效能感", value:Number(zwxn.score)}
        ]
    };
    var professional = {//职业价值观情况
        myChart:'professional',
        data:[
            {name:"工作环境", value:Number(scoreOption["109"])},
            {name:"发展前景", value:Number(scoreOption["110"])},
            {name:"稳定性", value:Number(scoreOption["111"])},
            {name:"工资高", value:Number(scoreOption["112"])},
            {name:"受人尊重", value:Number(scoreOption["113"])},
            {name:"发挥才能", value:Number(scoreOption["114"])},
            {name:"国家贡献", value:Number(scoreOption["115"])},
            {name:"兴趣爱好", value:Number(scoreOption["116"])},
            {name:"公平公正", value:Number(scoreOption["117"])},
            {name:"挑战性", value:Number(scoreOption["118"])},
        ]
    };

    //初始化调用
    baGraph.assessment(assessmentResults);//评估结果
    baGraph.radarChart(concreteAnalysis);//具体分析
    baGraph.resultsShow(personality);//人格特征倾向性评估情况
    baGraph.resultsShow(selfEfficacy);//自我效能感评估结果显示
    baGraph.assessment(professional);//职业价值观情况

})