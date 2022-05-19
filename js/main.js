// Accessibility controls
const controls = document.querySelectorAll('.accessibility-toggle')

const changeFontsize = (size) => {
	let currentFontSize = parseInt(window.getComputedStyle(root).getPropertyValue('font-size'))
	if (size === 'increase') {
		if (currentFontSize < 20) currentFontSize = currentFontSize + 2
    } else if (size === 'decrease') {
		if (currentFontSize > 12) currentFontSize = currentFontSize - 2
	}

	// Disable buttons if value is out of range
	currentFontSize === 20 ? controls[0].ariaDisabled = "true" : controls[0].ariaDisabled = "false"
	currentFontSize === 12 ? controls[1].ariaDisabled = "true" : controls[1].ariaDisabled = "false"

	// Store & set new value
	localStorage.setItem('font-size', `${currentFontSize}px` )
	root.style.fontSize = `${currentFontSize}px`
}

const toggleAccessibilityControl = (control) => {
	if (root['dataset'][control] === 'true') {
		root.setAttribute(`data-${control}`, 'false')
		localStorage.setItem(control, 'false')
	}
    else {
		root.setAttribute(`data-${control}`, 'true')
		localStorage.setItem(control, 'true')
    }    
}

controls[0].addEventListener('click', () => changeFontsize('increase'))
controls[1].addEventListener('click', () => changeFontsize('decrease'))
controls[2].addEventListener('click', () => toggleAccessibilityControl('darktheme'))
controls[3].addEventListener('click', () => toggleAccessibilityControl('grayscale'))
controls[4].addEventListener('click', () => toggleAccessibilityControl('highcontrast'))

// Toggle all menu buttons
const menuButtons = document.querySelectorAll('.menu-button')
menuButtons.forEach(btn => {
	btn.addEventListener('click', () => {
		btn.classList.toggle('menu-button-opened')
	})
})
