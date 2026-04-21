const btMenu = document.getElementById('menu')
const menu = document.getElementById('nav-mobiles')
const btClose = document.getElementById('close')

btMenu.addEventListener('click', () => {
    menu.style.display = 'flex'
    btMenu.style.visibility = 'hidden'
})

btClose.addEventListener('click', () => {
    menu.style.display = 'none'
    btMenu.style.visibility = 'visible'
})