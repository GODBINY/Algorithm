let fs = require('fs')
let input = fs.readFileSync('../inputs/1181.txt').toString().trim().split('\n');


input.shift();
const uniqueArr = [...new Set(input)].sort();

uniqueArr.sort((a, b) => {
  return a.length - b.length;
})

console.log(uniqueArr.join('\n'));


// 나는 정렬을 두번 했는데, 정렬 함수를 커스텀해서 한번에 하는게 좋겠어.
uniqueArr.sort((a, b) => {
  if (a.length !== b.length) return a.length - b.length;
  else {
    if (a < b) return -1;
    else if (a > b) return 1;
    else return 0;
  }
})

