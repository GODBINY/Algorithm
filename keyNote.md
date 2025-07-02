  
# 그리디 (Greedy)  
- 항상 가장 큰/작은 값 선택
- 현재 선택이 전체 최선에 영향을 줌
- 정렬 후 앞에서부터 고르기
- 예시: 동전 문제, 회의실 배정, ATM 인출 최소 시간
  
# 이진 탐색 / 파라메트릭 서치
- 조건을 만족하는 가장 큰/작은 값 찾기
- 정렬된 배열에서 범위 내 개수 구하기
- 문제에서 "최대값/최솟값 중 조건 만족하는 것"을 찾을 때
- 예시: 예산 배정, 나무 자르기, K번째 수
  
****💡 기본 구조****
```js

while (start <= end) {
  let mid = Math.floor((start + end) / 2);
  if (조건(mid)) {
    result = mid;
    start = mid + 1; // or end = mid - 1
  } else {
    end = mid - 1;   // or start = mid + 1
  }
}
```

# DFS / BFS
- 모든 경로를 탐색해야 할 때 (DFS)
- 최단 거리 찾기 (BFS)
- 연결 요소, 미로 탈출, 섬 개수
  
****💡 DFS 구조****
```js
function dfs(node) {
  visited[node] = true;
  for (let next of graph[node]) {
    if (!visited[next]) dfs(next);
  }
}
```

****💡 BFS 구조****
```js
function bfs(start) {
  let queue = [start];
  visited[start] = true;
  while (queue.length) {
    let node = queue.shift();
    for (let next of graph[node]) {
      if (!visited[next]) {
        visited[next] = true;
        queue.push(next);
      }
    }
  }
}
```

# DP (Dynamic Programming)
- 최댓값, 최솟값, 경우의 수 등
- 부분 문제의 결과를 활용할 수 있을 때
- 같은 계산을 반복할 가능성 있을 때

****💡 기본 구조****
```js
let dp = Array(n + 1).fill(0);
dp[0] = 초기값;
for (let i = 1; i <= n; i++) {
  dp[i] = 점화식(dp[i-1], dp[i-2], ...);
}
```
  
# 조합 / 순열
### 순열 (Permutation)
- 순서 중요 → visited 필요
- 예: [1,2] ≠ [2,1]
```js
function permute(path) {
  if (path.length == M) {
    출력(path);
    return;
  }
  for (let i = 1; i <= N; i++) {
    if (visited[i]) continue;
    visited[i] = true;
    path.push(i);
    permute(path);
    path.pop();
    visited[i] = false;
  }
}
```
### 조합 (Combination)
- 순서 상관 없음 → visited 없이 인덱스 기준으로만 반복
- 예: [1,2] == [2,1]
```js
function combine(start, path) {
  if (path.length == M) {
    출력(path);
    return;
  }
  for (let i = start; i <= N; i++) {
    path.push(i);
    combine(i + 1, path);
    path.pop();
  }
}
```