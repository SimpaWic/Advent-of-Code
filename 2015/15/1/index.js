const fs = require('fs');

let data = fs.readFileSync('../input.txt', 'utf8').split('\n');

let regex = /[+-]?\d+(?:\.\d+)?/g;

data = data.map(el => el.match(regex).map(Number));

let bestScore = 0;

for (let i = 0; i < 100; i++) {
    for (let j = 0; j < (100 - i); j++) {
        for (let k = 0; k < (100 - i - j); k++) {
            let l = 100 - i - j - k;

            let capa = data[0][0]*i + data[1][0]*j + data[2][0]*k + data[3][0]*l;
            let dura = data[0][1]*i + data[1][1]*j + data[2][1]*k + data[3][1]*l;
            let flav = data[0][2]*i + data[1][2]*j + data[2][2]*k + data[3][2]*l;
            let text = data[0][3]*i + data[1][3]*j + data[2][3]*k + data[3][3]*l;
            
            if(capa <= 0 || dura <= 0 || flav <= 0 || text <= 0) {
                continue;
            }

            let sum = capa*dura*flav*text;

            if (sum > bestScore) {
                bestScore = sum;
            }
        }
    }
}

console.log(bestScore);