function reverseStringByDot(string) {
    const arr = string.split(".");
    for (let i =0; i< Math.floor(arr.length/2); i++) {
        const endPos = arr.length -1-i;
        const temp = arr[endPos];
        arr[endPos] = arr[i];
        arr[i] = temp;
    }

    return arr.join('.')
}

/* TEST */
console.log(reverseStringByDot("i.have.a.pen") === "pen.a.have.i");