Binary Search의 유사 버전으로, 이진탐색의 경우 "특정 값"을 찾는게 목적이었다면 파라메트릭 서치는 가능한 범위에서 "최대" 혹은 "최소" 값을 찾는게 목적임!

```JS
let start = 가능한 최소값;
let end = 가능한 최대값;

let result = -1;

while (start <= end) {
  let mid = Math.floor((start + end) / 2);

  if (mid가 조건을 만족한다면) {
    result = mid;
    start = mid + 1; // 더 큰 쪽도 조건 만족할지 확인 (더 큰 값이 필요할 경우)
  } else {
    end = mid - 1; // 더 작은 쪽도 조건 만족할지 확인
  }
}
```

start = mid + 1;
end = mid - 1;은 상황에 따라 if에 들어갈 수도, else에 들어갈 수도 있음.