
let visaStart = document.querySelector("#visaStart");
let questions1 = document.querySelector("#firstQuestions");
let questions2 = document.querySelector("#secondQuestions");
let questions3 = document.querySelector("#thirdQuestions");
let questions4 = document.querySelector("#fourthQuestions");
let questions5 = document.querySelector("#fifthQuestions");

let result1 = document.querySelector("#result1");
let result2 = document.querySelector("#result2");
let result3 = document.querySelector("#result3");
let result4 = document.querySelector("#result4");
let result5 = document.querySelector("#result5");

let visaResult = document.querySelector("#results");

let saveQuestions1 = document.querySelector("#save1");
let saveQuestions2 = document.querySelector("#save2");
let saveQuestions3 = document.querySelector("#save3");
let saveQuestions4 = document.querySelector("#save4");
let saveQuestions5 = document.querySelector("#save5");

let nextQuestions1 = document.querySelector("#button1");
let nextQuestions2 = document.querySelector("#button2");
let nextQuestions3 = document.querySelector("#button3");
let nextQuestions4 = document.querySelector("#button4");
let endVisa = document.querySelector("#button5");

let points = 0;

let startButton = document.querySelector("#startVisa");

startButton.addEventListener("click", startVisa);

function startVisa() {
    visaStart.classList.add("startHide");
    questions1.classList.add("questionShow1")
}

// function getRndInteger(min, max) {
//     return Math.floor(Math.random() * (max - min + 1) ) + min;
// }

// let number1 = getRndInteger(1, 20);
// let number2 = getRndInteger(1, 20);
// let multiplier = getRndInteger(1, 10);
// let divider = getRndInteger(1, 10);

// let question1p = document.querySelector("#p1");
// question1p.textContent = "Olet ostamassa uutta paitaa kaupasta. Paidan alkuperäinen hinta on 100 euroa, mutta se on 25% alennuksessa. Mikä on paidan alennettu hinta? Kirjoita vastaus alla olevaan kenttään";

let saveButton1 = document.querySelector("#saveButton1");

saveButton1.addEventListener("click", save1);

function save1() {
    saveQuestions1.classList.add("save1Hide");
    nextQuestions1.classList.add("button1Show");
    result1.classList.toggle("result1Hide");
    
    let field1 = document.querySelector("#input1").value;
    let answer1 = 10 * 15 - 8;

    let result1Text = document.querySelector("#result1Text");
    let result1Img = document.querySelector("#result1Img");

    if (field1 == answer1) {
        result1Text.textContent = "Oikein!";
        result1Img.src = "../Images/checkmark.png";
        points++;
    } else {
        result1Text.textContent = "Väärin. Oikea vastaus on 142.";
        result1Img.src = "../Images/crossmark.png";
    }
}

let result1Button = document.querySelector("#result1Button");

result1Button.addEventListener("click", result1Info);

let result1MoreInfo = document.querySelector("#result1Info");

function result1Info() {
    result1MoreInfo.classList.toggle("result1InfoHide");
}

let result1InfoClose = document.querySelector("#closeButton1");

result1InfoClose.addEventListener("click", closeResult1Info);

function closeResult1Info() {
    result1MoreInfo.classList.toggle("result1InfoHide");
    result1InfoClose.classList.toggle("closeButton1Hide");
}

let nextButton1 = document.querySelector("#nextQuestions1");

nextButton1.addEventListener("click", next1);

function next1() {
    questions1.classList.remove("questionShow1");
    questions2.classList.add("questionShow2");
}

let saveButton2 = document.querySelector("#saveButton2");

saveButton2.addEventListener("click", save2);

function save2() {
    saveQuestions2.classList.add("save2Hide");
    nextQuestions2.classList.add("button2Show");
    result2.classList.toggle("result2Hide");

    let result2Text = document.querySelector("#result2Text");
    let result2Img = document.querySelector("#result2Img");

    let field2 = document.querySelector("#input2").value;
    let answer2 = 10 - 3 ** 2 / 3; 

    if (field2 == answer2) {
        result2Text.textContent = "Oikein!";
        result2Img.src = "../Images/checkmark.png";
        points++;
    } else {
        result2Text.textContent = "Väärin. Oikea vastaus on 7.";
        result2Img.src = "../Images/crossmark.png";
    }
 }

 let result2Button = document.querySelector("#result2Button");

result2Button.addEventListener("click", result2Info);

let result2MoreInfo = document.querySelector("#result2Info");

function result2Info() {
    result2MoreInfo.classList.toggle("result2InfoHide");
}

let result2InfoClose = document.querySelector("#closeButton2");

result2InfoClose.addEventListener("click", closeResult2Info);

function closeResult2Info() {
    result2MoreInfo.classList.toggle("result2InfoHide");
    result2InfoClose.classList.toggle("closeButton2Hide");
}

let nextButton2 = document.querySelector("#nextQuestions2");

nextButton2.addEventListener("click", next2);

function next2() {
    questions2.classList.remove("questionShow2");
    questions3.classList.add("questionShow3");
}

let saveButton3 = document.querySelector("#saveButton3");

saveButton3.addEventListener("click", save3);

function save3() {
    saveQuestions3.classList.add("save3Hide");
    nextQuestions3.classList.add("button3Show");
    result3.classList.toggle("result3Hide");

    let result3Text = document.querySelector("#result3Text");
    let result3Img = document.querySelector("#result3Img");

    let field3 = document.querySelector("#input3").value;
    let answer3 = 6;

    if (field3 == answer3) {
        result3Text.textContent = "Oikein!";
        result3Img.src = "../Images/checkmark.png";
        points++;
    } else {
        result3Text.textContent = "Väärin. Oikea vastaus on 6.";
        result3Img.src = "../Images/crossmark.png";
    }
}

