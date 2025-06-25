let fs = require("fs");
let input = fs
  .readFileSync("../inputs/10814.txt")
  .toString()
  .trim()
  .split("\n");

input.shift();
let members = input.map((item) => {
  return item.split(' ')
});

members.sort((a, b) => { return a[0] - b[0] });

let result = members.map(item => {
  return item[0] + ' ' + item[1];
})

console.log(result.join('\n'))




