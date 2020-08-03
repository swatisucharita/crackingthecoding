function isUnique(str) {
    const result = {};
    for (let i = 0; i < str.length; i++) {
        if (result[str[i]]) { break; }
        result[str[i]] = true;
    }
    if (Object.keys(result).length !== str.length) {
        return "Not unique";
    }
    return "Unique";
}

console.log(isUnique("abc") === "Unique");
console.log(isUnique("abcamnopqurst") === "Not unique");
console.log(isUnique([1,2,3,1]) === "Not unique");
console.log(isUnique(["a", "b", "c"]) === "Unique");
console.log(isUnique(["a", "m", "n", "p", "q", "m"]) === "Not unique")