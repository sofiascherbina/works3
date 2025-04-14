// function Sum(a,b,c){
//     return a + b + c;
// }
// let num = sum(1,2,3);
// console.log(num);

// const sum =(a,b,c)=>  a + b + c;
// let num2 = sum(1,2,3);
// console.log(num2);






//additional tasks

// let array =[1,2,3,55,6,80,9];

// let multiplicate = (num) => num*3

// function modifyArray(arr, callback){
//     let newArray=[];
//     for(let i = 0; i < arr.length; i++){
//         newArray.push(callback(array[i]));
//     }
//     return newArray;
// }
// console.log(modifyArray(array,multiplicate));

// const words = ['we', 'cant', 'talk', 'about', 'it'];

// let isEven = (word) => word.length < 3;

// function filterArray(arr, callback){
//     let newArray = [];
//     for (let i = 0; i < arr.length; i++){
//         if(callback(arr[i])){
//             newArray.push(arr[i].padEnd(3,'*'));
//         }
//         else{
//             newArray.push(arr[i])
//         }
//     }
//     return newArray;
// }
// console.log(filterArray(words,isEven));


// const tasks = [
//     { title: "Do homework", completed: true, priority: 3 },
//     { title: "Clean room", completed: false, priority: 2 },
//     { title: "Buy milk", completed: true, priority: 1 },
//     { title: "Go to gym", completed: false, priority: 4 },
// ];
// let isEven = (task) => task.completed;

// function filterTasks(arr, callback){
//     let newArray=[];
//     for(let elements of arr){
//         if(callback(elements)){
//             newArray.push(elements);
//         }
//     }
//     return newArray;
// }
// console.log(filterTasks(tasks,  isEven));



// let arr = [2,3,4,5,6,7,8,99];

// let findPow = (num) => Math.pow(num,3);

// function modifyNumbers(arr, callback){
//     let newArray =[];
//     for(let i = 0; i < arr.length; i++){
//         newArray.push(callback(arr[i]))
//     }
//     return newArray
// }
// console.log((modifyNumbers(arr, findPow)));



// let arr = [2,3,4,5,6,7,8,99];

// let isEven = (num) => num%2 === 0;

// function filterArray (arr,callback){
//     let newArray =[];
//     for(let i = 0; i < arr.length; i++){
//         if(callback(arr[i])){
//             newArray.push(arr[i]);
//         }
//     }
//     newArray.shift();
//     newArray.pop();
//     return newArray;
// }
// console.log(filterArray(arr,isEven));


// const users = [
//     { name: "Alice", age: 17 },
//     { name: "Bob", age: 22 },
//     { name: "Charlie", age: 15 },
//     { name: "David", age: 19 },
// ];

// let filter = (user) => user.age > 18;
// let key = (user) => ({...user,isAdult:true});
// function processUser (arr, filterCallback, keyCallback){
//     let newArray = [];
//     for(let elements of arr){
//         if(filterCallback(elements)){
//             newArray.push(keyCallback(elements))
//         }
//     }
//     return newArray;
// }
// console.log(processUser(users, filter, key));

