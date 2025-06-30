상하좌우대각선으로 다닐 수 있는 queen의 위치를
N*N 의 체스판에서 겹치지 않고 둘 수 있는 경우의 수는?

- 기본적으로는 완전탐색을 해야하지만, n-queen 문제의 경우 "상하좌우대각선" 일 때에는 거르고 탐색하면 좀 더 빠르고 가볍게 문제를 해결할 수 있음.

```JS
let n = 8;
let queens = [];

function possible(x,y){
	for(let [a,b] of queens){
		// 행이나 열이 같으면 못 둠(상하, 좌우)
		if(a==x||b==y) return false;
		// 대각선 관계여도 못 둠
		if(Math.abs(a-x)==Math.abs(b-y)) return false;
	}
	return true;
}

let cnt = 0;
function dfs(row) {
	if(row == n) cnt += 1;
	for(let i=0;i<n;i++){ // 반복문으로 "열" 반복
		if(!possible(row,i))continue;
		queens.push([row,i]);
		dfs(row+1);
		queens.pop();
	}
}
dfs(0); // 재귀 함수로 "행" 반복
console.log(cnt);
```