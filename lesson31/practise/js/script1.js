// class Animal {
//   constructor(name){
//     this.name = name;
//   }
//   speak(){
//     console.log(`${this.name} каже : привіт`);
//   }
// } 

// class Dog extends Animal {
//   speak(){
//     console.log(`${this.name} каже : гав`);
//   }
// }
// const myAnimal = new Animal('тваринка');
// myAnimal.speak()

// const myDog = new Dog('bobik');
// myDog.speak()





// let animal = {
//     legs : 4
// }
// const dog = Object.create(animal)
// dog.name = 'bobik';
// console.log(dog);

// console.log(animal.isPrototypeOf(dog));
// console.log(dog.isPrototypeOf(animal));
// console.log(dog.legs);

// console.log(dog.hasOwnProperty('leg'));
// console.log(dog.hasOwnProperty('name'));
// let dogkeys = Object.keys(dog);
// console.log(dogkeys);
 


// class User {
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }
// }
// const artem = new User('Artem', 16);
// console.log(artem);
// const mykita = new User('Mykita', 13);
// console.log(mykita);