let result3Button = document.querySelector("#result3Button");

result3Button.addEventListener("click", result3Info);

let result3MoreInfo = document.querySelector("#result3Info");

function result3Info() {
    result3MoreInfo.classList.toggle("result3InfoHide");
}

let result3InfoClose = document.querySelector("#closeButton3");

result3InfoClose.addEventListener("click", closeResult3Info);

function closeResult3Info() {
    result3MoreInfo.classList.toggle("result3InfoHide");
    result3InfoClose.classList.toggle("closeButton3Hide");
}

let nextButton3 = document.querySelector("#nextQuestions3");

nextButton3.addEventListener("click", next3);

function next3() {

    questions3.classList.remove("questionShow3");
    questions4.classList.add("questionShow4");
}

let saveButton4 = document.querySelector("#saveButton4");

saveButton4.addEventListener("click", save4);

function save4() {
    saveQuestions4.classList.add("save4Hide");
    nextQuestions4.classList.add("button4Show");
    result4.classList.toggle("result4Hide");

    let result4Text = document.querySelector("#result4Text");
    let result4Img = document.querySelector("#result4Img");

    radio1 = document.querySelector("#option1a");
    radio2 = document.querySelector("#option2a");
    radio3 = document.querySelector("#option3a");
    radio4 = document.querySelector("#option4a");

    if (radio1.checked == true) {
        result4Text.textContent = "Väärin. Oikea vastaus on 24.";
        result4Img.src = "../Images/crossmark.png";
    }
    if (radio2.checked == true) {
        result4Text.textContent = "Oikein!";
        result4Img.src = "../Images/checkmark.png";
        points++;
    }
    if (radio3.checked == true) {
        result4Text.textContent = "Väärin. Oikea vastaus on 24.";
        result4Img.src = "../Images/crossmark.png";
    }
    if (radio4.checked == true) {
        result4Text.textContent = "Väärin. Oikea vastaus on 24.";
        result4Img.src = "../Images/crossmark.png";
    }
}

let result4Button = document.querySelector("#result4Button");

result4Button.addEventListener("click", result4Info);

let result4MoreInfo = document.querySelector("#result4Info");

function result4Info() {
    result4MoreInfo.classList.toggle("result4InfoHide");
}

let result4InfoClose = document.querySelector("#closeButton4");

result4InfoClose.addEventListener("click", closeResult4Info);

function closeResult4Info() {
    result4MoreInfo.classList.toggle("result4InfoHide");
    result4InfoClose.classList.toggle("closeButton4Hide");
}

let nextButton4 = document.querySelector("#nextQuestions4");

nextButton4.addEventListener("click", next4);

function next4() {
    questions4.classList.remove("questionShow4");
    questions5.classList.add("questionShow5");
}

let saveButton5 = document.querySelector("#saveButton5");

saveButton5.addEventListener("click", save5);

function save5() {
    saveQuestions5.classList.add("save5Hide");
    endVisa.classList.add("button5Show");
    result5.classList.toggle("result5Hide");

    let result5Text = document.querySelector("#result5Text");
    let result5Img = document.querySelector("#result5Img");

    radiobGroup = document.getElementsByName("optionb");
    radio1 = document.querySelector("#option1b");
    radio2 = document.querySelector("#option2b");
    radio3 = document.querySelector("#option3b");
    radio4 = document.querySelector("#option4b");

    if (radio1.checked == true) {
        result5Text.textContent = "Väärin. Oikea vastaus on 12.";
        result5Img.src = "../Images/crossmark.png";
    }
    if (radio2.checked == true) {
        result5Text.textContent = "Väärin. Oikea vastaus on 12.";
        result5Img.src = "../Images/crossmark.png";
    }
    if (radio3.checked == true) {
        result5Text.textContent = "Oikein!";
        result5Img.src = "../Images/checkmark.png";
        points++;
    }
    if (radio4.checked == true) {
        result5Text.textContent = "Väärin. Oikea vastaus on 12.";
        result5Img.src = "../Images/crossmark.png";
    } 
}

let result5Button = document.querySelector("#result5Button");

result5Button.addEventListener("click", result5Info);

let result5MoreInfo = document.querySelector("#result5Info");

function result5Info() {
    result5MoreInfo.classList.toggle("result5InfoHide");
}

let result5InfoClose = document.querySelector("#closeButton5");

result5InfoClose.addEventListener("click", closeResult5Info);

function closeResult5Info() {
    result5MoreInfo.classList.toggle("result5InfoHide");
    result5InfoClose.classList.toggle("closeButton5Hide");
}

let resultButton = document.querySelector("#resultButton");

resultButton.addEventListener("click", results);

function results() {
    questions5.classList.remove("questionShow5");
    visaResult.classList.add("resultShow");

    let pointsText = document.querySelector("#points");
    pointsText.textContent = "Pisteet:" + " " + points + "/5";

   let trophy = document.querySelector("#trophy");

   if (points < 3) {
    trophy.src = "../Images/bronzetrophy.png"
   }
   if (points < 4) {
    trophy.src = "../Images/silvertrophy.png"
   }
   if (points <= 5) {
    trophy.src = "../Images/goldtrophy.png"
   }
}