const fs = require("fs");
const input = fs
  .readFileSync("../inputs/13305.txt")
  .toString()
  .trim()
  .split("\n");


console.log(input);

let number = +input[0];
let road = input[1].split(' ').map(Number);
let station = input[2].split(' ').map(Number);

console.log(road)
console.log(station)

let price = 0;
let answer = 0;

for (let i = 0; i < number - 1; i++) {
  if (i === 0 || price > station[i]) { // 첫 숝회이거나, 현재 들른 주유소 가격이 기존보다 쌀 때 
    price = station[i];
  }
  answer += road[i] * price;
}
console.log(answer);


