let fs = require('fs');

let data = fs.readFileSync('../input.txt', 'utf8').split('\n');

let freq = 0;

data.forEach(el => {
    el.startsWith('+') ? freq += parseInt(el.substring(1)) : freq -= parseInt(el.substring(1)); 
});

console.log(freq);
