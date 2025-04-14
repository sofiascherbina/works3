const users = [

  {

    name: 'Moore Hensley',

    friends: ['Sharron Pace'],

    balance: 2811,

    skills: ['ipsum', 'lorem'],

  },

  {

    name: 'Sharlene Bush',

    friends: ['Briana Decker', 'Sharron Pace'],

    balance: 3821,

    skills: ['tempor', 'mollit', 'commodo', 'veniam', 'laborum'],

  },

  {


    name: 'Ross Vazquez',

    friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],

    balance: 3793,

    skills: ['nulla', 'anim', 'proident', 'ipsum', 'elit'],
  },

  {

    name: 'Elma Head',

    friends: ['Goldie Gentry', 'Aisha Tran'],


    balance: 2278,

    skills: ['adipisicing', 'irure', 'velit'],

  },

  {

    name: 'Carey Barr',

    friends: ['Jordan Sampson', 'Eddie Strong'],

    balance: 3951,

    skills: ['ex', 'culpa', 'nostrud'],


  },

  {

    name: 'Blackburn Dotson',

    friends: ['Jacklyn Lucas', 'Linda Chapman'],

    balance: 1498,

    skills: ['non', 'amet', 'ipsum'],

  },

  {
    name: 'Sheree Anthony',

    friends: ['Goldie Gentry', 'Briana Decker'],

    balance: 2764,

    skills: ['lorem', 'veniam', 'culpa'],

  },

];

const calculateTotalBalance = users.reduce((acc, element) => {
    return acc + element.balance
}, 0)
console.log(calculateTotalBalance);

const getUsersWithFriend = users.reduce((acc, element) => {
  element.friends.forEach((member) => {
  if(member === 'Briana Decker' || member === 'Goldie Gentry'){
    if(!acc.includes(element.name)){
      acc.push(element.name)
    }
  }
})
return acc
}, [])
console.log(getUsersWithFriend);


const getNamesSortedByFriendsCount = users.reduce((acc, element) => {
  users.sort(function(a,b){
    return a.friends.length - b.friends.length 
  })
  acc.push(element.name);
  return acc
}, []);
console.log(getNamesSortedByFriendsCount);


const getSortedUniqueSkills = users.reduce((acc, element) => {
  element.skills.forEach((el) =>{
    if(!acc.includes(el)){
      acc.push(el)
    }
  })

  acc.sort(function(a,b){
    return a.localeCompare(b)
  })
  return acc
}, []);
console.log(getSortedUniqueSkills);
