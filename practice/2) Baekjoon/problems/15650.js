let fs = require("fs");
let input = fs
  .readFileSync("../inputs/15650.txt")
  .toString()
  .trim()
  .split("\n");

console.log(input);

const N = Number(input[0].split(' ')[0]);
const M = Number(input[0].split(' ')[1]);
let result = [];
let answer = []

// 1부터 N까지 자연수 중에서 중복 없이 M개를 고른 수열
// 고른 수열은 오름차순이어야 한다.

function dfs(start, depth) { // 깊이는 M
  if (depth == M + 1) {
    answer.push(result.join(' '));
    return;
  }
  for (let i = start; i <= N; i++) {
    result.push(i);
    dfs(i + 1, depth + 1);
    result.pop(i);
  }
}

dfs(1, 1);
console.log(answer.join('\n'))
