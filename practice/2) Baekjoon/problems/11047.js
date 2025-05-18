const fs = require("fs");
const input = fs.readFileSync("../inputs/11047.txt").toString().trim().split("\n");

let totalMoney = input[0].split(' ')[1];
console.log(input)
input.shift();

console.log(input)

input.sort((a, b) => b - a);

let count = 0;
let remain = totalMoney;

input.forEach(item => {
  if (remain > 0) {
    count = remain / item;
    remain = remain % item;
  }
})

console.log(count);
console.log(remain);


