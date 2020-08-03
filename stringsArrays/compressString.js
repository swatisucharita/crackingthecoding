function compressString(str) {
    let result = "";
    let counter = 1;
    for (let i =0; i< str.length; i++) {
        if (str[i] === str[i+1]) {
            counter++;
        } else {
            result = `${result}${str[i]}${counter}`;
            counter = 1;
        }
    }
    return result.length > str.length ? str : result;
};

console.log(compressString("aabcccccaaa") === "a2b1c5a3")
console.log(compressString("ab") === "ab")
console.log(compressString("aaaaaazzzzzzuuuuuuuuuuyyyyeeeeuuuu") === "a6z6u10y4e4u4")