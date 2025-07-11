let fs = require("fs");
let input = fs
  .readFileSync("../inputs/2961.txt")
  .toString()
  .trim()
  .split("\n");

console.log(input);

const N = Number(input[0]);
input.shift();
const sbList = input.map((item)=> 
  {return item.split(' ').map(Number)})
console.log(sbList);

let min = Infinity;


// function dfs(number){
// 	if(종료조건 만족){
// 		출력 관련 처리; // 한번에 모으던가 바로 출력하던가
// 	}
// 	for(자식 노드를 하나씩 확인){
// 		if(임의의 조건을 만족하면){
// 			자식노드 방문처리;
// 			recursive();
// 			자식노드 방문처리 해제;
// 		} // 조건에 안맞으면 애초에 안탄다
// 	}
// }
// 
// dfs(1); //요리는 최소 1개이상 있어야함.
// 
//
console.log(calculate(sbList))


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
