function isPalindromePermutation(obj) {
    const result = {};
    // Count chars
    for (let i=0; i < obj.length; i++) {
        if (!result[obj[i]]) {
            result[obj[i]] = 1;
        } else if (result[obj[i]] === 1) {
            result[obj[i]] = 0; // reset when even is found
        }
    }

    const oddCount = Object.keys(result).filter(k => result[k] >= 1);
    return oddCount.length <= 1;
}

console.log(isPalindromePermutation("acbba")===true)
console.log(isPalindromePermutation("amnopponmast")===false)