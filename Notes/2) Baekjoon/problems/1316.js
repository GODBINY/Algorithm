let fs = require('fs')
let input = fs.readFileSync('../inputs/1316.txt').toString().trim().split('\n');

// 1. 내가 어찌저찌 푼 풀이
function solution(arr) {
  let total = arr[0];
  for (i = 1; i <= arr[0]; i++) {
    let isNotGroupWord = false;
    let filteredArr = arr[i].split('').filter((item, idx) => {
      return idx === 0 || (idx > 0 && arr[i].split('')[idx - 1] !== item)
    })

    let dictionary = new Set();

    filteredArr.forEach(item => {
      if (dictionary.has(item)) {
        isNotGroupWord = true
        return;
      } else {
        dictionary.add(item);
      }
    })
    if (isNotGroupWord) {
      total -= 1;
    }
  }
  return total;
}

console.log(solution(input));
