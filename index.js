let money, time
;(function start() {
  money = +prompt('Ваш бюджет на месяц, грн.:', '')
  time = prompt('Введите дату в формате YYYY-MM-DD', '')
  while (isNaN(money) || money == '' || money == null) {
    money = +prompt('Ваш бюджет на месяц, грн.:', '')
  }
})()

const appData = {
  budget: money,
  timeData: time,
  expenses: {},
  optionalExpense: {},
  income: [],
  savings: true,
}

function chooseExpenses() {
  for (let i = 0; i < 2; i++) {
    console.log(i)
    let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
      b = +prompt('Во сколько обойдется, грн.', '')

    if (
      typeof a === 'string' &&
      typeof a != null &&
      typeof b != null &&
      a != '' &&
      b != '' &&
      typeof b === 'number' &&
      a.length < 50
    ) {
      console.log('done')
      appData.expenses[a] = +b
    } else {
      i -= 1
    }
  }
}
chooseExpenses()

function detectDayBudget() {
  appData.moneyPerDay = +(appData.budget / 30).toFixed()
  alert(`Ежедневный бюджет: ${appData.moneyPerDay}`)
}
detectDayBudget()

function detectLevel() {
  if (appData.moneyPerDay < 100) {
    console.log('Минимальный уровень достатка')
  } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log('Средний уровень достатка')
  } else if (appData.moneyPerDay > 2000) {
    console.log('Высокий уровень достатка')
  } else {
    console.log('Произошла ошибка...')
  }
}
detectLevel()

function checkSevings() {
  if (appData.savings == true) {
    let save = +prompt('Какова сумма накоплений?', ''),
      percent = +prompt('Под какой процент?')

    appData.monthIncome = (save / 100 / 12) * percent
    alert(`Доход в месяц с вашего депозита ${appData.monthIncome}`)
  }
}
checkSevings()

function chooseOptExpenses() {
  for(let i = 0; i < 3; i++) {
    appData.optionalExpense[i + 1] = prompt('Статья необязательных расходов?','')
  }
}
chooseOptExpenses()
