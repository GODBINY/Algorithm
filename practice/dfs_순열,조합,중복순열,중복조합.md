c# DFS를 이용한 순열, 조합, 중복순열, 중복조합 구현

DFS(깊이 우선 탐색)를 사용하여 순열, 조합, 중복순열, 중복조합을 구현하는 방법과 각 개념을 정리합니다.

### 핵심 개념 요약

| 구분 | 개념 | 순서 | 중복 | 핵심 |
| :--- | :--- | :--- | :--- | :--- |
| **순열** | Permutation | **중요 (O)** | **불가 (X)** | n개 중 r개를 **순서대로** 나열 |
| **조합** | Combination | 무관 (X) | **불가 (X)** | n개 중 r개를 **순서없이** 선택 |
| **중복순열** | Permutation with Repetition | **중요 (O)** | **허용 (O)** | n개 중 **중복을 허용**하여 r개를 **순서대로** 나열 |
| **중복조합** | Combination with Repetition | 무관 (X) | **허용 (O)** | n개 중 **중복을 허용**하여 r개를 **순서없이** 선택 |

---

### 예시 데이터

아래 모든 예제에서는 `['A', 'B', 'C']` 배열에서 2개를 뽑는 경우(`n=3, r=2`)를 기준으로 설명합니다.

```javascript
const items = ['A', 'B', 'C'];
const r = 2; // 2개를 뽑는다
```

---

### 1. 순열 (Permutation)

- **개념**: 서로 다른 n개에서 r개를 **순서에 상관있게** 뽑아서 나열합니다. `['A', 'B']`와 `['B', 'A']`는 다른 경우입니다.
- **구현 핵심**: 한 번 사용한 요소는 다시 사용하면 안 되므로, 어떤 요소를 사용했는지 체크하는 `visited` 배열이 필요합니다.

```javascript
function permutations() {
  const result = [];
  const visited = new Array(items.length).fill(false);

  function dfs(currentPermutation) {
    // 2개를 모두 뽑았으면 결과에 추가하고 종료
    if (currentPermutation.length === r) {
      result.push([...currentPermutation]);
      return;
    }

    // items 배열의 모든 요소를 순회
    for (let i = 0; i < items.length; i++) {
      // 아직 방문(사용)하지 않은 요소라면
      if (!visited[i]) {
        visited[i] = true; // 사용했다고 표시
        currentPermutation.push(items[i]);
        
        dfs(currentPermutation); // 재귀 호출
        
        // 백트래킹: 다음 탐색을 위해 상태를 원래대로 되돌림
        currentPermutation.pop(); 
        visited[i] = false;
      }
    }
  }

  dfs([]);
  return result;
}

console.log("순열:", permutations());
// 결과: [ [ 'A', 'B' ], [ 'A', 'C' ], [ 'B', 'A' ], [ 'B', 'C' ], [ 'C', 'A' ], [ 'C', 'B' ] ]
```

---

### 2. 조합 (Combination)

- **개념**: 서로 다른 n개에서 **순서에 상관없이** r개를 뽑습니다. `['A', 'B']`와 `['B', 'A']`는 같은 경우로 취급합니다.
- **구현 핵심**: 오름차순으로만 요소를 뽑도록 강제하여 중복을 제거합니다. 다음 재귀를 호출할 때 **현재 뽑은 요소의 다음 인덱스**부터 탐색하도록 `startIdx`를 넘겨줍니다.

```javascript
function combinations() {
  const result = [];

  // startIdx: 탐색을 시작할 인덱스
  function dfs(currentCombination, startIdx) {
    // 2개를 모두 뽑았으면 결과에 추가하고 종료
    if (currentCombination.length === r) {
      result.push([...currentCombination]);
      return;
    }

    // startIdx부터 순회하여 이전에 뽑은 요소는 다시 보지 않음
    for (let i = startIdx; i < items.length; i++) {
      currentCombination.push(items[i]);
      
      // 다음 재귀에서는 현재 뽑은 요소의 다음 것(i + 1)부터 보도록 함
      dfs(currentCombination, i + 1);
      
      // 백트래킹
      currentCombination.pop();
    }
  }

  dfs([], 0);
  return result;
}

console.log("조합:", combinations());
// 결과: [ [ 'A', 'B' ], [ 'A', 'C' ], [ 'B', 'C' ] ]
```

---

### 3. 중복순열 (Permutation with Repetition)

- **개념**: 서로 다른 n개에서 **중복을 허용**하여 r개를 **순서대로** 나열합니다. `['A', 'A']`가 가능하고, `['A', 'B']`와 `['B', 'A']`는 다른 경우입니다.
- **구현 핵심**: 순열과 거의 동일하지만, 한 번 사용한 요소를 다시 사용할 수 있으므로 `visited` 배열이 필요 없습니다.

```javascript
function permutationsWithRepetition() {
  const result = [];

  function dfs(currentPermutation) {
    // 2개를 모두 뽑았으면 결과에 추가하고 종료
    if (currentPermutation.length === r) {
      result.push([...currentPermutation]);
      return;
    }

    // visited 체크 없이 모든 요소를 항상 순회
    for (let i = 0; i < items.length; i++) {
      currentPermutation.push(items[i]);
      dfs(currentPermutation); // 재귀 호출
      currentPermutation.pop(); // 백트래킹
    }
  }

  dfs([]);
  return result;
}

console.log("중복순열:", permutationsWithRepetition());
// 결과: [ [ 'A', 'A' ], [ 'A', 'B' ], [ 'A', 'C' ], [ 'B', 'A' ], [ 'B', 'B' ], [ 'B', 'C' ], [ 'C', 'A' ], [ 'C', 'B' ], [ 'C', 'C' ] ]
```

---

### 4. 중복조합 (Combination with Repetition)

- **개념**: 서로 다른 n개에서 **중복을 허용**하여 **순서에 상관없이** r개를 뽑습니다. `['A', 'A']`가 가능하고, `['A', 'B']`와 `['B', 'A']`는 같은 경우입니다.
- **구현 핵심**: 조합과 거의 동일하지만, 중복을 허용해야 합니다. 따라서 다음 재귀를 호출할 때 `i + 1`이 아닌 **`i`부터** 다시 탐색하도록 하여 자기 자신을 한 번 더 뽑을 수 있게 합니다.

```javascript
function combinationsWithRepetition() {
  const result = [];

  function dfs(currentCombination, startIdx) {
    // 2개를 모두 뽑았으면 결과에 추가하고 종료
    if (currentCombination.length === r) {
      result.push([...currentCombination]);
      return;
    }

    // startIdx부터 순회
    for (let i = startIdx; i < items.length; i++) {
      currentCombination.push(items[i]);
      
      // 조합과 달리 다음 재귀에서 i+1이 아닌 i를 넘겨 자기 자신도 다시 뽑을 수 있게 함
      dfs(currentCombination, i);
      
      // 백트래킹
      currentCombination.pop();
    }
  }

  dfs([], 0);
  return result;
}

console.log("중복조합:", combinationsWithRepetition());
// 결과: [ [ 'A', 'A' ], [ 'A', 'B' ], [ 'A', 'C' ], [ 'B', 'B' ], [ 'B', 'C' ], [ 'C', 'C' ] ]
```
