let przycisk = document.querySelector('.przycisk')

function graj() {
        let audio = new Audio("sfx/hog.mp3")
        audio.play()  
    }

function zamknij() {
    window.close()
}

let kwadrat = document.querySelector('.kwadrat')


kwadrat.style.transform = 'rotate(45deg)';

document.addEventListener("keypress",event => {
    switch (event.key) {
        case 'w':
            kwadrat.style.transform = 'rotate(-45deg)';
            let kwadratGora = parseInt(getComputedStyle(kwadrat).top)
            kwadratGora -= 10
            kwadrat.style.top = `${kwadratGora}px`

            break;
        case 's':
            kwadrat.style.transform = 'rotate(135deg)';
            let kwadratDol = parseInt(getComputedStyle(kwadrat).top)
            console.log('I got this key: ' + event.key);
            kwadratDol +=10
            kwadrat.style.top = `${kwadratDol}px` 
            break;
        case 'a':
            kwadrat.style.transform = 'rotate(225deg)';
        let kwadratLewo = parseInt(getComputedStyle(kwadrat).left)
            console.log('I got this key: ' + event.key);
            kwadratLewo -=10
            kwadrat.style.left = `${kwadratLewo}px` 
            break;
        case 'd':
            kwadrat.style.transform = 'rotate(45deg)';
            let kwadratPrawo = parseInt(getComputedStyle(kwadrat).left)
            console.log('I got this key: ' + event.key);
            kwadratPrawo +=10
            kwadrat.style.left = `${kwadratPrawo}px` 
            break;
    
        default:
            console.log('nie dziala');
            break;
    }

    }
)
