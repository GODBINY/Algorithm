const fs = require("fs");
const input = fs.readFileSync("../inputs/10818.txt").toString().trim().split("\n");

// 1. 내가 푼 방식
function solution1(arr) {
  return arr.sort((a,b)=>a-b)[0] + ' ' + arr.sort((a,b)=>b-a)[0]
}

// 2. 교재 보고 참고한 방식 - 1
function solution2(arr){
  let max = arr[0];
  let min = arr[0];
  arr.forEach((item)=>{
    if(item >= max){
      max = item;
    }
    if(item <= min){
      min = item;
    }
  })
  console.log(`${min} ${max}`)
}  


// 3. 교재 보고 참고한 방식 - 2 
function solution3(arr){
  console.log(`${Math.min(...arr)} ${Math.max(...arr)}`)
}


solution3(input[1].split(' ').map(Number));
