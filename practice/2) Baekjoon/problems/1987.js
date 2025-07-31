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

function recursive(x, y) {
  // 갈 수 있는 모든 곳이 이미 들렀던 알파벳이면 종료
  if (!canGo(x, y)) {
    return;
  }
  footPrint.push(path[x]?.[y])
  count++;
  // 네 방향 다 가보기
  recursive(x + 1, y);
  recursive(x, y + 1);
  recursive(x - 1, y);
  recursive(x, y - 1);
}

function canGo(a, b) {
  console.log(a, b);
  const alphabet = path[a]?.[b];
  console.log(alphabet)
  console.log(footPrint)
  let answer = false
  if (alphabet === undefined) answer = false;
  if (alphabet && !footPrint.includes(alphabet)) {
    answer = true;
  }
  console.log(answer)
  return answer;
}

recursive(0, 0);
console.log(count)
