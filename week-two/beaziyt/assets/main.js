document.addEventListener('DOMContentLoaded', ready)

function ready () {document.title='bezs page'
var button = document.querySelector('button')
var hakim = document.querySelector('.hakim')
var krasa = document.querySelector('.krasa')
var saha = document.querySelector('.saha')
var mezi = document.querySelector('.mezi')
var zebra = document.querySelector('.zebra')
var bratrim = document.querySelector('.bratrim')
var a = document.querySelector('.a')
var rim = document.querySelector('.rim')
var trima = document.querySelector('.trima')
var maj = document.querySelector('.maj')
var jara = document.querySelector('.jara')

  function krasaClicked () {
      console.log("you clicked it")
      if (krasa.classList.contains('clicked')){
        krasa.classList.remove('clicked');
      } else {
        krasa.classList.add('clicked');
      }
  }

  function hakimClicked () {
      console.log("you clicked it")
      if (hakim.classList.contains('clickedhakim')){
        hakim.classList.remove('clickedhakim');
      } else {
        hakim.classList.add('clickedhakim');
      }
  }

  function sahaClicked () {
      console.log("you clicked it")
      if (saha.classList.contains('clickedsaha')){
        saha.classList.remove('clickedsaha');
      } else {
        saha.classList.add('clickedsaha');
      }
  }

  function meziClicked () {
      console.log("you clicked it")
      if (mezi.classList.contains('clickedmezi')){
        mezi.classList.remove('clickedmezi');
      } else {
        mezi.classList.add('clickedmezi');
      }
  }

  function zebraClicked () {
      console.log("you clicked it")
      if (zebra.classList.contains('clickedzebra')){
        zebra.classList.remove('clickedzebra');
      } else {
        zebra.classList.add('clickedzebra');
      }
  }

  function bratrimClicked () {
      console.log("you clicked it")
      if (bratrim.classList.contains('clickedbratrim')){
        bratrim.classList.remove('clickedbratrim');
      } else {
        bratrim.classList.add('clickedbratrim');
      }
  }

  function bratrimClicked () {
      console.log("you clicked it")
      if (bratrim.classList.contains('clickedbratrim')){
        bratrim.classList.remove('clickedbratrim');
      } else {
        bratrim.classList.add('clickedbratrim');
      }
  }

  function aClicked () {
      console.log("you clicked it")
      if (a.classList.contains('clicked')){
        a.classList.remove('clicked');
      } else {
        a.classList.add('clicked');
      }
  }

  function rimClicked () {
      console.log("you clicked it")
      if (rim.classList.contains('clickedhakim')){
        rim.classList.remove('clickedhakim');
      } else {
        rim.classList.add('clickedhakim');
      }
  }

  function trimaClicked () {
      console.log("you clicked it")
      if (trima.classList.contains('clickedsaha')){
        trima.classList.remove('clickedsaha');
      } else {
        trima.classList.add('clickedsaha');
      }
  }

  function majClicked () {
      console.log("you clicked it")
      if (maj.classList.contains('clickedmezi')){
        maj.classList.remove('clickedmezi');
      } else {
        maj.classList.add('clickedmezi');
      }
  }

  function jaraClicked () {
      console.log("you clicked it")
      if (jara.classList.contains('clickedzebra')){
        jara.classList.remove('clickedzebra');
      } else {
        jara.classList.add('clickedzebra');
      }
  }

  function krasamouseEnter (){
    console.log("krasamouseEnter")
    if (krasa.classList.contains('krasamouseEnter')){
      krasa.classList.remove('krasamouseEnter');
    } else {
      krasa.classList.add('krasamouseEnter')
    }
  }

  function krasamouseLeave (){
    console.log("krasamouseLeave")
    if (krasa.classList.contains('krasamouseLeave')){
      krasa.classList.remove('krasamouseLeave');
    } else {
      krasa.classList.add('krasamouseLeave')
    }
  }

  function hakimmouseEnter (){
    console.log("hakimmouseEnter")
    if (hakim.classList.contains('krasamouseEnter')){
      hakim.classList.remove('krasamouseEnter');
    } else {
      hakim.classList.add('krasamouseEnter')
    }
  }

  function sahamouseEnter (){
    console.log("sahamouseEnter")
    if (saha.classList.contains('krasamouseEnter')){
      saha.classList.remove('krasamouseEnter');
    } else {
      saha.classList.add('krasamouseEnter')
    }
  }

  function mezimouseEnter (){
    console.log("mezimouseEnter")
    if (mezi.classList.contains('krasamouseEnter')){
      mezi.classList.remove('krasamouseEnter');
    } else {
      mezi.classList.add('krasamouseEnter')
    }
  }

krasa.addEventListener('click', krasaClicked)
hakim.addEventListener('click', hakimClicked)
saha.addEventListener('click', sahaClicked)
mezi.addEventListener('click', meziClicked)
zebra.addEventListener('click', zebraClicked)
mezi.addEventListener('click', meziClicked)
bratrim.addEventListener('click', bratrimClicked)
a.addEventListener('click', aClicked)
rim.addEventListener('click', rimClicked)
trima.addEventListener('click', trimaClicked)
maj.addEventListener('click', majClicked)
jara.addEventListener('click', jaraClicked)
krasa.addEventListener('mouseenter', krasamouseEnter)
saha.addEventListener('mouseenter', sahamouseEnter)
hakim.addEventListener('mouseenter', hakimmouseEnter)
mezi.addEventListener('mouseenter', mezimouseEnter)

}
