const fs = require("fs");
const input = fs
  .readFileSync("../inputs/17609.txt")
  .toString()
  .trim()
  .split("\n");


let tc = Number(input[0]);

for (let i = 1; i <= tc; i++) {
  // checkFunc(input[i]);
  newCheckFunc(input[i]);
}

function checkPalindrome(x) {
  return x == x.split('').reverse().join('');
}

function newCheckFunc(word) {
  if (checkPalindrome(word)) {
    console.log(0);
  } else {
    let count = 0;
    let n = word.length;
    for (let i = 0; i < parseInt(n / 2); i++) {
      if (word[i] !== word[n - 1 - i]) {
        if (checkPalindrome(word.slice(0, i) + word.slice(i + 1, n))) {
          count++;
        }
        if (checkPalindrome(word.slice(0, n - i - 1) + word.slice(n - i, n))) {
          count++;
        }
        break;
      }
    }
    if (count > 0) {
      console.log(1);
    } else {
      console.log(2);
    }
  }
}
