// let input = document.querySelector('#controls input');
// let createBtn = document.querySelector('[data-action="render"]');
// let removeBtn = document.querySelector('[data-action="destroy"]');
// let container = document.querySelector('#boxes');
// // let boxes = [];
// function createBoxes(){
//     let amount = parseInt(input.value);
//     // boxes.length = amount;
//     for(let i = 0; i < amount; i++ ){
//         let box =  document.createElement('div');
//         box.style.width = `${30 + i*10}px`;
//         box.style.height = `${30 + i*10}px`;
//         box.style.backgroundColor = `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
//         container.append(box);

//     }
// }

// function  destroyBoxes(){
//     // container.children.remove()
//     container.innerHTML = '';
// }

// createBtn.addEventListener('click', createBoxes);
// removeBtn.addEventListener('click', destroyBoxes);

let container = document.querySelector('.full-image-container');
let gallery = document.querySelectorAll('.image');
let image = document.querySelector('.full-image');
let btn = document.querySelector('.close');

let imgIndex = 0;
let srcList = [...gallery].map(el => el.src);

function hendlerContainerOpen (){
    container.style.display = 'block';
    btn.style.display = 'block';
};

gallery.forEach((img, index)  => {
    function hendlerImgAppear (){
        imgIndex = index;
        image.src = srcList[imgIndex];
    };

    img.addEventListener('click', hendlerContainerOpen);
    img.addEventListener('click', hendlerImgAppear);

 });


 document.addEventListener('keydown', event =>{
    if (event.key === 'ArrowLeft' && imgIndex > 0) {
        imgIndex--
        image.src = srcList[imgIndex];
    };

    if (event.key === 'ArrowRight' && imgIndex < srcList.length - 1) {
        imgIndex++
        image.src = srcList[imgIndex];
    };
});

function hendlerContainerClose() {
    container.style.display = 'none';
    btn.style.display = 'none';
}
btn.addEventListener('click', hendlerContainerClose)