// const user = {
//   name10: 'John',
//   age: 30,
//   email: 'john@example.com'
// }
// let {name10, age, email} = user;
// console.log(user);

// const car = {
//     make: 'Toyota',
//     model: 'Camry',
//     year1: 2020,
//     features: ['power windows', 'rear camera', 'navigation'],
//     safety: {
//       airbags: true,
//       antilock_brakes: true,
//       stability_control: true
//     }
// }
// let {make, model, year1, features:[f1,f2,f3], safety:{airbags,antilock_brakes,stability_control}} = car;
// console.log(car);

// const movie = {
//     title1: 'The Shawshank Redemption',
//     director: {
//       name: 'Frank Darabont',
//       nationality: 'American'
//     },
//     actors: ['Tim Robbins', 'Morgan Freeman'],
//     release_year: 1994,
//     ratings: {
//       imdb: 9.3,
//       rotten_tomatoes: 90
//     }
//   }
// let {title1, director:{name,nationality}, actors:[ac1,ac2],release_year,ratings:{imdb,rotten_tomatoes} } = movie;
// console.log(movie);



// const books = {
//   count: 3,
//   list: [
//     {
//       title1: 'The Great Gatsby',
//       author: 'F. Scott Fitzgerald',
//       year: 1925
//     },
//     {
//       title2: 'To Kill a Mockingbird',
//       author: 'Harper Lee',
//       year: 1960
//     },
//     {
//       title3: '1984',
//       author: 'George Orwell',
//       year: 1949
//     }
//   ]
// }
// let {count, list:[ l1, l2, l3]} = books;
// console.log(books);


// let user={
//     name:'Miku',
//     surname:'Nakano',
//     age:20
// }
// function showInfo({name, surname, age}){
//     // let{name, surname, age} = object;
//     console.log(`Мене звати ${name} ${surname} і мені ${age} років `);
    
// }
// showInfo(user);