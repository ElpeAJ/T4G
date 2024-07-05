
let eventTarget = document.getElementById('topic');
let explanations = document.getElementById('explanations');

function eventHandlerFunction(event){
    explanations.style.display = "block";
    console.log(event.timeStamp);
    console.log(event.target);
    console.log(event.type);
    eventTarget.removeEventListener("click", eventHandlerFunction)
    
}

eventTarget.addEventListener('click', eventHandlerFunction);