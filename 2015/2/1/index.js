let fs = require('fs');

let data = fs.readFileSync('../input.txt', 'utf8').split('\n');
data = data.map(el => el.split('x'));
let sum = 0;

data.forEach(el => {
    el.sort((a, b) => a - b);

    let l = parseInt(el[0]),
        w = parseInt(el[1]),
        h = parseInt(el[2]);

    sum += 2*l*w + 2*w*h + 2*h*l + l*w;
});

console.log(sum);