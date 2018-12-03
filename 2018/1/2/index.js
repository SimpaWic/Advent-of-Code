let fs = require('fs');

let data = fs.readFileSync('../input.txt', 'utf8').split('\n');

let freq = 0,
    freqs = [0],
    found = false;

let i = 0;
while(!found) {
    data[i].startsWith('+') ? freq += parseInt(data[i].substring(1)) : freq -= parseInt(data[i].substring(1));
    if(freqs.includes(freq)) found = true;
    freqs.push(freq);
    i++;
    if(i === data.length) i = 0;
}

console.log(freq);