const fs = require('fs');
const input = fs.readFileSync('../inputs/2739.txt').toString().trim().split('\n');

// 풀이
function solution(num) {
  for(let i=1;i<10;i++){ 
    console.log(`${num} * ${i} = ${num*i}`)
  }
}

solution(Number(input[0]));
