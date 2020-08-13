
// Global scope
console.log(a); // Undefined
console.log(typeof testGlobal); // undefined
var a = 67;
function testGlobal() { console.log("Testing Hoisting in Global scope"); }

// Local scope
function testHoisting(){
    console.log(test1); // undefined
    console.log(typeof testLocal); // undefined
    var test1 = 25;
    var testLocal = function() { console.log("Testing Hoisting in local scope"); }
    console.log(test1 === 25); // true
}
testHoisting();

// Global scope 
var a;
var testGlobal;
console.log(a); // Undefined
console.log(typeof testGlobal); // undefined
a = 67;
testGlobal = function() { console.log("Testing Hoisting in Global scope"); }
console.log(typeof testGlobal) // function

// Local scope
function testHoisting(){
    var test1;
    var testLocal;
    console.log(test1); // Undefined
    console.log(typeof testLocal); // function
    test1 = 25;
    testLocal = function() { console.log("Testing Hoisting in local scope"); }
    console.log(test1); // 25
    console.log(typeof testLocal) // function
}
testHoisting();

function testFunctions(){
    var test = 12;
    function test() { console.log("testing hoisting for functions"); }
    console.log(test); // 12
}
testFunctions();

function testExpressions(){
    var test = 12;
    test = function(){ console.log("Testing hoisting for expressions"); }
    console.log(test); // function
}
testExpressions();

// Explained
function testFunctions(){
    var test;
    function test() { console.log("testing hoisting for functions"); }

    test = 12;
    console.log(test); // 12
}
testFunctions();

function testExpressions(){
    var test;

    test = 12;
    test = function(){ console.log("Testing hoisting for expressions"); }
    console.log(test); // function
}
testExpressions();

// function testLet(){
//     console.log(test2); // ReferenceError: Cannot access 'test2' before initialization
//     let test2 = 26;
// }
// testLet();

// function testConst(){
//     console.log(PI); // ReferenceError: Cannot access 'PI' before initialization
//     const PI = 3.142;
// }
// testConst();

// let c = new Car(); // ReferenceError: Cannot access 'Car' before initialization
// c.model = "test";

// class Car {
//     constructor(model){
//         this.model = model;
//     }
// }

let c = new Car("test");
console.log(c.type === "test");

function Car(type) {
    this.type = type;
}