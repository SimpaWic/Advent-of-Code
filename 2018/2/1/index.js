let fs = require('fs');

let data = fs.readFileSync('../input.txt', 'utf8').split('\n');
data = data.map(el => el.split(''));

let checksum = 0,
    twos = 0,
    threes = 0;

data.forEach(els => {
    let map = new Map();

    els.forEach(el => {
        if(map.has(el)) {
            let x = map.get(el);
            x++;
            map.set(el, x);
        } else {
            map.set(el, 1);
        }
    });

    let iter = map.values();
    let val,
        two = 0,
        three = 0;

    do {
        val = iter.next();

        if (val.value === 2) {
            two++;
        } else if (val.value === 3) {
            three++;
        }
    } while (!val.done);

    if (two > 0) twos++;
    if (three > 0) threes++;
});


console.log(twos*threes);