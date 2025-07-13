### Two Pointers Algorithm (투 포인터 알고리즘) 이란?

투 포인터 알고리즘은 **일차원 배열(또는 리스트)**에서 두 개의 포인터(배열의 인덱스를 가리키는 변수)를 조작하여 원하는 결과를 효율적으로 찾는 기법입니다. 주로 **정렬된 배열**을 대상으로 사용되며, 모든 원소 쌍을 비교하는 O(N^2)의 시간 복잡도를 O(N)으로 줄여주는 강력한 테크닉입니다.

핵심 아이디어는 두 포인터를 특정 조건에 따라 함께 움직여 나가면서 탐색 범위를 효과적으로 좁히는 것입니다. 포인터의 움직임에 따라 크게 두 가지 패턴으로 나뉩니다.

1.  **양 끝에서 시작하는 패턴:** 배열의 맨 처음과 맨 끝에서 각각 포인터(left, right)를 시작하여 서로를 향해 다가오게 하는 방식입니다.
2.  **같은 방향으로 움직이는 패턴:** 두 포인터(slow, fast 또는 start, end)가 같은 방향으로 이동하지만, 서로 다른 간격을 유지하며 움직입니다. (슬라이딩 윈도우와 유사)

--- 

### 어떤 문제를 봤을 때 투 포인터를 써야 할까?

문제를 보고 투 포인터를 떠올릴 수 있는 힌트는 다음과 같습니다.

1.  **정렬된 배열이 주어졌을 때:** 투 포인터 알고리즘은 배열이 정렬되어 있다는 특성을 적극적으로 활용합니다. 문제가 정렬된 배열을 다루거나, 정렬을 먼저 수행해도 시간 복잡도에 문제가 없다면 투 포인터를 강력하게 의심해볼 수 있습니다.

2.  **특정 합(Sum)을 만족하는 쌍(Pair)이나 부분 배열 찾기:** "배열에서 두 수를 더해 특정 값 K를 만들 수 있는가?", "연속된 부분 배열의 합이 K인 구간을 찾아라" 와 같은 문제는 투 포인터의 대표적인 활용 사례입니다.

3.  **시간 복잡도 개선 필요성:** 이중 for문을 사용한 완전 탐색(O(N^2))으로 접근하면 시간 초과가 발생할 것 같은 문제에서, O(N)으로 해결해야 할 필요가 있을 때 투 포인터는 훌륭한 대안입니다.

4.  **"연속된 부분 배열" 이라는 키워드:** 문제에서 '연속된'이라는 조건이 붙은 부분 배열을 다룬다면, 시작점과 끝점을 나타내는 두 개의 포인터를 사용하는 슬라이딩 윈도우(투 포인터의 일종) 기법을 적용할 수 있습니다.

--- 

### JavaScript 예시 코드

#### 1. 양 끝에서 시작하는 패턴: 정렬된 배열에서 합이 K인 두 수 찾기

```javascript
/**
 * 정렬된 배열에서 두 수의 합이 target이 되는 쌍의 인덱스를 찾는 함수
 * @param {number[]} sortedArr - 정렬된 숫자 배열
 * @param {number} target - 목표 합계
 * @returns {number[] | null} - 조건을 만족하는 두 수의 인덱스 배열, 없으면 null
 */
function findPairWithSum(sortedArr, target) {
  let left = 0; // 왼쪽 포인터는 0에서 시작
  let right = sortedArr.length - 1; // 오른쪽 포인터는 끝에서 시작

  while (left < right) {
    const currentSum = sortedArr[left] + sortedArr[right];

    if (currentSum === target) {
      // 합이 target과 같으면 성공
      return [left, right];
    } else if (currentSum < target) {
      // 합이 target보다 작으면, 합을 키우기 위해 left 포인터를 오른쪽으로 이동
      left++;
    } else {
      // 합이 target보다 크면, 합을 줄이기 위해 right 포인터를 왼쪽으로 이동
      right--;
    }
  }

  // 루프가 끝날 때까지 찾지 못하면 null 반환
  return null;
}

const arr1 = [1, 2, 3, 4, 6];
const target1 = 6;
console.log(findPairWithSum(arr1, target1)); // [1, 3] (2 + 4 = 6)

const arr2 = [2, 5, 8, 12, 30];
const target2 = 17;
console.log(findPairWithSum(arr2, target2)); // [1, 3] (5 + 12 = 17)
```

#### 2. 같은 방향 패턴 (슬라이딩 윈도우): 연속 부분 배열의 합이 K인 구간 찾기

```javascript
/**
 * 배열에서 연속된 부분 배열의 합이 target이 되는 첫 번째 구간을 찾는 함수
 * @param {number[]} arr - 숫자 배열
 * @param {number} target - 목표 합계
 * @returns {number[]} - 조건을 만족하는 부분 배열, 없으면 빈 배열
 */
function findSubarrayWithSum(arr, target) {
  let start = 0; // 윈도우의 시작 포인터
  let currentSum = 0;

  // end 포인터가 배열을 순회
  for (let end = 0; end < arr.length; end++) {
    currentSum += arr[end];

    // 현재 윈도우의 합이 target보다 크면, 작아질 때까지 start 포인터를 이동
    while (currentSum > target && start <= end) {
      currentSum -= arr[start];
      start++;
    }

    if (currentSum === target) {
      return arr.slice(start, end + 1);
    }
  }

  return [];
}

const arr3 = [1, 4, 20, 3, 10, 5];
const target3 = 33;
console.log(findSubarrayWithSum(arr3, target3)); // [20, 3, 10]

const arr4 = [1, 2, 3, 7, 5];
const target4 = 12;
console.log(findSubarrayWithSum(arr4, target4)); // [2, 3, 7]
```
