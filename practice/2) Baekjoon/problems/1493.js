const fs = require("fs");
const input = fs
  .readFileSync("../inputs/1493.txt")
  .toString()
  .trim()
  .split("\n");

console.log(input);

let info = input[0].split(' ').map(Number);

let length = info[0];
let width = info[1];
let height = info[2];

let cubeList = [];
let cnt = 0;

// let num = Math.pow(2, input[i].split(' ')[0]);

for (let i = Number(input[1]) + 1; i > 1; i--) {
  console.log(input[i]);
  cubeList.push(input[i].split(' ').map(Number));
}

console.log(cubeList)

let repeatArr = new Array(20).fill(0)

console.log(repeatArr)

