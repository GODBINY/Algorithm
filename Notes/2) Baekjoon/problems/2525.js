let fs = require('fs')
let input = fs.readFileSync('../inputs/2525.txt').toString().split('\n')

let now = input[0].split(' ')
let hour = parseInt(now[0])
let min = parseInt(now[1])
let timer = parseInt(input[1])

let addHour = timer/60
let addMin = timer%60

hour += parseInt(addHour)
min += parseInt(addMin)

if(min>=60){
  hour = parseInt(min/60)
  min = min%60
}

if(hour>=24){
  hour = parseInt(hour%24)
}

console.log(`${hour} ${min}`)
