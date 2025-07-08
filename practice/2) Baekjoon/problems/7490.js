let fs = require("fs");
let input = fs.readFileSync("../inputs/7490.txt").toString().trim().split("\n");

console.log(input);
let N = 0;
let result = [];
let cal = [" ", "+", "-"];
let answer = [];
let totalResult = [];

for (let i = 1; i <= Number(input[0]); i++) {
  totalResult.push(resultFunc(Number(input[i])));
  if (i != input[0]) {
    totalResult.push('');
  }
}

console.log(totalResult.join('\n'));

function resultFunc(number) {
  answer = [];
  N = number;
  recursive(1);
  return answer.join('\n');
}

function recursive(number) {
  if (number == N + 1) {
    if (calculate(result) === 0) {
      answer.push(result.join("")); // 한번에 모으던가 바로 출력하던가
    }
    return;
  }
  if (number == 1) {
    result.push(String(number));
    recursive(number + 1);
    result.pop();
  } else {
    for (let i = 0; i < 3; i++) {
      // 연산 반복
      result.push(cal[i] + number);
      recursive(number + 1);
      result.pop();
    }
  }
}

function calculate(orgArr) {
  let str = orgArr.join("").replaceAll(" ", "");
  return eval(str);
}
