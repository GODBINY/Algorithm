const fs = require("fs");
const input = fs
  .readFileSync("../inputs/9009.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

let num = input[0];
let arr = new Array(100).fill(0);
let answer = [];

for (let i = 0; i < arr.length; i++) {
  if (i <= 1) {
    arr[i] = i;
  } else {
    arr[i] = arr[i - 1] + arr[i - 2];
  }
}

for (let i = 1; i <= num; i++) {
  let arr = [];
  cal(input[i], arr);
  answer.push(arr)
}

function cal(number, orgArr) {
  let n = 0;
  let org = number;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] <= number) {
      n = arr[i];
    } else {
      break;
    }
  }

  if (n > 0) {
    org -= n
    orgArr.unshift(n);
    cal(org, orgArr);
  }
}

let ans = answer.map((item) => { return item.join(' ') }).join('\n');

console.log(ans)


