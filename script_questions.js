var curQuestion = 0;

var loginAnswer = '';

const audioEinloggen = new Audio("./soundtrack/Einloggen.mp3");
const audioAnswerRight = new Audio("./soundtrack/AntwortRichtig.mp3");
const audioAnswerWrong = new Audio("./soundtrack/AntwortFalsch.mp3");

function setCurQuestion(question) {
    curQuestion = question;
    console.log(curQuestion);
}

function login(Id) {
    let element = document.getElementById(Id);
    element.style.border= "6px solid orange";
    element.style.boxShadow= "6px 6px 5px -4px orange, -6px -6px 5px -4px orange, 6px -6px 5px -4px orange, -6px 6px 5px -4px orange";

    element.style.height= "133px";

    loginAnswer = Id;

    audioEinloggen.play();
}

function solve() {
    let correctAnswer = getCorrectAnswer(curQuestion);

    if (correctAnswer == 'Question not defined') {
        console.log('Question not defined');
        return;
    }

    let elemLoginAnswer = document.getElementById(loginAnswer);
    let elemCorrectAnswer = document.getElementById(correctAnswer);

    elemCorrectAnswer.style.background = "green";

    if (loginAnswer != correctAnswer) {
        elemLoginAnswer.style.background = "red";

        audioAnswerWrong.play();
    } else {
        audioAnswerRight.play();
    }
}

function showSolution() {
    let href = "answer" + curQuestion + ".html";
    window.location.href = href;
}

function getCorrectAnswer(question) {
    switch (question) {
        case 1:
            return 'B';
        case 2:
            return 'A';
        case 3:
            return 'Question not defined';
        case 4:
            return 'C';
        default:
            return 'Question not defined';
    }

}

function back() {
    window.history.back();
}