const fs = require("fs");
const input = fs
  .readFileSync("../inputs/19939.txt")
  .toString()
  .trim()
  .split("\n");

const N = Number(input[0].split(" ")[0]);
const K = Number(input[0].split(" ")[1]);
let maxKList = [];
let n = 1;

let answer = 0;

while (maxKList.length < 10000) {
  for (let num = 0; num < n + 1; num++) {
    maxKList.push(n);
  }
  n++;
}

if (K > maxKList[N - 1]) {
  answer = -1;
} else {
  if (N % K === 0) {
    answer = N / K;
  } else {
    answer = parseInt(N / K) + 1;
  }
}

console.log(answer);
