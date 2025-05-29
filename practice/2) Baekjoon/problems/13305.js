const fs = require("fs");
const input = fs
  .readFileSync("../inputs/13305.txt")
  .toString()
  .trim()
  .split("\n");

// 내 풀이
// console.log(input);

let number = +input[0];
let road = input[1].split(" ").map(Number);
let station = input[2].split(" ").map(Number);

console.log(road);
console.log(station);

let price = 0;
let answer = BigInt(0);

for (let i = 0; i < number - 1; i++) {
  if (i === 0 || price > station[i]) {
    // 첫 순회이거나, 현재 들른 주유소 가격이 기존보다 쌀 때
    price = station[i];
  }
  answer += BigInt(road[i]) * BigInt(price);
}
console.log(String(answer));

// 풀이 보고 다시 풀어봄
// // 첫 순회에서는 자기 가격으로 가다가, 작은애들별로 우선순위를 매겨서, 우선순위가 더 높은게 나오기 전까지는 그 가격으로 유지하는 로직
// 난 생각을 반대로 했구나
// 새로 만나게 될 주유소가 나보다 싸면 기름사기x
// 내가 뒤에있을 주유소보다 싸면 나로 밀고나가기
//

let number1 = +input[0];
let road1 = input[1].split(" ").map(Number);
let station1 = input[2].split(" ").map(Number);

let min = 0;
let sortedArr = []

for (let i = 0; i < station1.length; i++) {
  if (i === 0 || station1[i] < min) {
    min = station1[i];
  }
  sortedArr.push(min);
}

console.log(sortedArr)
let answer1 = BigInt(0);

for (let i = 0; i < sortedArr.length - 1; i++) {
  answer1 += BigInt(sortedArr[i]) * BigInt(road1[i]);
}

console.log(String(answer1));
