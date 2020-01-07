
// create variables
var correct = 0;
var wrong = 0;
var unanswered = 0;

var questionTime = 15;
var timeRemaining = 15;

var q1 = {
    question : "Who gets stuck in the upside-down?",
    options : ["Will", "Mike", "Eleven", "Lucas"],
    answer : "Will",
    imgSrc : "https://media3.giphy.com/media/cdyKC6wstMP124Dbvy/200w.webp?cid=790b76115d38d56b355657482ebe09e0&rid=200w.webp",
} 

var q2 = {
    question : "Who has super powers?",
    options : ["Jonathan", "Dustin", "Eleven", "Max"],
    answer: "Eleven",
    imgSrc: "https://media1.giphy.com/media/PKjNAlrpj1iqA/200.webp?cid=790b76115493e7cbf55a642c43a35a6a81ce07ddb3f0b9b0&rid=200.webp"
}
console.log(q2.answer);
var q3 = {
    question : "Where does the gang meet Eleven?",
    options : ["Arcade", "School", "Woods", "Science Camp"],
    answer : "Woods",
    imgSrc: "https://media0.giphy.com/media/l1J9FhYWIDHNqPE52/200.webp?cid=790b76119822c55edcb9b119f5b7bf3e1a6498aa9309992f&rid=200.webp"
}
var q4 = {
    question : "What's the name of Will Beyers' mom",
    options : ["Mary", "Anne", "Kate", "Joyce"],
    answer : "Joyce", 
    imgSrc: "https://media2.giphy.com/media/3o6fIPUYJZC0HiDt4c/200.webp?cid=790b761191fe323e5f5495c0c3cd9d86cd461ec1f7b89cfc&rid=200.webp"
}
var q5 = {
    question : "What's the name of Joyce Byers' love interest in season 2?",
    options : ["George", "Bob", "Bill", "Pete"],
    answer : "Bob",
    imgSrc: "https://media0.giphy.com/media/3o7aD2DZGcbySnCjOo/200.webp?cid=790b7611718ed80b766ae86efb1c500676db40b0210931ba&rid=200.webp"
}
var q6 = {
    question : "What entity possesses Will in season 2?",
    options : ["Mindsplayer", "Mind Gorgon", "Mind Flayer", "Hash Slinging Slasher"],
    answer : "Mind Flayer",
    imgSrc: "https://media2.giphy.com/media/3ohs7JcUsODEciTTbi/200.webp?cid=790b76112b3b0f02a639f45fb283d30c652efa5b27badde1&rid=200.webp"
}

var objectList = [q1, q2, q3, q4, q5, q6]
// create each question as an object
//          add answers, losing gif/img, and winning gif/img
console.log(correct);
// -----------------------------------------------------------------------------------------------------------
var lastQuestionIndex = objectList.length-1;
var runningQuestionIndex = 0;
var TIMER;
$("#startGame").on("click", startGame );

function startGame() {
    $("#startGame").hide();
    $("#timeCount").show();
    renderQuestion();
    // TIMER = setInterval(timerCountDown, 1000);


}

function renderQuestion() {
    timeRemaining = 15;
    $("#timer").text(timeRemaining);
    let q = objectList[runningQuestionIndex];
    $("#question").html("<h2>" + q.question + "</h2>");
    for (var i = 0; i < q.options.length; i++) {
        $("#option" + i).text(q.options[i]);
        $("#option" + i).attr("value", q.options[i])
    }
    $(".clearDiv").show();
    $("#endTime").hide();
    TIMER = setInterval(timerCountDown, 1000);

}

