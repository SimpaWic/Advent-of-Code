let fs = require('fs');

let data = fs.readFileSync('../input.txt', 'utf8').split('');

let x = 0,
    y = 0;

let santas = 0;

let santaLocs = [[0, 0], [0, 0]],
    houses = [['0:0', 1]];

data.forEach(el => {
    switch(el) {
        case '<':
            santaLocs[santas][0]++;
            break;
        case '>':
            santaLocs[santas][0]--;
            break;
        case '^':
            santaLocs[santas][1]++;
            break;
        case 'v':
            santaLocs[santas][1]--;
            break;
    }

    let index = houses.findIndex( coord => {
        return coord[0] === `${santaLocs[santas][0]}:${santaLocs[santas][1]}`;
    });
    
    if (index > -1) {
        houses[index][1]++;
    } else {
        houses.push([`${santaLocs[santas][0]}:${santaLocs[santas][1]}`, 1]);
    }

    santas++;
    santas %= 2;
}); 

console.log(houses.length);