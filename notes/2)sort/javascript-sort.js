let numArr = [5, 3, 6, 8, 2, 1];
let strArr = ['Banana', 'Cherry', 'Mango', 'Apple', 'cookie'];
let objArr = [
  { name: '뀽', score: 120 },
  { name: '콩', score: 80 },
  { name: '지렁', score: 150 },
]

// 1. 숫자 array 
// 직접 구현 가능하긴 함. 근데 숫자는 뭐.. 원체 간단해서.
numArr.sort((a, b) => a - b);
console.log(numArr);

// 2-1. 문자열 array
// 대소문자 구분 없이 비교 
function strCompare(a, b) {
  if (a.toUpperCase() > b.toUpperCase()) {
    return -1;
  } else if (b.toUpperCase() > a.toUpperCase()) {
    return 1;
  } else {
    return 0;
  }
}

// 2-2. 문자열 array
// 대소문자 구분(소문자가 앞에 옴)
function strCompare2(a, b) {
  return a > b ? -1 : a < b ? 1 : 0
}

// 직접 만든 함수 적용할 때에는 함수 이름만 주면 알아서 파라미터 들어가네.
strArr.sort();
console.log(strArr);
strArr.sort(strCompare);
console.log(strArr);
strArr.sort(strCompare2);
console.log(strArr);

// 4. object arry 도 비교 가능.
objArr.sort((a, b) => a.score - b.score);

console.log(objArr);
