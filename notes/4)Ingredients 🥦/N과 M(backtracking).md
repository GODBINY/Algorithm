1부터 N까지의 수들을 M자리 수로 나열하기

```JS
let fs = require("fs");
let input = fs.readFileSync("../inputs/15649.txt").toString().trim().split(" ");

const N = Number(input[0]);
const M = Number(input[1]);

let path = [];
let visited = new Array(N + 1).fill(false);
let output = [];

function dfs(depth) {
  if (depth === M) {
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
```