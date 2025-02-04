// function logItems(array){
//     for (let i = 0; i < array.length; i++){
//         console.log(`${array.indexOf(array[i]) + 1} - ${array[i]}`)
//     }
// }
// let arr = ['Coyote', 'Barragan', 'Tier', 'Ulquiorra', 'Nnoitra', 'Grimmjow'];
// let y = logItems(arr);


// function calculateEngravingPrice(message, pricePerWord){
//     let s = message.split(' ');
//     return s.length * pricePerWord
// }
// let m = prompt('type word u want to have it eatched');
// let p = 100;
// let x = calculateEngravingPrice(m,p);
// console.log(x);

// function findLongestWord(string){
//     let s = string.split(' ');
//     let theLongestWord = s[0];
//     for (let i = 0; i < s.length; i++){
//         if(s[i].length > theLongestWord.length){
//             theLongestWord = s[i];
//         }
//     }
//     return theLongestWord
// }
// let str = prompt('type words');
// let w = findLongestWord(str);
// console.log(w);


// function formatString(string){
//     let m = string.split(' ');
//     if(m.length > 40){
//         let s = m.splice(41);
//         let p = m.push('...');
//         console.log(m.join(' '));    
//     return;
//     }
//     else{
//         console.log(m.join(' '));
//         return
//     }
// }
// let str = prompt('type sentence');
// let w = formatString(str);


// function checkForSpam(message){
//     let s = ['spam', 'sale', 'SPAM', 'SALE'];
//     for (let i = 0; i < s.length; i++){
//         if(message.includes(s[i])){
//             return true;
//         }
//     }
//     return false;
// }
// let m = prompt('type message');
// let c = checkForSpam(m);
// console.log(c)

// function checking(input){
//     const numbers = [];
//     let total = 0;
//     while(true){
//         n = prompt('enter your number');
//         if(isNaN(n) || n === null){
//             alert('Було введено не число, попробуйте ще раз');
//             break;
//         }
//         numbers.push(Number(n));
//     }
//     for(let i = 0; i < numbers.length; i++){
//         total+=numbers[i]
//     }
//     return total
// }
// let n;
// let c = checking(n)
// console.log(c)





function isLoginValid(login){
    if(login.length >= 4 && login.length <= 16){
        return true;
    }
    return false;
}
let userLogin = prompt('type your login');
let log = isLoginValid(userLogin);
// console.log(log);

function isLoginUnique(allLogins, login){
        if(allLogins.includes(login)){
            return false
        }
        return true
}
let logins = ['nakaMiku', 'mrPrince', 'sogeKing'];
let logs = isLoginUnique(logins, userLogin);
// console.log(logs);

function addLogin(allLogins, login){
    if(isLoginValid(login) === false){
        alert('Помилка! Логін повинен бути від 4 до 16 символів');
        return
    }
    if(isLoginUnique(allLogins, login) === false){
        alert('Такий логін уже використовується!');
        return
    }
    allLogins.push(login);
    alert('Логін успішно доданий!');
}
let add = addLogin(logins, userLogin);
console.log(logins)
