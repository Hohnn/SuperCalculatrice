const screen = document.getElementById('screen')
const mode = document.querySelectorAll('button[data-button="button"]')
const clavier = document.getElementById('clavier')
const touches = document.querySelectorAll('div[data-button="touch"]')
let firstInput = '' ;
let secondInput = ''
touches.forEach(element => {
    element.addEventListener('click', function() {
        if (modeSymbole.length < 1) {
            firstInput = firstInput + this.dataset.translate
        console.log(firstInput)
        } else if (modeSymbole.length > 0) {
            secondInput = secondInput + this.dataset.translate
        }
        
        
    })
});
console.log(mode)
let modeSymbole = ''
mode.forEach(element => {
    element.addEventListener('click', function () {
        modeSymbole = modeSymbole + this.dataset.translate
        console.log(modeSymbole)
    })
})

const equal = document.querySelector('div[data-button="equal"]')
equal.addEventListener('click', function () {
    result(+firstInput, +modeSymbole, +secondInput)
})

function result(nb1,symbole,nb2) {
    let somme = nb1 + symbole + nb2
    console.log(somme)
}
