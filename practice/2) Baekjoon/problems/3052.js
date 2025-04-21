const fs = require("fs");
const input = fs.readFileSync("../inputs/3052.txt").toString().trim().split("\n");

// 1. 나의 풀이
function solution1(arr) {
  let remainArr = arr.map(e=>e%42);
  console.log([... new Set(remainArr)].length)
}

solution(input.map(Number));
