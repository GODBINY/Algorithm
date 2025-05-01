const fs = require('fs');
const input = fs.readFileSync('../inputs/11004.txt').toString().trim().split('\n');


const [n, k] = input[0].split(' ').map(Number);
const arr2 = input[1].split(' ').map(Number);

arr2.sort((a, b) => a - b);
console.log(arr2[k - 1]);

