var readlineSync = require('readline-sync');

let score = 0; 

var userName = readlineSync.question("what's your name ? : "); 
console.log("welcome to the quiz @" + userName);
console.log("");

var questions = [{
    question: "which is a powerful programming language that can add interactivity to a website? : ", 
    answer: "javascript"
}, {
    question: "Is javaScript case-sensetive? : ",
    answer: "yes"
}, {
    question: "what symbol is used for single-line comments in javaScript? : ", 
    answer: "//"
}, {
    question: "can JavaScript be used on the server-side? : ", 
    answer: "yes"
}, {
    question: "Is JavaScript dynamically typed language? : ", 
    answer: "yes"
}];

function play(question, answer) {
    var userAns = readlineSync.question(question);

    if (userAns.toLowerCase() == answer.toLowerCase()) {
        console.log("correct :)");
        score = score + 1;
    }
    else {
        console.log("wrong :(");
    }
    console.log();
}

function game() {
    for (let i = 0; i < questions.length; i++) {
        var currentQue = questions[i];
        play(currentQue.question, currentQue.answer);
    }
}

function totalscore() {
    console.log("your total score is: " + score);
}

game(); 
totalscore();