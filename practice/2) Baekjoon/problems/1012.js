let fs = require("fs");
let input = fs
  .readFileSync("../inputs/1012.txt")
  .toString()
  .trim()
  .split("\n");

console.log(input);
