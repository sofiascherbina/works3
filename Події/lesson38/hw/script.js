// let body = document.querySelector('body');
// let btn = document.querySelectorAll('[name="color"]');
// let checkedBtn = btn.forEach(el => {
//   function onBtnChecked(){
//       body.style.backgroundColor = el.value;
//   }
//   el.addEventListener('change', onBtnChecked);
// });


// let input = document.getElementById('name-input');
// let output = document.getElementById('name-output'); 
// let emptyInput = output.textContent;
// function handlerInput(){
//   if( input.value.length === 0){
//     output.textContent = emptyInput;
//   }
//   else{
//     output.textContent = input.value;
//   }
// };
// input.addEventListener('input', handlerInput);

// let input = document.getElementById('validation-input');
// function handlerInputChange (){
//   if(input.value.length === parseInt(input.dataset.length)){
//     input.classList.add('valid');
//   }
//   else{
//     input.classList.add('invalid');
//   }
// };
// input.addEventListener('change', handlerInputChange);

let input = document.getElementById('font-size-control');
let text = document.getElementById('text');
function handlerInput (){
  text.style.fontSize = input.value + 'px';
}
input.addEventListener('input', handlerInput)