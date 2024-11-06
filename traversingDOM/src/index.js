//1. First, create a variable called first and set it to the first child 
// of the document body.
//Then, set the inner HTML of the first element to 'BROWN BEARS ARE AWESOME!'. 
//Take a moment to note which element has been modified.
let first = document.body.children[0];
console.log(first);
first.innerHTML = "BROWN BEARS ARE AWESOME!";


//Use the .parentNode property to access the parent element of the variable 
//first and modify its .style.backgroundColor to 'beige'.
//Take a moment to notice the change in the web page.
first.parentNode.style.backgroundColor = "rgb(107, 50, 241)";
first.parentNode.style.color = "white";
first.parentNode.style.fontSize = "2rem";