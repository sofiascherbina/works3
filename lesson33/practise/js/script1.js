// document.querySelector('button').style.background = 'rgb(4,56,7)'

// document.body.style.background = 'rgb(4,56,7)'

// const buttons = document.querySelectorAll('button');
// buttons[9].style.background = 'red';


// document.querySelector('.site-nav').style.background = 'yellow';
// document.querySelector('.site-nav__item a[href="https://"]').style.fontSize = '150px';
// document.querySelector('.site-nav a').classList.add('site-nav__link');

// let links = document.querySelectorAll(`li a[href^="http://"]`);
// links.forEach(item => item.style.color = 'orange')
// console.log(links);


let links = document.querySelectorAll('li a');
links[0].classList.add('li-st'); 
links[links.length - 1].classList.add('li-st'); 
console.log(links);

let title = document.querySelector('h1')
title.classList.add('title');
title.textContent = "Miku is the best";
let allLinks = document.querySelectorAll('a')

allLinks.forEach(el => console.log(el.classList.contains('list')));

let containsLink = [...allLinks].map(el => el.classList.contains('list'));
console.log(containsLink);


