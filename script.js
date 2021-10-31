let n = prompt ("Please specify grid size");

for (i = 0; i < n*n; i++){
    const div = document.createElement ("div");
    div.classList.add ("gridItem");
    gridContainer = document.getElementById("container");
    gridContainer.appendChild(div)
//    gridContainer.setProperty ("grid-template-columns", "repeat(n, 100px)")
//    gridContainer.setProperty ("grid-template-rows", "repeat(n, 100px)")
}