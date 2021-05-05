const myScreen = document.getElementById('screen')
const mode = document.querySelectorAll('button[data-button="button"]')
const clavier = document.getElementById('clavier')
const touches = document.querySelectorAll('div[data-button="touch"]')
let firstInput = ''
let secondInput = ''

let p2 = document.createElement('p')
    p2.innerHTML = firstInput
    myScreen.append(p2)
let p3 = document.createElement('p')
    p3.innerHTML = firstInput
    myScreen.append(p3)
touches.forEach(element => {
    element.addEventListener('click', function() {
        if (modeSymbole.length < 1) {
            firstInput = firstInput + this.dataset.translate
            p1.innerHTML = result(firstInput, modeSymbole, secondInput)
           /*  p1.innerHTML = firstInput */
        console.log(firstInput)
        } else if (modeSymbole.length > 0) {
            secondInput = secondInput + this.dataset.translate
            p1.innerHTML = result(firstInput, modeSymbole, secondInput)
            //p3.innerHTML = secondInput
        }
        
        
    })
});
console.log(mode)
let modeSymbole = ''
mode.forEach(element => {
    element.addEventListener('click', function () {
        modeSymbole = modeSymbole + this.dataset.translate
        console.log(modeSymbole)
        p1.innerHTML = result(firstInput, modeSymbole, secondInput)
        //p2.innerHTML = modeSymbole    

    })
})

const equal = document.querySelector('div[data-button="equal"]')
equal.addEventListener('click', function () {
    let equal = document.createElement('p')
    equal.innerHTML = '='
    myScreen.append(equal)
    
    let p = document.createElement('p')
    p.innerHTML = eval(result(firstInput, modeSymbole, secondInput))
    
    myScreen.append(p)
})

function result(nb1,symbole,nb2) {
    let somme = nb1 + symbole + nb2
    return somme    
}

let p1 = document.createElement('p')
    p1.innerHTML = result(firstInput, modeSymbole, secondInput)
    myScreen.append(p1)
