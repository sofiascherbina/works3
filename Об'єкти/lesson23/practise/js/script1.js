let lemon = {
    name: 'lemon', 
    quality: 'fresh',
    price: 60, 
}
// for(let key in lemon){
//     console.log(lemon[key])
// }
// let keys = Object.keys(lemon);
// let values = Object.values(lemon);
// let entries = Object.entries(lemon);
// console.log(keys,  values, entries );

// for (let key of keys){
//     console.log(lemon[key]);
    
// }
// for(let entry of entries){
//     let key = entry[0]
//     let value = entry[1]
//     console.log(`${key}: ${value}`);
    
// } 

// let cart = {
//     grape:3,
//     apple:2,
//     lemon:1,
//     strawberry:4
// }
// let values = Object.values(cart);
// let total = 0;
// for (let value of values){
//     total += value;
// }
// console.log(total);




// const friends = [
//     { name: 'Mango', online: false },
//     { name: 'Kiwi', online: true },
//     { name: 'Poly', online: false },
//     { name: 'Ajax', online: false },
//   ];


//   function getAllNames(){
//         let names = friends.map(member => member.name)
//         return names
// }
// console.log(getAllNames());

// let values = Object.values(friends);

// function getOnlineFriends(){
//     return Object.entries(friends).filter(entry => {let friend = entry[1]; return friend.online}).map(entry => {let friend = entry[1]; return friend.name})
// }
// console.log(`ofline: ${ getOnlineFriends()}`);

// function getOfflineFriends(){
//     return Object.entries(friends).filter(entry =>{let friend = entry[1]; return !friend.online}).map(entry =>{let friend = entry[1]; return friend.name})
// }
// console.log(`ofline: ${getOfflineFriends()}`);
