let fs = require("fs");
let input = fs
  .readFileSync("../inputs/2961.txt")
  .toString()
  .trim()
  .split("\n");

const N = Number(input[0]);
input.shift();
const sbList = input.map((item)=> 
  {return item.split(' ').map(Number)})

let min = Infinity;
let tempArr = [];


function dfs(startIdx) {
  if (tempArr.length > 0) {
    const diff = calculate(tempArr);
    if (diff < min) {
      min = diff;
    }
  }

  for (let i = startIdx; i < N; i++) {
    tempArr.push(sbList[i]);
    dfs(i + 1);
    tempArr.pop();
  }
}

dfs(0);
console.log(min);

// 신맛전체곱 + 쓴맛전체합 계산기
function calculate(arr){
  if(arr.length>0){
   let sSum = arr[0][0];
   let bSum = arr[0][1];
   
   for(let i=1;i<arr.length; i++){
     sSum *= arr[i][0];
     bSum += arr[i][1];
   }
    return Math.abs(sSum-bSum);
  }
}

