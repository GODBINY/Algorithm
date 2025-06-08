// 9009.js 다른 풀이 본 후 다시 풀어보기
const fs = require("fs");
const input = fs
  .readFileSync("../inputs/9009.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

// 피보나치 수열 만들기
let fibo = [];
fibo.push(0);
fibo.push(1);
while (fibo[fibo.length - 1] < 1e9) {
  fibo.push(fibo[fibo.length - 2] + fibo[fibo.length - 1]);
}

let finalResult = [];

for (let tc = 1; tc <= Number(input[0]); tc++) {
  let n = Number(input[tc]);
  let result = [];
  let i = fibo.length - 1
  while (n > 0) {
    if (n >= fibo[i]) {
      n -= fibo[i];
      result.unshift(fibo[i]);
    }
    i--;
  }
  finalResult.push(result);
}

console.log(finalResult.map(item => item.join(' ')).join('\n'))

