let fs = require("fs");
let input = fs
  .readFileSync("../inputs/9663.txt")
  .toString()
  .trim()
  .split("\n");

console.log(Number(input[0]));
const number = Number(input[0]);
let path = [];

function recursive(depth) {
  console.log(depth)
  if (depth === number) {
    console.log(path);
  }
  for (let i = 0; i < number; i++) {
    if (!isPossible(depth, i)) continue;
    path.push([depth, i]);
    recursive(depth + 1);
    path.pop();
  }
}

function isPossible(a, b) {
  let answer = true;
  for ([x, y] in path) {
    if (x === a) answer = false;
    if (y === b) answer = false;
    if (Math.abs(x - a) === Math.abs(y - b)) answer = false;
  }
  return answer;
}

// recursive(0);

console.log(isPossible(0, 0))
