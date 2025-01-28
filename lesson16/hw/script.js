// const friends = ['Mango', 'Ploy', 'Kiwi', 'Ajax'];
// for( let i = 0; i < friends.length; i++){
//     console.log(friends[i]);
// } 
// let string = friends.join(',');
// console.log(  string );



const cards = [
    'Карточка-1',
    'Карточка-2',
    'Карточка-3',
    'Карточка-4',
    'Карточка-5',
];
const cardToRemove = cards.splice(2,1);
const cardToInsert = cards.splice(4,0,'Карточка-6');
// let cardToAdd = cards.push('Карточка-6');
const cardToUpdate = cards.splice(2,1,'Карточка-fourth');
console.log(cards);