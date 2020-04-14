//В момент запуска скрипта, покажите окно #modal_main

const modalMain = document.getElementById('modal_main'); // переменная со все страницей

modalMain.classList.add('modal_active'); // добавление на эту страницу активного окна 'сделать хорошо'

//Сделайте закрытие активного окна по нажатию на его элемент с классом modal__close

const closeModal = document.getElementsByClassName('modal__close'); 
/* это переменной присваиваются все элементы,которые  закрывают это окно ,их два и изначально они оба скрыты,
 то есть нужно по ним кликнуть и срабатывает функция и окно закрывается
 */

function close() {
    modalMain.classList.remove('modal_active')
}

closeModal[0].onclick = close; /* так как getElementsByClass возвращает коллекцию(типа массива но нет), 
то нужно указать что первый элемент коллекции и будет исполнять закрытие [0]
А нужно ли проходить циклом по этой коллекции тогда? Работает и без него вроде.
*/

//По нажатию на элемент с классом show-success покажите окно #modal_success

const modalSuccess = document.getElementById('modal_success'); 
// это id второго окна,которое открывается при нажатии на сделать хорошо

const showSuccess = document.querySelector('.show-success'); // это красная кнопка сделай хорошо
/*вот тут непонятно,почему именно querySelector используется , я пытался пробовать  getElementsByClassName и с ним не работало,
пытался и  просто show-success ,без точки впереди (.show-success) так тоже не работало.
По идее у этого html элемента же класс show-success, почему так получается?
*/
function success() {
    modalSuccess.classList.add('modal_active') // добавляется открытие окна хорошо сделано
    modalMain.classList.remove('modal_active') // удаляется первое активное окно
}

showSuccess.onclick = success; // по клику меняется первое окно на второе
function success2() {
    modalSuccess.classList.remove('modal_active'); // удаляется второе активное окно
} 
closeModal[2].onclick = success2;
// Почему именно элемент с 3-им индексом отвечает за закрытие? Ни первый,ни второй?