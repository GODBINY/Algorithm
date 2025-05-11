let fs = require('fs')
let input = fs.readFileSync('../inputs/11651.txt').toString().trim().split('\n');

input.shift();

let arr = input.map(e => e.split(' ').map(Number));
arr.sort((a, b) => {
  if (a[1] === b[1]) {
    return a[0] - b[0];
  }
  return a[1] - b[1];
})

let output = arr.map(e => e.join(' ')).join('\n');
console.log(output);
