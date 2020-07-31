function urlify(str) {
    return str.replace(/\s+/g, '%20');
}

console.log(urlify("Mr John  Smith") === "Mr%20John%20Smith");
console.log(urlify("MNOP=    ABCE jlkcjxl ljlk jflhdg fkhkfj khd kfjkljf kjcklj jjjjjh") === "MNOP=%20ABCE%20jlkcjxl%20ljlk%20jflhdg%20fkhkfj%20khd%20kfjkljf%20kjcklj%20jjjjjh" )