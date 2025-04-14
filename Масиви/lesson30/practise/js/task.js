// let fruits = ['kiwi', 'orange', 'banana','apple'];
// fruits.sort(function(a,b){
//     return a.localeCompare(b);
// });
// console.log(fruits);


// let array = [1, 5, 8, 3, 6, 2, 4];
// array.sort(function(a,b){
//     return a - b;
// });
// console.log(array);



// const arr = [
//   { name: 'John', age: 32 },
//   { name: 'Jane', age: 26 },
//   { name: 'Mike', age: 42 },
//   { name: 'Emily', age: 29 }
// ];
// let sortedArr = arr.sort(function(a,b){
//   return a.name.localeCompare(b.name);
// })
// console.log(sortedArr);

// const products = [
//   { name: 'Product 1', price: 100, quantity: 5 },
//   { name: 'Product 2', price: 50, quantity: 10 },
//   { name: 'Product 3', price: 200, quantity: 2 },
//   { name: 'Product 4', price: 50, quantity: 5 }
// ];
// let sortedProducts = products.sort(function(a,b){
//   if(a.price === b.price){
//     return a.quantity - b.quantity
//   }
//   else{
//     return b.price - a.price
//   }
// })
// console.log(products);

// const events = [
//   { name: 'Event 1', date: '10/02/2023' },
//   { name: 'Event 2', date: '15/03/2023' },
//   { name: 'Event 3', date: '01/01/2023' },
//   { name: 'Event 4', date: '01/02/2023' }
// ];
// // let newDate = 
// let sortedEvents = events.sort(function(a,b){

//   let [aDay, aMonth, aYear] = a.date.split('/');
//   let [bDay, bMonth, bYear] = b.date.split('/');

//   if(aYear === bYear){
//     if( aMonth === bMonth){
//       return parseInt(aDay) - parseInt(bDay)
//     }
//     else{
//       return parseInt(aMonth) - parseInt(bMonth)
//     }
//   }
//   else{
//     return parseInt(aYear) - parseInt(bYear)
//   }
  
//   // a.date.split(' ') - b.date.split(' ')
// }) 
// console.log( events);



// function sortedNumber(numbers) {
//   let newArr = numbers.split('').map(Number);
//   newArr.sort(function(a,b){
//     return b-a;
//   })
//   console.log(newArr.join(""));
// } sortedNumber('42145')


