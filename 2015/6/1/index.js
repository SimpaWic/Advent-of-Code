const fs = require('fs');
const util = require('util');


let data = fs.readFileSync('../input.txt', 'utf8').split('\n');

let regex = /(.*) (\d+),(\d+) through (\d+),(\d+)/;

data = data.map(el => el.split(regex).filter(Boolean));

let lights = [];
for (let i = 0; i < 1000; i++) {
    lights[i] = [];
    for (let j = 0; j < 1000; j++) {
        lights[i][j] = false;
    }
}

data.forEach(el => {
    for (let i = Math.min(el[1], el[3]); i <= Math.max(el[1], el[3]); i++) {
        for (let j = Math.min(el[2], el[4]); j <= Math.max(el[2], el[4]); j++) {
            switch (el[0]) {
                case 'turn on':
                    lights[i][j] = true;
                    break;
                case 'turn off':
                    lights[i][j] = false;
                    break;
                case 'toggle':
                    lights[i][j] = !lights[i][j];
                    break;
            }
        }
    }
});

let on = 0;
for (let i = 0; i < 1000; i++) {
    for (let j = 0; j < 1000; j++) {
        if (lights[i][j]) {
            on++;
        }
    }
}

console.log(on);