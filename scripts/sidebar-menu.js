
//Переменные
let openingButton = document.querySelector('.sidebar__hamburger');
let closingButton = document.querySelector('.sidebar__close')
let sidebar = document.querySelector('.sidebar');


//Функции
function hideLogo(){
    document.getElementById('main__logo').style.visibility = 'hidden';
}

function showLogo(){
    document.getElementById('main__logo').style.visibility = 'visible';
}

function openSidebar(){
    sidebar.classList.add('sidebar--opened');
    hideLogo();
}

function closeSidebar(){
    sidebar.classList.remove('sidebar--opened');
    showLogo();
}


//Основной скрипт
openingButton.addEventListener('click', openSidebar);
closingButton.addEventListener('click', closeSidebar);