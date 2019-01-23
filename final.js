// Button targets:

const flightButton = document.querySelector("#activate-flight");
const mindreadingButton = document.querySelector("#activate-mindreading");
const xrayButton = document.querySelector("#activate-xray");
const activateAllButton = document.querySelector("#activate-all");
const deactivateAllButton = document.querySelector("#deactivate-all")

// Element targets:

const flightText = document.querySelector("#flight");
const mindreadingText = document.querySelector("#mindreading");
const xrayText = document.querySelector("#xray")
const allPowers = document.querySelectorAll(".power");
const powerButtons = document.querySelector("#powerButtons");


// Function to toggle a power between disabled and enabled:

const allPowerManipulator = (yourSection) => {
    yourSection.classList.toggle("disabled");
    yourSection.classList.toggle("enabled");
}

// Function to target the element that matches the button being clicked:

const handleItemClick = () => {
    let powerID = event.target.id.split("-")[1];
    let correctButton = document.getElementById(powerID);
    allPowerManipulator(correctButton);
}

// Function to activate all powers:

const activateAll = () => {
    allPowers.forEach(power => {
        power.classList.remove("disabled");
        power.classList.add("enabled");
    })
}

// Function to deactivate all powers:

const deactivateAll = () => {
    allPowers.forEach(power => {
        power.classList.remove("enabled");
        power.classList.add("disabled");
    })
}

// Add event listeners and call appropriate functions within listeners

powerButtons.addEventListener("click", handleItemClick);
activateAllButton.addEventListener("click", activateAll);
deactivateAllButton.addEventListener("click", deactivateAll);