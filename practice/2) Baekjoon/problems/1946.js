const fs = require("fs");
const input = fs
  .readFileSync("../inputs/1946.txt")
  .toString()
  .trim()
  .split("\n");

let result = [];
let i = 1;

while (i < input.length) {
  const count = Number(input[i]);
  let tempArr = [];

  for (let j = 1; j <= count; j++) {
    tempArr.push(input[i + j].split(' ').map(Number));
  }

  result.push(tempArr);
  i += count + 1;
}

let answer = [];
result.forEach((item) => {
  let innerAnswer = 0;
  let min = 100001;

  item.sort((a, b) => a[0] - b[0]);
  for (let [x, y] of item) {
    if (y < min) {
      min = y;
      innerAnswer++;
    }
  }

  answer.push(innerAnswer);
});
console.log(answer.join('\n'));
