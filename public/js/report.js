const dateInput = document.querySelector("#dateInput");
const filenameInput = document.querySelector("#filenameInput");
const createBtn = document.querySelector("#create-btn");

createBtn.addEventListener("click", function () {
    const newInput = dateInput.value;
    const newFilename = filenameInput.value;
    fetch(`${window.origin}/api/toCSVFile?` + new URLSearchParams({
        newInput, newFilename
    }));
    dateInput.value = "";
    filenameInput.value = "";
});