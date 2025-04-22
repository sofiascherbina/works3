// let members = document.querySelectorAll('.members-el');
// members.forEach(member => {
//     let votes = member.querySelector('.votes');
//     let button = member.querySelector('.btn');
//     let membersVotes = parseInt(member.dataset.votes);
//     function henglerButtonClick (){
        
//         membersVotes+=1 ;
//         member.dataset.votes = membersVotes;
//         votes.textContent = membersVotes;
//     }
//     button.addEventListener('click', henglerButtonClick);
     
// });
// let buttonResult = document.querySelector('.result-btn');
// let winner = document.querySelector('.winner');


// function henglerbuttonResultClick(){
//     let votesArr = [...members].map(el => parseInt(el.dataset.votes));
//     let maxVote = Math.max(...votesArr);
//     let winnerMember = [...members].find(el => parseInt(el.dataset.votes) === maxVote)
    
//     winner.textContent = ` the winner is ${winnerMember.getAttribute('name')} and her votes is ${maxVote}`;
// }

// buttonResult.addEventListener('click',  henglerbuttonResultClick)


// let products = document.querySelector('#product-list').children;
// let button = document.querySelector('#calc-total');
// let text = document.querySelector('#total');
// function henglerButtonClick(){
//     let price = [...products].reduce((acc, el) => acc + parseInt(el.dataset.price), 0);
//     console.log(price);
//     text.textContent =`total price is ${price}`;
// }

// button.addEventListener('click', henglerButtonClick)



// const users = [
//     { name: 'Оля', age: 17 },
//     { name: 'Максим', age: 21 },
//     { name: 'Іра', age: 19 },
//     { name: 'Саша', age: 15 }
//   ];


// let list = document.getElementById('adults-list');
// let btn = document.getElementById('show-adults');

// function henglerButtonClick(){
//     let adults = users.filter(user => user.age >= 18);
//     adults.forEach(member => {
//         let adult = document.createElement('li');
//         adult.textContent = member.name;
//         list.prepend(adult);
//     })
// }
// btn.addEventListener('click', henglerButtonClick)