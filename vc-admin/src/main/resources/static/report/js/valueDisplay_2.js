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
        "金钱":"您将金钱作为自己追求的重要目标，认为工作和生活的目的在于获得优厚的经济报酬。",
        "权力":"您将权力作为自己追求的重要目标，认为工作和生活的目的在于获得对他人或某事物的管理支配权。",
        "名望成就":"您将名望成就作为自己追求的重要目标，认为工作和生活的目的在于出人头地、事业成就和光宗耀祖等，希望受到人们更多的尊重和羡慕，追求一种“高高在上”的感觉。",
        "家庭":"您的家庭观念强烈，非常重视家庭，认为家庭利益高于一切。您工作和生活的目的就是为了家庭的美满幸福，并且愿意为家庭需要付出所有努力。",
        "知识技能":"您尊重知识和人才，重视知识技能的学习，将知识技能作为追求的重要目标。",
        "生命":"您十分重视生命，爱惜生命，不会主动放弃生命。",
        "性爱":"您十分重视性方面的体验，对性的态度较开放。"
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
         deps = deps+importDescription[key]+";";
    }
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
//获取价值观排序
    //var objective = json["data"][0]["data"];
   // objectiveSortDisplay(objective);//客观价值观排序并显示

    var subjective = json["data"][0];
    subjectiveDisplay(subjective);//主观价值观显示

    //displayCompareWithTarget();//主客观价值观对比显示(目标价值观)
}
/*function displayValueSortInRule(json) {
    var ruleSort = valueSort["rule"];
    var ruleSortMaxObjective =ruleSort[0];//规则价值观客观最高分
    var description = dimensions["call3"][ruleSortMaxObjective];
    $("#ruleSort").text(ruleSort.join("、")+"。");
    $("#coreRule").text(ruleSortMaxObjective);
    var questionIds = dimensionQuestionIds[ruleSortMaxObjective];
    var expression = [];
    if (questionIds != null && questionIds.length > 0){
        expression =  getQuestionExpression(questionIds);
        description = description+"具体表现为,您比较认同"+expression.join(" ");//获取题目表述;
    }
    $("#ruleExplain").text(description);
    //规则价值观主观排序内容
    var ruleSortSubjective = json["data"][0]["subjectivityRule"];//规则价值观主观最高分
    var ruleSortMaxSubjective = ruleSortSubjective[0];
    var description2 = dimensions["call3"][ruleSortMaxSubjective];
    $("#subjectRule").text(ruleSortSubjective.join("、")+"。");
    $("#subjectCoreRule").text(ruleSortMaxSubjective);
    $("#ruleExplain2").text(description2);

    //显示主、客观排序对比
    var description3 = "";
    if(ruleSortMaxObjective == ruleSortMaxSubjective){
        description3 = "您主观认为和客观的现实生活中倾向遵循的规则是一致的，都是"+ruleSortMaxObjective+"。";
    }else{
        description3 = "您主观认为和客观的现实生活中倾向遵循的规则是不一致的，您主观认为您更倾向遵循"+ruleSortMaxSubjective
        +"，但在现实生活中您更倾向遵循"+ruleSortMaxObjective+"。";
    }
    $("#displayCompareWithRule").text(description3);
}*/
/**
 * 主方法
 * @param {} json
 * @returns {} 
 */
function displaySubjectiveAndObjective(json){
   displayNormCompare(json);//显示常模比较结果
    displayValueSortInTarget(json);//显示目标价值观排序
    
    //displayValueSortInRule(json);//显示规则价值观排序
}

