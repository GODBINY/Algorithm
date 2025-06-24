let fs = require("fs");
let input = fs
  .readFileSync("../inputs/2512.txt")
  .toString()
  .trim()
  .split("\n");

console.log(input)

const num = Number(input[0]);
const arr = input[1].split(' ').map(Number);
const budget = Number(input[2]);
let selectedNum = 0;


let start = 1;
let end = arr.reduce((a, b) => Math.max(a, b));
let result = 0;

while (start <= end) {
  let mid = parseInt((start + end) / 2);
  let total = 0;
  for (x of arr) {
    total += Math.min(mid, x);
  }
  if (total <= budget) {
    result = mid;
    start = mid + 1;
  } else {
    end = mid - 1;
  }
}

console.log(result)
