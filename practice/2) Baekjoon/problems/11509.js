const fs = require("fs");
const input = fs
  .readFileSync("../inputs/11509.txt")
  .toString()
  .trim()
  .split("\n");

let num = Number(input[0]);
let array = input[1].split(' ').map(Number);
let arrowList = new Array(1000001).fill(0);
let result = 0;

for (let i = 0; i < num; i++) {
  let height = array[i];
  if (arrowList[height] > 0) {
    arrowList[height] -= 1;
    arrowList[height - 1] += 1;
  } else {
    result++;
    arrowList[height - 1] += 1;
  }
}

console.log(result);