//显示主客观对比目标价值观
/*function displayCompareWithTarget(){
    var description = "";
    if ((subjectiveMax[0] == objectiveMax[0])&&(subjectiveMax[1] == objectiveMax[1])){//如果一致
        description = "您主观认为和客观的现实生活中追求的核心目标是一致的，都是"+subjectiveMax[0]+subjectiveMax[1];
    }else {
        description = "您主观认为和客观的现实生活中追求的核心目标是不一致的，您主观认为您更重视"+subjectiveMax[0]+"和"+subjectiveMax[1]
            +"，但在现实生活中您更看重"+objectiveMax[0]+"和"+objectiveMax[1]+"。";
    }
    $("#displayCompareWithTarget").text(description);
}*/
//主观价值观显示
function subjectiveDisplay(subjective){
    var target = subjective["subjectivityTarget"];//主观价值观
    $("#subjectTarget").text(target.join(" 、")+"。");
    $("#subjectCoreTarget").text(target[0]+" 、"+target[1]+"。");
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
//客观价值观显示
/*function getQuestionExpression(questionIds) {
    var questions = {
        "1":"人活着就是为了挣更多的钱。",
        "2":"做人就是要出人头地。",
        "3":"家庭美满幸福应是学习、工作的唯一目标。",
        "4":"靠知识技能成功的人应该受到尊重。",
        "5":"活着比其它一切事情都重要。",
        "6":"性需求得不到满足的人生，就是失败的人生。",
        "7":"做事情要对得起自己的良心。",
        "8":"是非判断应依据国家的法规。",
        "9":"多数人做的事情应当是可以做的。",
        "10":"选择工作最重要的因素是工资待遇。",
        "11":"无论遇到什么情况，都优先考虑家庭的需要。",
        "12":"光宗耀祖对一个人的人生很重要。",
        "13":"没有性生活，生命就缺少意义。",
        "14":"无论遇到什么事情，都不能放弃生命。",
        "15":"说谎使人良心不安。",
        "16":"发生任何事情都不应该做违法的事情。",
        "17":"多数人的意见往往是对的。",
        "18":"指挥别人会让人感到很满足。",
        "19":"金钱是衡量个人价值的最重要的标准。",
        "20":"人活着的目标就是要干出一番成就。",
        "21":"即使其它方面很成功, 但家庭不幸福的人也是不幸的。",
        "22":"知识技能的获取是人生追求的重要目标。",
        "23":"人们不应该主动结束自己的生命。",
        "24":"人生就是要尝试不同的性刺激。",
        "25":"道德败坏比犯法更可恶。",
        "26":"好事、坏事的最重要判断标准应当是法律。",
        "27":"和多数人保持一致是最安全的策略。",
        "28":"金钱使人们的生活变得更幸福。",
        "29":"权力是实现人生价值的工具。",
        "30":"知识技能是生存之本。",
        "31":"性体验的满足是值得去追求的。",
        "32":"做事情应当有道德底线。",
        "33":"如果亲人朋友犯法，也应该劝其自首。",
        "34":"有权就有一切。",
        "35":"为了满足性方面的生理需要，可以寻找临时性伴侣。"
    };
    var questionExpression = [];
    for (var i = 0 ; i<questionIds.length;i++){
        var id = questionIds[i];
        var question = questions[id];
        questionExpression.push(question);
    }
    console.log(questionIds);
    return questionExpression;
}*/
/*function objectiveDisplay(target,dimensionQuestionIds){
    //排序后的目标价值观
    var target = target["target"];

    $("#target").text(target.join(" 、")+"。");
    $("#coreTarget").text(target[0]+(" 、")+target[1]+"。");
    objectiveMax.push(target[0]);
    objectiveMax.push(target[1]);
    var dimensionName1 = target[0];//维度名称
    var dimensionExplain1 = dimensions["call1"][dimensionName1];//维度解释
    var dimension1QuestionIds = dimensionQuestionIds[dimensionName1];//维度题目号
    var dimensionName2 = target[1];//维度名称
    var dimensionExplain2 = dimensions["call1"][dimensionName2];//维度解释
    var dimension2QuestionIds = dimensionQuestionIds[dimensionName2];//维度题目号
    if (dimension1QuestionIds != null && dimension1QuestionIds.length > 0){
        var questions = getQuestionExpression(dimension1QuestionIds);
        dimensionExplain1 = dimensionExplain1+"具体表现为,您比较认同"+questions.join(" ");//获取题目表述;
    }
    if (dimension2QuestionIds != null && dimension2QuestionIds.length > 0){
        var questions2 = getQuestionExpression(dimension2QuestionIds);
        dimensionExplain2 = dimensionExplain2+"具体表现为,您比较认同"+questions2.join(" ");//获取题目表述;
    }
    //TODO 添加大于等于5的题目表述
    $("#dimensionName1").text(dimensionName1);
    $("#dimensionName2").text(dimensionName2);
    $("#dimensionExplain1").text(dimensionExplain1);
    $("#dimensionExplain2").text(dimensionExplain2);

}*/
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

//分开目标价值观和规划价值观并分别排序
//获取价值观排序
/*function getValueSort(objective){
    var targetAndRule = {
        "金钱权力":0,
        "名望成就":0,
        "家庭":0,
        "性爱":0,
        "生命":0,
        "知识技能":0,
        "道德":0,
        "法律":0,
        "舆论从众":0
    };
    //目标价值观
    var target = {
        "金钱权力":0,
        "名望成就":0,
        "家庭":0,
        "性爱":0,
        "生命":0,
        "知识技能":0
    };
    //规则价值观
    var rule = {
        "道德":0,
        "法律":0,
        "舆论从众":0
    };
    for (var i=0; i<objective.length;i++){
        var result = objective[i];
        var name = result["name"];
        var score = Number(result["score"]);
        targetAndRule[name] = score;
    }

    for(var key in targetAndRule){
        if (target[key] != null){//设置目标价值观
            target[key] = targetAndRule[key];
        }else if (rule[key] != null){ //设置规则价值观
            rule[key] = targetAndRule[key];
        }
    }
    //排序
    var sortRule = sortObject(rule);
    var sortTarget = sortObject(target);
    var sortRules = [];
    var targetRules = [];
    var name;
    for (var i=0;i<sortRule.length;i++){
        name  = sortRule[i]["name"];
        sortRules.push(name);
    }
    for (var i=0;i<sortTarget.length;i++){
        name  = sortTarget[i]["name"];
        targetRules.push(name);
    }
    var sort = {
        "rule":sortRules,
        "target":targetRules
    }
    //返回排序
    return sort;

}*/
