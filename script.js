let n = prompt ("Please specify grid size");
gridContainer = document.getElementById("container");
const item = document.getElementsByClassName ("gridItem")

//grid maker

for (i = 0; i < n*n; i++){
    const div = document.createElement ("div");
    div.classList.add ("gridItem");
    gridContainer.appendChild(div)
}   

for (c = 0; c < n; c++) {
    gridContainer.style.gridTemplateColumns = (`repeat(${n}, 1fr`)
    gridContainer.style.gridTemplateRows = (`repeat(${n}, 1fr`)
}


//painter

item.addEventListener ("hover", paint());

function paint() {
    item.style.backgroundColor = "black";
    return false;
}