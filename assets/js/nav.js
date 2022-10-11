const btnMenu = $('.menu-btn')
const mobieMenu = $('.nav-mobie')
const btnClose = $('.close-btn')

// mobie menu
btnMenu.onclick = function() {
    btnMenu.style.display = 'none'
    mobieMenu.classList.add('active')
}
btnClose.onclick = function() {
    btnMenu.style.display = 'block'
    mobieMenu.classList.remove('active')
}