function timerCountDown() {
    // if (timeRemaining <= 15) {
    //     $("#timeCount").show();
    //     $("#timer").text(timeRemaining);
    //     timeRemaining--;
    // } else{
    //     timeRemaining=15;
    //     if(runningQuestionIndex < lastQuestionIndex){
    //         checkAnswer();
    //         runningQuestionIndex++;
    //         renderQuestion();
    //     } else{ clearInterval(TIMER);

    //     }
    // }

    if (timeRemaining === 0) {
        clearInterval(TIMER);
        console.log(runningQuestionIndex);
        $("#timeCount").hide();
        wrongAnswer();
        unanswered++;
        runningQuestionIndex++;
        setTimeout(renderQuestion, 2000);
    } else {
        timeRemaining--;
        $("#timeCount").show();
        $("#timer").text(timeRemaining);
    }
}
function wrongAnswer() {
    wrong++
    $("#endTime").empty();
    var wrongAnswerTextH2 = $("<h2>").html("OOOOOPPS!")
    var actualAnswerPtag = $("<p>").html("The Correct Answer is: " + objectList[runningQuestionIndex].answer);
    var actualAnswerImg = $("<img src='" + objectList[runningQuestionIndex].imgSrc + "'>");
    var showScore = $("<p>").html("Correct Answers: " + correct + " Wrong Answer: " + wrong + " Unanswered: " + unanswered)
    $(".clearDiv").hide();
    $("#endTime").append(wrongAnswerTextH2, actualAnswerPtag, actualAnswerImg, showScore); // 
    $("#endTime").show();
}
function correctAnswer() {
    correct++
    $("#endTime").empty();
    var correctAnswerTextH2 = $("<h2>").html("Correct!")
    var actualAnswerPtag = $("<p>").html("The Correct Answer is: " + objectList[runningQuestionIndex].answer);
    var actualAnswerImg = $("<img src='" + objectList[runningQuestionIndex].imgSrc + "'>");
    var showScore = $("<p>").html("Correct Answers: " + correct + " Wrong Answer: " + wrong + " Unanswered: " + unanswered)
    console.log(actualAnswerImg)
    $(".clearDiv").hide();
    $("#endTime").append(correctAnswerTextH2, actualAnswerPtag, actualAnswerImg, showScore); // 
    $("#endTime").show();
}

// $("#options").on("click", ".options", checkAnswer);

// var answer = [$("#option1").on("click"), $("#option2").on("click"), $("#option3").on("click"), $("#option4").on("click")];

function checkAnswer(answer){
    
    if (runningQuestionIndex < lastQuetionIndex) {
        timeRemaining = 15;
        runningQuestionIndex++;
        $("#timeCount").show();
        renderQuestion();
    } else { 
        clearInterval(TIMER)
        $("#timeCount").hide();
        $(".clearDiv").empty();
        $("#question").html("<h2>Score:</h2>");
        $("#option").html("<p>").addclass("correct");
        $("#option").html("<p>").addclass("wrong");
        $("#option").html("<p>").addclass("unanswered");
        $(".correct").text("Correct: " + correct);
        $(".wrong").text("Wrong: " + wrong);
        $(".unanswered").text("Unanswered: " + unanswered);
//  showScore
    }
}
function evaluateAnswer() {
    
    var clickedValue = $(this).attr('value');
    if(clickedValue === objectList[runningQuestionIndex].answer) {
        console.log("correct");
        $("#timeCount").hide();
        correctAnswer();
        clearInterval(TIMER)
        runningQuestionIndex++;
        setTimeout(renderQuestion, 2000);        
    } else{
        wrongAnswer();
        console.log("incorrect");
        $("#timeCount").hide();
        clearInterval(TIMER)
        runningQuestionIndex++;
        setTimeout(renderQuestion, 2000);
    }
}
$(document).on("click", ".option", evaluateAnswer);

// img.html("<img src=" + q.imgSrc + ">");
// -----------------------------------------------------------------------------------------------------------
// build game start function
// $("#hideDiv").hide();

// function gameStart () {
//     $("#startGame").hide();
//     timerCountDown();
// }

// $("#startGame").click(gameStart(eachQuestion));

// console.log(gameStart(objectList));
// function showQuestion(index) {
//     $("#question").append("<h2>" + index.question + "</h2>");
//     $("#option1").text(index.options[0]);
//     $("#option2").text(index.options[1]);
//     $("#option3").text(index.options[2]);
//     $("#option4").text(index.options[3]);  
// }

// for (var i = 0; i > objectList.length; i++) {
//     var response = $("#options").click();
//     if(response == objectList[i].answer) {
//         correct++;
//         $(".clearDiv") = "";
//         $("#question").append("<h2>Correct!<h2>");
//         $("#options").append(objectList[i].gif)
//     }
//     var eachQuestion = showQuestion(objectList[i]); 
// }









// build game reset function
// create interval function for the questions
// if (rightAnswer = clicked) {
//      clearDiv();
//      $().append("<h2>Correct!<h2>");
//      $().append("<img src=>");
//      correct++;
// }
// else {
//      clearDiv();
//      $().append("<h2>Nope!<h2>");
//      $().append("The Correct Answer was: " + rightAnswer)
//      $().append("<img src=>");
//      wrong++;
// }
// if (no answer) {
//      clearDiv();
//      $().append("<h2>Out of time!!<h2>");
//      $().append("The Correct Answer was: " + rightAnswer)
//      $().append("<img src=>");
// }
// create if statements for winning and losing
// BONUS: create a spoiler alert action before the last 3 questions
//             function end game button












