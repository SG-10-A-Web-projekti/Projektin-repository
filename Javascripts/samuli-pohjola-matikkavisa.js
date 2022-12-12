
let visaStart = document.querySelector("#visaStart");
let questions1 = document.querySelector("#firstQuestions");
let questions2 = document.querySelector("#secondQuestions");
let questions3 = document.querySelector("#thirdQuestions");
let questions4 = document.querySelector("#fourthQuestions");
let questions5 = document.querySelector("#fifthQuestions");
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

let startButton = document.querySelector("#startVisa");

startButton.addEventListener("click", startVisa);

function startVisa() {
    visaStart.classList.add("startHide");
    questions1.classList.add("questionShow1")
}

let saveButton1 = document.querySelector("#saveButton1");

saveButton1.addEventListener("click", save1);

function save1() {
    saveQuestions1.classList.add("save1Hide");
    nextQuestions1.classList.add("button1Show")
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
}

let resultButton = document.querySelector("#resultButton");

resultButton.addEventListener("click", results);

function results() {
    questions5.classList.remove("questionShow5");
    visaResult.classList.add("resultShow");
}