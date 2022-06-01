// Different jump links on head

let shopImg = document.querySelector(".shopImg")
let searchImg = document.querySelector(".searchImg")
//  Click on event to jump to cart.html page
shopImg.onclick = function () {
    window.location.href = 'cart.html'
}
// Click on event to jump to store.html page
searchImg.onclick = function () {
    window.location.href = 'store.html'
}
