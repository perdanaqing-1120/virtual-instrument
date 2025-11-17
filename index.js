const button = document.querySelectorAll(".note")
const footer = document.querySelector(".footer")
const portraitWarning = document.getElementById("portraitWarning")

// c5
const doC5 = document.getElementById("doC5")
const reC5 = document.getElementById("reC5")
const miC5 = document.getElementById("miC5")
const faC5 = document.getElementById("faC5")
const solC5 = document.getElementById("solC5")
const laC5 = document.getElementById("laC5")
const tiC5 = document.getElementById("tiC5")
// c4
const doC4 = document.getElementById("doC4")
const reC4 = document.getElementById("reC4")
const miC4 = document.getElementById("miC4")
const faC4 = document.getElementById("faC4")
const solC4 = document.getElementById("solC4")
const laC4 = document.getElementById("laC4")
const tiC4 = document.getElementById("tiC4")
// c3
const doC3 = document.getElementById("doC3")
const reC3 = document.getElementById("reC3")
const miC3 = document.getElementById("miC3")
const faC3 = document.getElementById("faC3")
const solC3 = document.getElementById("solC3")
const laC3 = document.getElementById("laC3")
const tiC3 = document.getElementById("tiC3")

let cooldown = 100;
let slideDownTimeout;

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

function lyre(params) {
    console.log(params)
    const lyreSound = new Audio(`/assets/Lyre/${params}.mp3`)
    lyreSound.play()
    slideFooterDown()
}

