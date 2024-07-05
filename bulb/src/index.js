//click on button
//select the button
let button = document.getElementById("button");

//add an eventListener to see when the button is clicked
function showLight(){
   //background color change to yellow for the img
   let bulb = document.getElementById("bulb");
   bulb.style.backgroundColor = "yellow"; 
   button.innerHTML = "Click to turn off";

}

function offLight(){
    let bulb = document.getElementById("bulb");
   bulb.style.backgroundColor = "rgb(0, 0, 51)";
   button.innerHTML = "Turn back on"; 
}
button.addEventListener("click", showLight);
button.addEventListener("dblclick", offLight);
