let arr = document.querySelectorAll('.menu-item');
console.log(arr);

let menu = document.querySelector('.menu')
menu.insertBefore(arr[2], arr[1])
let li = document.createElement('li')
li.classList.add('menu-item')
li.textContent = 'Пятый пункт'
menu.appendChild(li)

document.body.style.background = 'url(img/apple_true.jpg)'

let title = document.querySelector('#title')
title.textContent = 'Мы продаем только подлинную технику Apple'

let adv = document.querySelector('.adv'),
column = document.querySelectorAll('.column')
column[1].removeChild(adv)

let answer = prompt('Ваше отношение к технике Apple?','')

let promptBox = document.querySelector('.prompt')
promptBox.textContent = answer