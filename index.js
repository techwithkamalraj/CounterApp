//Selecting the Elements

let counter = document.getElementById('counter');
let add = document.getElementById('add');
let sub = document.getElementById('sub');

// Adding the Event Listners to the Buttons

add.addEventListener('click',()=>{
    counter.innerText++;
})

sub.addEventListener('click',()=>{
    if(counter.innerText > 0){
        counter.innerText--  
    } 
})


