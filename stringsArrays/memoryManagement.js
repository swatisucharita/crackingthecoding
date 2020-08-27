const { freemem } = require("os");
const { ObjectUnsubscribedError } = require("rxjs");

let a = 23; // Allocate memory for number
let s = "memory management"; // Allocated memory for string

let arr = [1,2,3,4]; // Allocated memory for the array and elements
let o = { 
    test: "test memory",
    o2: {
        test2: "Object 2"
    }
}; // Allocates meory required for the object

let f = () => {
    console.log("Expression"); 
}; //Allocates memory for the expression

let d = new Date(); // Allocates memory for the Date
let e = Document.querySelector('div'); // Allocates memory fo the DOM node




let o1 = { 
    test: "test memory",
    o2: {
        test2: "Object 2"
    }
}; // Memory is allocated for the object

let o3 = o1.o2; // o3 holding a reference to o1.o2
let o1 = 34; // object o1 is not holding the memory anymore, 
             // but o3 is holding a reference. Hence memory can't be cleared.

let o3 = 'test'; // memory can be cleared/collected now. No one holding reference




var div;
window.onload = function() {
  div = document.querySelector('div');
  div.reference = div;
  div.data = new Array(100000);
};



// Mark
let accessibleNodes = [root];
while(accessibleNodes.length) {
    const node = accessibleNodes.pop();
    node.marked = true;

    node.childNodes.forEach(node => accessibleNodes.push(node));
}

// Sweep
let memory = heap;
while(memory) {
    if (!memory.marked) {
        free(memory);
    } else {
        memory.marked = false;
    }

    memory = memory.next;
}






function testMyMemory() {
    test = "I have unusally long memory";
    console.log(test);
}
testMyMemory();

// Behind the scene
function testMyMemory() {
    window.test = "I have unusally long memory";
}
testMyMemory();


function testMyMemory() {
    let test = "I have unusally long memory";
    console.log(test);
}
testMyMemory();




let res = null;
function outer(){
    res = new Array(10000);

    function unused(){
        if (res) {
            console.log(true);
            return;
        }
        console.log(false);
    }
    return () => {};
}
setInterval(() => {
    outer();
}, 2000);



let button = document.querySelector('button');
var counter = 0;
function onClick(event) {
   counter++;
   button.innerHtml = 'counter ' + counter;
}
button.addEventListener('click', onClick);




let obj = {
    list: document.querySelector('#list')
};

function addImage() {
    obj.list.className = "bg-image";
}

function removeList() {
    document.body.removeChild(document.querySelector('#list'));
};
removeList();