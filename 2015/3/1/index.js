let fs = require('fs');

let data = fs.readFileSync('../input.txt', 'utf8').split('');

let x = 0,
    y = 0;

let houses = [['0:0', 1]];

data.forEach(el => {
    switch(el) {
        case '<':
            x++;
            break;
        case '>':
            x--;
            break;
        case '^':
            y++;
            break;
        case 'v':
            y--;
            break;
    }

    let index = houses.findIndex( coord => {
        return coord[0] === `${x}:${y}`;
    });
    
    if (index > -1) {
        houses[index][1]++;
    } else {
        houses.push([`${x}:${y}`, 1])
    }
}); 

console.log(houses.length);