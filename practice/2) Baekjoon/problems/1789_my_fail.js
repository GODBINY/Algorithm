const fs = require("fs");
const input = fs
  .readFileSync("../inputs/1789.txt")
  .toString()
  .trim()
  .split("\n");

let s = Number(input[0]);
let n = 0;
let a = 0;

while (a < s) {
  n++;
  for (let i = 0; i <= n; i++) {
    if (a >= s) {
      break;
    } else {
      a++;
    }
  }
}

console.log(n);
console.log(1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10 + 11 + 12 + 13 + 14 + 15 + 16 + 17 + 18 + 19 + 20);
