
// function multiply(num1, num2){
//     return num1 * num2;
// }

// function square(num){
//     return multiply(num, num);
// }

// function squareArea(side) {
//     const area = suare(side);
//     console.log(area);
// }

// squareArea(5);

// function callMe(){
//     callMe();
// }

// callMe();



// function attendance() {
//     console.log("A is present");

//     setTimeout(() => {
//         console.log("C arrives shortly");
//     }, 0);
//     setTimeout(() => {
//         console.log("D arrives in 5 seconds");
//     }, 5000);

//     console.log("D is present");
//     console.log("E is present");
// }

// attendance();



function delay() {
    let i =0;
    while(i < 200000){
        i++;
    }
    return i;
}

function asyncSlow() {
    setTimeout(() => {delay();}, 0);
    setTimeout(() => { delay(); }, 100);
    setTimeout(() => { delay();}, 200);
}
asyncSlow();





