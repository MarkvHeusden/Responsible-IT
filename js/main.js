// Toggle all menu buttons
const menuButtons = document.querySelectorAll('.menu-button')
menuButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        btn.classList.toggle('menu-button-opened')
    })
})

// Toggle main nav
const navButton = document.querySelector('.nav-button')
navButton.addEventListener('click', () => {
    const header = document.querySelector('.main-header')
    header.classList.toggle('nav-opened')
})