let keyValue = ""
window.addEventListener('keydown', (event) => {
    keyValue = event.key
    keyValue = keyValue.toLowerCase()
    console.log(keyValue);

    // C4
    if (keyValue === 'a') {
        const sound = new Audio(`/assets/Lyre/7.mp3`);
        sound.play();
        doC4.classList.toggle('ggg')
        slideFooterDown()

        setTimeout(() => {
            doC4.classList.toggle('ggg')
        }, cooldown)

    } else if (keyValue === 's') {
        const sound = new Audio(`/assets/Lyre/8.mp3`);
        sound.play();
        reC4.classList.toggle('ggg')
        slideFooterDown()

        setTimeout(() => {
            reC4.classList.toggle('ggg')
        }, cooldown)

    } else if (keyValue === 'd') {
        const sound = new Audio(`/assets/Lyre/9.mp3`);
        sound.play();
        miC4.classList.toggle('ggg')
        slideFooterDown()

        setTimeout(() => {
            miC4.classList.toggle('ggg')
        }, cooldown)

    } else if (keyValue === 'f') {
        const sound = new Audio(`/assets/Lyre/10.mp3`);
        sound.play();
        faC4.classList.toggle('ggg')
        slideFooterDown()

        setTimeout(() => {
            faC4.classList.toggle('ggg')
        }, cooldown)

    } else if (keyValue === 'g') {
        const sound = new Audio(`/assets/Lyre/11.mp3`);
        sound.play();
        solC4.classList.toggle('ggg')
        slideFooterDown()

        setTimeout(() => {
            solC4.classList.toggle('ggg')
        }, cooldown)

    } else if (keyValue === 'h') {
        const sound = new Audio(`/assets/Lyre/12.mp3`);
        sound.play();
        laC4.classList.toggle('ggg')
        slideFooterDown()

        setTimeout(() => {
            laC4.classList.toggle('ggg')
        }, cooldown)

    } else if (keyValue === 'j') {
        const sound = new Audio(`/assets/Lyre/13.mp3`);
        sound.play();
        tiC4.classList.toggle('ggg')
        slideFooterDown()

        setTimeout(() => {
            tiC4.classList.toggle('ggg')
        }, cooldown)

    }

    // c5
    else if (keyValue === 'q') {
        const sound = new Audio(`/assets/Lyre/0.mp3`);
        sound.play();
        doC5.classList.toggle('ggg')
        slideFooterDown()

        setTimeout(() => {
            doC5.classList.toggle('ggg')
        }, cooldown)

    } else if (keyValue === 'w') {
        const sound = new Audio(`/assets/Lyre/1.mp3`);
        sound.play();
        reC5.classList.toggle('ggg')
        slideFooterDown()
        setTimeout(() => {
            reC5.classList.toggle('ggg')
        }, cooldown)

    } else if (keyValue === 'e') {
        const sound = new Audio(`/assets/Lyre/2.mp3`);
        sound.play();
        miC5.classList.toggle('ggg')
        slideFooterDown()
        setTimeout(() => {
            miC5.classList.toggle('ggg')
        }, cooldown)

    } else if (keyValue === 'r') {
        const sound = new Audio(`/assets/Lyre/3.mp3`);
        sound.play();
        faC5.classList.toggle('ggg')
        slideFooterDown()
        setTimeout(() => {
            faC5.classList.toggle('ggg')
        }, cooldown)

    } else if (keyValue === 't') {
        const sound = new Audio(`/assets/Lyre/4.mp3`);
        sound.play();
        solC5.classList.toggle('ggg')
        slideFooterDown()
        setTimeout(() => {
            solC5.classList.toggle('ggg')
        }, cooldown)

    } else if (keyValue === 'y') {
        const sound = new Audio(`/assets/Lyre/5.mp3`);
        sound.play();
        laC5.classList.toggle('ggg')
        slideFooterDown()
        setTimeout(() => {
            laC5.classList.toggle('ggg')
        }, cooldown)

    } else if (keyValue === 'u') {
        const sound = new Audio(`/assets/Lyre/6.mp3`);
        sound.play();
        tiC5.classList.toggle('ggg')
        slideFooterDown()
        setTimeout(() => {
            tiC5.classList.toggle('ggg')
        }, cooldown)

    }

    else if (keyValue === 'z') {
        const sound = new Audio(`/assets/Lyre/14.mp3`);
        sound.play();
        doC3.classList.toggle('ggg')
        slideFooterDown()
        setTimeout(() => {
            doC3.classList.toggle('ggg')
        }, cooldown)

    } else if (keyValue === 'x') {
        const sound = new Audio(`/assets/Lyre/15.mp3`);
        sound.play();
        reC3.classList.toggle('ggg')
        slideFooterDown()
        setTimeout(() => {
            reC3.classList.toggle('ggg')
        }, cooldown)

    } else if (keyValue === 'c') {
        const sound = new Audio(`/assets/Lyre/16.mp3`);
        sound.play();
        miC3.classList.toggle('ggg')
        slideFooterDown()
        setTimeout(() => {
            miC3.classList.toggle('ggg')
        }, cooldown)

    } else if (keyValue === 'v') {
        const sound = new Audio(`/assets/Lyre/17.mp3`);
        sound.play();
        faC3.classList.toggle('ggg')
        slideFooterDown()
        setTimeout(() => {
            faC3.classList.toggle('ggg')
        }, cooldown)

    } else if (keyValue === 'b') {
        const sound = new Audio(`/assets/Lyre/18.mp3`);
        sound.play();
        solC3.classList.toggle('ggg')
        slideFooterDown()
        setTimeout(() => {
            solC3.classList.toggle('ggg')
        }, cooldown)

    } else if (keyValue === 'n') {
        const sound = new Audio(`/assets/Lyre/19.mp3`);
        sound.play();
        laC3.classList.toggle('ggg')
        slideFooterDown()
        setTimeout(() => {
            laC3.classList.toggle('ggg')
        }, cooldown)

    } else if (keyValue === 'm') {
        const sound = new Audio(`/assets/Lyre/20.mp3`);
        sound.play();
        tiC3.classList.toggle('ggg')
        slideFooterDown()
        setTimeout(() => {
            tiC3.classList.toggle('ggg')
        }, cooldown)

    }
})