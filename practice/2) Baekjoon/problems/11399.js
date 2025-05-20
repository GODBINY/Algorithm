const fs = require("fs");
const input = fs
  .readFileSync("../inputs/11399.txt")
  .toString()
  .trim()
  .split("\n");

let num = Number(input[0]);
let people = input[1].split(" ").map(Number);

people.sort((a, b) => a - b);

let sum = 0;
let answer = 0;
// greedy 로 풀자면. 각 단계에서 시간 제일 적게 걸리는 사람을 불러모으면 되잖아?..

for (let i = 0; i < num; i++) {
  sum += Number(people[i]);
  answer += sum;
}

console.log(answer);
