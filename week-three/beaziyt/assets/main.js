document.addEventListener('DOMContentLoaded', ready)

function ready () {document.title='Week Four'
var squareone = document.querySelector('.squareone')
var circletwo = document.querySelector('.circleone')

  function circletwoClicked () {
      console.log("you clicked it")
      if (circletwo.classList.contains('clicked')){
        circletwo.classList.remove('clicked');
      } else {
        circletwo.classList.add('clicked');
      }
  }

  function squareoneClicked () {
      console.log("you clicked it")
      if (squareone.classList.contains('clicked')){
        squareone.classList.remove('clicked');
      } else {
        squareone.classList.add('clicked');
      }
  }

squareone.addEventListener('click', squareoneClicked)
circletwo.addEventListener('click', circletwoClicked)

}
