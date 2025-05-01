const fs = require("fs");
const input = fs.readFileSync("../inputs/2752.txt").toString().trim().split("\n");
const arr = input[0].split(' ').map(Number);

arr.sort((a, b) => a - b)
console.log(arr);
console.log(arr.join(' '))



