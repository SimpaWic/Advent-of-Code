let fs = require('fs');

let data = fs.readFileSync('../input.txt', 'utf8').split('\n');

let done = false;

s = data[0].split('');

z: while (!done) {
    for (let i = 0; i < s.length - 1; i++) {
        if (s[i].toLowerCase() === s[i + 1].toLowerCase() && s[i] != s[i + 1]) {
            s.splice(i, 2);
            continue z;
        }
    }
    done = true;
}

console.log(s.length);

/**
 * Nice recursive function that isn't possible because lack of TCO ┻━┻ ︵ ヽ(°□°ヽ)
 */
// function polyReact(s) {
//     for (let i = 0; i < s.length - 1; i++) {
//         if (s[i].toLowerCase() === s[i + 1].toLowerCase() && s[i] != s[i + 1]) {
//             s.splice(i, 2);
//             s = polyReact(s);
//             break;
//         }
//     }
//     return s;
// }

// console.log(polyReact(data[0].split('')).join(''));