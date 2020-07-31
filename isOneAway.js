function isOneAway(obj1, obj2) {
    const diff = obj1.length - obj2.length;
    if (![-1,0, 1].includes(diff)) {
        return false;
    }

    if (diff === 0 && obj1 === obj2) {
        return true;
    }

    let charsDiff = 1;

    let [bigger, smaller] = [obj1, obj2];
    if (diff === -1) {
        [bigger, smaller] = [obj2, obj1];
    } 
    
    for (let i = 0; i< bigger.length; i++) {
        if (bigger[i] === smaller[i]) { continue; }

        if ([1,-1].includes(diff)) {
            for (let j = i+1; j < bigger.length; j++) {
                if (bigger[j] !== smaller[j-1]) {charsDiff++;}
            }
        } else  {
            for (let j = i+1; j < bigger.length; j++) {
                if (bigger[j] !== smaller[j]) {charsDiff++;}
            }
        }
    } 

    return charsDiff <= 1;
}

console.log(isOneAway("pale", "ple"));
console.log(isOneAway("pales", "pale"));
console.log(isOneAway("palemnopqrst", "balemnopzrst"));
console.log(isOneAway("pale", "bake"));
console.log(isOneAway("palesasdfghj", "paleasdfghj"));
console.log(isOneAway("palesqwerty", "paletqwerty"));