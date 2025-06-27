const fs = require("fs");
const input = fs
  .readFileSync("../inputs/18353.txt")
  .toString()
  .trim()
  .split("\n");


const count = Number(input[0]);
let arr = input[1].split(' ').map(Number);
arr.reverse();

let lis = [];

for (let x of arr) {
  if (lis.length === 0 || x > lis[lis.length - 1]) {
    lis.push(x);
  } else {
    let idx = lowerBound(lis, x);
    lis[idx] = x;
  }
}

function lowerBound(arr, target) {
  let start = 0, end = arr.length;
  while (start < end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] >= target) end = mid;
    else start = mid + 1;
  }
  return end;
}

console.log(count - lis.length);
