// 파라메트릭 서치는
// 가능한 범위의 최대, 최소를 산정하고
// mid값을 지정해서 그게 조건을 만족한다면
// mid값을 더 늘리거나 줄여서 가능한 최대(최소)의 값을 찾는것.

let start = 가능한 최소값;
let end = 가능한 최대값;

let result = -1;

while (start <= end) {
  let mid = Math.floor((start + end) / 2);

  if (mid가 조건을 만족한다면) {
    result = mid;
    start = mid + 1; // 더 큰 쪽도 조건 만족할지 확인
  } else {
    end = mid - 1;
  }
}
