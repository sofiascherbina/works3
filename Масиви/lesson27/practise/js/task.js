// let temperatures = [18, 14, 12, 21, 17, 29];
// console.log(Math.max(...temperatures));

// function findMaxNumber(arr){
//     let number = arr[0];
//     for(let i = 1; i < arr.length; i++){
//         if(arr[i] > number){
//             number = arr[i];
//         }
//     }
//     return number
// }
// console.log(findMaxNumber(temperatures));

let numbers = [18, 14, 12, 21, 17, 29, 36, 48];

function showNumbers(arr){
    let newArr = [];
    for(let i = 1; i < arr.length; i++){
        if(arr[i] % 2 === 0){
            newArr.push(arr[i])
        }
} 
return newArr
}
console.log(showNumbers(numbers));


const array1 = [1, 2, 3, 44, 4, 5, 6, 6, 7];
const array2 = [5,12, 3, 14, 4, 5, 6, 6, 7];

let arr=[];
function filterArray(arr1 , arr2){
let newArr = [].concat(arr1,arr2);
    for(let i = 0; i < newArr.length; i++){
        if(!arr.includes(newArr[i])){
            arr.push(newArr[i])
        }
    }
    return arr
}
console.log(filterArray(array1 , array2));


const array = [1, 27, 3, 44, 4, 5, 16, 6, 7];
let a = 1;
let b = 16;
let newArr = [];
 function filterRange(arr, a, b){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > a && arr[i] < b){
            newArr.push(arr[i])
        }
    }
    return newArr
 }
 console.log( filterRange(array,a,b));
 


 const users = [
    { name: 'John',  surname: ' Doe', id:437 },
    { name: 'Jane', surname: ' Lee', id:398  },
    { name: 'Mike', surname: ' Watson', id:639 },
    { name: 'Emily', surname: ' Brad', id:341 }
]

function showInfo(arr){
    let newUsers = [
    { },
    { },
    { },
    { }
    ]
    for( let i = 0; i < arr.length; i++ ){
        for( let e = 0; e < newUsers.length; e++ ){
            newUsers[e].fullName = arr[i].name + arr[i].surname;
            newUsers[e].id = arr[i].id
        }
    }
    return newUsers
}
console.log(showInfo(users));
