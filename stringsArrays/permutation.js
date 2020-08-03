function isPermutation(obj1, obj2) {
    if (obj1.length !== obj2.length) {
        return false;
    }

    const checkResult = {};
    for (let i =0; i<obj1.length; i++) {
        checkResult[obj1[i]] = 0;
    }

    for (let i =0; i<obj2.length; i++) {
        if (checkResult[obj2[i]] === undefined) {
            break;
        }
        checkResult[obj2[i]]++;
    }

    if (Object.values(checkResult).every(v => v >= 1)) {
        return true;
    }

    return false;
}

console.log(isPermutation("abc", "bca") === true);
console.log(isPermutation("abc", "bdc") === false);
console.log(isPermutation("abc", "abcdef") === false);
console.log(isPermutation(["a", "b", "1"], ["1", "b", "a"]) === true);
console.log(isPermutation(["a", "s", "m"], ["a", "s", "n"]) === false);
