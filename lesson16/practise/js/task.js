// let str = 'Lorem ipsum dolor sit.';
// console.log(str.split(' '));
// console.log(str.split(''));


// const array1 = [5, 10, 15, 20];
// const array2 = [10, 20, 30];
// let x = array1.concat(array2);
// let sum = 0;
// for (let i = 0; i < x.length; i++){
//      sum+=x[i];
// }
// console.log(sum);


let numbers = [];
let userNum;
let sum = 0;
while(true){
    userNum = prompt('Enter ur number');
    
    if(isNaN(userNum) || userNum === null){
        break;
    }
    numbers.push(Number(userNum));
    console.log(userNum);
} 
for(let i =0; i < numbers.length; i++){
    sum+=numbers[i];
    }
console.log(sum);


