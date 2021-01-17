const money = +prompt('Ваш бюджет на месяц, грн.:', '')
const time = prompt('Введите дату в формате YYYY-MM-DD','')

const appData = {
  budget: money,
  timeData: time,
  expenses: {
    
  },
  optionalExpense: {
    
  },
  income: [],
  savings: false
}
appData.expenses[prompt('Введите обязательную стаью расходов в этом месяце:','')] = +prompt('Во сколько обойдется: грн.','')

console.log(appData)

const budgetPerDay = (appData.budget - appData.expenses[Object.keys(appData.expenses)]) / 30

alert(`Бюджет на 1 день равен ${budgetPerDay} грн.`)
