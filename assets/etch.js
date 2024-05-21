 const container = document.querySelector('.container');
 const grid = document.querySelector('.grid')

 let numberOfSquares = 100;

 for (i = 0; i < numberOfSquares; i++){

const createDiv = document.createElement('div');

  
createDiv.setAttribute("style","border: 1px solid blue; width:50px; height:50px;")

grid.appendChild(createDiv);
container.appendChild(grid);
 }


 
