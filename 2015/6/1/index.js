let fs = require('fs');

let data = fs.readFileSync('../input.txt', 'utf8').split('\n');

let regex = /(.*) (\d+),(\d+) through (\d+),(\d+)/;

data = data.map(el => el.split(regex).filter(Boolean));

let lights = [];
for (let i = 0; i < 1000; i++) {
    lights[i] = [];
    for(let j = 0; j < 1000; j++) {
        lights[i][j] = false;
    }
}

data.forEach(el => {
    for(let i = el[1]; i <= el[3] ; i++) {
        for(let j = el[2]; j <= el[4] ; j++) {
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
    for(let j = 0; j < 1000; j++) {
        if (lights[i][j]) on++;
    }
}


console.log(on);