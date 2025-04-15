const fs = require("fs");
const input = fs.readFileSync("../inputs/2908.txt").toString().trim().split("\n");

// 풀이
function solution(str) {
  let reverseStr = str.split('').reverse();
  let num = reverseStr.join('').split(' ');
  // return num[0] >= num[1] ? num[0] : num[1];
  return Math.max(Number(num[0]), Number(num[1]));
}

console.log(solution(input[0]));
