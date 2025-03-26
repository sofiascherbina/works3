// class  Rectangle{
//     constructor( width, height){
//       this.width = width;
//       this.height = height;
//     }
//     getArea(){
//       return this.width * this.height;
//     }
//   }
//   let rectangle1 = new  Rectangle(10,5)
//   console.log(rectangle1.getArea());

//  class Calculator {
//    // constructor(){
//    //   this.a = parseInt(a);
//    //   this.b = parseInt(b);
//    // }
//    add(a,b){
//      return a + b
//    }; 
//    subtract(a,b){
//      return a - b
//    };
//     multiply(a,b){
//      return a * b
//    };
//     divide(a,b){
//      return a / b
//     };
//  }
//  const calculator = new Calculator();
//     console.log(calculator.add(2, 3)); 
//     console.log(calculator.subtract(5, 2)); 
//     console.log(calculator.multiply(2, 4));
//     console.log(calculator.divide(10, 2)); 
//      console.log(calculator.divide(10, 0));



//   class Shape{
//     constructor(color, draw ){
//         this.color = color;
//         this.draw = draw;
//     }
//   }
//   class Circle extends Shape{
//     constructor(color, radius){
//         super(color) 
//         this.radius =  radius;
//     }
//   }
// const myCircle = new Circle('red', 5);
// myCircle.draw(); 
// console.log(myCircle.color); 



class Animal {
    constructor(name){
      this.name = name;
    }
  }
  class Dog extends Animal {
    constructor(name, breed){
      super(name);
      this.breed = breed;
    }
  }
  
  let myDog = new Dog('Buddy','Labrador Retriever');
  console.log(myDog); 