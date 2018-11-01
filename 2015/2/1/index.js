let fs = require('fs');

let data = fs.readFileSync('../input.txt', 'utf8').split('\n');
data = data.map(el => el.split('x'));
let sum = 0;

data.forEach(el => {
    let l = parseInt(el[0]),
        w = parseInt(el[1]),
        h = parseInt(el[2]);

    let lw = l*w,
        wh = w*h,
        hl = h*l;

    let smallest = lw;
    if (wh < smallest) smallest = wh;
    if (hl < smallest) smallest = hl;
    sum =  sum + ((2*lw) + (2*wh) + (2*hl) + smallest);
});

console.log(sum);