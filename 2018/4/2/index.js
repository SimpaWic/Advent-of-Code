let fs = require('fs');

let data = fs.readFileSync('../input.txt', 'utf8').split('\n');


data.sort((x, y) => {
    var date1 = x.match(/\d+-\d+-\d+ \d+:\d+/);
    var date2 = y.match(/\d+-\d+-\d+ \d+:\d+/);
    return date1 == date2 ? 0 : date1 < date2 ? -1 : 1;
});

let guards = new Map();
let currentGuardId = 0,
sleep = 0,
wake = 0;

data.forEach(el => {
    if(/#\d+/.test(el)) {
        currentGuardId = parseInt(el.match(/#\d+/).toString().substring(1));
        if(!guards.has(currentGuardId)) {
            let asleep = [];
            for(let i = 0; i < 60; i++) {
                asleep[i] = 0;
            }
            guards.set(currentGuardId, asleep);
            
        } 
    } else if (/falls asleep/.test(el)) {
        sleep = el.match(/:\d+/).toString();
        sleep = parseInt(sleep.substring(1));
    } else if (/wakes up/.test(el)) {
        wake = el.match(/:\d+/).toString();
        wake = parseInt(wake.substring(1));
        let asleep = guards.get(currentGuardId);
        for(let i = sleep; i < wake; i++) {
            asleep[i]++; 
        }
        guards.set(currentGuardId, asleep);
    }
}); 


let mostTimesSleep = 0,
    freq = 0;

guards.forEach((value, key) => {
    value.forEach((el, index) => {
        if(el > mostTimesSleep) {
            mostTimesSleep = el;
            freq = index;
            currentGuardId = key;
        }
    });
});

console.log(currentGuardId*freq);