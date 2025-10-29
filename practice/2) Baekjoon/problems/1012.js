let fs = require("fs");
let input = fs
  .readFileSync("../inputs/1012.txt")
  .toString()
  .trim()
  .split("\n");

console.log(input);

// test case 수
const testAmount = 0;
// 가로,세로,배추수
// 배추 수 만큼 위치 반복
// let count = 0;
// 기본 DFS 코드 작성 + 상하좌우 DFS
// 전체 배추 위치 방문하면서 방문여부 체크 안되어있으면 DFS 수행 + count++
