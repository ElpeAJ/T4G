// These variables store the boxes on the side
let itemOne = document.getElementById('list-item-one');
let itemTwo = document.getElementById('list-item-two');
let itemThree = document.getElementById('list-item-three');
let itemFour = document.getElementById('list-item-four');
let itemFive = document.getElementById('list-item-five');
let resetButton = document.getElementById('reset-button');

// This function programs the "Reset" button to return the boxes to their default styles
let reset = function() {
    itemOne.style.width = ''
    itemTwo.style.backgroundColor = ''
    itemThree.innerHTML = 'The mouse must leave the box to change the text'
    itemFive.style.display = "none"
  };
  resetButton.onclick = reset;
  
  // Write your code here

  // code to increase and return to normal width - item 1
  function normalWidth(){
    itemOne.style.width = "";
  }

  function increaseWidth(){
    itemOne.style.width = "520px";
    itemOne.addEventListener("mouseout", normalWidth);
  }

  itemOne.addEventListener("mouseover", increaseWidth);

  //code to change and return to normal background color - item 2
  function normalBg(){
    itemTwo.style.backgroundColor = "";
  }
  function changeBackground(){
    itemTwo.style.backgroundColor = "purple";
    itemTwo.addEventListener("mousedown", normalBg);
  }

  itemTwo.addEventListener("mouseup", changeBackground);

  //code to change and return text to normal - item 3
  function normalText(){
    itemThree.innerHTML = "The mouse must leave the box to change the text";
  }

  function changeText(){
    itemThree.innerHTML = "The mouse has left the element";
    itemThree.addEventListener("mouseover", normalText);
  }

  itemThree.addEventListener("mouseout", changeText);

  //code to display and hide item five - item 4
  function showItem(){
    itemFive.style.display = "block";
  }

  itemFour.addEventListener("mousedown", showItem);