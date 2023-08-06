const addValue=document.getElementById('value');

function increment(){
   let addI=parseInt(addValue.innerText);
   addI=addI+1;
   addValue.innerText=addI;
};

function decrement(){
    let addI=parseInt(addValue.innerText);
   addI=addI-1;
   addValue.innerText=addI;
};