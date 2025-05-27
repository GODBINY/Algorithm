const fs = require("fs");
const input = fs
  .readFileSync("../inputs/1946.txt")
  .toString()
  .trim()
  .split("\n");

input.shift();

let result = [];
let tempArr = [];
let idx = 0;

for (let i = 0; i < input.length; i++) {
  if (input[i].split(' ').length === 1) {
    idx = Number(input[i]);
  } else {
    tempArr.push(input[i].split(' '));
    if (tempArr.length === idx) {
      result.push(tempArr);
      tempArr = [];
    }
  }
}
let sortedList = result.map((item, idx) => {
  let sortedArr = [...item];
  sortedArr.sort((a, b) => Number(a[0]) - Number(b[0]));
  return sortedArr;
})
console.log(sortedList)
result.sort((a, b) => Number(a[0]) - Number(b[0]));
console.log(result)
// console.log(sortedList)

let answer = [];

result.forEach((item) => {
  let innerAnswer = 0;
  let min = 100001;

  for (let [x, y] of item) {
    if (y < min) {
      min = y;
      innerAnswer++;
    }
  }

  answer.push(innerAnswer);
})

console.log(answer.join('\n'))
