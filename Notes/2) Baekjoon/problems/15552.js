const fs = require("fs");
const input = fs.readFileSync("../inputs/15552.txt").toString().trim().split("\n");

function solution(input) {
  let returnStr = '';
  for(let i=1; i<=input[0]; i++){
    let ab = input[i].split(' ').map(Number);
    returnStr += ab[0]+ab[1]+'\n';
  }
  return returnStr;
}

console.log(solution(input));
