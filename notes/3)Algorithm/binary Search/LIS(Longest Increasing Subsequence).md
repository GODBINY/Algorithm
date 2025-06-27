### LIS는 Longest Increasing Subsequence
최장 증가 부분 수열.

### 구현하려면 이진탐색 사용한다. (정확한 실제 배열을 찾으려면 DP써야해.)
### O(N log N)
```
let lis [];

for(let x of arr) {
  if(lis.length === 0 || x> lis[lis.length-1]){
    lis.push(x);
  } else {
    let idx = lowerBound(lis,x);
    lis[idx] = x;
  }
}

function lowerBound(arr, target) {
  let start = 0, end = arr.length;
  while (start < end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] >= target) end = mid;
    else start = mid + 1;
  }
  return end;
}

```
```

