// Variables:
let myLeads = [];


// Elements:
const inputBtn = document.getElementById('input-btn');
const inputEl = document.getElementById('input-el');
const ulEl = document.getElementById('ul-el');


// Functions:
inputBtn.addEventListener('click', function () {
    myLeads.push(inputEl.value);
    console.log(myLeads);
    listItens();
});

// Listing items:
function listItens() {
    ulEl.innerHTML = "";
    for(let i=0; i<myLeads.length; i++){
        ulEl.innerHTML += `<li>${myLeads[i]}</li>`
        /*
        const li = document.createElement("li");
        li.textContent = myLeads[i];
        ulEl.append(li);
        */
    }
}

