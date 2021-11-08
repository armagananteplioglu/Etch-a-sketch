gridContainer = document.getElementById("gridContainer");
const resetButton = document.getElementById ("reset-btn")
let item

//slider & grid generator

document.getElementById("gridSlider").oninput = function() {
    gridMaker() 
}

function gridMaker() {
    let val = document.getElementById("gridSlider").value
    document.getElementById('sliderOutput').innerHTML = val

    for (i = 0; i < val*val; i++){
        const div = document.createElement ("div");
        div.classList.add ("gridItem");
        div.addEventListener("mouseover", paint)
        gridContainer.appendChild(div)
    }   
    
    for (c = 0; c < val; c++) {
        gridContainer.style.gridTemplateColumns = (`repeat(${val}, 1fr)`)
        gridContainer.style.gridTemplateRows = (`repeat(${val}, 1fr)`)
    }
    item = document.getElementsByClassName ("gridItem")
};

//painter

function paint (e) {
    e.target.style.backgroundColor = "black"
}

// cleaner

resetButton.addEventListener ("click", clean)

function clean () {
    for (let i = 0 ; i < item.length; i++) {
        item[i].style.backgroundColor = "white"
    }
}