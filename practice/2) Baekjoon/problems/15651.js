let fs = require("fs");
let input = fs
  .readFileSync("../inputs/15651.txt")
  .toString()
  .trim()
  .split("\n");

console.log(input);
const arr = input[0].split(' ').map(Number);
let N = arr[0];
let M = arr[1];

let path = [];
let answer = [];

// 1부터 N까지 자연수 중에서 M개를 고른 수열
// 같은 수를 여러 번 골라도 된다.
function dfs(depth) {
  if (depth === M + 1) {
    answer.push(path.join(' '));
    return;
  }

  for (let i = 1; i <= N; i++) {
    path.push(i);
    dfs(depth + 1); // 중복 허용
    path.pop();
  }
}

dfs(1, 1);
console.log(answer.join('\n'));
