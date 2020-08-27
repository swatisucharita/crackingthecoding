function mostRepeated(string) {
    let result = {};

    for (let i =0; i< string.length; i++) {
        const str = string[i];
        if (!result[str]) {
            result[str] = 1;
        } else {
            result[str]++;
        }
    }

    let highestCount = 0;
    let c = '';
    for(let char in result) {
        if (result[char] > highestCount) {
            highestCount = result[char];
            c = char;
        }
    }

    return {[c]: highestCount};
}

/* TEST */
let string = "swati sucharita";
console.log(mostRepeated(string) === {a: 3});