const fs = require("fs");
const input = fs.readFileSync("../inputs/1427.txt").toString().trim().split("\n");

let arr = input[0].split('').map(Number);

arr.sort((a, b) => b - a);

console.log(arr.join(''));
