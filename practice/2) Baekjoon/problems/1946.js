const fs = require("fs");
const input = fs
  .readFileSync("../inputs/1946.txt")
  .toString()
  .trim()
  .split("\n");

input.shift();
// 
let cases = [];
// 
// input.forEach((item, idx) => {
//   if (!item.includes(' ')) {
//     cases.push(input.slice(idx + 1, idx + Number(item) + 1));
//   }
// })
let idx = Number(input[0]);
let count = 0;
let tempArr = [];

for (let i = 1; i < input.length; i++) {
  if (count === idx) {
    cases.push(input[i]);
    tempArr = [];
    idx = input[i];
  } else {
    tempArr.push(input[i]);
    count++;
  }
}

console.log(cases)

// let test = cases.map((item) => {
//   return item.map(e => e.split(' '))
// })
// 
// let sortedList = test.map((item, idx) => {
//   let sortedArr = [...item];
//   sortedArr.sort((a, b) => Number(a[0]) - Number(b[0]));
//   return sortedArr;
// })
// 
// // console.log(sortedList)
// 
// let answer = [];
// 
// sortedList.forEach((item) => {
//   let innerAnswer = 0;
//   let min = 100001;
// 
//   for (let [x, y] of item) {
//     if (y < min) {
//       min = y;
//       innerAnswer++;
//     }
//   }
// 
//   answer.push(innerAnswer);
// })
// 
// console.log(answer.join('\n'))
