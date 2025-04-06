// let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
let input = require('fs').readFileSync('../inputs/10869.txt').toString().split('\n');

let inputs = input[0].split(' ');

let a = Number(inputs[0])
let b = Number(inputs[1])

console.log((a+b)+'\n'+(a-b)+'\n'+(a*b)+'\n'+parseInt(a/b)+'\n'+(a%b));
