let fs = require('fs');

let data = fs.readFileSync('../input.txt', 'utf8').split('\n');
// data = data.map(el => el.split(''));

let notAllowed = ['ab', 'cd', 'pq', 'xy'],
    vowels = ['a', 'e', 'i', 'o', 'u'];

let good = 0;


data.forEach(el => {
    if (notAllowed.some(str => el.includes(str))) {
        return;
    }

    el = el.split('');

    let vow = 0;

    for(let i = 0; i < el.length; i++) {
        if(vowels.some(str => el[i].includes(str))) {
            vow++;
        }
    }

    let dubble = false;
    for(let i = 0; i < el.length - 1; i++) {
        if(el[i] === el[i + 1]) {
            dubble = true;
        }
    }
    if (dubble && vow > 2) {
        good++;
    }
});

console.log(good);