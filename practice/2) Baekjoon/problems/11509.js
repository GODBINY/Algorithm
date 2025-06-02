const fs = require("fs");
const input = fs
  .readFileSync("../inputs/11509.txt")
  .toString()
  .trim()
  .split("\n");

console.log(input);
let num = Number(input[0]);
let array = input[1].split(' ').map(Number);
let arrowList = [];
let result = 0;

for (let i = 0; i < num; i++) {
  console.log('i:', i)
  if (i !== 0) {
    for (let j = 0; j < arrowList.length; j++) {
      if (arrowList[j] === array[i]) {
        result++;
        if (arrowList[j] >= 1) {
          arrowList[j] = arrowList[j] - 1;
        }
      } else {
        console.log(array[i])
        arrowList.push(array[i] - 1);
        result++;
      }
    }
  } else {
    arrowList.push(array[i] - 1);
    result++;
  }
}

console.log(result);
