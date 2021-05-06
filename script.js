const myScreen = document.getElementById('screen')
const mode = document.querySelectorAll('button[data-button="button"]')
const clavier = document.getElementById('clavier')
const touches = document.querySelectorAll('button[data-button="touch"]')

let result = ''

touches.forEach(element => {
    element.addEventListener('click', function() {
        p1.innerHTML += this.dataset.translate
    })
});

mode.forEach(element => {
    element.addEventListener('click', function () {
        if (result == '') {
            p1.innerHTML += this.dataset.translate
        } else {
            p1.innerHTML = result+=this.dataset.translate
        }
        
    })
})

const equal = document.querySelector('button[data-button="equal"]')

equal.addEventListener('click', function () {
    equalOutput()
})

function equalOutput() {
    equalSigne.innerHTML = '='
    p.innerHTML = eval(p1.innerHTML)
    result = p.innerHTML
}

let p1 = document.createElement('p')
myScreen.append(p1)

let equalSigne = document.createElement('p')
myScreen.append(equalSigne)

let p = document.createElement('p')
p.classList.add('robotoBold')
myScreen.append(p)

window.addEventListener("keydown", function (event) {
    if (event.defaultPrevented) {
        return;
    }

    var handled = false;
    if (event.keyCode == 8) {
        p1.innerHTML = p1.innerHTML.slice(0, -1)
    }
    if (event.key == 'Enter') {
        equalOutput()
        
    } else if (result == '') {
        if (event.keyCode >= 96) {
            p1.innerHTML += event.key
        } 
    } else {
        p1.innerHTML = (result+=event.key)
    }
    
    if (handled) {
        // Suppress "double action" if event handled
        event.preventDefault();
    }
}, true);

const deleteLast = document.querySelector('button[data-button="delete"]')

deleteLast.addEventListener('click', function () {
    let numberInuput = p1.innerHTML
    console.log(numberInuput.slice(0, -1))
    p1.innerHTML = numberInuput.slice(0, -1)
})

const deleteAll = document.querySelector('button[data-button="deleteall"]')

deleteAll.addEventListener('click', () => {
    p1.innerHTML = ''
    p.innerHTML = ''
    equalSigne.innerHTML = ''
    result = ''
})