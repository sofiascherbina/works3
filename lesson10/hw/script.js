document.getElementById('order').onclick = function(){
    let selectedDrink= document.getElementById('dinks').value;
    switch(selectedDrink){
        case 'coffee':
           alert('Кава');
            break;
        case 'tea':
            alert('Чай');
            break;
        case 'juice':
            alert('Сік');
            break;
    }
}

document.getElementById('btn').onclick= function(){
    let typedDay = document.getElementById('day').value;
    if(typedDay === "понеділок" || typedDay === "вівторок" || typedDay === "середа" || typedDay === "четвер" || typedDay === "п'ятниця" ){
        alert('Це робочий день');
    }
    else if(typedDay === "субота" || typedDay === "неділя"){
        alert('Це вихідний день');
    }
}

document.getElementById('btn-month').onclick = function(){
    let monthNumber = document.getElementById('month').value;
    switch(monthNumber){
        case '12':
        case '1':
        case '2':
            alert("It's  winter");
            break;
        case '3':
        case '4':
        case '5':
            alert("It's  spring");
            break; 
        case '6':
        case '7':
        case '8':
            alert("It's autumn");
            break; 
        case '9':
        case '10':
        case '11':
            alert("It's summer");
            break;           
    }
}


document.getElementById('btn-number').onclick = function(){
    let monthNumber = document.getElementById('month').value;
    switch(monthNumber){
        case '12':
        case '1':
        case '3':
        case '5':
        case '7':
        case '8':
        case '10':
           console.log("31");
            break;
        case '4':
        case '6':
        case '9':
        case '11':
            console.log("30");
            break; 
        default :
        console.log("28-29");  
}
}

document.getElementById('btn-colour').onclick = function(){
    let enteredColour = document.getElementById('colour').value;
    switch(enteredColour){
        case 'червоний' :
            alert('стоп');
            break;
        case 'жовтий' :
        alert('чекати');
        break;
        case 'зелений' :
            alert('йти');
            break;
        default :
        alert("It's ur fav one, right?"); 
    }
}
document.getElementById('btn-res').onclick = function(){
    let num1 = parseInt(document.getElementById('first-num').value);
    let num2 = parseInt(document.getElementById('second-num').value);
    let oper = document.getElementById('operation').value;
    let result;
    switch(oper){
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result =num1 * num2;
            break;
        case '/':
        result =num1 / num2;
        break;
}
console.log(parseInt(result));
}

