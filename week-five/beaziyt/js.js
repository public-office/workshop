document.addEventListener('DOMContentLoaded', ready)

function ready (){
var button =document.querySelector('button')
var apple =document.querySelector('.apple')
var orange =document.querySelector('.orange')
var plum =document.querySelector('.plum')
var text =document.querySelector('.text')
var texts =document.querySelector('.texts')


// console.log(button)
function buttonClicked () {
    // console.log("you clicked it")
    if (apple.classList.contains('clicked')){
      apple.classList.remove('clicked');
    } else {
      apple.classList.add('clicked');
    }
    if (orange.classList.contains('clicked')){
      orange.classList.remove('clicked');
    } else {
      orange.classList.add('clicked');
    }
    if (plum.classList.contains('clicked')){
      plum.classList.remove('clicked');
    } else {
      plum.classList.add('clicked');
    }

}

function plumClicked () {
    // console.log("you clicked it")
    if (plum.classList.contains('clicked')){
      plum.classList.remove('clicked');
    } else {
      plum.classList.add('clicked');
    }
}

function appleClicked () {
    // console.log("you clicked it")
    if (apple.classList.contains('clicked')){
      apple.classList.remove('clicked');
    } else {
      apple.classList.add('clicked');
    }
}

function orangeClicked () {
    // console.log("you clicked it")
    if (orange.classList.contains('clicked')){
      orange.classList.remove('clicked');
    } else {
      orange.classList.add('clicked');
    }
}

function textmouseDown () {
    // console.log("you clicked it")
    if (text.classList.contains('mousedown')){
      text.classList.remove('mousedown');
    } else {
      text.classList.add('mousedown');
    }
}

function textsmouseEnter () {
    console.log("mouseenter")
    if (texts.classList.contains('mouseenter')){
      texts.classList.remove('mouseenter');
    } else {
      texts.classList.add('mouseenter');
    }
}

function textsmouseLeave () {
    console.log("mouseleave")
    if (texts.classList.contains('mouseenter')){
      texts.classList.remove('mouseleave');
    } else {
      texts.classList.add('mouseleave');
    }
}

button.addEventListener('click', buttonClicked)
plum.addEventListener('click', plumClicked)
apple.addEventListener('click', appleClicked)
orange.addEventListener('click', orangeClicked)
text.addEventListener('mousedown', textmouseDown);
texts.addEventListener('mouseenter', textsmouseEnter);
texts.addEventListener('mouseleave', textsmouseLeave);
}
