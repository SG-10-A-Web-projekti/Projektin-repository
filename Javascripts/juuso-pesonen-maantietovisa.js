//Tekijä: Juuso Pesonen

//Questions list of arrays

const quiz = [
    {
        question: " Missä päin Suomea Olavinlinna sijaitsee?",
        options: ["Turussa", "Hämeenlinnassa", "Savonlinnassa", "Tampereella"],
        answer: 2,
        imageUrl: "/Images/Olavinlinna selitekuva.png",

    },
    {
        question: "Missä maanosassa Japani on?",
        options: ["Euroopassa", "Etelä-Amerikassa", "Afrikassa", "Aasiassa"],
        answer: 3,
        imageUrl: "/Images/Aasia selitekuva.png",
    
    },
    {   question: "Missä maassa Venetsia on?",
        options: ["Ranska", "Italia", "Irlanti", "Tanska"],
        answer: 1,
        imageUrl: "/Images/Italia selitekuva.png",

    },
    {
        question: "Mihin maakuntaan Kuopio kuuluu?",
        options: ["Etelä-Savo", "Pohjois-Savo", "Keski-Suomi", "Kanta-Häme"],
        answer: 1,
        imageUrl: "/Images/Pohjois-Savo selitekuva.png",

    },
    {
        question: "Mikä on Yhdysvaltojen pääkaupunki?",
        options: ["New York", "Los Angeles", "Washington D.C", "Philadelphia"],
        answer: 2,
        imageUrl: "/Images/Washington selitekuva.png",

    }

]

//Get questions and answers parameters

const questionNum = document.querySelector(".question-num");
const questionText = document.querySelector(".question-text");
const optionContent = document.querySelector(".options-content");
const answerBox = document.querySelector(".question-image");

// Create global parameters

let questionCount = 0;
let currentQuestion;
let answerText;
let chosenQuestions = [];
let chosenOptions = [];

//Setting question parameters into chosenQuestions array
function setChosenQuestions() {
    const totalQuestions = quiz.length;
    for(let i = 0; i < totalQuestions; i++) {
        chosenQuestions.push(quiz[i]);
    }
}

//Set question number and questions and options from array
function getNewQuestion() {

    //Question number
    questionNum.innerHTML = "Kysymys " + (questionCount + 1) + " / " + quiz.length;

    //Empty questions that they don't add more when nextQuestion has been clicked
    optionContent.innerHTML = '';

    //Question text
    // Get random question
    const questionIndex = chosenQuestions[Math.floor(Math.random()* chosenQuestions.length)];
    currentQuestion = questionIndex;

    //Showing question
    questionText.innerHTML = currentQuestion.question;
    //console.log(questionIndex);

    //position of "questionIndex" from the chosenQuestions array
    const indexNum1 = chosenQuestions.indexOf(questionIndex);

    //remove the "questionIndex" from the chosenQuestions array, so no repeat going to happen
    chosenQuestions.splice(indexNum1, 1);

    // set options for the question
    //get length of options
    const optionLength = currentQuestion.options.length;

    //push options into chosenOptions array
    for( let i = 0; i < optionLength; i++) {
        chosenOptions.push(i)
    }

    //animation for options
    let animationDelay = 0.15;

    //create options in html
    for ( let i = 0; i < optionLength; i++) {

        //random option from question
        const optionIndex = chosenOptions[Math.floor(Math.random() * chosenOptions.length)];

        // get the position of "optionIndex" from the chosenOptions
        const indexNum2 = chosenOptions.indexOf(optionIndex);
        //remove the "optionIndex" from the chosenOptions array, so that no repeat going to happen on options
        chosenOptions.splice(indexNum2, 1);

        console.log(optionIndex)

        //adding options to questions
        const option = document.createElement("div");
        option.innerHTML = currentQuestion.options[optionIndex];
        option.id = optionIndex;
        option.style.animationDelay = animationDelay + "s";
        animationDelay = animationDelay + 0.15;
        option.className = "option";
        optionContent.appendChild(option);
        option.setAttribute("onclick", "getResult(this)");
    }

    //console.log(chosenOptions)
    //console.log(currentQuestion.options)

    questionCount++;
}

// Get the result of current question attempt
function getResult(optionElement) {
    const id = parseInt(optionElement.id);

    //get the answer from id of clicked option
    if ( id === currentQuestion.answer) {
        // Set the green color to the correct answer
        optionElement.classList.add("correct");
    } else {
        // Set the red color to the wrong answer
        optionElement.classList.add("wrong");
    }
        //if the answer is wrong then show correct option by adding color green for the correct answer
        const optionLength = optionContent.children.length;
        for ( let i = 0; i < optionLength; i++) {
            if (parseInt(optionContent.children[i].id) === currentQuestion.answer) {
                optionContent.children[i].classList.add("correct");
            }
        }

    unchosenOptions();
}

//Parameters when can't choose other options when one option have been chosen
function unchosenOptions() {
    const optionLength = optionContent.children.length;
    for( let i = 0; i < optionLength; i++) {
        optionContent.children[i].classList.add("already-chosen");
    }
}

//Go to next question function on button
function nextQuestion() {
    if( questionCount === quiz.length) {
        //console.log("quiz over")
    } else {
        getNewQuestion();
    }
}

//Show questions on window
window.onload = function() {
    // set all question in chosenQuestions array
    setChosenQuestions();
    // then call getNewQuestion function
    getNewQuestion();
}