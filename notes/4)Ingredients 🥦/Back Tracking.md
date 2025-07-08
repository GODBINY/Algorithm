- 특정 그래프/트리 가 주어졌을 때 완전탐색 시 사용 (모든 경우의 수 고려해야할 떄 사용)
- 순열/조합일 때 사용한다.
- DFS와의 비교
	- DFS : 완전 탐색 목적, 재귀 함수를 이용해 구현
	- 백트래킹도 : 재귀함수를 이용하지만, 완전 탐색보다는 조건에 따라서 유망한 노드로 이동(상위 노드에 의해 하위 노드의 경우의 수가 줄어들 경우)

- 기본 형태
```JS
function recursive(){
	if(종료조건 만족){
		출력 관련 처리; // 한번에 모으던가 바로 출력하던가
	}
	for(자식 노드를 하나씩 확인){
		if(임의의 조건을 만족하면){
			자식노드 방문처리;
			recursive();
			자식노드 방문처리 해제;
		} // 조건에 안맞으면 애초에 안탄다
	}
}
```

- 좀 더 구체화한 형태
```JS
let temp = []; // 각 단계마다 쓰일 임시 그릇
let visited = new Array(방문여부 표시해야할 것 갯수).fill(false); // 중복 비허용일 때에만 필요함.
let output = []; //결과 출력용

function dfs(depth){
	if(조건){output.push(temp.join(' ')); return;} // 예를들면 - 자리수가 만족했냐?
	for(방문여부 표시해야하는 만큼){
		visited[i] = true; // 방문여부
		temp.push(i); // 방문여부

		dfs(depth+1); // 한자리 수 더 깊게..

		temp.pop(); // 저 이 자리수에서는 이친구 구경 끝났어요~
		visited[i]=false // 저 이 자리수에서는 이 친구 구경 끝났어요~
	}
}

dfs(0);
console.log(output.join('\n'));

```
\[관련]
[[N-Queen]]
[[N과 M(backtracking)]]

\[예시]
- N=3, M=2 (1,2,3에서 2자리 수 만들기)
```JS
function dfs(depth){
	if(depth === 2){ // 두자리 수 완성되었다면
		 console.log(path); // 처리
		 return;
	}
	for(let i=1;i<=3;i++){
		if(visited[i]) continue; // 방문했었으면 pass
		visited[i] = true; // 방문 안했으면 방문처리 먼저
		path.push(i);
		dfs(depth+1);
		path.pop();
		visited[i] = false;
	}
}
```

====== 
# 순열, 중복순열, 조합, 중복조합 정리 (with DFS)
  

아래는 백트래킹(DFS) 방식으로 구현한 예시 코드들과 함께  
각 유형(순열, 중복순열, 조합, 중복조합)에 대한 설명입니다.

---

  

## 1. 순열 (Permutation)

- ****설명****: 서로 다른 n개 중에서 ****중복 없이****, ****순서를 고려****하여 k개를 뽑는 경우
- ****예시****: [1, 2], [2, 1] → 서로 다른 경우로 셈
- ****특징****: `visited` 배열 필요

```js

let path = [];
let visited = Array(N + 1).fill(false);


function dfs(depth) {
  if (depth === M + 1) {
    console.log(path.join(' '));
    return;
  }
  
  for (let i = 1; i <= N; i++) {
    if (visited[i]) continue;
    visited[i] = true;
    path.push(i);
    dfs(depth + 1);
    path.pop();
    visited[i] = false;
  }
}
```
---
##  2. 중복 순열 (Permutation with Repetition)
- ****설명****: 서로 다른 n개 중에서 ****중복 허용****, ****순서를 고려****하여 k개를 뽑는 경우
- ****예시****: [1, 1], [2, 1], [1, 2] 모두 다른 경우
- ****특징****: `visited` 불필요, 그냥 모든 수를 다시 고를 수 있음
```js
let path = [];

function dfs(depth) {
  if (depth === M + 1) {
    console.log(path.join(' '));
    return;
  }
  
  for (let i = 1; i <= N; i++) {
    path.push(i);
    dfs(depth + 1);
    path.pop();
  }
}
```
---
##  3. 조합 (Combination)
- ****설명****: 서로 다른 n개 중에서 ****중복 없이****, ****순서를 고려하지 않고**** k개를 뽑는 경우
- ****예시****: [1, 2]와 [2, 1]은 같은 것으로 취급 → 하나만 출력
- ****특징****: `start` 인덱스 사용
  
```js
let path = [];

function dfs(start, depth) {
  if (depth === M + 1) {
    console.log(path.join(' '));
    return;
  }
  
  for (let i = start; i <= N; i++) {
    path.push(i);
    dfs(i + 1, depth + 1);
    path.pop();
  }
}
```
---
## 4. 중복 조합 (Combination with Repetition)
- ****설명****: 서로 다른 n개 중에서 ****중복 허용****, ****순서를 고려하지 않고**** k개를 뽑는 경우
- ****예시****: [1, 1], [1, 2], [2, 2] → 가능
- ****특징****: `start` 유지하면서 중복 허용
```js
let path = [];

function dfs(start, depth) {
  if (depth === M + 1) {
    console.log(path.join(' '));
    return;
  }

  for (let i = start; i <= N; i++) {
    path.push(i);
    dfs(i, depth + 1); // i 그대로 넣기 → 중복 허용
    path.pop();
  }
}
```
---
## 정리 비교표
| 유형       | 중복 허용     | 순서 고려     | 핵심 포인트         |
| -------- | --------- | --------- | -------------- |
| 순열       | ❌         | ✅         | visited 사용     |
| 중복 순열    | ✅         | ✅         | 그냥 다 돌기        |
| 조합       | ❌         | ❌         | start 사용       |
| 중복 조합    | ✅         | ❌         | start 고정       |
