let fs = require("fs");
let input = fs
  .readFileSync("../inputs/15650.txt")
  .toString()
  .trim()
  .split("\n");

console.log(input);

const N = Number(input[0]);
const M = Number(input[1]);

function dfs(depth){ // 깊이는 M
	if(depth==M+1){
		출력 관련 처리; // 한번에 모으던가 바로 출력하던가
	}
	for(자식 노드를 하나씩 확인){
		if(임의의 조건을 만족하면){
      dfs(depth);
			자식노드 방문처리;
			자식노드 방문처리 해제;
		} // 조건에 안맞으면 애초에 안탄다
	}
}

