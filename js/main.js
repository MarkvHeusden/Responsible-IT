const navButton = document.querySelector('.nav-button')

navButton.addEventListener('click', () => {
    const header = document.querySelector('.main-header')
    header.classList.toggle('nav-opened')
})
