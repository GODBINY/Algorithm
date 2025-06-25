let fs = require("fs");
let input = fs
  .readFileSync("../inputs/2805.txt")
  .toString()
  .trim()
  .split("\n");

console.log(input)
let num = Number(input[0].split(' ')[0]);
let bag = Number(input[0].split(' ')[1]);
let arr = input[1].split(' ').map(Number);

let start = 0;
let end = arr.reduce((a, b) => Math.max(a, b));

let result = -1;

while (start <= end) {
  let mid = Math.floor((start + end) / 2);
  let total = 0;

  for (x of arr) {
    total += x - mid > 0 ? x - mid : 0;
  }

  if (bag <= total) {
    result = mid;
    start = mid + 1; // 더 큰 쪽도 조건 만족할지 확인
  } else {
    end = mid - 1;
  }
}

console.log(result)
