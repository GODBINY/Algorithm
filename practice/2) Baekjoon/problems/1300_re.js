let fs = require("fs");
let input = fs
  .readFileSync("../inputs/1300.txt")
  .toString()
  .trim()
  .split("\n");

const n = Number(input[0]);
const k = Number(input[1]);

let start = 1;
let end = 10 ** 10;
let result = 0;

while (start <= end) {
  let mid = parseInt((start + end) / 2);
  let total = 0;

  for (let i = 1; i <= n; i++) {
    // mid가 무지하게 클 수도 있는데 제한장치가 필요함.
    // total += parseInt(mid / i); 
    total += Math.min(parseInt(mid / i), n);
  }
  console.log(total, mid)

  if (total >= k) {
    result = mid;
    end = mid - 1; // 더 작은 쪽도 조건 만족할지 확인
  } else {
    start = mid + 1; // 더 큰 쪽도 조건 만족할지 확인 (더 큰 값이 필요할 경우)
  }
}

console.log(result);

