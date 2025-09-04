let fs = require("fs");
let input = fs
  .readFileSync("../inputs/2529.txt")
  .toString()
  .trim()
  .split("\n");

const num = Number(input[0]);
const list = input[1].split(' ');
let result = [];
let visited = [];

console.log(num);
console.log(list);

function dfs(current) {
  if (current.length === num) {
    result.push([...current]);
    return;
  }

  for (let i = 0; i <= 9; i++) {
    if (!visited[i]) {
      // 이전 수 연산자 지금 수 했을 때 말 안되기 시작하면 continue로 넘겨버리도록 추가
      visited[i] = true;
      current.push(i);

      dfs(current);

      current.pop();
      visited[i] = false;
    }
  }
}
dfs([]);
console.log(result);

