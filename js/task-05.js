
const textInput = document.querySelector("#name-input");
const spanOutput = document.querySelector("#name-output");

textInput.addEventListener("input", (event) => {
    if (event.currentTarget.value.trim() === "") {
        spanOutput.textContent =  "Anonymous"
    } else
        {spanOutput.textContent = event.currentTarget.value}
    
});
