// Variables:
let myLeads = [];
let myLeadsStr;
let listItens;
const leadsFromLocal = JSON.parse( localStorage.getItem( "myLeads" ) );


// Elements:
const inputBtn = document.getElementById('input-btn');
const inputEl = document.getElementById('input-el');
const ulEl = document.getElementById('ul-el');
const deleteBtn = document.getElementById('delete-btn');
const tabBtn = document.getElementById('tab-btn');


// Storage:
/*  localStorage.setItem(key, value)
localStorage.getItem(key)
localStorage.clear()    */

// Operations:
if(leadsFromLocal) {
    myLeads = leadsFromLocal;
    renderLeads(myLeads);
}

renderLeads(myLeads);

// Functions:

// Buttons:
inputBtn.addEventListener("click", function() {
    if(inputEl.value != "") {
        myLeads.push(inputEl.value);
        saveToLocal(myLeads);
        inputEl.value = "";
        renderLeads(myLeads);
    }
});

deleteBtn.addEventListener("dblclick", function() {
    localStorage.clear();
    myLeads = [];
    renderLeads(myLeads);
});

tabBtn.addEventListener("click", function() {
    chrome.tabs.query({active: true, currentWindow:true}, function(tabs) {
        myLeads.push(tabs[0].url);
        saveToLocal(myLeads);
        renderLeads(myLeads);
    })

});


// Other functions:
function saveToLocal(leads) {
    myLeadsStr = JSON.stringify(leads);
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
        /*  const li = document.createElement("li");
        li.textContent = leads[i];
        ulEl.append(li);    */
    }
    ulEl.innerHTML = listItens;
}

