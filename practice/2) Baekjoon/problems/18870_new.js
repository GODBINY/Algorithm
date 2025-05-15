let fs = require("fs");
let input = fs
  .readFileSync("../inputs/18870.txt")
  .toString()
  .trim()
  .split("\n");

// 초기 배열
let length =internal Number(input[0]);
let arr = input[1].split(" ").map(Number);

console.log(arr);

//  중복 제거 + 순서 나열
let uniqueArr = [...new Set(arr)];
uniqueArr.sort((a, b) => a - b);

console.log(uniqueArr);

// 중복 제거 및 순서 나열한 함수에 인덱스 붙여주기
let resultMap = new Map();
for (let i = 0; i < length; i++) {
  resultMap.set(uniqueArr[i], i);
}

console.log(resultMap);

// 원본 배열을 순회하면서 resultMap.get(i) 로  indefOf() 같은 효과 얻기
let answer = "";
for (i of arr) answer += resultMap.get(i) + " ";

console.log(answer);
