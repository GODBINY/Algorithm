- 특정 그래프/트리 가 주어졌을 때 완전탐색 시 사용 (모든 경우의 수 고려해야할 떄 사용)

- DFS와의 비교
	- DFS : 완전 탐색 목적, 재귀 함수를 이용해 구현
	- 백트래킹도 : 재귀함수를 이용하지만, 완전 탐색보다는 조건에 따라서 유망한 노드로 이동(상위 노드에 의해 하위 노드의 경우의 수가 줄어들 경우)

- 기본 형태
```JS
function recursive(){
	if(종료조건 만족){
		처리;
	}
	for(자식 노드를 하나씩 확인){
		if(임의의 조건을 만족하면){
			자식노드 방문처리;
			recursive();
			자식노드 방문처리 해제;
		}
	}
}
```

\[관련]
[[N-Queen]]

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
