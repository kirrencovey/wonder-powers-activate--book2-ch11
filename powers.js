// Write a function named flightHandlerFunction that will remove the disabled class on the corresponding <section id="flight"> (section, not button) and replace it with a class of enabled.

// Once you have that working, write two more JavaScript functions, and two more querySelector().addEventListener() statements for handling the click event on the other two buttons. Those event handlers should perform the same step of removing disabled, and adding enabled on the corresponding <section> elements


const flightButton = document.querySelector("#activate-flight");
const mindreadingButton = document.querySelector("#activate-mindreading");
const xrayButton = document.querySelector("#activate-xray");

const flightText = document.querySelector("#flight");
const mindreadingText = document.querySelector("#mindreading");
const xrayText = document.querySelector("#xray")

// const flightHandlerFunction = () => {
//     flightText.classList.toggle("disabled");
//     flightText.classList.toggle("enabled");
// }

// const mindreadingHandlerFunction = () => {
//     mindreadingText.classList.toggle("disabled");
//     mindreadingText.classList.toggle("enabled");
// }

// const xrayHandlerFunction = () => {
//     xrayText.classList.toggle("disabled");
//     xrayText.classList.toggle("enabled");
// }

// flightButton.addEventListener("click", flightHandlerFunction);
// mindreadingButton.addEventListener("click", mindreadingHandlerFunction);
// xrayButton.addEventListener("click", xrayHandlerFunction);




// Write two more event handlers for activating and deactivating all powers when the corresponding buttons are clicked. You will need to use the document.querySelectorAll() method for these.

const activateAllButton = document.querySelector("#activate-all");
const deactivateAllButton = document.querySelector("#deactivate-all")

const allPowers = document.querySelectorAll(".power");

const activateAll = () => {
    allPowers.forEach(power => {
        power.classList.remove("disabled");
        power.classList.add("enabled");
    })
}

const deactivateAll = () => {
    allPowers.forEach(power => {
        power.classList.remove("enabled");
        power.classList.add("disabled");
    })
}

activateAllButton.addEventListener("click", activateAll);
deactivateAllButton.addEventListener("click", deactivateAll);




// Challenge: One Function to Rule Them All

// The learning objective of this challenge to write a function handler to be used for multiple events, and uses information in the event argument to perform common logic.

// You may notice that your code to enable individual powers (not all at once) is very similar. To keep your code DRY, make one function that will handle activating a power depending on which button is clicked. (Hint: one way to get started is to use event.target.id.split("-") in your function)


const bigFancyFunction = () => {
    function allPowerManipulator (yourSection) {
        yourSection.classList.toggle("disabled");
        yourSection.classList.toggle("enabled");
    }

    let powerID = event.target.id.split("-")[1];
    let correctButton = document.getElementById(powerID);
    allPowerManipulator(correctButton);
}


flightButton.addEventListener("click", bigFancyFunction);
mindreadingButton.addEventListener("click", bigFancyFunction);
xrayButton.addEventListener("click", bigFancyFunction);