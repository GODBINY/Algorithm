let fs = require("fs");
let input = fs
  .readFileSync("../inputs/15652.txt")
  .toString()
  .trim()
  .split("\n");

console.log(input);
let arr = input[0].split(' ').map(Number);
const N = arr[0];
const M = arr[1];
let path = [];
let answer = [];

function dfs(start, depth) {
  if (depth === M + 1) {
    answer.push(path.join(' '));
    return;
  }

  for (let i = start; i <= N; i++) {
    path.push(i);
    dfs(i, depth + 1);
    path.pop();
  }
}

dfs(1, 1);

console.log(answer.join('\n'));
