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