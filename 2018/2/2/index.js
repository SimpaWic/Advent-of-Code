let fs = require('fs');

let data = fs.readFileSync('../input.txt', 'utf8').split('\n');
data = data.map(el => el.split(''));

for (let i = 0; i < data.length - 1; i++) {
    let el1 = data[i];
    for (let j = i + 1; j < data.length; j++) {
        let el2 = data[j];
        let wrongs = 0,
            index = 0;
        for(k = 0; k < el1.length; k++) {
            if (el1[k] !== el2[k]) {
                index = k;
                wrongs++;
            }
        }
        if (wrongs === 1) {
            el1.splice(index, 1);
            console.log(el1.join(''));
        }
    }
}