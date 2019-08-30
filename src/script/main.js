const blueText = document.querySelector("#blue")
const redText = document.querySelector("#red")
const eventInput = document.querySelector(".input1")

eventInput.addEventListener("keyup", () => {
    console.log("clicky")
    getInput()
})

function getInput() {
        blueText.innerHTML = eventInput.value;
        redText.textContent = eventInput.value;
}