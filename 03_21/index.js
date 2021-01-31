let btnF = document.querySelector('.first')
let btnS = document.querySelector('.second')

let box = document.querySelector('.box')
let width = box.clientWidth
let offsetWidth = box.offsetWidth
let height = box.clientHeight
let offsetHeight = box.offsetHeight
let scrHeight = box.scrollHeight
console.log(width, offsetWidth)
console.log(height, offsetHeight)
console.log(scrHeight)
console.log(box.getBoundingClientRect())

btnF.addEventListener('click', () => (box.scrollTop = 0))
btnS.addEventListener('click', () =>
  box.scrollTo({ top: 0, behavior: 'smooth' })
)
