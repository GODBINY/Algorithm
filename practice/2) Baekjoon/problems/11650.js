let fs = require('fs')
let input = fs.readFileSync('../inputs/11650.txt').toString().trim().split('\n');

input.shift()

let arr = input.map((item) => {
  return item.split(' ').map(Number);
})

arr.sort((a, b) => {
  if (a[0] !== b[0]) {
    return a[0] - b[0];
  } else {
    return a[1] - b[1];
  }
});

console.log(arr);
