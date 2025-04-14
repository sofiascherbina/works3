// let showText = message => alert(`${message}`);
// function ShowMessage (callback){
//     let text = 'Hello world';
//     callback(text);
// }
// document.getElementById('btn').onclick = () => ShowMessage(showText)



// let randomNumber = Math.floor(Math.random() * 99) + 1;

// let isEven = (number) => number === randomNumber;
// function checkNumber (userNum, callback){
//     do{
//         if( callback( userNum)){
//             alert("you guessed");
//         break;   
//         }
//         else{
//             alert("nice try");
//         break;
//         }
//     }
// while(userNum !== generNum)
// }
// document.getElementById('btn').onclick = function() {
//     let numberValue = Number(document.getElementById('guessField').value);
//    checkNumber(numberValue, isEven);
// }



// const arr = [1, 2, 3, 4, 5];
// const squareCallback = number => number*number;

// const applyCallbackToEachElement = (arr, callback) => {
//     let newArray=[];
//     for(let i = 0; i < arr.length; i++){
//         newArray.push(callback(arr[i]));
//     }
//     return newArray;
// }


// const result = applyCallbackToEachElement(arr, squareCallback);
// console.log(result); 


// const showDiscountedPrice = (result) => console.log(result);

// const calculateDiscountedPrice = (price, discount, callback) => {
//     let act = price - discount;
//     callback(act);
// };
// calculateDiscountedPrice(100, 10, showDiscountedPrice); 