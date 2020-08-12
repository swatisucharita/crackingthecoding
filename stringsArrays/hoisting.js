console.log(a); // ReferenceError: a is not defined
var a = 67;
function testVars(){
    a = 25;
    console.log(test1); // function: Hoisted
    var test1 = 25;
    function test1(r) { console.log("function"); }
    console.log(test1 === 25); // true
}
testVars();

function testExpression() {
    console.log(test2); // undefined: Hoisted
    var test1 = 25;
    var test2 = (r) => { console.log("function"); }
    console.log(typeof test1 === "function") // true
}
testExpression();

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