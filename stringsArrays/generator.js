function* testGenerator() {
    for(let i=0; i<5; i++) {
        yield i;
    }
}

/* TEST */
let t = testGenerator();
console.log(t.next());
console.log(t.next());
console.log(t.next());
console.log(t.next());
console.log(t.next());
console.log(t.next());

