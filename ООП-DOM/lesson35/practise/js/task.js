const colorPickerOptions = [
    { label: 'red', color: '#F44336' },
    { label: 'green', color: '#4CAF50' },
    { label: 'blue', color: '#2196F3' },
    { label: 'grey', color: '#607D8B' },
    { label: 'pink', color: '#E91E63' },
    { label: 'indigo', color: '#3F51B5' },
  ];
let container = document.querySelector('.color-picker');
let button = document.createElement('button');
button.style.height = '70px';
button.style.width = '150px';
button.textContent = 'Click to change';

colorPickerOptions.forEach(element => {
    let buttons = document.createElement('button');
    buttons.style.height = '50px';
    buttons.style.width = '100px';
    buttons.style.background = element.color;
    buttons.textContent = element.label; 
    container.append(buttons);


buttons.addEventListener("click", function(){
    button.style.background = buttons.style.background;
    button.textContent = buttons.textContent;
})
});
container.prepend(button);


// let container = document.querySelector('.js-products');
// let article = document.createElement('article');
// article.classList.add('product');

// let name = document.createElement('h2');
// let descr = document.createElement('p');
// let pridct = document.createElement('p');

// function createCard(name,descr,pridct){
//     name.classList.add('product__name');
//     name.textContent = 'Назва';

//     descr.classList.add('product__descr');
//     descr.textContent = 'Опис';

//     pridct.classList.add('product__pridct');
//     pridct.textContent = 'Ціна: 1111 кредитів';


// }
// createCard(name,descr,pridct);
// container.append(article);
// article.prepend(name, descr, pridct);