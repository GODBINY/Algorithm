const fs = require("fs");
const input = fs
  .readFileSync("../inputs/17609.txt")
  .toString()
  .trim()
  .split("\n");


let tc = Number(input[0]);

for (let i = 1; i <= tc; i++) {
  checkFunc(input[i]);
}

function checkFunc(word) {
  let leftIdx = 0;
  let rightIdx = word.length - 1;
  let count = 0;
  // console.log(word);
  // console.log(leftIdx, rightIdx)
  // 안되는 예시 :  acbca
  while (count < 2 && parseInt((word.length - 1) / 2) >= leftIdx) {

    if (word[leftIdx] === word[rightIdx]) {
      if (rightIdx === leftIdx) {
        count++;
        break;
      } else {
        leftIdx++;
        rightIdx--;
      }
      // console.log(word[leftIdx], word[rightIdx])
    } else if (word[leftIdx] === word[rightIdx - 1]) {
      // console.log(word[leftIdx], word[rightIdx - 1])
      leftIdx++;
      rightIdx -= 2;
      count++;
    } else if (word[leftIdx + 1] === word[rightIdx]) {
      // console.log(word[leftIdx + 1], word[rightIdx])
      leftIdx += 2;
      rightIdx--;
      count++
    } else {
      count = 2;
    }
  }

  console.log(count)
}

