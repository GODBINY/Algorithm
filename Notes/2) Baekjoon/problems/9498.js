let fs = require('fs');
let input = fs.readFileSync('../inputs/9498.txt').toString().split('/n');

let grade = parseInt(input[0]);

console.log(grade>89 ? 'A' : grade>79 ? 'B' : grade>69 ? 'C' : grade>59 ? 'D' : 'F' )
