const fs = require('fs');
const util = require('util');


let data = fs.readFileSync('../input.txt', 'utf8').split('\n');

let regex = /(.*) (\d+),(\d+) through (\d+),(\d+)/;

data = data.map(el => el.split(regex).filter(Boolean));

let lights = [];
for (let i = 0; i < 1000; i++) {
    lights[i] = [];
    for (let j = 0; j < 1000; j++) {
        lights[i][j] = 0;
    }
}

data.forEach(el => {
    for (let i = Math.min(el[1], el[3]); i <= Math.max(el[1], el[3]); i++) {
        for (let j = Math.min(el[2], el[4]); j <= Math.max(el[2], el[4]); j++) {
            switch (el[0]) {
                case 'turn on':
                    lights[i][j]++;
                    break;
                case 'turn off':
                    if(lights[i][j] > 0) lights[i][j]--;
                    break;
                case 'toggle':
                    lights[i][j] += 2;
                    break;
            }
        }
    }
});

let brightness = 0;
for (let i = 0; i < 1000; i++) {
    for (let j = 0; j < 1000; j++) {
        brightness += lights[i][j];
    }
}

console.log(brightness);