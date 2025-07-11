let fs = require("fs");
let input = fs
  // 백준 제출 시에는 readFileSync('/dev/stdin')으로 변경해야 합니다.
  .readFileSync("../inputs/10971.txt")
  .toString()
  .trim()
  .split("
");

const N = Number(input[0]);
// 1. W 배열을 읽을 때 바로 숫자로 바꿔주는 것이 좋습니다.
let W = [];
for (let i = 1; i <= N; i++) {
  // .map(Number)를 추가해 문자열 배열을 숫자 배열로 변환합니다.
  W.push(input[i].split(' ').map(Number));
}

let visited = Array(N).fill(false);
let path = [];
// 2. min의 초기값이 너무 작습니다. Infinity로 설정하는 것이 안전합니다.
let min = Infinity;

// 이 함수는 시작 노드를 고정하지 않고 모든 노드에서 출발하는 순열을 생성합니다.
// (예: 0->1->2..., 1->0->2..., 2->0->1...)
// 비효율적일 수 있으나, 정답을 찾는 데는 문제가 없습니다.
function dfs(before, depth) {
  // 모든 도시(N개)를 방문했고,
  if (depth === N) {
    // 마지막 도시에서 처음 도시로 돌아가는 길이 있다면(비용이 0이 아니라면)
    if (W[path[N - 1]][path[0]] !== 0) {
      let sum = calculate(path);
      if (sum < min) min = sum;
    }
    return;
  }

  for (let i = 0; i < N; i++) {
    // 3. W가 숫자 배열이 되었으므로, 비용이 0인지 확인하는 로직이 올바르게 동작합니다.
    // (depth > 0) 조건은 첫 도시를 선택할 때는 경로 비용을 체크하지 않기 위함입니다.
    if (visited[i] || (depth > 0 && W[before][i] === 0)) continue;
    
    visited[i] = true;
    path.push(i);
    dfs(i, depth + 1);
    path.pop();
    visited[i] = false;
  }
}

// dfs(0,0)을 호출하면, 내부의 for문이 0~N-1까지 돌면서
// 모든 노드를 시작점으로 하는 경로를 탐색하게 됩니다.
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
