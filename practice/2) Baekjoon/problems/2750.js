const fs = require('fs');
// trim 필수! 안하면 이상한 공백값 들어가짐
const input = fs.readFileSync('../inputs/2750.txt').toString().trim().split('\n')
const arr = input.map(Number);
arr.shift();

arr.sort((a, b) => a - b)

console.log(arr.join('\n'));
