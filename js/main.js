// Toggle all menu buttons
const menuButtons = document.querySelectorAll('.menu-button')
menuButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        btn.classList.toggle('menu-button-opened')
    })
})

