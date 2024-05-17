 const container = document.querySelector('.container')
  

const numberOfDivs = 256;


 for(i=0; i < numberOfDivs; i++){

   const newDiv = document.createElement('div');
   newDiv.style.border = '1px solid blue';
   newDiv.style.margin= '4px';
   newDiv.style.width = '40px'
   newDiv.style.height = ' 40px'

   
 container.appendChild(newDiv);


 }
 



 
