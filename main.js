const nameInput = document.getElementById("exampleStudent");
const submitButton = document.getElementById("submitButton");
let wizardClass = ["Griffyindor", "Ravenclaw", "Hufflepuff", "Slytherin"]
const startSort = document.getElementById("startSort");

startSort.addEventListener('click', () => {
    showForm();
})

const printToDom = (stringToPrint, whereToPrint) => {
    document.getElementById(whereToPrint).innerHTML += stringToPrint;
}

const activateDeletes = () => {
    const deleteButtons = document.getElementsByClassName('deleteButton');
    for (let i = 0; i < deleteButtons.length; i++) {
        const element = deleteButtons[i];
        element.addEventListener("click", (e) => {
            // card that the button was on
            e.preventDefault();
            const buttonIClicked = e.target;
            const cardToDelete = buttonIClicked.parentNode.parentNode;
            cardToDelete.remove();
            console.log("they clicked delete!!!");
        })
    }
}

const buildNewStudentCard = (name) => {
    let classNum = Math.floor(Math.random()*4);
    let domString =
    `<div class="card text-center container w-25 m-2">
    <div class="card-body">
    <h5 class="card-title">${name}</h5>
    <p class="card-text">${wizardClass[classNum]}</p>
    <a href="#" class="btn btn-danger deleteButton">Expel</a>
    </div>
    </div>
    </div>`;
    printToDom(domString, 'studentCards');
    activateDeletes();
}

submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    buildNewStudentCard(nameInput.value);
});

const showForm = () => {
    var x = document.getElementById("theForm");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

