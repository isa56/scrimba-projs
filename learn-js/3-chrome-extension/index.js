// Variables:
let myLeads = [];
let listItens;


// Elements:
const inputBtn = document.getElementById('input-btn');
const inputEl = document.getElementById('input-el');
const ulEl = document.getElementById('ul-el');


// Functions:
inputBtn.addEventListener('click', function () {
    myLeads.push(inputEl.value);
    console.log(myLeads);
    listItensLoop();
});

// Listing items:
function listItensLoop() {
    listItens = "";
    for(let i=0; i<myLeads.length; i++){
        listItens += `<li>${myLeads[i]}</li>`
        /*
        const li = document.createElement("li");
        li.textContent = myLeads[i];
        ulEl.append(li);
        */
    }
    ulEl.innerHTML = listItens;
}

