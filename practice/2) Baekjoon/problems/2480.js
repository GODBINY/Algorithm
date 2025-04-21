let fs = require('fs');
let input = fs.readFileSync('../inputs/2480.txt').toString().split('\n');

function solution(arr) {
  if(arr[0]===arr[1] && arr[1] === arr[2]){
    return 10000+arr[0]*1000
  } else if (arr[0]===arr[1]||arr[1]===arr[2]||arr[0]===arr[2]){
    return 1000 + ((arr[0]===arr[1]||arr[0]===arr[2]) ? arr[0]*100 : arr[1]*100) 
  } else {
    return arr.sort((a,b)=>b-a)[0]*100
  }
}
 
console.log(solution(input[0].split(' ').map(Number)));
