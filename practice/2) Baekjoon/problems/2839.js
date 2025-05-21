const fs = require("fs");
const input = fs
  .readFileSync("../inputs/2839.txt")
  .toString()
  .trim()
  .split("\n");

let total = Number(input[0]);
let bag = -1;
let bagList = [];

for (let i = 0; 3 * i <= total; i++) {
  for (let j = 0; 5 * j <= total; j++) {
    if ((i * 3) + (j * 5) === total) {
      bag = i + j;
      bagList.push(bag);
    }
  }
}

bagList.sort((a, b) => a - b);

console.log(bagList[0] ?? -1);
