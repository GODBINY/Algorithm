const fs = require("fs");
const input = fs
  .readFileSync("../inputs/9009.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

console.log(input);
const num = input[0];

let arr = new Array(100).fill(0);

for (let i = 0; i < arr.length; i++) {
  if (i <= 1) {
    arr[i] = i;
  } else {
    arr[i] = arr[i - 1] + arr[i - 2];
  }
}

console.log(arr);
