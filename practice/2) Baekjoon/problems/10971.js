let fs = require("fs");
let input = fs
  // 백준 제출 시에는 readFileSync('/dev/stdin')으로 변경해야 합니다.
  .readFileSync("../inputs/10971.txt")
  .toString()
  .trim()
  .split("
");

const N = Number(input[0]);
let W = [];
for (let i = 1; i <= N; i++) {
  W.push(input[i].split(' ').map(Number));
}

let visited = Array(N).fill(false);
let path = [];
let min = Infinity;

function dfs(before, depth) {
  if (depth === N) {
    if (W[path[N - 1]][path[0]] !== 0) {
      let sum = calculate(path);
      if (sum < min) min = sum;
    }
    return;
  }

  for (let i = 0; i < N; i++) {
    if (visited[i] || (depth > 0 && W[before][i] === 0)) continue;
    
    visited[i] = true;
    path.push(i);
    dfs(i, depth + 1);
    path.pop();
    visited[i] = false;
  }
}

dfs(0, 0);

function calculate(arr) {
  let sum = 0;
  for (let i = 0; i < N; i++) {
    if (i == N - 1) {
      // 마지막 도시 -> 출발 도시
      sum += W[arr[i]][arr[0]];
    } else {
      // 현재 도시 -> 다음 도시
      sum += W[arr[i]][arr[i + 1]];
    }
  }
  return sum;
}

console.log(min);
