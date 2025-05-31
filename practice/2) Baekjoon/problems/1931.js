const fs = require("fs");
const input = fs
  .readFileSync("../inputs/1931.txt")
  .toString()
  .trim()
  .split("\n");

console.log(input);

const num = input.shift();
const arr = input.map(item => item.split(' ').map(Number)).sort((a, b) => a[1] - b[1]);

console.log(num);
console.log(arr);

let lastValue = [];
let answer = 0;

for (let i = 0; i < num; i++) {
  if (i === 0) {
    lastValue = arr[i][1];
    answer++;
  } else {
    let min = 2 ** 31 - 1;
    let fitValue = [];
    for (let j = i; j < num; j++) {
      if (lastValue - arr[j][0] < min) {
        min = lastValue - arr[j][0];
        fitValue = arr[j];
      }
    }
    if (fitValue != []) {
      lastValue = fitValue[1];
      console.log(lastValue);
      answer++
    }
  }
}
console.log(answer)

