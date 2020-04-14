/* Даны несколько картинок ,по кнопкам вперёд-назад они должны меняться.
Для начала находим по querytSelectorAll все картинки и присваиваем их переменной
*/
const slider = document.querySelectorAll('.slider__item');
//Тоже самое делаем для кнопок вперёд-назад,но тут используем просто querySelector,потому что этих элементов всего по 1 на странице
const next = document.querySelector('.slider__arrow_next');
const previous = document.querySelector('.slider__arrow_prev');
//Также нужен счётчик,который будет отслеживать количество перелистанных картинок,чтобы понять когда их снова заново запускать надо
let slideNumber = 0;

//Теперь пишем фунцию обработчик на кнопку вперёд,чтобы при клике на неё изображение менялось.
next.onclick = () => {
    slideNumber++; // каждый клик увеличивает счётчик
    for (let slide of slider) { // проходимся циклом for...of по массиву с картинками
        slide.className = 'slider__item'; // и присваиваем каждой картинке класс обычный
    }
    if (slideNumber >= slider.length) { //Создаем условие, что если счётчик  кликов больше или равен длинне массива с картинками
        slideNumber = 0; // то счётчик обнуляется
    } 
/* То есть допустим первый цикл - первая картинка, нажимаем клик и счётчик увеличивается на 1, первый элемент массива пройден,и так
мы идем пока счётчик не становится например 5 и длина массива заканчивается на 5 и цикл прерывается и счётчик заново становится 0 и все по кругу идет
*/
    slider[slideNumber].className = 'slider__item slider__item_active'; /* Пока цикл продолжается,при каждом нажатии на кнопку next следующему элементу
    присваивается активный класс и он показывает картинку
    Почему элементом массива здесь slideNumber является? мы же проходим циклом for of, и по идее им должен быть slide?
*/
}

//Всё тоже самое,но для кнопки назад
previous.onclick = () => {
    slideNumber--; //Здесь счётчик наоборот уменьшается
    for (let slide of slider) {
        slide.className = 'slider__item';
    }
    if (slideNumber < 0) { // если счётчик доходит до конца
        slideNumber = slider.length - 1; // то он возвращается на позицию изначальную,то есть вся длина массива с картинками минус 1
    }
    slider[slideNumber].className = 'slider__item slider__item_active'; 
}