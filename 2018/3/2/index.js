let fs = require('fs');

let data = fs.readFileSync('../input.txt', 'utf8').split('\n');
data = data.map(el => el.match(/\d+/g).map(Number));

let map = new Map();

data.forEach(el => {
    let id = el[0],
        x = el[1],
        y = el[2],
        w = el[3],
        h = el[4];
    
    for(let i = x; i < x+w; i++) {
        for(let j = y; j < y+h; j++) {
            if(map.has(`${i}:${j}`)) {
                map.set(`${i}:${j}`, 'x');
            } else {
                map.set(`${i}:${j}`, id);
            }
        }
    }
});

let only = 0;
    
data.forEach(el => {
    let self = true;
    let id = el[0],
        x = el[1],
        y = el[2],
        w = el[3],
        h = el[4];
    
    for(let i = x; i < x+w; i++) {
        for(let j = y; j < y+h; j++) {
            let temp = map.get(`${i}:${j}`);
            if(temp == 'x') self = false;
        }
    }
    if(self) only = id;
});

console.log(only);