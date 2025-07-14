let fs = require("fs");
let input = fs
  .readFileSync("../inputs/6603.txt")
  .toString()
  .trim()
  .split("\n");

let tc = [];
let answer = [];
let path = [];
let N = 0;
let M = 6;
let arr = [];

for (let i = 0; i < input.length; i++) {
  let tmp = [];
  if (input[i] === '0') break;
  let tmpArr = input[i].split(' ').map(Number);
  // tmp = [7,[1,2,3,4,5,6,7]]
  N = tmpArr.shift();
  arr = tmpArr;
  dfs(0, 0);
}


function dfs(start, depth) {
  if (depth === M + 1) {
    console.log(depth)
    console.log(path.join(' '));
    return;
  }

  for (let i = start; i <= N; i++) {
    path.push(arr[i]);
    dfs(i + 1, depth + 1);
    path.pop();
  }
}
