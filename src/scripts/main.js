'use strict';

var imgLarge = document.getElementById("largeImg"); 

// document.addEventListener('click', function(event) {
//   var target = event.target;
//   if (target.tagName == 'IMG'){
//     changeImg();
//   }
//   else console.log('error');
// });

//function changeImg(){
document.querySelectorAll("a").forEach(function(e) {
  e.onclick = function() {
      console.log(e);
      window.event.preventDefault();
      imgLarge.src = e.getAttribute('href');
      console.log(imgLarge.src);
   }
 })
//};

