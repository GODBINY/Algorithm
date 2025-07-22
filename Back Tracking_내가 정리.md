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
}```

- 조합
	- 오름차순 정렬이 미리 되어있어야한다. 
```js
const n = 0; // 내가 가진 숫자 전체의 갯수
const r = 0; // 뽑아야 하는 수의 갯수
let path = [];

dfs(0,0);

function dfs(start, depth){
	if(depth === r){ // 인덱스는 0부터 시작이니
		console.log(path.join(' '));
		return;
	}
	for(let i=start; i<n; i++){
		// 인덱스 기준으로 수 뽑는게 아니라 arr로 주어지면, 미리 오름차순 정렬 해둬야한다.
		path.push(i); // 정렬된 배열을 쓸거면 path.push(arr[i]);
		dfs(i+1, depth+1);
		path.pop();
	}
}
```

- 순열
```js
const n = 0;
const r = 0;
let path = [];

dfs(0,0);

function dfs(start, depth) {

}

```
- 중복조합
- 중복순열