let fs = require('fs');

let data = fs.readFileSync('../input.txt', 'utf8').split('\n');

let abc = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

let k = data[0];

let shortest = Number.MAX_SAFE_INTEGER;

abc.forEach(el => {
    let s = k;

    let regex = new RegExp(el, 'gi');

    s = s.replace(regex, '');

    s = s.split('');

    let done = false;
    z: while (!done) {
        for (let i = 0; i < s.length - 1; i++) {
            if (s[i].toLowerCase() === s[i + 1].toLowerCase() && s[i] != s[i + 1]) {
                s.splice(i, 2);
                continue z;
            }
        }
        done = true;
        if(s.length < shortest) {
            shortest = s.length;
        }
    }
    console.log(`${el} : ${shortest}`);
});

console.log(shortest);