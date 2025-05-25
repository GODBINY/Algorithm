const fs = require("fs");
const input = fs
  .readFileSync("../inputs/1789.txt")
  .toString()
  .trim()
  .split("\n");

let s = Number(input[0]);
let sum = 0;
let answer = 0;

while (sum <= s) {
  answer++;
  sum += answer;
}

console.log(answer - 1);
