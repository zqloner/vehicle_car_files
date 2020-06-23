/**
 * Created by wangyiran on 18/1/2016.
 */
//维度描述
var dimensions = {
    "call1":{//调用1,key为维度名称,value为维度解释
        "金钱权力":"您将金钱权力作为自己追求的重要目标，认为工作和生活的目的在于获得优厚的经济报酬，或是获得对他人或某事物的管理支配权。",
        "名望成就":"您将名望成就作为自己追求的重要目标，认为工作和生活的目的在于出人头地、事业成就和光宗耀祖等，希望受到人们更多的尊重和羡慕，追求一种“高高在上”的感觉。",
        "家庭":"您的家庭观念强烈，非常重视家庭，认为家庭利益高于一切。您工作和生活的目的就是为了家庭的美满幸福，并且愿意为家庭需要付出所有努力。",
        "知识技能":"您尊重知识和人才，重视知识技能的学习，将知识技能作为追求的重要目标。",
        "生命":"您十分重视生命，爱惜生命，不会主动放弃生命。",
        "性爱":"您十分重视性方面的体验，对性的态度较开放。"
    },
    "call2":{
        "金钱":"您将金钱作为自己追求的重要目标，看重事物的功利价值，追求实用性，讲究经济效益，追求财富积累，以是否有利于财富积累作为评价事物的重要标准。",
        "权力":"您将权力作为自己追求的重要目标，崇拜权力、喜欢控制感，希望人和事能在自己的控制之内，享受权力带来的好处。",
        "名望成就":"您将名望成就作为自己追求的重要目标，不甘于平庸，重名望、有雄心。",
        "家庭":"您的家庭观念强烈，属于家庭型，享受家庭给自己带来的幸福感。",
        "知识技能":"您重视知识技能的学习，重知识、爱科学、看重能力、勤于思考、追求真才实学。",
        "生命":"您十分重视生命，热爱生命、在各种情景下都会尽全力保全自己的生命。",
        "性爱":"您十分重视性方面的体验，将性放到生命中的重要位置，对性的态度较开放。"
    },
    "call3":{
        "道德":"您做事依据道德的行为准则和自己的良心。",
        "法律":"您做事依据国家的法规。",
        "舆论从众":"您认为做事应符合于公众舆论或多数人的行为方式。"
    },
    "call4":{
        "道德":"您做事依据道德的行为准则和自己的良心。",
        "法律":"您做事依据国家的法规。",
        "舆论从众":"您认为做事应符合于公众舆论或多数人的行为方式。"
    }
};
var subjectiveMax = [];//主观价值观前两个最高的
var objectiveMax = [];//客观价值观前两个最高的
var valueSort;//客观价值观排序
var dimensionQuestionIds = {};//各维度题目号
//根据value排序对象
function sortObject(obj) {
    var arr = [];
    var prop;
    for (prop in obj) {
        if (obj.hasOwnProperty(prop)) {
            arr.push({
                'name': prop,
                'score': obj[prop]
            });
        }
    }
    arr.sort(function(a, b) {
        return b.score-a.score;
    });
    return arr; // returns array
}

/**
 * 与常模比较结果
 * @param {} json
 * @returns {} 
 */
function displayNormCompare(json) {
//客观
    var objective = json["data"][0]["data"];
    var importDescription = getCompareResult(objective);
    var deps = "";
    for (var key in importDescription){
         deps = deps+importDescription[key]+"；";
    }
    $("#title_01").text("1、"+deps);
    $("#compareResult").text(deps);
}

function getDimensionQuestionIds(objective) {
    var dimensionQuestion = {
        "金钱权力":[],
        "名望成就":[],
        "家庭":[],
        "性爱":[],
        "生命":[],
        "知识技能":[],
        "道德":[],
        "法律":[],
        "舆论从众":[]
    };

    for(var i = 0;i<objective.length ; i++){
        var name = objective[i]["name"];
        var question = objective[i]["behavior"];
        dimensionQuestion[name] = question;
    }
    console.log(dimensionQuestion);
    return dimensionQuestion;

}
function objectiveSortDisplay(objective) {
     valueSort = getValueSort(objective);//排序
    dimensionQuestionIds = getDimensionQuestionIds(objective);//获取各维度题目号
    objectiveDisplay(valueSort,dimensionQuestionIds);//显示
}
/**
 * 目标价值观
 * @param {} json
 * @returns {} 
 */
function displayValueSortInTarget(json) {
    var subjective = json["data"][0];
    subjectiveDisplay(subjective);//主观价值观显示
}
/**
 * 主方法
 * @param {} json
 * @returns {} 
 */
function displaySubjectiveAndObjective(json){
   displayNormCompare(json);//显示常模比较结果
    displayValueSortInTarget(json);//显示目标价值观排序
}


//主观价值观显示
function subjectiveDisplay(subjective){
    var target = subjective["subjectivityTarget"];//主观价值观
    $("#subjectTarget").text(target.join(" 、")+"。");
    var text_sort='在“金钱、权力、生命、知识技能、家庭、性爱、名望成就”7种价值观中，您主观认为的核心是：';
    $("#subjectCoreTarget").text(text_sort+target[0]+" 、"+target[1]+"。");
    
    $("#title_02").text("2、"+text_sort+target[0]+" 、"+target[1]+"。");
    //排在前面的两个
    subjectiveMax.push(target[0]);
    subjectiveMax.push(target[1]);
    var dimensionName1 = target[0];//维度名称
    var dimensionExplain1 = dimensions["call2"][dimensionName1];//维度解释
    var dimensionName2 = target[1];//维度名称
    var dimensionExplain2 = dimensions["call2"][dimensionName2];//维度解释
    
    //展示到页面
    $("#subjectDimensionName1").text(dimensionName1);
    $("#subjectDimensionName2").text(dimensionName2);
    $("#subjectDimensionExplain1").text(dimensionExplain1);
    $("#subjectDimensionExplain2").text(dimensionExplain2);
}

//获取与常模的比较结果
function getCompareResult(objective){
    var importCompare = {
        "1":[],//不看重
        "2":[],//重视相当
        "3":[]//看重
    };
    var importDescription = {
        "3":"您更看重XX",
        "1":"您比较不看重XX",
        "2":"您对XX的重视程度与大多数人相当",
    };
    //比较结果数据
    for (var i=0; i<objective.length;i++){
        var result = objective[i];
        var level = result["level"];
        var name = result["name"];
        importCompare[level].push(name);
    }
    for (var key in importCompare){
        var data = importCompare[key];
        var des = data.join("、");
        if (des!=null && des.length > 0){//如果有显示数据,则将数据替换XX
            importDescription[key] = importDescription[key].replace(/XX/g, des);
        }else{//如果没有数据显示,则删除该level
            delete importDescription[key];
        }

    }
    return importDescription;
}
