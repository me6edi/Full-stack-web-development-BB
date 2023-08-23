// Global Scope
var a = 1;
let b = 2;
const c = 3;


console.log(`Global Scope: `, a, b, c);

function test() {
    var a = 4;
    let b = 5;
    const c = 6;
    console.log(`Functions Scope: `, a, b ,c);
}

test();

console.log(`Global Scope: `, a, b, c);

if (true) {
    var a = 7;
    let b = 8;
    const c = 9;
    console.log(`If Scope: ` , a, b, c);
}

console.log(`Global Scope: `, a, b, c);


for (let a = 0; a <10; a ++) {
    console.log(`Loop: `, a);
}


console.log(`Global Scope: `, a, b, c); 



// Normal Declaration
function saySomething(name) {
    console.log('Hello ' + name);
}

// Function Expression

let saySomething1 = function(name2) {
    console.log('Hello ' + name2);
}

// Arrow Function (ES6)

let saySomething2 = (name3) => {
    console.log("I am " + name3);
}




saySomething("Bohubrihi");
saySomething1("Simanta");
saySomething2("JavaScript"); 

// Both of them are same

let getsquare = num => {return num * num};
let getsquare2 = num => num * num;
console.log(getsquare(4));
console.log(getsquare2(4));


function myFunction(){
    console.log("Simple function ");
}

myFunction();

let myFunction2 = (name, dob) => {
    console.log(name, dob);
}

myFunction2("name","08-26-1997");

// call back function

number = [1,2,3,4,5,6];
let printAll = (item) => {
    console.log(item);
}
number.forEach(printAll);