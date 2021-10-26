// Variables:
let myLeads = [];
let myLeadsStr;
let listItens;
const leadsFromLocal = JSON.parse( localStorage.getItem( "myLeads" ) );
const tabs = [
    {url: "https://www.linkedin.com/in/per-harald-borgen/"}
]


// Elements:
const inputBtn = document.getElementById('input-btn');
const inputEl = document.getElementById('input-el');
const ulEl = document.getElementById('ul-el');
const deleteBtn = document.getElementById('delete-btn');
const tabBtn = document.getElementById('tab-btn');


// Storage:
/*
localStorage.setItem(key, value)
localStorage.getItem(key)
localStorage.clear() */

// Operaions:
if(leadsFromLocal) {
    myLeads = leadsFromLocal;
    renderLeads(myLeads);
}

renderLeads(myLeads);

// Functions:
inputBtn.addEventListener("click", function() {
    if(inputEl.value != "") {
        myLeads.push(inputEl.value)
        saveToLocal();
        inputEl.value = ""
        renderLeads(myLeads)
    }
});

deleteBtn.addEventListener("dblclick", function() {
    localStorage.clear();
    myLeads = [];
    renderLeads(myLeads);
});



function saveToLocal() {
    myLeadsStr = JSON.stringify(myLeads);
    localStorage.setItem( "myLeads", myLeadsStr );
}

// Listing items:
function renderLeads(leads) {

    let i;
    listItens = "";
    
    for(i=0; i<leads.length; i++){
        listItens += 
            `<li id="leads-li">
                <a id="leads-a" href="${leads[i]}" target="_blank"> ${leads[i]} </a>
            </li>`
        /*
        const li = document.createElement("li");
        li.textContent = leads[i];
        ulEl.append(li);
        */
    }
    ulEl.innerHTML = listItens;
}

