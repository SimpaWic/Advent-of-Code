let fs = require('fs');

let data = fs.readFileSync('../input.txt', 'utf8').split('\n');
data = data.map(el => el.split(''));

let good = 0;


data.forEach(el => {
    let crit1 = false,
        crit2 = false;

    for(let i = 0; i < el.length - 3; i++) {
        for(let j = i+2; j < el.length - 1; j++) {
            if (`${el[i]}${el[i+1]}` === `${el[j]}${el[j+1]}`) {
                crit1 = true;
                console.log(`Crit 1: ${el}`);
            }
        }
    }

    for(let i = 0; i < el.length - 2; i++) {
        if (el[i] === el[i+2]) {
            crit2 = true;
            console.log(`Crit 2: ${el}`);
        }
    }

    if (crit1 && crit2) {
        good++;
        console.log(`Both : ${el}`);
    }
});

console.log(good);