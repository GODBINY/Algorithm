const fs = require("fs");
const input = fs
  .readFileSync("../inputs/1931.txt")
  .toString()
  .trim()
  .split("\n");

console.log(input);

const num = input.shift();
const arr = input.map(item => item.split(' ').map(Number)).sort((a, b) => {
  if (a[1] !== b[1]) {
    return a[1] - b[1]
  } else {
    return a[0] - b[0];
  }
});

console.log(num);
console.log(arr);

let count = 0;
let [a, b] = [0, 0];

for ([c, d] of arr) {
  if (c >= b) {
    count++;
    [a, b] = [c, d];
  }
}

console.log(count);

