window.addEventListener('DOMContentLoaded', function () {
  let tab = document.querySelectorAll('.info-header-tab'),
    info = document.querySelector('.info-header'),
    tabContent = document.querySelectorAll('.info-tabcontent')

  function hideTabContent(a) {
    for (let i = a; i < tabContent.length; i++) {
      tabContent[i].classList.remove('show')
      tabContent[i].classList.add('hide')
    }
  }
  hideTabContent(1)

  function showTabContent(b) {
    if (tabContent[b].classList.contains('hide')) {
      tabContent[b].classList.remove('hide')
      tabContent[b].classList.add('show')
    }
  }

  info.addEventListener('click', function (e) {
    let target = e.target
    if (target && target.classList.contains('info-header-tab')) {
      for (let i = 0; i < tab.length; i++) {
        if (target == tab[i]) {
          hideTabContent(0)
          showTabContent(i)
          break
        }
      }
    }
  })

  //****timer****

  let deadLine = '2021-02-02'

  function getTimeRemaining(endtime) {
    let t = Date.parse(endtime) - Date.parse(new Date()),
      seconds = Math.floor((t / 1000) % 60),
      minutes = Math.floor((t / 1000 / 60) % 60),
      hours = Math.floor(t / (1000 * 60 * 60)) - 2

    return {
      total: t,
      hours: hours,
      minutes: minutes,
      seconds: seconds,
    }
  }

  function setClock(id, endtime) {
    let timer = document.getElementById(id),
      hours = document.querySelector('.hours'),
      minutes = document.querySelector('.minutes'),
      seconds = document.querySelector('.seconds'),
      timeInterval = setInterval(updateClock, 1000)

    function updateClock() {
      let t = getTimeRemaining(endtime)
      hours.textContent = t.hours > 9 ? t.hours : '0' + t.hours
      minutes.textContent = t.minutes > 9 ? t.minutes : '0' + t.minutes
      seconds.textContent = t.seconds > 9 ? t.seconds : '0' + t.seconds

      if (t.total <= 0) {
        clearInterval(timeInterval)
        hours.textContent = minutes.textContent = seconds.textContent = '00'
      }
    }
  }

  setClock('timer', deadLine)

  //****Modal****

  let more = document.querySelector('.more'),
    overlay = document.querySelector('.overlay'),
    close = document.querySelector('.popup-close')

  more.addEventListener('click', function () {
    overlay.style.display = 'block'
    this.classList.add('more-splash')
    document.body.style.overflow = 'hidden'
  })
  close.addEventListener('click', function () {
    overlay.style.display = 'none'
    more.classList.remove('more-splash')
    document.body.style.overflow = ''
  })
})
