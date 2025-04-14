const fs = require("fs");
const input = fs.readFileSync("../inputs/2675.txt").toString().trim().split("\n");

// 1. 나의 풀이
function solution1(arr) {
  arr.shift();
  let txt = "";
  arr.forEach((item) => {
    let info = item.split(' ');
    for (x of info[1]) {
      for (let i = 0; i < info[0]; i++) {
        txt += x
      }
    }
    txt += '\n';
  })
  console.log(txt);
}

// 2. 새 풀이 
function solution2(testCase) {
  for (let i = 1; i <= testCase; i++) {
    let [r, s] = input[i].split(' ');
    let result = '';
    for (let j = 0; j < s.length; j++) {
      result += s.charAt(j).repeat(r);
    }
    console.log(result);
  }
}

// solution1(input);
solution2(input[0]);
