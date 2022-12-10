// Define variables
const all_options = document.querySelectorAll(".option");
const fields = document.querySelectorAll("#field")
const anwser_fields = document.querySelectorAll(".anwserField");
const explonation_field = document.querySelector("#explonation");
const next_button = document.getElementById("nextQuestion");
const origin_field = document.querySelector(".field");

let draggedItem = null;
let questionText1 = document.getElementById("questionText1");
let questionText2 = document.getElementById("questionText2");
let field1 = document.getElementById("anwser1");
let field2 = document.getElementById("anwser2");
let field3 = document.getElementById("anwser3");

// QUESTIONS
// List of questions
let questions = [{
    questionFirstHalf: "",
    questionSecondHalf: " school is in the mountains.",
    correctOption: "Our",
    wrongOptions: ["We", "Us"],
    anwser: field2
},

{
    questionFirstHalf: "He came to see ",
    questionSecondHalf: " last morning.",
    correctOption: "me",
    wrongOptions: ["I", "my"],
    anwser: field2
},

{
    questionFirstHalf: "The teacher told ",
    questionSecondHalf: " an interesting story.",
    correctOption: "us",
    wrongOptions: ["we", "ours"],
    anwser: field1
},

{
    questionFirstHalf: "She has an apple in ",
    questionSecondHalf: " hand.",
    correctOption: "her",
    wrongOptions: ["hers", "she"],
    anwser: field1
},

{
    questionFirstHalf: "Jack and Annie love ",
    questionSecondHalf: " dog.",
    correctOption: "their",
    wrongOptions: ["them", "they"],
    anwser: field3
}];

// Random number variables
let min = 0;
let max = questions.length - 1;
// Function to cycle random questions
function AddQuestion () {
    // Set variables
    field1.setAttribute("draggable", true);
    field2.setAttribute("draggable", true);
    field3.setAttribute("draggable", true);

    // Reset attributes
    field1.classList.remove("correct")
    field2.classList.remove("correct")
    field3.classList.remove("correct")

    origin_field.appendChild(field1);
    origin_field.appendChild(field2);
    origin_field.appendChild(field3);

    // Get random number for question
    let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

    // Set question
    questionText1.textContent = questions[randomNumber].questionFirstHalf;
    questionText2.textContent = questions[randomNumber].questionSecondHalf;

    // Correct anwser field variable and classname
    let correctField = questions[randomNumber].anwser;

    correctField.classList.add("correct")

    correctField.textContent = questions[randomNumber].correctOption

}
AddQuestion()
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
                    console.log("oikein");
                    
                } else {
                    console.log("väärin");
                }
                
            }
        });
    }
}
