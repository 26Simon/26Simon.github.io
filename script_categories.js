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
    //element.style.boxShadow='6px 6px 5px -4px orange, -6px -6px 5px -4px orange, 6px -6px 5px -4px orange, -6px 6px 5px -4px orange';
}