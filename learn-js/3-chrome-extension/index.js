// Variables:
let myLeads = [];
let myLeadsStr;
let leadsFromLocal = JSON.parse( localStorage.getItem( "myLeads" ) );
let listItens;


// Elements:
const inputBtn = document.getElementById('input-btn');
const inputEl = document.getElementById('input-el');
const ulEl = document.getElementById('ul-el');


// Storage:
/*
localStorage.setItem(key, value)
localStorage.getItem(key)
localStorage.clear() */

if(leadsFromLocal) {
    myLeads = leadsFromLocal;
    renderLeads();
}

renderLeads();

// Functions:
inputBtn.addEventListener("click", function() {
    if(inputEl.value != "") {
        myLeads.push(inputEl.value)
        
        saveToLocal();

        inputEl.value = ""
        renderLeads()
    }
})

function saveToLocal() {
    myLeadsStr = JSON.stringify(myLeads);
    localStorage.setItem( "myLeads", myLeadsStr );
}

// Listing items:
function renderLeads() {

    let i;
    listItens = "";
    
    for(i=0; i<myLeads.length; i++){
        listItens += 
            `<li id="leads-li">
                <a id="leads-a" href="${myLeads[i]}" target="_blank"> ${myLeads[i]} </a>
            </li>`
        /*
        const li = document.createElement("li");
        li.textContent = myLeads[i];
        ulEl.append(li);
        */
    }
    ulEl.innerHTML = listItens;
}

