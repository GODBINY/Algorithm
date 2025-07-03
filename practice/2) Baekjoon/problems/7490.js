let fs = require("fs");
let input = fs
  .readFileSync("../inputs/7490.txt")
  .toString()
  .trim()
  .split("\n");

console.log(input);

const N = 3;
let result = [];
let cal = ['+', '-', ' '];
let visited = [];
let answer = [];

function recursive(number) {
  if (number === 1) {
    result.push('1');
  }
  if (calculate(result) === 0 && number == N + 1) {
    answer.push(result); // 한번에 모으던가 바로 출력하던가
    return;
  }
  for (let i = 0; i < 3; i++) { // 연산 반복
    visited[i] = true;
    result.push(cal[i] + number);
    recursive(number + 1);
    result.pop()
  }
}

// recursive(1)

// console.log(answer);

function calculate(orgArr) {
  let str = orgArr.join('').replaceAll(' ', '');
  return eval(str);
}

console.log(calculate(['1', '+', '2']));
