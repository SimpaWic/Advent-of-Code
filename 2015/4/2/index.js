let crypto = require('crypto');

let secret = 'iwrupvqb',
    num = 0,
    found = false;

while(!found) {
    num++;
    let hash = crypto.createHash('md5').update(`${secret}${num}`).digest('hex');
    if(hash.substring(0, 6) === '000000') {
        found = true;
    }
}

console.log(num);