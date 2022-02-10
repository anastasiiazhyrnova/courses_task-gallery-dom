'use strict';

let imgLarge = document.getElementById("largeImg"); 

document.addEventListener('click', function(event) {
  let target = event.target;
  if (target.tagName == 'IMG'){
    changeImg();
  }
  else return;
});

function changeImg(){
  document.querySelectorAll("a").forEach(function(e) {
    e.onclick = function() {
      window.event.preventDefault();
      imgLarge.src = e.getAttribute('href');
   }
 })
};

