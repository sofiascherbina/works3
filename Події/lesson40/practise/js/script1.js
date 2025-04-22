// const block = document.querySelector('.block');

// document.addEventListener('mousemove', e => {
//     const mouseX = e.clientX;
//     const mouseY = e.clientY;

//     // block.style.position = absolute;
//     block.style.left = `${mouseX}px`;
//     block.style.top = `${mouseY}px`;
    
// });

const block = document.querySelector('body');
const round = document.querySelector('.round');

document.addEventListener('click', e => {
    const round = document.createElement('div');
    round.classList.add('round')
    
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    round.style.left = `${mouseX}px`;
    round.style.top = `${mouseY}px`;

    block.appendChild(round)
    document.addEventListener('mouseup', e => {
        round.remove()
    });
});
