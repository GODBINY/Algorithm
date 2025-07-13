범위가 엄청 클 때, 반으로 나눠서 계속 찾는법.
binarySearch(배열, 찾을 값, 시작인덱스(0), 종료인덱스(length-1)) -> 값이 있는 인덱스 반환.
```Javascript
// recursive function
function binarySearch(arr, target, start, end) {
  if (start > end) return -1;
  let mid = parseInt((start + end) / 2);
  // 가운데?
  if (arr[mid] === target) return mid;
  // 왼쪽?
  else if (arr[mid] > target) return binarySearch(arr, target, start, mid - 1);
  // 오른쪽?
  else return binarySearch(arr, target, mid + 1, end);
}

// iterative function 
function _binarySearch(arr, target, start, end) {
  while (start <= end) {
    let mid = parseInt((start + end) / 2);
    // 가운데?
    if (arr[mid] === target) return mid;

    // 왼쪽?
    else if (arr[mid] > target) end = mid - 1;

    // 오른쪽?
    else start = mid + 1;
  }
  return -1;
}

// test
let n = 10;
let target = 7;
arr = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
let _result = _binarySearch(arr, target, 0, n - 1);
if (_result === -1) console.log('원소 없어');
else console.log(`${_result + 1}번째 원소에서 찾음!`)
```
