### 순열 기본형태 (서로다른 9개에서 2개를 고르는 법)

````
```js
const n = 9;
const r = 2;
let result = [];
let visited = [];

console.log(num);

function dfs(current) {
  if (current.length === r) {
    result.push([...current]);
    return;
  }

  for (let i = 1; i <= n; i++) {
    if (!visited[i]) {
      visited[i] = true;
      current.push(i);

      dfs(current);

      current.pop();
      visited[i] = false;
    }
  }
}
dfs([]);

// 순열의 모든 경우의 수 출력
console.log(result);
```
````
