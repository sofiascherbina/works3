// document.getElementById('btn').onclick = function(){
//     let firstValue = document.getElementById('first-txt').value;
//     let secondValue = document.getElementById('second-txt').value;
//     if(firstValue && secondValue){
//         alert('Обидва поля заповнені')
//     }
//     else{
//         alert('Не всі поля заповнені')
//     }
// }



// document.getElementById('btn').onclick = function(){
//     let firstValue = parseInt(document.getElementById('first-num').value);
//     let secondValue = parseInt(document.getElementById('second-num').value);
//     let result =firstValue + secondValue; 
//     if( result > 10){
//         alert('Сума більша за 10')
//     }
//     else{
//         alert('')
//     }
// }

document.getElementById('btn').onclick = function(){
    let nameValue = document.getElementById('name').value;
    let emailValue = document.getElementById('email').value;
    let passwordValue =document.getElementById('password').value;
    if(  nameValue.length >= 3 && emailValue.includes('@' && '.') && passwordValue.length >= 6){
        alert('Перенаправлення на іншу сторінку')
        window.location.href = 'index.html'
    }
    else{
        alert('Error');
    }
}
