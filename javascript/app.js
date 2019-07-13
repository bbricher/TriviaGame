
// create variables
var correct = 0;
var wrong = 0;
var unanswered = 0;

var timeRemaining = 15;

$("#hideDiv").hide();

var q1 = {
    question : "Who gets stuck in the upside-down?",
    options : ["Will", "Mike", "Eleven", "Lucas"],
    correct : options[0],
} 
var q2 = {
    question : "Who has super powers?",
}
var q3 = {
    question : "Where does the gang meet Eleven?",
}
var q4 = {
    question : "What's the name of Will Beyers' mom",
}
var q5 = {
    question : "What's the name of Joyce Byers' love interest in season 2?",
}
var q6 = {
    question : "What entity possesses Will in season 2?",
}

var objectList = [q1, q2, q3, q4, q5, q6]
// create each question as an object
//          add answers, losing gif/img, and winning gif/img
console.log(correct);
// build game start function
function gameStart (index) {
    $("#startGame").hide();
    $("#hideDiv").show();
    $("#question").append("<h2>" + index.question + "</h2>");
    var option1 = $("<button>").text(index.options[0]);
    var option2 = $("<button>").text(index.options[1]);
    var option3 = $("<button>").text(index.options[2]);
    var option4 = $("<button>").text(index.options[3]);
    $("#options").append(option1, option2, option3, option4);
}

console.log(objectList[0]);




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
//      win++;
// }
// create if statements for winning and losing
// BONUS: create a spoiler alert action before the last 3 questions
//             function end game button












