let fs = require("fs");
let input = fs
  .readFileSync("../inputs/10816.txt")
  .toString()
  .trim()
  .split("\n");


let n = Number(input[0]);
let nArr = input[1].split(' ').map(Number);
let m = Number(input[2]);
let mArr = input[3].split(' ').map(Number);

function lowerBound(arr, target, start, end) {
  while (start < end) { // 이 말은, start랑 end랑 같아지면 return해버리겠다는거지
    let mid = parseInt((start + end) / 2);
    if (arr[mid] >= target) end = mid; // 찾았지만 최대한 바짝 더 땡겨서 찾아보기
    else start = mid + 1;
  }
  return end;
}

function upperBound(arr, target, start, end) {
  while (start < end) {
    let mid = parseInt((start + end) / 2);
    if (arr[mid] > target) end = mid;
    else start = mid + 1;
  }
  return end;
}

function countByRange(arr, leftValue, rightValue) {
  let rightIndex = upperBound(arr, rightValue, 0, arr.length);
  let leftIndex = lowerBound(arr, leftValue, 0, arr.length);
  return rightIndex - leftIndex;
}

function getCount(orgNArr, number) {
  return countByRange(orgNArr, number, number);
}

let sortedArr = nArr.sort((a, b) => a - b)

let result = [];

for (x of mArr) {
  result.push(getCount(sortedArr, x));
}

console.log(result.join(' '));
