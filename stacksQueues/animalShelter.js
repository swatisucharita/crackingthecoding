let Queue = require('./queue');
let Stack = require('./stack');

class AnimalShelter {
    constructor() {
        this.pets = new Queue();
    }

    enqueue(name, type) {
        this.pets.enqueue({name, type: type.toLowerCase()})
    }

    dequeueAny() {
        if (this.pets.isEmpty()) { return null; }
        return this.pets.dequeue();
    }

    dequeueDog() {
        const temp = new Stack();
        let pet = null;
        while (!pet && !this.pets.isEmpty()) {
            if (this.pets.peek().type === "dog") {
                pet = this.pets.dequeue();
            } else {
                temp.push(this.pets.dequeue());
            }
        }

        if (pet) {
            while(temp.size()) {
                this.pets.enqueue(temp.pop());
            }
        }

        return pet;
    }
    dequeueCat() {
        const temp = new Stack();
        let pet = null;
        while (!pet && !this.pets.isEmpty()) {
            if (this.pets.peek().type === "cat") {
                pet = this.pets.dequeue();
            } else {
                temp.push(this.pets.dequeue());
            }
        }

        if (pet) {
            while(temp.size()) {
                this.pets.enqueue(temp.pop());
            }
        }

        return pet;
    }
}

/* TEST */

let shelter = new AnimalShelter();
shelter.enqueue("kuka", "dog");
shelter.enqueue("mew", "cat");
shelter.enqueue("Gori", "dog");
console.log(JSON.stringify(shelter.dequeueAny()) === JSON.stringify({name: "kuka", type: "dog"}));
console.log(JSON.stringify(shelter.dequeueDog()) === JSON.stringify({name: "Gori", type: "dog"}) );
console.log(JSON.stringify(shelter.dequeueCat()) === JSON.stringify({name: "mew", type: "cat"}) );