// let i = 1;
// while (i <= 20){
//     if((i % 2) === 0){
//         console.log(i);
//     }
//     i += 1;
// }

let numRandom = Math.floor(Math.random() * 2) + 1;
let userNum;
do {
    userNum = Number(prompt('type ur number'));
    if (userNum === numRandom){
       alert("Ви відгадали!");
        break;
    }
    else{
        alert("Спробуйте ще раз.");
    }
}
while(userNum !== numRandom)



// do {
//     password = prompt('type ur password');
// }
// while(password !=="misa"){
//     console.log('password is true');}