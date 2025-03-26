class Person {
  constructor(firstName,lastName){
    this.firstName = firstName;
    this.lastName =  lastName;
  }
  getFullName(){
  console.log(`${this.firstName} ${ this.lastName}`);
    
  }
}
let person = new Person('sofia', 'scherbina')
console.log( person.getFullName());

class  Rectangle{
  constructor( width, height){
    this.width = parseInt(width);
    this.height = parseInt(height);
  }
  getArea(){
    return this.width * this.height;
  }
}
let figure  = new  Rectangle(5,7)
console.log(figure.getArea());

class Calculator {
  // constructor(){
  //   this.a = parseInt(a);
  //   this.b = parseInt(b);
  // }
  add(a,b){
    return a + b
  }; 
  subtract(a,b){
    return a - b
  };
   multiply(a,b){
    return a * b
  };
   divide(a,b){
    return a / b
   };
}
const calculator = new Calculator();
   console.log(calculator.add(2, 3)); // 5
   console.log(calculator.subtract(5, 2)); // 3
   console.log(calculator.multiply(2, 4)); // 8
   console.log(calculator.divide(10, 2)); // 5
   console.log(calculator.divide(10, 0)); //


class Animal {
  constructor(name){
    this.name = name;
  }
  speak(){
    console.log(`${this.name} : woof`);
    
  }
}
class Dog extends Animal {
  constructor(name, breed){
    super(name);
    this.breed = breed;
  }
  speak(){
    console.log(`${this.name} : Bark!`);
    
  }
}

let myDog = new Dog('Buddy','Labrador Retriever');
console.log(myDog);
console.log(myDog.speak());

