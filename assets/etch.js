 const container = document.querySelector('.container')

 const numberOfBoxes = 256;
 
 for (i=0; i < numberOfBoxes; i++ ){
  const boxes = document.createElement('div');

 boxes.classList.add('.box')

 boxes.setAttribute("style", "border:1px solid blue; width:100px; height:100px")

 container.appendChild(boxes);

 }
 

 



 
