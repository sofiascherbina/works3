const text1 = prompt('type text');
const text2 = prompt('type text');
if(text1.length > 0 && text2.length > 0 ) 
    {alert('Обидва поля заповнені')}
else {alert('Не всі поля заповнені')};


const num1 = prompt('type number');
const num2 = prompt('type number');
const amount = Number(num1) + Number(num2);
if (amount > 10) {
    console.log('Сума більша за 10')
}
else {
    console.log('Сума менша або дорівнює 10')
};


const text = prompt('type text');
if (text.includes( "JavaScript")) {
    alert( "Текст містить слово JavaScript")
}
else{
    alert("Текст не містить слово JavaScript")
}


const number =  prompt('type number');
if (number >= 10 && number <= 20) {
    console.log( "Число входить в діапазон від 10 до 20")
}
else {
    console.log( "Число не входить в діапазон від 10 до 20")
};


let userName = prompt('type your name');
let email = prompt('type your email');
let password = prompt('type your password');
if ( userName.length >= 3 && email.includes('@' && '.') && password.length >= 6){
    alert("Перенаправлення на іншу сторінку")
}
else{
    alert( "Помилка: неправильне заповнення")
};