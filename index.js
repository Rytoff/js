const money = +prompt('Ваш бюджет на месяц, грн.:', '')
const time = prompt('Введите дату в формате YYYY-MM-DD', '')

const appData = {
  budget: money,
  timeData: time,
  expenses: {},
  optionalExpense: {},
  income: [],
  savings: false,
}

for(let i = 0; i < 2; i++) {
  let a = prompt('Введите обязательную статью расходов в этом месяце',''),
  b = prompt('Во сколько обойдется, грн.','')

  if(typeof(a) === 'string' && typeof(a) != null && typeof(b) != null && a != '' && b != '' && a.length < 50) {
    console.log('done')
    appData.expenses[a] = +b
  }
}

appData.moneyPerDay = appData.budget / 30

alert(`Ежедневный бюджет: ${appData.moneyPerDay}`)

if(appData.moneyPerDay < 100) {
  console.log('Минимальный уровень достатка')
} else if(appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
  console.log('Средний уровень достатка')
} else if(appData.moneyPerDay > 2000) {
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
