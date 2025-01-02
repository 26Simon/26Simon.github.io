const audio = new Audio("soundtrack/DieWand.mp3");

function playAudio() {
    audio.play();
}

function solveNone(Id) {
    let element = document.getElementById(Id);

    element.style.background="#808080FF";
    element.style.border='6px solid white';
    element.style.boxShadow='none';
    //element.style.boxShadow='6px 6px 5px -4px white, -6px -6px 5px -4px white, 6px -6px 5px -4px white, -6px 6px 5px -4px white';
}

function solveTeamFarming(Id) {
    let element = document.getElementById(Id);

    element.style.border='6px solid orange';
    element.style.boxShadow='none';
    element.style.padding='16px';
    //element.style.boxShadow='6px 6px 5px -4px orange, -6px -6px 5px -4px orange, 6px -6px 5px -4px orange, -6px 6px 5px -4px orange';
    element.firstElementChild.style.color='orange';
    element.firstElementChild.innerHTML='Team Landwirtschaft';
}

function solveTeamEllwangen(Id) {
    let element = document.getElementById(Id);

    element.style.border='6px solid orange';
    element.style.boxShadow='none';
    //element.style.boxShadow='6px 6px 5px -4px orange, -6px -6px 5px -4px orange, 6px -6px 5px -4px orange, -6px 6px 5px -4px orange';
    element.firstElementChild.style.color='orange';
    element.firstElementChild.innerHTML='Team Ellwangen';
}

function showFinalQuestion() {
    let href = "questionFinal.html";
    window.location.href = href;
}