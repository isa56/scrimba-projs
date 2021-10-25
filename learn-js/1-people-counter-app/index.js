// Variables:
let count = 0;
// By me:
let totalPeople = 0;

// Elements from DOM:
const saveEl = document.getElementById("save-el");
const countEl = document.getElementById("count-el");
// By me:
const zeroBtn = document.getElementById("zero-btn");
const totalEl = document.getElementById("total-el");

// Functions:
function increment() {
    count++;
    countEl.textContent = count;
}

function save() {
    totalPeople += count;
    let countStr = count + " - ";
    saveEl.textContent += countStr;
    totalEl.textContent = "Total: " + totalPeople;
    count = 0;
    countEl.textContent = count;
}

// Things by me:
function zeroCounter() {
    count = 0;
    totalPeople = 0;
    countEl.textContent = count;
    saveEl.textContent = "Previous entries: ";
    totalEl.textContent = "Total: ";
}
