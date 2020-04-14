const timer = document.getElementById('timer');

const timerFunc = function() {
    timer.textContent--;

    if (timer.textContent <= 0) {
        clearInterval(interval);
        alert('Вы победили в конкурсе!');
    }
}

let interval = setInterval(timerFunc,10);