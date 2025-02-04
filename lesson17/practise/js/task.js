// let x = function (a){
//     return a*a;
// };
// let y = x(prompt('your number'));
// console.log(y);

// let greet = function (userName){
//     return `Привіт, ${userName}!`;
// };
// let y = greet(prompt('enter your name'));
// console.log(y);

// let sum = 0;
// let x = function(number){
//     for(let i = 0; i < number.length ; i++){
//         sum+=number[i];
//     }
//     return sum / number.length;
// }
// let y = x([2,4,8]);
// console.log(y);


let x = function (a){
    return a % 2 === 0;
    // if(a % 2 === 0){
    //     return true
    // }
    // else{
    //   return  false
    // }
};
let y = x(prompt('your number'));
console.log(y);