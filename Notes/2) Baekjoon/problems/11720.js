const fs = require("fs");
const input = fs.readFileSync("../inputs/11720.txt").toString().trim().split("\n");

// 1. 나의 풀이
function solution(arr) {
  console.log(arr.reduce((acc,cur)=>acc+cur));
}

// 2. 새로운 풀이 - 이게 좀 더 빠름
function solution2(str){
  let answer = 0;
  for(let x of str){
    answer += Number(x);
  }
  console.log(answer);
}

// solution(input[1].split('').map(Number));
solution2(input[1]);
