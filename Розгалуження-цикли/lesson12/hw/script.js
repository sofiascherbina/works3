// let num = 1;
// while (num < 10){
//     num +=1;
//     console.log(num);
// }

// let x = 2;
// for(let i =x; i<=20; i+=1){
//     if( (i%2) !== 0){
//         continue
//     }
//     console.log(i);
// }

// // let op=[1,2,3,4,5,6,7,8,9,10];
// // for(let i = 0; i < op.length ; i +=1 ){
// //     op[i] *=7;
// // }
// // console.log(op);
// // let y = [1,2,3,4,5,6,7,8,9,10];
// // for (let number of y){
// //     number *=7;
// //     console.log(number);
// // }
// // console.log(y);

// // for( let i = 1; i <=10; i+=1){
// //     console.log(`${i} * 7 =`, i*7);
// // }

// // let m =[1,2,3,4,5,6,7,8,9,10];
// // for (let i =0; i < m.length; i+=1){
// //     // if( m[i] === 7){
// //     //     continue
// //     // }
// //     // console.log(m[i]);
// //     if(m[i] === 7){
// //         break
// //     }
// //     console.log(m[i]);
// // }


// // let n = Number(prompt('Type ur number'));    
// // for (let i=0; ;i +=1){
// //     if( i >= n){
// //         break;
// //     }   
// //      console.log(i);
// // }

let n = Number(prompt('Type first number'));
let userNumber = Number(prompt('Type second number'));
while( userNumber < n){
    console.log( userNumber);
    userNumber++; 
    if( userNumber >= n){
        break
    }
} 



// // let numbers = 1;
// // while (numbers <= 20){
// //     numbers++;
// //     if((numbers%3) === 0){
// //         continue;
// //     }
// //     console.log(numbers)
// // }