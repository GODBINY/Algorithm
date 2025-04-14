const fs = require("fs");
const input = fs.readFileSync("../inputs/2675.txt").toString().trim().split("\n");

function solution(arr) {
  arr.shift();
  let result = "";
  arr.forEach((item)=>{
    let num = item.split(' ')[0];
    let str = item.split(' ')[1];
    result = repeat(num,str) + '\n';
  })
  return result;
}

function repeat(num, str) {
  let returnValue = "";
  for(x in str){
    for(let i=0;i<num;i++){
      returnValue += x;
    }
  }
}

console.log(solution(input));
