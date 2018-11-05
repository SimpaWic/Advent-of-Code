let input = '1113122113';

for (let j = 0; j < 40; j++) {
    let data = input.split('');
    let str = [];
    let sum = 1,
        lastNum = data[0];
    
    for (let i = 1; i < data.length; i++) {
        if(data[i] == lastNum) {
            sum++;
            lastNum = data[i];
        } else if (data[i] != lastNum && i === data.length-1) {
            str.push(sum);
            str.push(lastNum);
            str.push(1);
            str.push(data[i]);
        } else {
            str.push(sum);
            str.push(lastNum);
            sum = 1;
            lastNum = data[i];
        }
    }

    input = str.join('');
}

console.log(input.length);
