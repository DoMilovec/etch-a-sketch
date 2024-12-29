let n = 16;
const container = document.querySelector('.container');
const erase = document.querySelector('.erase');
const clearBoard = document.querySelector('.clearBoard');

// SETTING GRID BUTTON
let gridBtn = document.querySelector('.gridSize');

gridBtn.addEventListener('click', (e) => {
    
    // LOOP TO CALL FOR PROMPT CALL IF INVALID INPUT
    while(true){
    n = prompt('Enter grid size (write one number, that is N which will create grid of N*N. It has to be lower than 100!):');
    container.innerHTML = ' '; 
    if (isNaN(n) || n >100) {
        alert(`Please enter a valid number that is < 100.`);
    } else {
        break;
    }}

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
erase.addEventListener('click', () => {
    color = 'white';
})

// CREATING A GRID OF n * n
for (let i = 0 ; i < n * n ; i++) {
    const box = document.createElement('div');
    box.classList.add('box');
    container.appendChild(box);
    box.style.border = '0.5px black solid';
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

// ERASE AND CLEAR BOARD BUTTON EVENTS
clearBoard.addEventListener('click', (e) => {
    box.style.backgroundColor = 'white';
})
}
})

