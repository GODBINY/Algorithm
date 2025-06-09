const fs = require("fs");
const input = fs
  .readFileSync("../inputs/19939.txt")
  .toString()
  .trim()
  .split("\n");

let n = Number(input[0].split(' ')[0]);
let k = Number(input[0].split(' ')[1]);

// console.log(n, k);

let limit = 0; // k가 있다면 n은 limit 이상이어야 한다.

for (let num = 1; num <= k; num++) {
  limit += num;
}
console.log(limit)

if (limit <= n) {
  n = n - limit;
  if (n % k === 0) {
    console.log(k - 1);
  } else {
    console.log(k);
  }
} else {
  console.log(-1);
}


