const fs = require("fs");
const input = fs
  .readFileSync("../inputs/13305.txt")
  .toString()
  .trim()
  .split("\n");

// subtask 1,2  맞은 문제
console.log(input);

let number = +input[0];
let road = input[1].split(" ").map(Number);
let station = input[2].split(" ").map(Number);

console.log(road);
console.log(station);

let price = 0;
let answer = 0;

for (let i = 0; i < number - 1; i++) {
  if (i === 0 || price > station[i]) {
    // 첫 순회이거나, 현재 들른 주유소 가격이 기존보다 쌀 때
    price = station[i];
  }
  answer += road[i] * price;
}
console.log(answer);

// subtask 3까지 고려하려면
// 첫 순회에서는 자기 가격으로 가다가, 작은애들별로 우선순위를 매겨서, 우선순위가 더 높은게 나오기 전까지는 그 가격으로 유지하는 로직
