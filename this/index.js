// class User {
//   constructor(name, id) {
//     this.name = name;
//     this.id = id;
//     this.human = true;
//   }
//   hello() {
//     console.log(`Hello! ${this.name}`)
//   }
//   exit() {
//     console.log(`Пользователь ${this.name} покинул сайт`)
//   }
// }
// let ivan = new User('Ivan', 23),
//     roman = new User('Roman', 45)

// console.log(ivan)
// console.log(roman)
// roman.hello()
// ivan.exit()


// function showThis(a,b) {
//   console.log(this)
//   function sum() {
//     console.log(this)
//     return a + b
    
//   }
//   console.log(sum())
  
// }
// showThis(4,5)
// showThis(6,5)

// let obj = {
//   a: 20,
//   b: 15,
//   sum() {
//     console.log(this.a + this.b)
    
//   }
// }
// obj.sum()

// let user = {
//   name: 'John'
// }
// function sayHello(surname) {
//   console.log(this)
//   console.log(`Hello, ${this.name} ${surname}!`)
// }

// console.log(sayHello.call(user, 'Doe'))
// console.log(sayHello.apply(user, ['Smith']))

function count(number) {
  console.log(this)
  return this * number
  
}
let double = count.bind(20)

console.log(double(10))
