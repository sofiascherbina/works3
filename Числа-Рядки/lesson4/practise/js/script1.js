// let result;
// result = 5 +'5';
// console.log(result); // '55'
// console.log(typeof result); // string

// result =5 + '5' + 5;
// console.log(result); // '555'
// console.log(typeof result); // string

// result =5 + 5 + '5';
// console.log(result); // '105';
// console.log(typeof result); // string



// console.log(message.lenght);
// console.log(message.toLowerCase());
// console.log(message.toUpperCase());
// console.log(message.indexOf()); // якщо не існує то -1
// console.log(message.includes());
// console.log(message.startWith());
// console.log(message.endWith());



// let userName = prompt("please enter name");
// let surname = prompt("please enter surname");
// console.log(userName + ' ' + surname);

let text = prompt("please enter text");
let word = prompt("please enter word");
let include = text.includes(word);
let index = text.indexOf(word);
let upper = text.toUpperCase();
let lower = text.toLowerCase();
let x = text.trim();
alert(include);
alert(index);
alert(upper);
alert(lower);
alert(x);
console.log(include);
console.log(index);
console.log(upper);
console.log(lower);
console.log(x);
