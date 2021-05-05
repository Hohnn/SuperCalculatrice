const myScreen = document.getElementById('screen')
const mode = document.querySelectorAll('button[data-button="button"]')
const clavier = document.getElementById('clavier')
const touches = document.querySelectorAll('div[data-button="touch"]')
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



const equal = document.querySelector('div[data-button="equal"]')
equal.addEventListener('click', function () {
    equal2.innerHTML = '='
    p.innerHTML = eval(p1.innerHTML)
    result = p.innerHTML
    console.log(result)
})

let p1 = document.createElement('p')
    myScreen.append(p1)

    let equal2 = document.createElement('p')
    
    myScreen.append(equal2)
    let p = document.createElement('p')
        
    myScreen.append(p)