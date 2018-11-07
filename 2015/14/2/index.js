const fs = require('fs');

let data = fs.readFileSync('../input.txt', 'utf8').split('\n');

data = data.map(el => el.split(' '));

let raindeers = [],
    done = [];

const seconds = 2503;

data.forEach(el => {
    raindeers.push([el[0], el[3], el[6], el[13], 0, 0, 0 ,0]); // run,sleep,length,points
});

for(let i = 0; i < seconds; i++) {
    raindeers.forEach(el => {
        if(el[4] < el[2]) {
            el[6] += parseInt(el[1]);
            el[4]++;
        } else if(el[5] < el[3]) {
            el[5]++;
        } 
        if(el[5] == el[3]) {
            el[4] = 0;
            el[5] = 0;
        }
    });

    raindeers = raindeers.sort((a, b) => {
        if(a[6] < b[6]) return 1;
        if(a[6] > b[6]) return -1;
        return 0;
    });

    let first = raindeers[0][6];
    raindeers.forEach(el => {
        if(el[6] === first) {
            el[7]++;
        }
    });
}

console.log(raindeers);