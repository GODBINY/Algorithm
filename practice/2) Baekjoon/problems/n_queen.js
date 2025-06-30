let n = 8;
let queens = [];

function possible(x, y) {
  console.log(queens)
  for (let [a, b] of queens) {
    // 행이나 열이 같으면 못 둠(상하, 좌우)
    if (a == x || b == y) return false;
    // 대각선 관계여도 못 둠
    if (Math.abs(a - x) == Math.abs(b - y)) return false;
  }
  return true;
}

let cnt = 0;
function dfs(row) {
  if (row == n) cnt += 1;
  for (let i = 0; i < n; i++) { // 반복문으로 "열" 반복
    if (!possible(row, i)) continue;
    queens.push([row, i]);
    dfs(row + 1);
    queens.pop();
  }
}
dfs(0); // 재귀 함수로 "행" 반복
console.log(cnt);
console.log(queens);
