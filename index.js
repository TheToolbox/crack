const data = ["[5h 41m 52s] [1h 27m 36s] [0h 55m 49s] [1h 36m 52s] [0h 32m 2s] [9h 9m 47s] [3h 13m 8s] [7h 23m 8s]",

"[8h 51m 44s] [2h 0m 10s] [4h 56m 3s] [7h 1m 41s] [5h 9m 3s] [9h 35m 22s] [7h 20m 27s] [0h 0m 1s]",

"[0h 10m 23s] [11h 39m 49s] [2h 3m 23s] [2h 56m 36s] [2h 18m 7s] [0h 40m 27s]",

"[8h 6m 40s] [4h 24m 11s] [8h 6m 9s] [1h 18m 2s] [9h 24m 58s] [0h 0m 4s]",

"[8h 48m 53s] [11h 58m 26s]",

"[2h 54m 40s] [2h 47m 18s] [0h 54m 56s] [11h 43m 19s] [3h 19m 39s] [3h 34m 51s] [3h 37m 52s] [0h 0m 19s]"];

const words = data.map((word) => {
    return word.slice(1,-1).split('] [').map((clock) => {
        const nums = clock.split(' ');
        return {
            hour: parseInt(nums[0]),
            min: parseInt(nums[1]),
            sec: parseInt(nums[2]),
        }
    });
});

var numeric = words.map((word) => {
    return word.map((clock) => {
        return (3600 * clock.hour + 60 * clock.min + clock.sec);
    });
});

var newwords = [];
for (let i = 0; i < numeric.length; i++) {
    newwords[i] = [];
    for (let j = 0; j < numeric[i].length; j++) {
        newwords[i][j] = numeric[i][words[i].length - (1 + j)];
    }
}
console.log(newwords.map((word) => {return word.map((num) => {return leftpad(num.toString(16),4,0);});}));

function leftpad(str, len, char) {
    while(str.length < len) {str = char + str;}
    return str;
}

/*
console.log(words.map((word) => {
    return word.map((clock) => {
        return (3600 * clock.hour + 60 * clock.min + clock.sec)/;
    });
}));

 37*1229*1178637163094140237*/

