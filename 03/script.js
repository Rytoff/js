window.addEventListener('DOMContentLoaded', function () {
  console.log('DOM content loaded...')

  let btnBlock = document.querySelector('.btn-block'),
    btns = document.getElementsByTagName('button')

  btnBlock.addEventListener('click', function (e) {
    if (e.target && e.target.matches('button.first')) {
      console.log('Hello')
    }
  })
})
