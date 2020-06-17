document.addEventListener('DOMContentLoaded', ready)

function ready() {
  var button = document.querySelector('button')
  var apple = document.querySelector('.apple')
  var orange = document.querySelector('.orange')

  function buttonClicked() {
    if(apple.classList.contains('clicked')) {
      apple.classList.remove('clicked')
    } else {
      apple.classList.add('clicked')
    }
  }

  button.addEventListener('click', buttonClicked)
}