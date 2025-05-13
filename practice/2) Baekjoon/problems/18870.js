let fs = require('fs')
let input = fs.readFileSync('../inputs/18870.txt').toString().trim().split('\n');

// 각 항목에 인덱스 붙이기
let orgArr = input[1].split(' ').map((item, idx) => {
  return [idx, Number(item)];
});

console.log(orgArr)

// 수 정렬
let sortedArr = [...orgArr].sort((a, b) => a[1] - b[1]);

console.log(sortedArr)

// 중복 제거하면서 기존 인덱스 남겨두기``
let uniqueArr = [];
let uniqueIdx = -1;

for (let i = 0; i < sortedArr.length; i++) {
  if (i > 0 && (sortedArr[i - 1][1] === sortedArr[i][1])) {
    uniqueArr.push([uniqueIdx, sortedArr[i][1], sortedArr[i][0]]);
  } else {
    uniqueIdx++;
    uniqueArr.push([uniqueIdx, sortedArr[i][1], sortedArr[i][0]]);
  }
}

console.log(uniqueArr)

// 기존 인덱스 남겨둔걸로 다시정렬
let resultArr = [...uniqueArr].sort((a, b) => a[2] - b[2]).map(item => item[0]).join(' ')


console.log(resultArr)
