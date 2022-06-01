// Different jump links on checkout.html page

let form_right1 = document.querySelector(".form_right1")
let form_right2 = document.querySelector(".form_right2")
let form_right3 = document.querySelector(".form_right3")

let eleAll = document.querySelectorAll(".ele")

function clickGo1() {
    form_right1.style.display = 'none'
    form_right2.style.display = 'block'
    for(let i = 0; i < eleAll.length; i++){
        eleAll[i].classList.remove('eleActive')
    }
    eleAll[1].classList.add('eleActive')
}
function clickGo2() {
    form_right2.style.display = 'none'
    form_right3.style.display = 'block'
    for(let i = 0; i < eleAll.length; i++){
        eleAll[i].classList.remove('eleActive')
    }
    eleAll[2].classList.add('eleActive')
}

function clickBank2() {
    form_right1.style.display = 'block'
    form_right2.style.display = 'none'
    for(let i = 0; i < eleAll.length; i++){
        eleAll[i].classList.remove('eleActive')
    }
    eleAll[0].classList.add('eleActive')
}
function clickBank3() {
    form_right2.style.display = 'block'
    form_right3.style.display = 'none'
    for(let i = 0; i < eleAll.length; i++){
        eleAll[i].classList.remove('eleActive')
    }
    eleAll[1].classList.add('eleActive')
}
