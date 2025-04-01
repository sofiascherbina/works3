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
//    //   this.a = a;
//    //   this.b = b;
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
//     constructor(color){
//         this.color = color;
//     }
//     draw(){
//         console.log('Drawing sth');
        
//     }
//   }
//   class Circle extends Shape{
//     constructor(color, radius){
//         super(color) 
//         this.radius =  radius;
//     }
//     draw(){
//         console.log(`Drawing a circle with radius ${this.radius}`);
        
//     }
//   }
// const myCircle = new Circle('red', 5);
// myCircle.draw(); 
// console.log(myCircle.color); 


// class Animal {
//     constructor(name){
//       this.name = name;
//     }
//   }
//   class Dog extends Animal {
//     constructor(name, breed){
//       super(name);
//       this.breed = breed;
//     }
//   }
  
//   let myDog = new Dog('Buddy','Labrador Retriever');
//   console.log(myDog); 


class Book{
    constructor(title, author, price){
        this.title = title;
        this.author = author;
        this.price = price;
    }
}

class Bookstore {
    constructor(){
        this.books = [];
    }
    addBook(book){
        this.books.push(book)
    }
    listBooks(){
        console.log(this.books);
        
    }
    removeBook(bookTitle){
       this.books = this.books.filter(el => el.title !== bookTitle);
        
    }
    // listBooks(){
    //     console.log(myBookstore.removeBook(bookTitle));
        
    // }
}

const myBookstore = new Bookstore();

const book1 = new Book('The Catcher in the Rye', 'J.D. Salinger', 10.99);
const book2 = new Book('To Kill a Mockingbird', 'Harper Lee', 12.50);
const book3 = new Book('1984', 'George Orwell', 15.00);

myBookstore.addBook(book1);
myBookstore.addBook(book2);
myBookstore.addBook(book3);

myBookstore.listBooks(); // Виведе список усіх книг у магазині

myBookstore.removeBook('1984'); // Видалить книгу '1984'

myBookstore.listBooks(); // Виведе оновлений список книг