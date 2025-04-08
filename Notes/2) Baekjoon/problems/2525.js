let fs = require('fs')
let input = fs.readFileSync('../inputs/2525.txt').toString().split('\n')

let now = input[0].split(' ')
let hour = now[0]
let min = now[1]
let timer = input[1]

console.log(input[0].split(' '))
console.log(input[1])

console.log(timer/60)
