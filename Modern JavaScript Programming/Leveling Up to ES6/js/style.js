// Global Scope
// var a = 1;
// let b = 2;
// const c = 3;


// console.log(`Global Scope: `, a, b, c);

// function test() {
//     var a = 4;
//     let b = 5;
//     const c = 6;
//     console.log(`Functions Scope: `, a, b ,c);
// }

// test();

// console.log(`Global Scope: `, a, b, c);

// if (true) {
//     var a = 7;
//     let b = 8;
//     const c = 9;
//     console.log(`If Scope: ` , a, b, c);
// }

// console.log(`Global Scope: `, a, b, c);


// for (let a = 0; a <10; a ++) {
//     console.log(`Loop: `, a);
// }


// console.log(`Global Scope: `, a, b, c); 



// Normal Declaration
// function saySomething(name) {
//     console.log('Hello ' + name);
// }

// // Function Expression

// let saySomething1 = function(name2) {
//     console.log('Hello ' + name2);
// }

// // Arrow Function (ES6)

// let saySomething2 = (name3) => {
//     console.log("I am " + name3);
// }




// saySomething("Mehedi Amin");
// saySomething1("Mehedi");
// saySomething2("JavaScript"); 

// call back function
// numbers = [1,2,3,4,5,6];
// let printAll = (item) => {
//     console.log(item);
// }
// numbers.forEach(printAll);

// let squreNumber = numbers.map(function (item){
//     return item * item;
// });

// console.log(squreNumber);




// Template literals (ES6)
// Backtick ``

// let name = "Rahim";
// let age = "38";
// let dob = "21 June, 1983";

// console.log(`His name is ${name}
// His age is ${age}
// Date of Birth ${dob}`);

// let a = 34
// let b = 67
// console.log(`${a} + ${b} = ${ a + b }`); 

// Array Destructuring
// let fruits = ["Apple", ,"Grape", "Orange"];
// let [fruit1,fruit2,fruit3] = fruits;

// console.log(fruit1,fruit2,fruit3);

// Swap Variables

// let a, b;
// a = 8; b= 20;

// // let temp = a;
// // a = b;
// // b = temp;

// [a, b] = [b , a];


// console.log(`a = ${a} and b = ${b}`); 

// Object Destructing

// let person = {
//     firstName: "Fazle",
//     lastName: "Rahat",
//     dob: '09-27-1995'
// }

// let fname = person.firstName,
// lname = person.lastName,
// dob = person.dob;
//let { firstName : fname, lastName, dob } = person;
//console.log(fname, lastName, dob);


// function display({ firstName, lastName, dob }) {
//     console.log(firstName, lastName, dob);
// }

// display(person); 


 // Spread Operator ...
//  let str = "Bohubrihi";
//  let newStr = [...str];
 
 //console.log(newStr);
 
//  let fruit1 = ["Apple", "Pine-apple", "Mango"];
//  let fruit2 = ["Orange", "Grape"];
//  let newFruit = "Jackfruit";
 
//  let newArr = [...fruit1, newFruit, ...fruit2];
 
//  //console.log(newArr);
//  // Spread on Object (ES8)
//  let person = {
//      fname: "Simanta",
//      lname: "Paul"
//  }
 
//  let newPerson = {...person, dob: "08-26-1995"}
//  console.log(newPerson);


// Spread Operator ...
// let str = "Bohubrihi";
// let newStr = [...str];

// console.log(newStr);

// let fruit1 = ["Apple", "Pine-apple", "Mango"];
// let fruit2 = ["Orange", "Grape"];
// let newFruit = "Jackfruit";

// let newArr = [...fruit1,newFruit, ...fruit2];

// console.log(newArr);
// Spread on Object (ES8)
// let person = {
//     fname: "Simanta",
//     lname: "Paul"
// }

// let newPerson = {...person, dob: "08-26-1995"}
// console.log(newPerson);

// Spread Operator ...

// let numbers = [23, 1, 0, -1];

//console.log(Math.max(...numbers));

// let person = ["Mehedi", "Amin"]

// let test = (fname, lname) => {
//     console.log(`Hello ${fname} ${lname}`);
// }

// test(...person); 