const fs = require('fs');

let data = fs.readFileSync('../input.txt', 'utf8').split('\n');

data = data.map(el =>  el.split('->'));

let regex1 = /^(NOT )?([0-9]+|[a-z]+)$/; // For instruction that starts with NOT
let regex2 = /^([a-z]+|[0-9]+) (AND|OR|LSHIFT|RSHIFT) ([a-z]+|[0-9]+)/; // For all other instructions

// data = data.map(el => el.split(regex).filter(Boolean));

console.log(data);