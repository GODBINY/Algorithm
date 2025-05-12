let fs = require('fs')
let input = fs.readFileSync('../inputs/18870.txt').toString().trim().split('\n');


let orgArr = input[1].split(' ').map((item, idx) => {
  return [idx, Number(item)];
});

console.log(orgArr)

let sortedArr = [...orgArr].sort((a, b) => a[1] - b[1]);

// console.log(sortedArr)

// let resultArr = orgArr.map((item) => {
//   return sortedArr.indexOf(item);
// })
// 
// console.log(resultArr.join(' '));


