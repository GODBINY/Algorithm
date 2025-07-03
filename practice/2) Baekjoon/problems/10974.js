let fs = require("fs");
let input = fs
  .readFileSync("../inputs/10974.txt")
  .toString()
  .trim()
  .split("\n");

console.log(input);

const N = Number(input[0]);

let path = [];
let visited = new Array(N + 1).fill(false);
let output = [];

function dfs(depth) {
  if (depth === N) {
    output.push(path.join(" "));
    return;
  }

  for (let i = 1; i <= N; i++) {
    if (visited[i]) continue;

    visited[i] = true;
    path.push(i);
    dfs(depth + 1);
    path.pop();
    visited[i] = false;
  }
}

dfs(0);
console.log(output.join("\n"));
