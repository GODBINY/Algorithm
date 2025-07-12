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


function dfs(depth){ // depth는 요리의 종류
  if(depth == N + 2){
    return;
  }
	if(calculate(tempArr)<min){
    min = calculate(tempArr);
	}
	for(let i=0; i<N;i++){
    tempArr.push(sbList[i]);
		dfs(depth+1);
    tempArr.pop();
	}
}

dfs(1); //요리는 최소 1개이상 있어야함.
console.log(min)

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

