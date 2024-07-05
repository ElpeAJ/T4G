// let element = document.querySelector('button');

// function turnButtonRed(){
//     element.style.backgroundColor = "red";
//     element.style.color = "white";
//     element.innerHTML = "Red Button";
// }

// element.onclick = turnButtonRed;


// OR

let element = document.querySelector('button');

element.onclick = function(){
    element.style.backgroundColor = "red";
    element.style.color = "white";
    element.innerHTML = "Red Button";
}