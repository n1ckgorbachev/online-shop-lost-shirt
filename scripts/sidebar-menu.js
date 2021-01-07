let openingButton = document.querySelector('.sidebar__hamburger');
let closingButton = document.querySelector('.sidebar__close')
let sidebar = document.querySelector('.sidebar');

function openSidebar(){
    sidebar.classList.add('sidebar--opened');
}

function hiddenMainlogo(){
    document.getElementById('main__logo').style.visibility = 'hidden';
}

openingButton.addEventListener('click', openSidebar, hiddenMainlogo);

closingButton.addEventListener('click', function(){
    sidebar.classList.remove('sidebar--opened');
    document.getElementById('main__logo').style.visibility = 'visible';
});