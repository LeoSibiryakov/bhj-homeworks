'use strict';

const menuLink = document.querySelectorAll('.menu__link');


for (let i = 0; i < menuLink.length; i++) {     

    menuLink[i].onclick = function () {
        
        const parentMenu = menuLink[i].parentElement;

        if (parentMenu.querySelector('.menu_sub').className == 'menu menu_sub') {
            parentMenu.querySelector('.menu_sub').className = 'menu menu_sub menu_active';
        } else {
            parentMenu.querySelector('.menu_sub').className = 'menu menu_sub'
        }   

                  
    }
}