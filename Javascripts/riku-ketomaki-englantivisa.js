// Define variables
const all_options = document.querySelectorAll(".option");
const fields = document.querySelectorAll("#field")
const anwser_fields = document.querySelectorAll(".anwserField");
const explonation_field = document.querySelector("#explonation");
const next_button = document.getElementById("nextQuestion");
const origin_field = document.querySelector(".field");
const page_number = document.getElementById("pageNumber");
const Main_div = document.getElementById("center");
const end_results = document.getElementById("endResults");
const try_again_button = document.getElementById("tryAgainButton")
const homepage_button = document.getElementById("homepageButton")

let draggedItem = null;
let randomNumber = null;
let questionText1 = document.getElementById("questionText1");
let questionText2 = document.getElementById("questionText2");
let field1 = document.getElementById("anwser1");
let field2 = document.getElementById("anwser2");
let field3 = document.getElementById("anwser3");
let questionNumber = 0;
let points = 0;
let pointsText = document.getElementById("pointsText")

let correctExplonations = ["Hyvä!", "Mahtavaa!", "Oikein!", "Hienosti tehty!", "Kyllä"];


// QUESTIONS
// List of questions
let questions = [{
    questionFirstHalf: "",
    questionSecondHalf: " school is in the mountains.",
    correctOption: "Our",
    wrongOptions: ["We", "Us"],
    anwser: field2,
    incorrect: [field1, field3],
    incorrectAnwserExplonation: 'Väärin. Oikea vastaus "Our" = Meidän (omistusmuoto).'
},

{
    questionFirstHalf: "He came to see ",
    questionSecondHalf: " last morning.",
    correctOption: "me",
    wrongOptions: ["I", "my"],
    anwser: field2,
    incorrect: [field1, field3],
    incorrectAnwserExplonation: 'Väärin. Oikea vastaus "me" = minä (objektimuoto).'
},

{
    questionFirstHalf: "The teacher told ",
    questionSecondHalf: " an interesting story.",
    correctOption: "us",
    wrongOptions: ["we", "ours"],
    anwser: field1,
    incorrect: [field2, field3],
    incorrectAnwserExplonation: 'Väärin. Oikea vastaus "us" = me (objektimuoto).'
},

{
    questionFirstHalf: "She has an apple in ",
    questionSecondHalf: " hand.",
    correctOption: "her",
    wrongOptions: ["hers", "she"],
    anwser: field1,
    incorrect: [field2, field3],
    incorrectAnwserExplonation: 'Väärin. Oikea vastaus "her" = hänen (omistusmuoto).'
},

{
    questionFirstHalf: "Jack and Annie love ",
    questionSecondHalf: " dog.",
    correctOption: "their",
    wrongOptions: ["them", "they"],
    anwser: field3,
    incorrect: [field1, field2],
    incorrectAnwserExplonation: 'Väärin. Oikea vastaus "their" = heidän (omistusmuoto).'
}];

// Original questions list length
const original_questions_list_length = questions.length;

// Function to cycle random questions
function AddQuestion () {
    // If there are no more questions left don't run this function
    if (questions.length <= 0) {
        return;
    }

    // Set variables
    let min = 0;
    let max = questions.length - 1;

    // Set attributes
    field1.setAttribute("draggable", true);
    field2.setAttribute("draggable", true);
    field3.setAttribute("draggable", true);

    // Reset attributes and fields
    field1.classList.remove("correct")
    field2.classList.remove("correct")
    field3.classList.remove("correct")

    origin_field.appendChild(field1);
    origin_field.appendChild(field2);
    origin_field.appendChild(field3);

    field1.style.backgroundColor = "white";
    field2.style.backgroundColor = "white";
    field3.style.backgroundColor = "white";

    explonation_field.textContent = "";

    // Reset "next button"
    next_button.style.display = "none"

    // set question number
    questionNumber=questionNumber + 1;

    page_number.textContent = questionNumber + " / " + original_questions_list_length;

    // Get random number for question
    randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

    // Set question
    questionText1.textContent = questions[randomNumber].questionFirstHalf;
    questionText2.textContent = questions[randomNumber].questionSecondHalf;

    // Correct anwser field variable and add correct classname
    let correctField = questions[randomNumber].anwser;

    correctField.classList.add("correct")

    correctField.textContent = questions[randomNumber].correctOption

    // Incorrect choises
    questions[randomNumber].incorrect[0].textContent = questions[randomNumber].wrongOptions[0];
    questions[randomNumber].incorrect[1].textContent = questions[randomNumber].wrongOptions[1];
}

// Add question on load
AddQuestion()


// After anwsering function
function AfterDrop () {
    // Color fields
    questions[randomNumber].anwser.style.backgroundColor = "#63C21C";
    questions[randomNumber].incorrect[0].style.backgroundColor = "#E63636";
    questions[randomNumber].incorrect[1].style.backgroundColor = "#E63636";

    // Next question button visible
    next_button.style.display = "block";
}

// Next question function
function NextQuestion () {
    // Delete current question from list
    questions.splice(randomNumber, 1);

    if (questions.length <= 0) {
        // Hide all question elements
        Main_div.style.display = "none"

        // Show end results
        end_results.style.display = "block"

        // DIVIDE POINTS WITH AMOUNT OF OPTIONS USED
        let actualPoints = points / 3;

        // Show points
        pointsText.textContent = actualPoints + " / " + original_questions_list_length;

        // If user gets max points then disable try again button and make home button visible
        if (actualPoints === original_questions_list_length) {
            try_again_button.style.display = "none";
            homepage_button.style.display = "block";
            console.log("yes");
        }
    }
}

// DRAGGABLES
// Options interractions when starting / ending dragging
for (let i = 0; i < all_options.length; i++) {
    const item = all_options[i];

    item.addEventListener("dragstart", function (e) {
        draggedItem = item;
        setTimeout( function () {
            item.style.display = "none";
        }, 0)
        
    })

    item.addEventListener("dragend", function () {
        setTimeout(function () {
            draggedItem.style.display = "block";
            draggedItem = null;
        }, 0);
    })

    // fields drag event interractions
    for (let j = 0; j < fields.length; j++) {
        const field = fields[j];

        field.addEventListener("dragover", function (e) {
            e.preventDefault ();
        })

        field.addEventListener("dragover", function (e) {
            e.preventDefault ();
            this.style.backgroundColor = "rgba(0, 0, 0, 0.2";
        })

        field.addEventListener("dragleave", function (e) {
            this.style.backgroundColor = "rgba(0, 0, 0, 0.1)";
        })

        field.addEventListener("drop", function (e) {
            e.preventDefault ();
            this.append(draggedItem);
            this.style.backgroundColor = "rgba(0, 0, 0, 0.1)";

            // Check if field that object has been dropped is anwser field
            if (e.target.className == "anwser-field") {
                field1.setAttribute("draggable", false);
                field2.setAttribute("draggable", false);
                field3.setAttribute("draggable", false);

                // Check if dropped field is correct or wrong
                if (draggedItem.className == "option correct") {

                    // Random number for correctExplonations list
                    let correctExplonation = Math.floor(Math.random() * (4 - 0 + 1)) + 0;

                    // Print random correct explonation
                    explonation_field.textContent = correctExplonations[correctExplonation];

                    // add points +1
                    // NOTE THAT THIS FUNCTION RUNS AS MANY TIMES AS THERE ARE OPTIONS
                    points = points + 1;
                    
                    AfterDrop ();
                } else {
                    
                    // print correct explonation
                    explonation_field.textContent = questions[randomNumber].incorrectAnwserExplonation;

                    AfterDrop ();
                }
                
            }
        });
    }
}
