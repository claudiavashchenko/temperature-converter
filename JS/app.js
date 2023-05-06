const primaryInput = document.querySelector("#primary-input");
const secondaryInput = document.querySelector("#secondary-input");
const primarySelect = document.querySelector("#primary-units");
const secondarySelect = document.querySelector("#secondary-units");

primaryInput.value = 0
secondaryInput.value = 0

function update(e) {
    const elementId = e.target.id
    if(elementId === "primary-input" || elementId === "primary-units" || elementId === "secondary-units") {
       secondaryInput.value = 10
    }
    if(elementId === "secondary-input") {
        primaryInput.value = calculate()
    } else {
        secondaryInput.value = calculate(primarySelect.value, secondarySelect.value, primaryInput.value)
    }
}

function calculate(firstTempUnit, secondTempUnit, temp) {

    return 100
}

primaryInput.addEventListener("change", update)
secondaryInput.addEventListener("change", update)
primarySelect.addEventListener("change", update)
secondarySelect.addEventListener("change", update)