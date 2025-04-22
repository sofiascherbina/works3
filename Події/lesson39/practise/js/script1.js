// document.addEventListener('keydown', event =>{
//     console.log('key' + event.key);
//     console.log('code' + event.code);
//     // if(event.altKey){
//     //     console.log('alt');
        
//     // }
// })
// let box = document.querySelector('#box');
// let left = -50;
// document.addEventListener('keydown', event =>{
//     if (event.key === 'ArrowLeft') {
//         left--
//         box.style.transform = `translate(${left}%, -50%)`;

//     };

//     if (event.key === 'ArrowRight') {
//         left++
//         box.style.transform = `translate(${left}%, -50%)`;

//     };
// });


let keys = ['a', 'b', 's'];
let currentKeyIndex = 0;
let btn = document.querySelector('#key');
let text = document.querySelector('.btn');
btn.addEventListener('click', () =>{
    currentKeyIndex = 0;
})
document.addEventListener('keydown', event =>{
    let key = Math.floor(Math.random()*5);
    let currentKey = key[currentKeyIndex];
    let pressedKey = event.key;
    if(currentKey ===  pressedKey){
        currentKeyIndex++;
    }
    else{
        alert('error')
    }
    console.log(currentKeyIndex);
    
})


