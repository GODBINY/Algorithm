const fs = require("fs");
const input = fs.readFileSync("../inputs/15552.txt").toString().trim().split("\n");


function solution(input) {
  let returnStr = '';
  for(let i=0; i<input[0]; i++){
    input.map((item,idx)=>{
      if(idx>0){
        let ab = item.split(' ').map(Number);
        returnStr += ab[0]+ab[1]+'\n';
      }
    })
  }
  return returnStr;
}

console.log(solution(input));
