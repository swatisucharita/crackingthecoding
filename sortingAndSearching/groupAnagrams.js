function groupAnagrams(list) {
    const valuesSet = list.map(name => ({
        value: name.split("").sort().join(""),
        text: name
    }));

    return valuesSet.sort((value1, value2) => {
        return value1.value > value2.value ? -1: 1;
    }).map(v => v.text);

}
 
/* TEST */
const inputs = ['swati', 'smera', 'itswa', 'awsti', 'remsa', 'ancdef'];
const output = ['swati', 'itswa', 'awsti', 'smera', 'remsa', 'ancdef' ];
console.log(JSON.stringify(groupAnagrams(inputs)) === JSON.stringify(output));