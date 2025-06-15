const fs = require("fs");
const input = fs
  .readFileSync("../inputs/1493.txt")
  .toString()
  .trim()
  .split("\n");

console.log(input);

let info = input[0].split(' ').map(Number);

let length = info[0];
let width = info[1];
let height = info[2];

let cubeList = [];
const min = Math.min(length, width, height);
let cnt = 0;

for (let i = Number(input[1]) + 1; i > 1; i--) {
  let num = Math.pow(2, input[i].split(' ')[0]);
  if (num <= min) {
    for (let j = 0; j < input[i].split(' ')[1]; j++) {
      console.log(input[i].split(' ')[0]);
      console.log(length, width, height);
      console.log('num', num)
      let isCal = false;
      if (length > 0) {
        length -= num;
        isCal = true;
      }
      if (width > 0) {
        width -= num;
        isCal = true;
      }
      if (height > 0) {
        height -= num;
        isCal = true;
      }
      console.log(length, width, height);
      if (isCal) {
        cnt++;
        console.log(cnt)
      }
      // cubeList.push(Number(input[i].split(' ')[0]));
    }
  }
}

