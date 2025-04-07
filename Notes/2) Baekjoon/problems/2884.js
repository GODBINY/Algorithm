let fs = require('fs');
let input = fs.readFileSync('../inputs/2884.txt').toString().split('\n');

let inputs = input[0].split(' ');

let h = parseInt(inputs[0]);
let m = parseInt(inputs[1]);

let hour = m < 45 ? (h === 0 ? 23 : h - 1) : h;
let min = m < 45 ? m+15 : m-45;


console.log(`${hour} ${min}`);

