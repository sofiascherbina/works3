// let me= {
//     name:'sofia',
//     hair: 'long',
//     eyes: 'blue',
//     height:'tall enough'
// }
// console.log(me);

// let person = {
//     name: 'miku',
//     age: '19',
//     gender:'female',
//     showInformation (){
//         console.log(`name: ${this.name}, age: ${this.age}, gender: ${this. gender}`)
//     }
// }
// console.log(person.showInformation());

let students = [
    { name: "Сашко", age: 15, gender: "male", grade: 12 },
    { name: "Miku", age: 19, gender: "female", grade: 10 },
    { name: "Ichigo", age: 17, gender: "male", grade: 8 },
]

let sum = 0;
function showGrade(arr){
    // let newArray =[];
    for(let element of arr){
        sum+=element.grade;
    }
    return sum/ arr.length;
}
console.log(showGrade(students));
