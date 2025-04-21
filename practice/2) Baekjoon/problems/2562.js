const fs = require("fs");
const input = fs.readFileSync("../inputs/2562.txt").toString().trim().split("\n");

//1. 나의 풀이  
function solution1(arr) {
  let max = Math.max(...arr);
  let index = arr.indexOf(max)+1; 
  console.log(max);
  console.log(index);
}

//2. 교재를 참고한 풀이
function solution2(arr){
  let max = arr[0];
  let index = 1;
  arr.forEach((item,idx)=>{
    if(item>=max){
      max = item;
      index = Number(idx)+1;
    }
  })
  console.log(max+'\n'+index);
}

solution2(input.map(Number));
