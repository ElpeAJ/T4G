//1.Create a <li> element using the .createElement() method and save it 
// in a variable called newAttraction.
let newAttraction = document.createElement('li');

//On the following line, assign the newAttraction element an id of 'vespa'.
newAttraction.id = "vespa";

//Next, assign the newAttraction element the text 'Rent a Vespa' as its inner HTML.
newAttraction.innerHTML = "Rent a Vespa";

//4.Lastly, append the newAttraction element to the list of top 
// attractions with the ID of italy-attractions.
let italyAttractions =document.getElementById('italy-attractions');
italyAttractions.appendChild(newAttraction);

//Removing or hidding elements

//1.First, save the element with the ID of vespa as a variable named elementToRemove.
let elementToRemove = document.getElementById('bike');

//2.The elementToRemove element is a child of the list of top attractions with 
//the ID of italy-attractions.
//Remove the elementToRemove element from its parent.
let parentElement = document.getElementById('italy-attractions');
parentElement.removeChild(elementToRemove);

//3.
document.getElementById('museums').hidden = true;