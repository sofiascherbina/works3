// let num =[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
// for (let i = 0; i < num.length; i++){
//     if( (num[i]%2 === 0 )){
//         console.log( num[i]);
//         console.log( typeof num[i]);
//         break;
//     }
// }

// let num =[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
// for (let i = 0; i < num.length; i++){
//     if( (num[i]%3 === 0 )){
//         continue;
//     }
//     console.log(num[i]);
// }


// for (let i = 2; i < 50; i++){
//     if( (Math.sqrt(i)) % 1 === 0){
//        console.log(i); 
//        break;
//     }
   
// }


// let matrix =[
//     [3,5,1],
//     [7,2,8],
//     [4,9,6],
// ]
// let result;
// for(let i = 0; i < matrix.length; i++){
//     for(let j = 0; j < matrix[i].length; j++){
//         result = Math.max(...matrix[i]);
//     }
// }
// console.log(`Максимальне значення : ${Math.max(result)}`);



let matrix =[
    [3,5,1],
    [7,2,8],
    [4,9,6],
]    
let num = matrix[0][0];
for(let i = 0; i < matrix.length; i++){
    for(let j = 0; j < matrix[i].length; j++){ 
        // j++;   
    if(matrix[i][j] > num){
        num = matrix[i][j] ;  
        // console.log(num);  
        
    }    
    }
}
console.log(`Максимальне значення : ${num}`);