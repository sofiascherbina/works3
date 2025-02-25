// let user ={
//     mood:prompt('enter ur mood'),
//     hobby:prompt('enter ur hobby'),
//     premium:prompt('enter ur premium status'),
// }
// let keys = Object.keys(user);

// for(let values of keys){
//     console.log((`mood: ${user.mood}, hobby: ${user.hobby}, premium: ${user.premium}`));
// }

// let values = Object.values(user);
//  function countProps(obj){
//     console.log(`number of values : ${obj.length}`);
    
//  }
//  countProps( values )


// let employees = {
//     miku: 40,
//     nami:25,
//     becca:50
// }
// let keys = Object.keys(employees);
// let values = Object.values(employees);

// function indBestEmployee(employee){ 
// let bestEm = values[0];
// for(let key of employee ){
//     if( bestEm < employees[key]){
//         console.log(`the best employee is : ${key}`);
// }
// }}
// indBestEmployee(keys)


// let employees = {
//     miku: 40000,
//     nami:25000,
//     becca:50000
// }
// let values = Object.values(employees);
// function countTotalSalary(employees){
//     let sum = 0;
//     for(let i=0; i < employees.length; i++){
//         sum+=employees[i]
//     }
//     return console.log(sum);
    
// }
// countTotalSalary(values)

// let fruits = [      
//     { name: 'apple', price: 50},
//     { name: 'grape', price: 70},
//     { name: 'lemon', price: 60},
//     { name: 'strawberry', price: 110},
// ]
// function getAllPropValues(arr) {
//     let values = [];
//     for (let el of arr) { 
//         values.push(el.price); 
//     }
//     console.log(values); 
// }
// getAllPropValues( fruits)


let fruits = [      
    { name: 'apple', price: 50, count:3},
    { name: 'grape', price: 70, count:14},
    { name: 'lemon', price: 60, count:7},
    { name: 'strawberry', price: 110, count:5},
]

function calculateTotalPrice(allProdcuts){
    let total;
    for (let el of allProdcuts){
        total =  el.price* el.count
        console.log(`${el.name} price is : ${total}`);
    }
}
calculateTotalPrice(fruits)