// styling the body
document.body.style.backgroundColor = "purple";
document.body.style.color = "white";
document.body.style.textShadow = "2px 2px 5px black";

// Select and modify elements using .querySelector | 
// .getElementById | .getElementsByClassName | .getElementsByName

// selecting elements in the body and styling it
let h1 = document.querySelector('h1');
h1.style.fontSize = "62px";

let author = document.querySelector(".name");
author.style.border = " 3px solid white";
author.style.padding = "20px";
author.style.fontSize = " 32px"

// Changing the inner content of an element using .innerHTML
let firstlist = document.getElementById("first").innerHTML = "Done prepping JS lesson 1";

// .getElementsByClassName and .getElementsByTagName returns an array
let fifths = document.getElementsByClassName("fifths")
console.log(fifths);
fifths[0].innerHTML = "Done prepping L5";

let nextL2 = document.getElementsByTagName('li');
nextL2[7].innerHTML = "Next L2 Done ✅";

// Traversing the DOM
let parentElementUl = document.getElementById('first').parentNode;
console.log(parentElementUl);

let childrenElementUl= document.getElementById('to-dos').children;
console.log(childrenElementUl);
