let fs = require("fs");
let input = fs
  .readFileSync("../inputs/9663.txt")
  .toString()
  .trim()
  .split("\n");

const number = Number(input[0]);
let path = [];
let answer = 0;

function recursive(depth) {
  if (depth === number + 1) {
    answer++;
    return;
  }
  for (let i = 1; i <= number; i++) {
    if (!isPossible(depth, i)) continue;
    path.push([depth, i]);
    recursive(depth + 1);
    path.pop();
  }
}

function isPossible(a, b) {
  if (path.length === 0) return true;
  for (let [x, y] of path) {
    if ((x === a) || (y === b) || Math.abs(x - a) === Math.abs(y - b)) {
      return false;
    }
  }
  return true;
}

recursive(1);
console.log(answer);
