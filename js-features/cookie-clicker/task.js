const clicker = document.getElementById('clicker__counter');
const image = document.getElementById('cookie');


function changeSize() {
    clicker.textContent++;

    if (clicker.textContent % 2 === 0) {
        image.width = 200;
    } else {
        image.width = 300;
    }
}

image.onclick = changeSize;