// let money, time
// ;(function start() {
//   if (!localStorage.getItem('money')) {
//     while (isNaN(money) || money == '' || money == null) {
//       money = +prompt('Ваш бюджет на месяц, грн.:', '')
//     }
//     localStorage.setItem('money', money)
//   }
//   if (!localStorage.getItem('time')) {
//     time = prompt('Введите дату в формате YYYY-MM-DD', '')
//     localStorage.setItem('time', time)
//   }
// })()

// const appData = {
//   budget: +localStorage.getItem('money'),
//   timeData: localStorage.getItem('time'),
//   expenses: {},
//   optionalExpense: {},
//   income: [],
//   savings: true,
//   chooseExpenses: function () {
//     for (let i = 0; i < 2; i++) {
//       console.log(i)
//       let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
//         b = +prompt('Во сколько обойдется, грн.', '')

//       if (
//         typeof a === 'string' &&
//         typeof a != null &&
//         typeof b != null &&
//         a != '' &&
//         b != '' &&
//         typeof b === 'number' &&
//         a.length < 50
//       ) {
//         console.log('done')
//         appData.expenses[a] = +b
//       } else {
//         i -= 1
//       }
//     }
//   },
//   detectDayBudget: function () {
//     appData.moneyPerDay = +(appData.budget / 30).toFixed()
//     alert(`Ежедневный бюджет: ${appData.moneyPerDay}`)
//   },
//   detectLevel: function () {
//     if (appData.moneyPerDay < 100) {
//       console.log('Минимальный уровень достатка')
//     } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
//       console.log('Средний уровень достатка')
//     } else if (appData.moneyPerDay > 2000) {
//       console.log('Высокий уровень достатка')
//     } else {
//       console.log('Произошла ошибка...')
//     }
//   },
//   checkSevings: function () {
//     if (appData.savings == true) {
//       let save = +prompt('Какова сумма накоплений?', ''),
//         percent = +prompt('Под какой процент?')

//       appData.monthIncome = (save / 100 / 12) * percent
//       alert(`Доход в месяц с вашего депозита ${appData.monthIncome}`)
//     }
//   },
//   chooseOptExpenses: function () {
//     for (let i = 0; i < 3; i++) {
//       appData.optionalExpense[i + 1] = prompt(
//         'Статья необязательных расходов?',
//         ''
//       )
//     }
//   },
//   chooseIncome: function () {
//     let items
//     do {
//       items = prompt(
//         'Что принесет дополнительный доход? (Перечислите через запятую)',
//         ''
//       )
//     } while (
//       !isNaN(items) ||
//       items === undefined ||
//       items === null ||
//       items === ''
//     )

//     appData.income = items.split(', ')
//     appData.income.push(prompt('Может что-то еще?', ''))
//     appData.income.sort()

//     console.log('Способы заработка:')
//     appData.income.forEach((item, index) => {
//       console.log(`${index + 1}: ${item}`)
//     })
//   },
// }
// console.log('Наша программа включает в себя данные: ')
// for (let key in appData) {
//   console.log(key)
// }

let box = document.getElementById('box'),
  btn = document.getElementsByTagName('button'),
  circle = document.getElementsByClassName('circle'),
  heart = document.querySelectorAll('.heart'),
  wrapper = document.querySelector('.wrapper')

box.style.backgroundColor = '#eee'
btn[1].style.borderRadius = '50%'
circle[0].style.backgroundColor = 'red'
circle[1].style.backgroundColor = 'yellow'
circle[2].style.backgroundColor = 'green'

heart.forEach((item) => {
  item.style.backgroundColor = 'blue'
})

let div = document.createElement('div'),
  text = document.createTextNode('I was here...')

div.classList.add('black')

// div.innerHTML = `<h1>${text.nodeValue}</h1>`

div.textContent = text.nodeValue

console.log(div)

// document.body.appendChild(div)

// wrapper.appendChild(div)

document.body.insertBefore(div, circle[0])

document.body.removeChild(circle[1])

document.body.replaceChild(btn[1], circle[1])
