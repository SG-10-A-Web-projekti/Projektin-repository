function checkAnswer1() {
    let Vastaus = document.getElementsByClassName("inputClass1")[0].value;
    var OikeaVastaus = new Array();
    OikeaVastaus['1917'] = true;
    if (OikeaVastaus[Vastaus]) {
        alert('Oikein!');
    }
    else {
        alert('Väärin meni');
        alert("Oikea vastaus on 1917!");
    }
}

function checkAnswer2() {
    let Vastaus = document.getElementsByClassName("inputClass2")[0].value;
    var OikeaVastaus = new Array();
    OikeaVastaus['1906'] = true;
    if (OikeaVastaus[Vastaus]) {
        alert('Oikein!');
    }
    else {
        alert('Väärin meni');
        alert("Oikea vastaus on 1906!");
    }
}

function checkAnswer3() {
    let Vastaus = document.getElementsByClassName("inputClass3")[0].value;
    var OikeaVastaus = new Array();
    OikeaVastaus['1939'] = true;
    if (OikeaVastaus[Vastaus]) {
        alert('Oikein!');
    }
    else {
        alert('Väärin meni');
        alert("Oikea vastaus on 1939!");
    }
}

function checkAnswer4() {
    let Vastaus = document.getElementsByClassName("inputClass4")[0].value;
    var OikeaVastaus = new Array();
    OikeaVastaus['25'] = true;
    if (OikeaVastaus[Vastaus]) {
        alert('Oikein!');
    }
    else {
        alert('Väärin meni');
        alert("Oikea vastaus on 25!");
    }
}

function checkAnswer5() {
    let Vastaus = document.getElementsByClassName("inputClass5")[0].value;
    var OikeaVastaus = new Array();
    OikeaVastaus['2002'] = true;
    if (OikeaVastaus[Vastaus]) {
        alert('Oikein!');
    }
    else {
        alert('Väärin meni');
        alert("Oikea vastaus on 2002!");
    }
}

function clearAnswers() {
    document.getElementById("questionTextField1").value = ""
    document.getElementById("questionTextField2").value = ""
    document.getElementById("questionTextField3").value = ""
    document.getElementById("questionTextField4").value = ""
    document.getElementById("questionTextField5").value = ""
}