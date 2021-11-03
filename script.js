let n = prompt ("Please specify grid size");
gridContainer = document.getElementById("container");
const item = document.getElementsByClassName ("gridItem")
const resetButton = document.getElementById ("reset-btn")

//grid maker
function gridMaker (n){
    for (i = 0; i < n*n; i++){
        const div = document.createElement ("div");
        div.classList.add ("gridItem");
        gridContainer.appendChild(div)
    }   
    
    for (c = 0; c < n; c++) {
        gridContainer.style.gridTemplateColumns = (`repeat(${n}, 1fr)`)
        gridContainer.style.gridTemplateRows = (`repeat(${n}, 1fr)`)
    }
}

gridMaker(n);

//painter

for (let i = 0 ; i < item.length; i++) {
    item[i].addEventListener('mouseover' , painter , false ) ; 
}

function painter (item) {
    item.srcElement.style.backgroundColor = "black";
}

// cleaner
resetButton.addEventListener ("click", clean)

function clean () {
    for (let i = 0 ; i < item.length; i++) {
        item[i].style.backgroundColor = "white"
    }
}