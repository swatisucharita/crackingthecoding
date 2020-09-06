function reverseString(string,curPos = 0) {
    const maxLength = Math.floor(string.length/2);
    if (maxLength < 2) { return string; }

    const lastPos = string.length -1 -curPos;
    if (curPos === lastPos) { return string; }

    let chars = string.split("");
    const temp = string[lastPos];
    chars.splice(lastPos, 1, string[curPos]);
    chars.splice(curPos, 1, temp);
    string = chars.join("");
    if (curPos < maxLength) {
        reverseString(string, curPos+1);
    }

    return string;
}

/* TEST */
const string = "swati";
console.log(reverseString(string));