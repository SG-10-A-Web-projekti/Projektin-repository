//Tekijä: Juuso Pesonen

//  Questions list of arrays

let quiz = [
    {
        question: "Missä päin Suomea Olavinlinna sijaitsee?",
        options: ["Turussa", "Hämeenlinnassa", "Savonlinnassa"],
        answer: 2,
        answerText: "Olavinlinnan perusti vuonna 1475 tanskalaissyntyinen ritari Erik Akselinpoika Tott, joka tuolloin toimi Viipurin käskynhaltijana. Paikka linnalle valittiin puolustuksen näkökulmasta; jyrkkä kalliosaari kohoaa vuolaan virran keskeltä kahden vesireitin risteyskohdassa. Vihollisen oli vaikea lähestyä linnaa, jonka lisäksi vesitietä pystyttiin hyödyntämään linnaan tarvittavien rakennustarvikkeiden kuljetuksessa. \n Lähde: Kansallismuseo",

    },
    {
        question: "Missä maanosassa Japani on?",
        options: ["Euroopassa", "Etelä-Amerikassa", "Afrikassa", "Aasiassa"],
        answer: 3,
        answerText: "Aasia on maapallon suurin maanosa niin väestöltään kuin pinta-alaltaankin. Sen pinta-ala on noin 44 miljoonaa neliökilometriä, mikä tarkoittaa 29,4 prosenttia maapallon maapinta-alasta ja 8,6 prosenttia kokonaispinta-alasta. Aasiassa asuu vähän yli 4,6 miljardia ihmistä eli yli 60 prosenttia maailman väestöstä. \n Lähde: Wikipedia",
    
    },
    {   question: "Missä maassa Venetsia on?",
        options: ["Ranska", "Italia", "Irlanti", "Tanska"],
        answer: 1,
        answerText: "Italian tasavalta (ital. Repubblica Italiana) eli Italia (ital. Italia) on tasavalta Etelä-Euroopassa Välimereen työntyvällä Apenniinien niemimaalla ja lähisaarilla. Italian pinta-ala on noin 300 000 neliökilometriä ja väkiluku noin 59,2 miljoonaa. Lähde: Wikipedia",

    },
    {
        question: "Mihin maakuntaan Kuopio kuuluu?",
        options: ["Etelä-Savo", "Pohjois-Savo", "Keski-Suomi", "Kanta-Häme"],
        answer: 1,
        answerText: "Pohjois-Savo (ruots. Norra Savolax, vuoteen 1998 Savon maakunta) on yksi Suomen 19 maakunnasta. Maakunnan asukasluku on 248 179 (tilanne 30.6.2021). Pohjois-Savo on asukasluvultaan Suomen kuudenneksi suurin maakunta. Maakunnan keskuskaupunki on Kuopio. Muita kaupunkikeskuksia ovat Varkaus ja Iisalmi. Alueen maakunnallisena yhteiselimenä toimii Pohjois-Savon liitto. \n Lähde: Wikipedia",

    },
    {
        question: "Onko Washington D.C Yhdysvaltojen pääkaupunki?",
        options: ["Kyllä", "Ei"],
        answer: 0,
        answerText: "Washington, virallisesti District of Columbia, on Yhdysvaltain pääkaupunki. Kaupunki ei kuulu mihinkään osavaltioon, vaan se muodostaa suoraan Yhdysvaltain kongressin alaisuuteen kuuluvan ja Amerikan löytäjän Kristoffer Kolumbuksen mukaan nimetyn Columbian liittopiirin (engl. District of Columbia), jolla on rajoitettu itsehallinto. \n Lähde: Wikipedia",

    }

]

//  Get questions, answers and result parameters

const questionNum = document.querySelector(".question-num");
const questionText = document.querySelector(".question-text");
const optionContent = document.querySelector(".options-content");
const messageText = document.getElementById("message-text");
const startBox = document.querySelector(".start-box");
const questionsBox = document.querySelector(".question-box");
const resultsBox = document.querySelector(".result-box");

// Create global parameters

let questionCount = 0;
let currentQuestion;
let chosenQuestions = [];
let chosenOptions = [];
let chosenCorrect = 0;
let attempt = 0;

//  Setting question parameters into chosenQuestions array
function setChosenQuestions() {
    const totalQuestions = quiz.length;
    for(let i = 0; i < totalQuestions; i++) {
        chosenQuestions.push(quiz[i]);
    }
}

