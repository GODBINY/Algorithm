let fs = require("fs");
let input = fs
  .readFileSync("../inputs/2606.txt")
  .toString()
  .trim()
  .split("\n");

console.log(input);
const visited = Array(Number(input[0]) + 1).fill(false);
const num = Number(input[1]);

console.log(visited)

function getAdjacencyList(list) {
  let adjacencyList = Array(Number(input[0]) + 1).fill(null).map(() => []);
  for (i of list) {
    let a = Number(i.split(' ')[0]);
    let b = Number(i.split(' ')[1]);
    adjacencyList[a].push(b);
  }
  return adjacencyList
}

const graph = getAdjacencyList(input.slice(2));
let count = 0;

function dfs(graph, v, visited) {
  visited[v] = true;
  console.log(v);
  count++;
  for (i of graph[v]) {
    if (!visited[i]) {
      dfs(graph, i, visited);
    }
  }
}

dfs(graph, 1, visited);

console.log(count - 1);
