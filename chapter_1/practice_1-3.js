'use strict'

let number = 1

for (let i = 1; i <= 10; i++) {
    number = number * i
    console.log(`index ${i}: ${number}`)
}
console.log(number)