//  Set question number and questions and options from array
function getNewQuestion() {

    //  Question number
    questionNum.textContent = "Kysymys " + (questionCount + 1) + " / " + quiz.length;

    //  Empty questions that they don't add more when nextQuestion has been clicked
    optionContent.textContent = '';

    //Empty answer text array
    messageText.textContent = '';
    
    //  Question text
    // Get random question
    const questionIndex = chosenQuestions[Math.floor(Math.random()* chosenQuestions.length)];
    currentQuestion = questionIndex;

    //  Showing question
    questionText.textContent = currentQuestion.question;
    console.log(questionIndex);

    //  Position of "questionIndex" from the chosenQuestions array
    const indexNum1 = chosenQuestions.indexOf(questionIndex);

    //  Remove the "questionIndex" from the chosenQuestions array, so no repeat going to happen
    chosenQuestions.splice(indexNum1, 1);

    // set options for the question
    //Get length of options
    const optionLength = currentQuestion.options.length;

    //Push options into chosenOptions array
    for( let i = 0; i < optionLength; i++) {
        chosenOptions.push(i);
    }

    //Animation for options
    let animationDelay = 0.15;

    //Create options in html
    for ( let i = 0; i < optionLength; i++) {

        // Random option from question
        const optionIndex = chosenOptions[Math.floor(Math.random() * chosenOptions.length)];

        // Get the position of "optionIndex" from the chosenOptions
        const indexNum2 = chosenOptions.indexOf(optionIndex);
        // Remove the "optionIndex" from the chosenOptions array, so that no repeat going to happen on options
        chosenOptions.splice(indexNum2, 1);

        //console.log(optionIndex)

        // Adding options to questions
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

    questionCount++;
}

// Get the result of current question attempt
function getResult(optionElement) {
    const id = parseInt(optionElement.id);
    
    // Get the answer from id of clicked option
    if ( id === currentQuestion.answer) {
        // Set the green color to the correct answer
        optionElement.classList.add("correct");
        
        // Message when option is correct
        messageText.innerText =  "Oikein, hienoa! \n " + currentQuestion.answerText;

        //document.body.appendChild(document.createElement('img')).src = currentQuestion.imageUrl;
        //alert("Oikein, hienoa!");
        
            //document.body.appendChild(document.createElement('img')).src = currentQuestion.imageUrl;

            chosenCorrect++;

    } else {
        // Set the red color to the wrong answer
        optionElement.classList.add("wrong");

        // Message when option is wrong
        messageText.innerText = "Harmi väärin. \n Ehkä parempi onni ensi kerralla.";
        //alert("Harmi väärin.");
    }
        //  if the answer is wrong then show correct option by adding color green for the correct answer
        const optionLength = optionContent.children.length;
        for ( let i = 0; i < optionLength; i++) {
            if (parseInt(optionContent.children[i].id) === currentQuestion.answer) {
                optionContent.children[i].classList.add("correct");
            }
        }
    attempt++;
    unchosenOptions();
}

// Parameters when can't choose other options when one option have been chosen
function unchosenOptions() {
    const optionLength = optionContent.children.length;
    for( let i = 0; i < optionLength; i++) {
        optionContent.children[i].classList.add("already-chosen");
    }
}

// Go to next question function on button
function nextQuestion() {
    if( questionCount === quiz.length) {
        quizEnd();
    } else {
        getNewQuestion();
    }
}

// Quiz ends after answering all questions
function quizEnd() {
    //  Hide questionsBox
    questionsBox.classList.add("hide");

    //  Show resultsBox
    resultsBox.classList.remove("hide");

    //  Load results
    questionsResult();
}

//  Questions result numbers
function questionsResult() {
    resultsBox.querySelector(".total-question").innerHTML = quiz.length;
    resultsBox.querySelector(".total-attempt").innerHTML = attempt;
    resultsBox.querySelector(".total-correct").innerHTML = chosenCorrect;
    resultsBox.querySelector(".total-wrong").innerHTML = attempt - chosenCorrect;
    resultsBox.querySelector(".total-score").innerHTML = chosenCorrect + " / " + quiz.length;
}

//  Reset questions to start
function resetQuestions() {
    questionCount = 0;
    chosenCorrect = 0;
    attempt = 0;
}

//  Pressed button to try again questions
function tryAgainQuestions() {
    //  Hide resultsBox
    resultsBox.classList.add("hide");

    //  Show questionsBox
    questionsBox.classList.remove("hide");

    //Reset quiz
    resetQuestions();
    startQuestions();
}
//#### Start and load questions #### //

function startQuestions() {
    // Hide start-box
    startBox.classList.add("hide");

    // Show questionsBox
    questionsBox.classList.remove("hide");

    // set all question in chosenQuestions array
    setChosenQuestions();

    // then call getNewQuestion function
    getNewQuestion();
}
