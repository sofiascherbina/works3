// let weather = {
//     temperature,
//     humidity: '79%',
//     windSpeed:'4 km/h',
//     checkTemperature(){
//         this.temperature = document.getElementById('temperature').value
//         if(this.temperature < 0){
//           console.log('температура нижче 0 градусів Цельсія');
//             return
//         }
//         console.log('температура вище 0 градусів Цельсія'); 
//         console.log(`temperature: ${this.temperature}, humidity: ${this.humidity}, windSpeed:${this.windSpeed}`);
        
//     }  
// }
// document.getElementById('btn').onclick = () => console.log( weather.checkTemperature());


// let user = {
//     userName,
//     userEmail,
//     userPassword,
//     login(){
//         this.userName = document.getElementById('userName').value
//         this.userEmail = document.getElementById('userEmail').value
//         this.userPassword = document.getElementById('userPassword').value
//         if(this.userEmail.includes('@') && this.userPassword.length >= 5){
//             alert('welcome to ur page')
//             return
//         }
//         alert('invalid forms')
//     }
// }
// document.getElementById('btn').onclick = () => console.log( user.login());

// let movie ={
//     variants: [
//         { title: 'Howls Moving Castle',director:'Hayao Miyazaki', year:'2004', rating: 9},
//         { title: 'Anne with an E ', director:' Niki Caro', year:'2017', rating: 7},
//         { title: 'Fight club',director:'David Fincher', year:'1999', rating: 8},
//     ],
//     showRating(el){
//        return el.rating >= 8
//     },
//     filter(arr, callback){
//     let newArray = [];
//         for(let element of arr){
//         if(callback(element)){
//          newArray.push(element) 
//         }
//     }
//     return newArray;
// }
// }
// document.getElementById('btn').onclick = () => console.log(movie.filter( movie.variants ,movie.showRating));



// let bankAccount ={
//     ownerName: 'hina',
//     accountNumber: prompt('enter ur  accountNumber'),
//     balance : prompt('enter ur  balance'),

//     deposit(){
//         let addMoney = prompt('enter amount u want to add');
//        return console.log(`ur balance is ${Number(addMoney) + Number(this.balance)}`);
        
//     },
//     withdraw(){
//         let withdrawMoney = prompt('enteramount u want to withdraw');
//        return console.log(`ur balance is ${Number(withdrawMoney) + Number(this.balance)}`);
//     }
// }
// document.getElementById('btn-deposit').onclick = () => console.log(bankAccount.deposit());
// document.getElementById('btn-withdraw').onclick = () => console.log(bankAccount. withdraw());