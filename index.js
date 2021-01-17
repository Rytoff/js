if (!localStorage.getItem('money')) {
  const money = +prompt('Ваш бюджет на месяц, грн.:', '')
  localStorage.setItem('money', money)
}
if (localStorage.getItem('time') == null) {
  const time = prompt('Введите дату в формате YYYY-MM-DD', '')
  localStorage.setItem('time', time)
}

// const time = prompt('Введите дату в формате YYYY-MM-DD', '')
// localStorage.setItem('time', time)

const appData = {
  budget: +localStorage.getItem('money'),
  timeData: localStorage.getItem('time'),
  expenses: {},
  optionalExpense: {},
  income: [],
  savings: false,
}

for (let i = 0; i < 2; i++) {
  console.log(i)
  let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
    b = +prompt('Во сколько обойдется, грн.', '')

  if (
    // isNaN(!a) &&
    // isNaN(!b) &&
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

appData.moneyPerDay = appData.budget / 30

alert(`Ежедневный бюджет: ${appData.moneyPerDay}`)

if (appData.moneyPerDay < 100) {
  console.log('Минимальный уровень достатка')
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
  console.log('Средний уровень достатка')
} else if (appData.moneyPerDay > 2000) {
  console.log('Высокий уровень достатка')
} else {
  console.log('Произошла ошибка...')
}

// appData.expenses[
//   prompt('Введите обязательную стаью расходов в этом месяце:', '')
// ] = +prompt('Во сколько обойдется: грн.', '')

// console.log(appData)

// const budgetPerDay =
//   (appData.budget - appData.expenses[Object.keys(appData.expenses)]) / 30

// alert(`Бюджет на 1 день равен ${budgetPerDay} грн.`)
