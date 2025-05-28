const fs = require("fs");
const input = fs
  .readFileSync("../inputs/16953.txt")
  .toString()
  .trim()
  .split("\n");

// 더하는 연산은 무조건 뒤에 1을 붙이니까..
// 결과값 맨 끝자리에 따라 몇배수 됐는지 역으로 계산 가능

let inputs = input[0].split(' ');
let answer = 0;
let output = inputs[1];
let isValid = 0;
let lastChar = output[output.length - 1];
reverseCal(output);
// 끝의 자리가 1 2 3 4 5 6 7 8 9
// 1: 1붙이기 연산한거
// 2 4 6 8 : 2배 연산한거
// 3 5 7 9 : 연산 자체를 안한 것
function reverseCal(num) {
  if (Number(num) < Number(inputs[0]) || isValid) {
    return
  }
  let number = num.toString();
  if (number === inputs[0]) {
    isValid = true;
    return;
  }
  let lastChar = Number(number.toString()[number.toString().length - 1]);
  if (lastChar % 2 === 0) {
    answer++;
    reverseCal(Number(number) / 2)
  } else if (lastChar === 1) {
    answer++;
    reverseCal(number.toString().slice(0, number.toString().length - 1));
  } else if (lastChar % 2 === 1) {
    return;
  }
}
console.log(isValid ? answer + 1 : -1);
