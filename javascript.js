let n = 16;
const container = document.querySelector('.container');
let width = 512/n;
let height = 512/n;

for (let i = 0 ; i < n * n ; i++) {
    const box = document.createElement('div');
    box.classList.add('box');
    container.appendChild(box);
    box.style.border = '1px black solid';
    box.style.width = `${width}px`;
    box.style.height = `${height}px`;

    box.addEventListener('click', (e) => {
        box.classList.add('colored');
    })

}