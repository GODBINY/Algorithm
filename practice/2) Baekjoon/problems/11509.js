const fs = require("fs");
const input = fs
  .readFileSync("../inputs/11509.txt")
  .toString()
  .trim()
  .split("\n");

console.log(input);
input.shift();
let arr = input;

