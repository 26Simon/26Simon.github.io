var curQuestion = 0;

var loginAnswer = '';

const audioEinloggen = new Audio("./soundtrack/Einloggen.mp3");
const audioAnswerRight = new Audio("./soundtrack/AntwortRichtig.mp3");
const audioAnswerWrong = new Audio("./soundtrack/AntwortFalsch.mp3");
const audioFinalQuestion = new Audio("./soundtrack/Masterfrage.mp3");

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

function login3(text) {
    let element = document.getElementById('solutionQuestion3');

    element.innerHTML = text;

    login('A');
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
        case 5:
            return 'C';
        case 6:
            return 'A';
        case 7:
            return 'C';
        case 8:
            return 'Question not defined';
        case 9:
            return 'Question not defined';
        case 10:
            return 'B';
        case 11:
            return 'C';
        case 12:
            return 'Question not defined';
        default:
            return 'Question not defined';
    }

}

function playFinalAudio() {
    audioFinalQuestion.play();
}

function back() {
    window.history.back();
}