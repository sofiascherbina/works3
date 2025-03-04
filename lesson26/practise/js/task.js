let user={
    name:'Miku',
    surname:'Nakano',
    grades:[10,11,9]
}
let total=0;
function showGrade(student){
    let{name,surname, grades} = student;
    for(let i= 0; i < grades.length; i++){
        total+=grades[i]
    }
    return total/grades.length
}
console.log(showGrade(user));


let objects = [
    {name:'apple', price: 20, number:5},
    {name: 'kiwi', price: 45, number:2},
    {name: 'peach', price: 30, number:7}
];
function totalPrice (products){
    let total;
    for (let el of products){
        let{name, price, number} = el;
        total =  price*number
    }
    total+=total
    console.log(total+=total);
    
}
totalPrice ( objects)


let users ={
    emails : [
        prompt('enter ur email'),
        prompt('enter ur email'),
        prompt('enter ur email')
    ]
}
function showFirst(object){
    let{ emails:[m1,m2,...rest]} = object;
    return console.log(m1);
    
}
showFirst( users)




let members={
    users:[
        {name:'miku', age:20},
        {name:'viola', age:16},
        {name:'dean', age:19},
        {name:'sam', age:22},
    ]
}
function showAdults(userMember){
 let aduls= [];
    for(let member of userMember.users){
        let {name , age} = member;
        if(age >= 18){
            aduls.push(name)
            
        }
    }
    return console.log(`${aduls.join(', ')} are adults`);
}
showAdults(members)