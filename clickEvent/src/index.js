let image = document.getElementById('img');
let close_view = document.getElementById('close-button');
let view = document.getElementById('view-button');

function showImageAndButton(){
    close_view.style.display = 'block';
    image.style.display = "block";
}
view.addEventListener("click", showImageAndButton);

function closeImageAndButton(){
    close_view.style.display = 'none';
    image.style.display = "none";
}
close_view.addEventListener("click", closeImageAndButton);

function textChange(){
    view.innerHTML = "Hello, World! Here comes Elpe!";
  }
  
  function textReturn(){
    view.innerHTML = "View";
  }
  
  view.addEventListener('click', textChange);
  close_view.addEventListener('click', textReturn);