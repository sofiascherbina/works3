// let i = 1;
// while (i < 5){
//     i += 1;
//     console.log(i);
// }

// while(true){
//     console.log('цикл триває вічно');
// }

// let i = 0;
// while(true){
//     console.log(i);
//     i++;
//     if (i > 5){
//         break
//     } 
// }

// let i = 0;
// while(i < 5){
//     i++;
//     if (i === 5){
//         continue
//     }
//     console.log(i); 
// }


// let password;
// do {
//     password = prompt('type ur password');
// }
// while(password !=="misa"){
//     console.log('password is true');}




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