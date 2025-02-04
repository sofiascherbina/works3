// function getAverage(arr){
//     const sum = arr.reduce((acc, num) => acc + num, 0);
//     return sum / arr.length
// }
// console.log(getAverage([1,2,3]));

// let array = [1, 3, 2, 5, 4];
// let max = findMaxNumber(array);
// console.log(max);

function findMaxNumber(arr){
    let number = arr[0];
    for(let i = 1; i < arr.length; i++){
        if(arr[i] > number){
            number = arr[i];
        }
    }
    return number
}
let array = [1, 3, 2, 5, 4, 56,89,7];
let max =  findMaxNumber(array);
console.log(max);