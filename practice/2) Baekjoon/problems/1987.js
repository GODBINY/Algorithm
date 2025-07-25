let fs = require("fs");
let input = fs
  .readFileSync("../inputs/1987.txt")
  .toString()
  .trim()
  .split("\n");

const r = Number(input[0].split(' ')[0]);
const c = Number(input[0].split(' ')[1]);

let path = [];
let temp = [];
let count = 0;

for (let i = 1; i <= R; i++) {
  path.push(input[i].split(''))
}

console.log(path);


function recursive(x, y) {
  // 범위를 벗어나면 종료
  if (canGo(x, y)) {
    count++;
    return;
  }
  // 네 방향 다 가보기
  if (checkValue(x + 1, y)) {
    temp.push(path[x + 1, y]);
    recursive(x + 1, y);
    temp.pop();
  }
  if (checkValue(x, y + 1)) {
    temp.push(path[x, y + 1]);
    recursive(x, y + 1);
    temp.pop();
  }
  if (checkValue(x - 1, y)) {
    temp.push(path[x - 1, y]);
    recursive(x - 1, y);
    temp.pop();
  }
  if (checkValue(x, y - 1)) {
    temp.push(path[x, y - 1]);
    recursive(x, y - 1);
    temp.pop();
  }
}

function canGo(a, b) {
  return (c > a || r > b || a < 0 || b < 0);
}

function checkValue(a, b) {
  path.includes()
}
