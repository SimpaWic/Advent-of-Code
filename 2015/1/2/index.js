let fs = require('fs');

let data = fs.readFileSync('../input.txt', 'utf8').split('');

let floor = 0;

let index = 0;

data.some( el => {
    el === '(' ? floor++ : floor--;

    index++;
    
    return floor === -1;
});

console.log(index);