const fs = require("fs");
const input = fs
  .readFileSync("../inputs/11047.txt")
  .toString()
  .trim()
  .split("\n");

let totalMoney = input[0].split(" ")[1];
input.shift();

input.sort((a, b) => b - a);

let count = 0;
let remain = Number(totalMoney);

for (i in input) {
  if (remain > 0 && remain > Number(input[i])) {
    count = parseInt(count + remain / input[i]);
    remain = remain % input[i];
  }
}
console.log(count);
