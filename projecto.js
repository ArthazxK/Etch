let container = document.getElementById("container");
const uno = document.getElementsByClassName("uno")
const dos = document.getElementsByClassName("dos");
const tres = document.getElementsByClassName("tres");

let newGrid = createGrid(16);
// Create Grid
function createGrid (gsize) {
    container.style.gridTemplateColumns = `repeat(${gsize} , 1fr)`;
    container.style.gridTemplateRows = `repear(${gsize}, 1fr)`;
    for(let i = 0 ; i < gsize * gsize ; i++) {
    var x = document.createElement("div");
    x.setAttribute("id" , "grid");
document.getElementById("container").appendChild(x);
}

hover();
};

// Reser Button
document.querySelector(".uno").addEventListener("click",
e => {
    while(container.firstChild) {
        container.removeChild(container.firstChild);
    }
    let userImput = prompt("choose a number form 10 to 64");
    if(userImput < 10 || userImput > 64) {
        alert("Wrong fucking choise");
    } else {newGrid = createGrid(userImput);};
});

//Black Button
document.querySelector(".dos").addEventListener("click", e => {
    let gridx = document.querySelectorAll("#grid");
    gridx.forEach(x => {
    x.addEventListener("mouseover" , e => {
    x.style.backgroundColor = "black";
    });
});
});          


//Colors Button
document.querySelector(".tres").addEventListener("click", e => {
        let gridx = document.querySelectorAll("#grid");
        gridx.forEach(x => {
        x.addEventListener("mouseover" , e => {
        x.style.backgroundColor = '#'+Math.floor(Math.random()*16777215).toString(16);
        });
    });
});          


function hover() {
    let gridx = document.querySelectorAll("#grid");
    gridx.forEach(x => {
    x.addEventListener("mouseover" , e => {
    x.style.backgroundColor = "black";
})
});};



//'#'+Math.floor(Math.random()*16777215).toString(16);



