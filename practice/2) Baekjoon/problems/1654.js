let fs = require("fs");
let input = fs
  .readFileSync("../inputs/1654.txt")
  .toString()
  .trim()
  .split("\n");

let k = Number(input[0].split(' ')[0]);
let n = Number(input[0].split(' ')[1]);

input.shift();

let arr = input.map(Number);

let start = 1;
let end = arr.reduce((a, b) => Math.max(a, b));

let result = -1;

while (start <= end) {
  let mid = Math.floor((start + end) / 2);
  let total = 0;

  for (x of arr) {
    total += parseInt(x / mid);
  }

  if (total >= n) {
    result = mid;
    start = mid + 1; // 더 큰 쪽도 조건 만족할지 확인
  } else {
    end = mid - 1;
  }
}

console.log(result)


