const all_options = document.querySelectorAll(".option");
const fields = document.querySelectorAll("#field")

let draggedItem = null;

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
            this.append(draggedItem);
            this.style.backgroundColor = "rgba(0, 0, 0, 0.1)";
        });
    }
}