const fs = require("fs");
const input = fs
  .readFileSync("../inputs/1300.txt")
  .toString()
  .trim()
  .split("\n");

console.log(input);

const n = Number(input[0]);
const k = Number(input[1]);

let start = 1;
let end = 10 ** 10;

let result = -1;

while (start <= end) {
  let mid = Math.floor((start + end) / 2);
  let smaller = 0;

  for (let i = 1; i <= n; i++) {
    smaller += Math.min(parseInt(mid / i), n);
  }

  if (smaller >= k) { // midㄱ보다 작거나 같은 데이터가 k 이상이
    result = mid;
    end = mid - 1; // 더 작은값 있나 찾기
  } else {
    start = mid + 1; // 더 큰 쪽도 조건 만족할지 확인
  }
}

console.log(result)

