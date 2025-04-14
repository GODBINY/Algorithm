const fs = require("fs");
const input = fs.readFileSync("../inputs/2675.txt").toString().trim().split("\n");

function solution(arr) {
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

solution(input);
