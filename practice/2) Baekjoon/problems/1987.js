let fs = require("fs");
let input = fs.readFileSync("../inputs/1987.txt").toString().trim().split("\n");

const r = Number(input[0].split(" ")[0]);
const c = Number(input[0].split(" ")[1]);

let path = [];
let footPrint = [];
let abc = [];
let count = 0;

// 보드를 배열로 만들기
for (let i = 1; i <= r; i++) {
  path.push(input[i].split(""));
}

console.log(path);

function recursive(x, y, depth) {
  // 갈 수 있는 모든 곳이 이미 들렀던 알파벳이면 종료
  if (!canGo(x, y)) {
    return;
  }
  footPrint.push(path[x]?.[y]);
  console.log(footPrint)
  count = Math.max(count, depth);

  // 네 방향 다 가보기
  recursive(x + 1, y, depth + 1);
  recursive(x, y + 1, depth + 1);
  recursive(x - 1, y, depth + 1);
  recursive(x, y - 1, depth + 1);

  footPrint.pop();
}

function canGo(a, b) {
  const alphabet = path[a]?.[b];
  let answer = false
  if (alphabet === undefined) answer = false;
  if (alphabet && !footPrint.includes(alphabet)) {
    answer = true;
  }
  return answer;
}

recursive(0, 0, 1);
console.log(count)
