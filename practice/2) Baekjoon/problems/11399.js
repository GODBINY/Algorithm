const fs = require("fs");
const input = fs
  .readFileSync("../inputs/11399.txt")
  .toString()
  .trim()
  .split("\n");

console.log(input);

let people = input[1].split(" ").map(Number);

console.log(people);

// greedy 로 풀자면. 각 단계에서 시간 제일 적게 걸리는 사람을 불러모으면 되잖아?..
