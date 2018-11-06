const fs = require('fs');

let data = fs.readFileSync('../input.txt', 'utf8').split('\n');

data = data.map(el => el.split(' '));

let raindeers = [],
    done = [];

const seconds = 2503;

data.forEach(el => {
    raindeers.push([el[0], el[3], el[6], el[13]]);
});

raindeers.forEach(el => {
    let length = 0,
        run = 0,
        sleep = 0;

    for(let i = 0; i < seconds; i++) {
        if(run < el[2]) {
            length += parseInt(el[1]);
            run++;
        } else if(sleep < el[3]) {
            sleep++;
        } 
        if(sleep == el[3]) {
            run = 0;
            sleep = 0;
        }
    }
    done.push([el[0], length]);
});

let bestLength = 0,
    bestName = '';

done.forEach(el => {
    if(el[1] > bestLength) {
        bestLength = el[1];
        bestName = el[0];
    }
});

console.log(`${bestName} : ${bestLength} km`);

2640
