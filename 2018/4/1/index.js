let fs = require('fs');

let data = fs.readFileSync('../input.txt', 'utf8').split('\n');


data.sort((x, y) => {
    var date1 = x.match(/\d+-\d+-\d+ \d+:\d+/);
    var date2 = y.match(/\d+-\d+-\d+ \d+:\d+/);
    return date1 == date2 ? 0 : date1 < date2 ? -1 : 1;
});

let guards = new Map();
let currenetGuardId = 0,
    sleep = 0,
    wake = 0;

data.forEach(el => {
    if(/#\d+/.test(el)) {
        currenetGuardId = parseInt(el.match(/#\d+/).toString().substring(1));
        if(!guards.has(currenetGuardId)) {
            let asleep = [];
            for(let i = 0; i < 60; i++) {
                asleep[i] = 0;
            }
            guards.set(currenetGuardId, sleep);
            console.log(currenetGuardId);
        }
    } else if (/falls asleep/.test(el)) {
        sleep = el.match(/:\d+/).toString();
        sleep = parseInt(sleep.substring(1));
        console.log(currenetGuardId);
    } else if (/wakes up/.test(el)) {
        wake = el.match(/:\d+/).toString();
        wake = parseInt(wake.substring(1));
        let asleep = guards.get(currenetGuardId);
        for(let i = sleep; i < wake; i++) {
            asleep[i]++; 
        }
        console.log(currenetGuardId);
    }
}); 

let s = '';
data.forEach(el => {
    s += el;
    s += '\n'
});

fs.writeFile("../sorted.txt", s, function(err) {
    if(err) {
        return console.log(err);
    }
    console.log("The file was saved!");
}); 

console.log(guards);