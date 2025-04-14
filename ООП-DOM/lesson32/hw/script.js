// function Account({login, email}){
//   this.login = login;
//   this.emai = email;
//   Account.prototype.getInfo = function(){
//     console.log(`login: ${this.login}, email:${this.emai}`)
//   }
// }

// console.log(Account.prototype.getInfo); // function

// const mango = new Account({
//  login: 'Mangozedog',
//  email: 'mango@dog.woof',
// });

// mango.getInfo(); // Login: Mangozedog, Email: mango@dog.woof

// const poly = new Account({
//  login: 'Poly',
//  email: 'poly@mail.com',
// });

// poly.getInfo(); // Login: Poly, Email: poly@mail.com


// class User {
//   constructor({name, age, followers}){
//     this.name = name;
//     this.age = age;
//     this.followers = followers;
//   }
//   getInfo(){
//     console.log(`User ${this.name} is ${this.age} years old and has ${this.followers} followers`);
    
//   }
// }
// const mango = new User({
//   name: 'Mango',
//   age: 2,
//   followers: 20,
//  });
 
//  mango.getInfo(); // User Mango is 2 years old and has 20 followers
 
//  const poly = new User({
//   name: 'Poly',
//   age: 3,
//   followers: 17,
//  });
 
//  poly.getInfo(); // User Poly is 3 years old and has 17 followers




// class Storage{
//   items = []
//   constructor(items){
//   this.items = items
//   }
//   getItems(){
//     console.log(this.items);
    
//   }
//   addItem(item){
//    return this.items.push(item)
//   }
//   removeItem(item){
//     if(this.items.includes(item)){
//       this.items.splice(this.items.indexOf(item),1)
//     }
//     return this.items
//   }
// }

// const storage = new Storage([
//   'Нанітоіди',
//   'Пролонгер',
//   'Залізні жупи',
//   'Антигравітатор',
//  ]);
 
//  const items = storage.getItems();
//  console.log(items); // [ "Нанітоіди", "Пролонгер", "Залізні жупи", "Антигравітатор" ]
 
//  storage.addItem('Дроїд');
//  console.log(storage.items); // [ "Нанітоіди", "Пролонгер", "Залізні жупи", "Антигравітатор", "Дроїд" ]
 
//  storage.removeItem('Пролонгер');
//  console.log(storage.items); // [ "Нанітоіди", "Залізні жупи", "Антигравітатор", "Дроїд" ]


// class StringBuilder{
//   #value;
//   constructor(value){
//   this.#value = value;
//   }
//   get value(){
//     return this.#value;
//   }
//   append(str){
//     return this.#value += str;
//   }
//   prepend(str){
//     return this.#value = str + this.#value;
//   }
//   pad(str){
//     return this.#value = str + this.#value + str
//   }
// }
// const builder = new StringBuilder('.');

// builder.append('^');
// console.log(builder.value); // '.^'

// builder.prepend('^');
// console.log(builder.value); // '^.^'

// builder.pad('=');
// console.log(builder.value); // '=^.^='


class Car {
  #maxSpeed; 
  #speed ; 
  #isOn;
  #distance;
  #price;
  static getSpecs(car){
    console.log(`maxSpeed: ${car.#maxSpeed}, speed: ${car.#speed}, isOn: ${car.#isOn}, distance: ${car.#distance}, price: ${car.#price},`);
    
  }
  /*
   * Додай статичний метод `getSpecs(car)`,
   * який приймає об'єкт-машину як параметр і виводить
   * в консоль значення властивостей maxSpeed, speed, isOn, distance и price.
   */
 
  /*
   * Конструктор отримує об'єкт налаштувань.
   *
   * Додай властивості майбутнього екземпляра класу:
   * speed - поточна швидкість, початкова 0
   * price - ціна автомобіля
   * maxSpeed - максимальна швидкість
   * isOn - заведений автомобіль, значення true або false. Спочатку false
   * distance - загальний кілометраж, спочатку 0
   */
  constructor({maxSpeed, price}){
    this.#maxSpeed = maxSpeed,
     this.#speed = 0, 
     this.#isOn = false, 
     this.#distance = 0, 
     this.#price = price;
  }
  get price(){
   return this.#price;
  }

  set price(newPrice){
    this.#price = newPrice;
  }
  /*
   * Додай геттер і сеттер для властивості price,
   * який буде працювати з властивістю ціни автомобіля.
   */
 
  /*
   * Додай код для того, щоб завести автомобіль
   * Записує у властивість isOn значення true
   */
  turnOn() {
    this.#isOn = true;
  }
 
  /*
   * Додай код для того, щоб заглушити автомобіль
   * Записує у властивість isOn значення false,
   * і скидає поточну швидкість в 0
   */
  turnOff() {
    this.#isOn = false;
    this.#speed = 0;
  }
 
  /*
   * Додає до властивості speed отримане значення,
   * за умови, що результуюча швидкість
   * не більше, ніж значення властивості maxSpeed
   */
  accelerate(value) {
    if(this.#speed + value <= this.#maxSpeed){
      this.#speed += value
    }
  }
 
  /*
   * Забирає від властивості speed отримане значення,
   * за умови, що результуюча швидкість не менше нуля
   */
  decelerate(value) {
    if(this.#speed - value >= 0){
    this.#speed -= value;
    }
  }
 
  /*
   * Додає в поле distance кілометраж (hours * speed),
   * але тільки в тому випадку, якщо машина заведена!
   */
  drive(hours) {
    if(this.#isOn){
     this.#distance +=this.#speed * hours
    }
  }
 }
 
 const mustang = new Car({ maxSpeed: 200, price: 2000 });
 
 mustang.turnOn();
 mustang.accelerate(50);
 mustang.drive(2);
 
 Car.getSpecs(mustang);
 // maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000
 
 mustang.decelerate(20);
 mustang.drive(1);
 mustang.turnOff();
 
 Car.getSpecs(mustang);
 // maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000
 
 console.log(mustang.price); // 2000
 mustang.price = 4000;
 console.log(mustang.price); // 4000