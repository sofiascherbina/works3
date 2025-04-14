// const a = document.querySelector('a');

// const link = () => {

//     event.preventDefault();
// }

// a.addEventListener('click', link);





// let userName = document.querySelector('.name-str');
// let button= document.querySelector('.btn');
// function onInputClick (){
//     if(userName.value.length === 0){
//         alert('введіть щось');
//     }
//     else{
//          alert(`Вітаємо ${ userName.value}`);
//     }
   
// }
// button.addEventListener('click', onInputClick)

let btnLess = document.querySelector('.btn-less');
let btnMore = document.querySelector('.btn-add');
let text = document.querySelector('.text');
// let fontSize = parseInt(window.getComputedStyle(text).fontSize);
let textSize = parseInt(text.style.fontSize ="16");


function onbtnLessClick (){
   
    textSize -= 2;
     console.log(textSize);
    text.style.fontSize = textSize +"px";
    
    
};

function onbtnMoreClick (){
    textSize += 2;
    console.log(textSize);
    text.style.fontSize = textSize +"px";
};
btnMore.addEventListener('click', onbtnMoreClick);
btnLess.addEventListener('click', onbtnLessClick);