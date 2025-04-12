const fs = require('fs');
const input = fs.readFileSync('../inputs/8393.txt').toString().trim().split('\n');

// 풀이
function solution(num) {
  let sum = 0;
  for(let i=0 ; i<=num ; i++){
    sum += i; 
  }
  return sum;
}

console.log(solution(Number(input[0])));
