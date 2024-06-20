document.addEventListener('DOMContentLoaded', function () {
    var submenu = document.querySelector('.submenu');
    var submenuContent = document.querySelector('.submenu-content');

    submenu.addEventListener('click', function (event) {
        event.preventDefault();
        submenuContent.classList.toggle('show');
    });
});