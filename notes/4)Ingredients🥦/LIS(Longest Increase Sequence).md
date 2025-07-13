배열중에서 가장 긴 증가하는 수열 찾기 (오름차순)
[10, 8, 3, 2, 14, 17,18,4, 20, 30]
10 14 17 18 20 30 -> LIS
내림차순으로 하고싶으면, array.reverse() 하고 찾으면 된다.

배열에 따라서 결과가 여러개일 수도 있음 (길이는 같음.)
구현하려면 이진탐색 사용한다. (정확한 실제 배열을 찾으려면 DP써야해.)

lowerBound 찾아서, 이전값보다 지금값이 작으면 이전값을 지금값으로 대체해준다.(lowerBound로 인덱스 찾음.)
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
