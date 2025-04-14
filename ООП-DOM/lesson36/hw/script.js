// let categories = document.querySelectorAll('.item');
// console.log(`У списку ${categories.length} категорії.`);

// categories.forEach((it) => {
//   let title = it.querySelector('h2');
//   console.log(`Категорія: ${title.textContent}`);
  
//   let list = it.querySelectorAll('.el-list li');
//   console.log(`Кількість елементів: ${list.length}`);
  
// });


// const ingredients = [
//   'Картопля',
//   'Гриби',
//   'Часник',
//   'Помідори',
//   'Зелень',
//   'Приправи',
//  ];

// let list = document.querySelector('#ingredients')

// ingredients.forEach((it) =>{
//  let el = document.createElement('li');
//  el.textContent = it;
//  list.prepend(el)
// })


let list = document.querySelector('#gallery');
const images = [
  {
   url:
    'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
   alt: 'White and Black Long Fur Cat',
  },
  {
   url:
    'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
   alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
   url:
    'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
   alt: 'Group of Horses Running',
  },
 ];

 images.forEach((it) =>{
  list.insertAdjacentHTML("afterbegin",`<li><img url= ${it.url} alt=${it.al}></li>`)
 })
 list.style.display = 'flex';
 list.style.gap = '50px';

let btnIn = document.querySelector('button[data-action="increment"]');
let btnDec = document.querySelector('button[data-action="decrement"]');
let text = document.querySelector('#value');

let counterValue = parseInt(text.textContent);

function increment(){
  btnIn.addEventListener("click", function(){
    counterValue+= 1
    return text.textContent = counterValue
  })
  
}

function decrement(){
  btnDec.addEventListener("click", function(){
    counterValue-= 1;
    return text.textContent = counterValue
  })
}

increment();
decrement();