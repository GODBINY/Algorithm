let fs = require('fs');
let input = fs.readFileSync('../inputs/2588.txt').toString().split('\n');

let a = input[0];
let b = input[1];

let lv1 = a*(b.slice(2,3));
let lv2 = a*(b.slice(1,2));
let lv3 = a*(b.slice(0,1));
let lv4 = a*b;


console.log(lv1+'\n'+lv2+'\n'+lv3+'\n'+lv4);


