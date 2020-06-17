  document.addEventListener('DOMContentLoaded', ready)

function ready (){
  var button =document.querySelector('button')
  var apple =document.querySelector('.apple')
  var orange =document.querySelector('.button')


  // console.log(button)
  function buttonClicked () {
      console.log("you clicked it")
      if (apple.classList.contains('clicked')){
        apple.classList.remove('clicked');
      } else {
        apple.classList.add('clicked')
      }
  }
  button.addEventListener('click', buttonClicked)
}
