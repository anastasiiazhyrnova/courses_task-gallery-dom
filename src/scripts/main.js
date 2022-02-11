'use strict';

const imgLarge = document.getElementById("largeImg"); 

const links = document.querySelectorAll('#thumbs a');
links.forEach((link)=> link.addEventListener('click', 
  (event) => imageReplacer(event, link)));

const imageReplacer = (event, link) => {
  event.preventDefault();
  const imageUrl = link.getAttribute('href');
  imgLarge.src = imageUrl;
}

