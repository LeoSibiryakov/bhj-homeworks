const dead = document.getElementById('dead');
const lost = document.getElementById('lost');

function getHole(i) {
    return document.getElementById(`hole${i}`)
}

function checkHole () {
    if (this.className.includes('hole_has-mole')) {
        dead.textContent++;
        if (dead.textContent === '10') {
            alert('Победа!');
            dead.textContent = 0;
            lost.textContent = 0;
        }
    } else {
        lost.textContent++;
        if (lost.textContent === '5') {
            alert('Поражение!');
            dead.textContent = 0;
            lost.textContent = 0;
        }
    }
}

for (let i = 1; i <=9;i++) {
    let hole = getHole(i);
    hole.onclick = checkHole;
}

