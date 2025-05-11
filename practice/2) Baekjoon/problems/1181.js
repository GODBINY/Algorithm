let fs = require('fs')
let input = fs.readFileSync('../inputs/1181.txt').toString().trim().split('\n');


input.shift();

input.sort((a, b) => {
  if (a.length === b.length) {
    return a - b;
  }
  return a.length - b.length;
})

console.log(input);

