const primaryInput = document.querySelector("#primary-input");
const secondaryInput = document.querySelector("#secondary-input");
const primarySelect = document.querySelector("#primary-units");
const secondarySelect = document.querySelector("#secondary-units");

primaryInput.value = 0
secondaryInput.value = 0

function update() {
    
}

function calculate() {

}

primaryInput.addEventListener("change", update)
secondaryInput.addEventListener("change", update)
primarySelect.addEventListener("change", update)
secondarySelect.addEventListener("change", update)