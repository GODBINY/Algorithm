let fs = require("fs");
let input = fs
  .readFileSync("../inputs/6603.txt")
  .toString()
  .trim()
  .split("\n");

let temp = [];
let answer = [];
let path = [];
let N = 0;
let M = 6;
let arr = [];

for (let i = 0; i < input.length; i++) {
  temp = [];
  if (input[i] === '0') break;
  let tmpArr = input[i].split(' ').map(Number);
  N = tmpArr.shift();
  arr = tmpArr;
  dfs(0, 0);
  answer.push(temp.join('\n'));
}

console.log(answer.join('\n\n'));

function dfs(start, depth) {
  if (depth === M) {
    temp.push(path.join(' '));
    return;
  }

  for (let i = start; i < N; i++) {
    path.push(arr[i]);
    dfs(i + 1, depth + 1);
    path.pop();
  }
}
