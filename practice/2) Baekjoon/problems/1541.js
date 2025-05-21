const fs = require("fs");
const input = fs
  .readFileSync("../inputs/1541.txt")
  .toString()
  .trim()
  .split("\n");

// 음수가 가장 많아야한다.
let group = input[0].split('-')
console.log(group)

let plusGroup = group.map((item) => {
  return item.split('+').map(Number).reduce((acc, cur) => acc + cur, 0)
})

console.log(plusGroup)

let answer = plusGroup.reduce((acc, cur) => acc - cur)
console.log(answer)
