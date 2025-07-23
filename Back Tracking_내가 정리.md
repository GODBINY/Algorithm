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


n개에서 r개 고르기면, n으로 빈 배열 만들어주면 됨.
## 1. 순열 (Permutation, nP r)

```js
function permutation(arr, r) {
  const result = [];
  // 방문 여부를 체크할 배열
  const visited = new Array(arr.length).fill(false);

  function backtrack(path) {
    // r개를 모두 골랐으면 결과에 추가
    if (path.length === r) {
      result.push([...path]);
      return;
    }
    // 각 인덱스 별로 시도
    for (let i = 0; i < arr.length; i++) {
      if (visited[i]) continue; // 이미 쓴 값은 패스
      visited[i] = true;      // 방문 처리
      path.push(arr[i]);      // 현재 값 추가
      backtrack(path);        // 다음 단계로
      path.pop();             // 복귀 시 마지막값 제거
      visited[i] = false;     // 방문 해제
    }
  }
  backtrack([]);
  return result;
}


```

## 2. 조합 (Combination, nC r)

```js
function combination(arr, r) {
  const result = [];

  // start: 조합에서 중복 선택 막기 위한 시작 인덱스
  function backtrack(start, path) {
    // r개를 모두 골랐으면 결과에 추가
    if (path.length === r) {
      result.push([...path]);
      return;
    }
    // 시작 인덱스부터 반복 (이전값 재선택 방지)
    for (let i = start; i < arr.length; i++) {
      path.push(arr[i]);
      backtrack(i + 1, path); // 다음엔 i+1부터 시작
      path.pop();             // 복귀시 마지막값 제거
    }
  }
  backtrack(0, []);
  return result;
}
```
## 3. 중복 순열 (Permutation with Repetition)

javascript

```js
function permWithRep(arr, r) {
  const result = [];

  function backtrack(path) {
    if (path.length === r) {
      result.push([...path]);
      return;
    }
    for (let i = 0; i < arr.length; i++) {
      path.push(arr[i]);
      backtrack(path);
      path.pop();
    }
  }
  backtrack([]);
  return result;
}

```

## 4. 중복 조합 (Combination with Repetition)

```javascript
function combWithRep(arr, r) {
  const result = [];

  function backtrack(start, path) {
    if (path.length === r) {
      result.push([...path]);
      return;
    }
    for (let i = start; i < arr.length; i++) {
      path.push(arr[i]);
      backtrack(i, path); // 지금 값 포함되어도 되니까
      path.pop();
    }
  }
  backtrack(0, []);
  return result;
}
```

## 사용 방법 예시
```js
const arr = [1, 2, 3];
console.log(permutation(arr, 2));
console.log(combination(arr, 2));
console.log(permWithRep(arr, 2));
console.log(combWithRep(arr, 2));
```
