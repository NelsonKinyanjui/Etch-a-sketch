 const container = document.querySelector('.container');

 let numberOfSquares = 256;

 for (i = 0; i < numberOfSquares; i++){

const createDiv = document.createElement('div');

createDiv.classList.add('.grid')
 
const grid = document.querySelector('.grid')


createDiv.setAttribute("style","border: 1px solid blue; width:100px; height:100px;")
container.appendChild(createDiv);
 }


 
