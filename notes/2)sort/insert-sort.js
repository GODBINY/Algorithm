function insertSort(arr) {
  for (let i = 1; i < arr.length; i++) { // 1인 이유? 0번째 인덱스는 이미 정렬되어있다고 가정하니까!
    for (let j = i; j > 0; j--) {
      if (arr[j] < arr[j - 1]) { // 내림차순
        let temp = arr[j];
        arr[j] = arr[j - 1];
        arr[j - 1] = temp;
      } else {
        break;
      }
    }
  }
}

let arr = [10, 3, 1, 5, 2, 9];
insertSort(arr);
console.log(arr);
