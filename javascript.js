let n = 16;
const container = document.querySelector('.container');
let width = 512/n;
let height = 512/n;

let color = '';

// SELECTING COLOR BUTTONS
let red = document.querySelector('.red');
let blue = document.querySelector('.blue');
let yellow = document.querySelector('.yellow');
let green = document.querySelector('.green');

// COLOR SELECTION EVENTS
red.addEventListener('click', () => {
    color = 'red';
})
blue.addEventListener('click', () => {
    color = 'blue';
})
yellow.addEventListener('click', () => {
    color = 'yellow';
})
green.addEventListener('click', () => {
    color = 'green';
})

// CREATING A GRID OF n * n
for (let i = 0 ; i < n * n ; i++) {
    const box = document.createElement('div');
    box.classList.add('box');
    container.appendChild(box);
    box.style.border = '1px black solid';
    box.style.width = `${width}px`;
    box.style.height = `${height}px`;


    // CHECK IF BOX IS CLICKED, HOVER AND CLICK EVENTS
    let clicked = false;

    box.addEventListener('mouseover', (e) => {
        if (!clicked) {
            box.style.backgroundColor = `${color}`;
        }
    })

    box.addEventListener('mouseout', (e) => {
        if (!clicked) {
            box.style.backgroundColor = 'white';
        }
    })

    box.addEventListener('click', (e) => {
            clicked = true;
            box.style.backgroundColor = `${color}`;
        
    })

}