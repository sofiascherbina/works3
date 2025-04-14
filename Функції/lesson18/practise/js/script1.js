// let withDrawAccount = function(amount, balance){
//     if(amount === 0){
//         console.log('enter amount more than 0')
//         return
//     }
//     else if(amount > balance){
//         console.log('enter sum that does not exceed your balance')
//         return
//     }
//     else{
//         console.log('here are your money')
//         return
//     }
// }
// let result = withDrawAccount(340, 500);
// console.log(result);

// const sum = function(x,y){
//     return x + y
// }
// console.log(sum(2,3));


// function name(a,b,c){
//   return a + b + c;
// }

// function declaration
// 1. оголошення за допомогою ключового слова function
// 2. піднімається (всплиття) і доступне до оголошення
// 3. доступна глобально або в своїй області видимості
// 4. не має анонімності, завжди має імя
// console.log(name());

// function name() {
//     console.log('function declaration');
    
// }

// function expression
// 1. присвоюємо до змінної
// 2. піднімається лише змінна
// 3. доступна лише після оголошення
// 4. може бути анонімна або іменована

// console.log(name2());

// const name2 = function ()  {
//     console.log('function expression');
    
// }


// hoisting


// function declaration
// function funcDeclation() {
//     return 'function declaration';
    
// }

// func expression
// const funcExpression = function ()  {
//     return 'function expression';
    
// }
// console.log(typeof funcDeclation);
// console.log(typeof funcExpression);
// console.log(funcDeclation());
// console.log(funcExpression());



// const funcExpression = function ()  {
//    let total = 0;
//     for ( elements of arguments){
//         total+= elements
//     }
//     return total
// }
// console.log(funcExpression(1, 3, 2, 5, 4, 56,89,7));

