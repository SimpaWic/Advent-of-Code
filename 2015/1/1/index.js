let fs = require('fs');

let data = fs.readFileSync('../input.txt', 'utf8').split('');

let floor = 0;
 
data.forEach( el => {
    el === '(' ? floor++ : floor--;
});

console.log(floor);