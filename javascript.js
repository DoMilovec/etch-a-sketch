let n = 16;
const container = document.querySelector('#container');

for (let i = 0 ; i < n ; i++) {
    const box = document.createElement('div');
    box.classList.add('box');
    container.appendChild(box);

}