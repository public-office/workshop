document.addEventListener('DOMContentLoaded', ready)

function ready (){
var button =document.querySelector('apple')
var apple =document.querySelector('.melon')


// console.log(button)
function buttonClicked () {
    console.log("you clicked it")
    if (melon.classList.contains('clicked')){
      melon.classList.remove('clicked');
    } else {
      melon.classList.add('clicked')
    }
}
button.addEventListener('click', buttonClicked)
}
