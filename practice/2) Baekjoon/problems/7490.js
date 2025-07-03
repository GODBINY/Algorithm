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

recursive(1)

console.log(answer);

function calculate(orgArr) {
  let str = orgArr.join('');
  console.log(str)
  let arr = str.replace(' ', '').split(/([+\-*\/])/);
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (i == 0) sum += Number(arr[i]);
    else if (typeof (Number(arr[i])) === 'number') {
      if (arr[i - 1] === '+') {
        sum += Number(arr[i]);
      } else if (arr[i - 1] === '-') {
        sum -= Number(arr[i]);
      }
    }
  }
}
