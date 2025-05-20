let userNameInput = document.querySelector('.name');
let userAgeInput = document.querySelector('.age');
let addUserBtn = document.querySelector('.add-user-btn');
let sortUserBtn = document.querySelector('.sort-user-btn');
let usersList = document.querySelector('ul');
let usersArr = [];

function handlerCheckNum (){
    if(userAgeInput.value < 0){
        alert('Введіть ваш вік');
    }
}
    class User{
        constructor(userName,userAge){
            this.userName = userName;
            this.userAge = userAge;
            this.createdAt = new Date();
        }
        getInfo(){
            return `Мене звати ${this.userName} мені ${this.userAge} років, стала(став) клієнтом ${this.createdAt}`;
        }
    }

function handlerCreateUser (name,age){
    let newUser = new User(name,age);
    usersArr.push(newUser);
    return newUser;
}

function handlerAddUser (){
            usersList.innerHTML = '';
   usersArr.forEach(el =>{
        let li = document.createElement('li');
        li.textContent = el.getInfo();
        usersList.prepend(li);

        let deleteBtn = document.createElement('button');
        deleteBtn .textContent ='Видалити клієнта';
        li.appendChild(deleteBtn);

        li.addEventListener('click', ()=>{
                console.log(el.getInfo());
        });
        li.addEventListener('mouseover', ()=>{
            li.style.color = `rgba(${Math.random() * 254},${Math.random() * 254}, ${Math.random() * 254}, ${Math.random() * 254} )`;
        });

        deleteBtn.addEventListener('click',(event)=>{
            event.stopPropagation(); // <- це взяла з інтернету, бо по іншому не працювало, як треба Т_Т
            usersArr.splice(usersArr.indexOf(el), 1);
            li.remove();
             console.log('Клієнта видалено');
        } );
    });
}

function sortUsers(){
    usersArr.sort((a,b) => a.userAge - b.userAge );
     handlerAddUser();
}

addUserBtn.addEventListener('click', ()=>{
    let name = userNameInput.value;
    let age = parseInt( userAgeInput.value);
    handlerCreateUser(name,age);
    handlerAddUser();
});

sortUserBtn.addEventListener('click',sortUsers );