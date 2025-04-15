let fs = require('fs')
let input = fs.readFileSync('../inputs/1152.txt').toString().trim().split('\n');


function solution(data) {
  let words = data.split(' ');
  if (words == "") {
    return 0;
  }
  return words.length;
}

console.log(solution(input[0]));


