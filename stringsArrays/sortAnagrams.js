function sortAnagrams(array=[]) {
    const items = array.map(elem => ({value: elem.replace(/\s/g, '').split("").sort().join(""), text: elem}));

    items.sort((elem1, elem2) => elem1.value > elem2.value ? 1 : -1);
    return items.map(item => item.text);
}

console.log(JSON.stringify(sortAnagrams(['abcd', 'mnop', 'pqrs', 'adbc', 'ac bd', 'ponm'])) === JSON.stringify([ 'ac bd', 'adbc', 'abcd', 'ponm', 'mnop', 'pqrs' ]))