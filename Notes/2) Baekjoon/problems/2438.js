const fs = require("fs");
const input = fs.readFileSync("../inputs/2438.txt").toString().trim().split(
  "\n",
);

// 풀이
function solution(num) {
  for (let i = 1; i <= num; i++) {
    let str = "";
    for (let j = 1; j <= i; j++) {
      str += "*";
    }
    console.log(str);
  }
}

solution(Number(input[0]));
