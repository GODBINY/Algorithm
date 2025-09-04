let fs = require("fs");
let input = fs
  .readFileSync("../inputs/2529.txt")
  .toString()
  .trim()
  .split("\n");

const num = Number(input[0]);
const list = input[1].split(' ');
let path = [];
let visited = [];
let compareCnt = 0;

console.log(num);
console.log(list);

function dfs(current) {
  if (current.length === num) {
    result.push([...current]);
    return;
  }

  for (let i = 0; i <= 9; i++) {
    if (!visited[i]) {
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

