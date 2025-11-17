// Function to check and show portrait warning on mobile
function checkPortraitOrientation() {
    if (window.matchMedia("(max-width: 768px) and (orientation: portrait)").matches) {
        portraitWarning.classList.add("show")
    } else {
        portraitWarning.classList.remove("show")
    }
}

// Check on page load
checkPortraitOrientation()

// Check on orientation change
window.addEventListener('orientationchange', () => {
    setTimeout(checkPortraitOrientation, 100)
})

// Function to slide footer down
function slideFooterDown() {
    footer.classList.add("slide-down")
    clearTimeout(slideDownTimeout)
    slideDownTimeout = setTimeout(() => {
        footer.classList.remove("slide-down")
    }, 500)
}