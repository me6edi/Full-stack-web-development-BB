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




// Rest Operator ...

// let fruits = ['apple', 'grape', 'mango', 'jackfruit'];
// let [first, second, ...third] = fruits

// // console.log(first);
// // console.log(second);
// // console.log(third);

// let person = {
//     fname: "Simanta",
//     lname: "Paul",
//     dob: "8-26-1995"
// }

// let {fname, ...lname} = person

// // console.log(fname);
// // console.log(lname);

// let moreNum = [78,1,2,5,6];

// let test =(name, ...numbers) => { // Rest
//     console.log(name);
//     console.log(numbers);
// }

// test("Simanta", 67,3,3);
// test("Simanta", ...moreNum); // Spread 




// Promises
// An alternative to Callback

// let applyDiscount = new Promise((resolve, reject) => {
//     let discount = false;
//     if (discount) {
//         resolve('Discount Applied');
//     } else {
//         reject('Discount Failed!');
//     }
// });

// applyDiscount
//     .then(result => {
//         console.log(result);
//     })
//     .catch(result => {
//         console.log(result);
//     })

// //console.log(applyDiscount);

// // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise 

// function Person(name, age){
//     this.name = name;
//     this.age = age;
// }
// let person1 = new Person("Mehedi", "23");

// console.log(person1.name, person1.age);

// ES6 Class

// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     getName(){
//         console.log(this.name);
//     }
// }

// let person2 = new Person("Mehedi", "23");

// console.log(person2.name, person2.age);





 // Symbols
// let a = Symbol()

// let person = {
//     name: "Simanta",
//     age: 25,
//     [a]: "Hello World!"
// }

// console.log(person);
// console.log(Object.getOwnPropertyNames(person));
// console.log(Object.getOwnPropertySymbols(person));
// console.log(Object.keys(person));
// console.log(JSON.stringify(person));


// for (x in person) {
//     console.log(x);

// }

// let sym1 = Symbol("Hello");
// let sym2 = Symbol("Hello");

// console.log(sym1 == sym2);
// console.log(sym1);



// Iterator
// let iterable = "Hello";
// iterable = [1,2,3,4,5,5];
// // Symbol.iterator
// let iter = iterable[Symbol.iterator]();

// console.log(iter);

// console.log(iter.next());
// console.log(iter.next());

// console.log("Other Codes...");

// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());


// // Custom Iterator
// function customIterator(arr) {
//     let i = 0;

//     return {
//         next: function() {
//             return i < arr.length ? { value: arr[i++], done: false} : { value: undefined, done: true };
//         }
//     };
// }

// let members = customIterator(names);

// console.log(members.next().value);
// console.log(members.next().value);
// console.log(members.next().value);
// console.log("Random codes...");
// console.log(members.next());
// console.log(members.next());



// Generators

// function* genFunction() {
//     console.log("I am some code");
//     yield 1;
//     return;
//     // console.log("I am some code");
//     // console.log("I am some code");
//     // console.log("I am some code");
//     // yield "Rahim";
//     // yield 4;
//     // yield "Karim";
//     // yield "Hello World";
// }

// let iter = genFunction();

// console.log(iter.next().value);
// console.log(iter.next().value); 



// // Promises
// // Successful -> resolve
// // Failed -> reject
// let prom = new Promise((resolve, reject) => {
//     let a;
//     setTimeout(() => {
//         a = 1 + 3;
//         if (a == 2) {
//             resolve('Success');
//         } else {
//             reject('Failed');
//         }
//     }, 4000);
// })
// // // .then .catch
// prom.then((message) => {
//     console.log("I am from then " + message);
// }).catch((message) => {
//     console.log("I am from catch " + message);
// })


// console.log("I am after Promise");

// // Example : Image File 


// Async Await

// fetch('http://api.icndb.com/jokes/random/5000')
//     .then(response => response.json())
//     .then(data => { });


// // async await

// async function getJokes() {
//     let response = await fetch('http://api.icndb.com/jokes/random/5000');
//     let data = await response.json();
//     return data;
// }


// getJokes().then(jokes => console.log(jokes));  


// fetch('https://official-joke-api.appspot.com/random_joke')
//     .then(function(response) {return response.json();})
//     .then(function(result) {
//         console.log(result.setup);
//         console.log(result.punchline);
//     }).catch(function(error){
//         console.log(error.message)
//     })


// fetch("https://dog.ceo/api/breeds/image/random")
//     .then(function(response){return response.json();})
//     .then(function(result){
//        console.log(result.message); 
//     });

// fetch('https://api.chucknorris.io/jokes/random')
//     .then(response => response.json())
//     .then(result => console.log(result))
    
// console.log("Hello world");


// async await

// async function getJokes() {
//     let response = await fetch('http://api.icndb.com/jokes/random/5000');
//     let data = await response.json();
//     return data;
// }


// getJokes().then(jokes => console.log(jokes)); 


// Set
// let mySet = new Set([1, 2, 2, 4, 4]);

// // Add
// mySet.add("Hello");
// mySet.add(2);
// // Delete
// mySet.delete(4);

// Check
//console.log(mySet.has(4));
// Size
//console.log(mySet.size);

// Iterating Sets

// for (x of mySet.values()) {
//     console.log(x);
// }

// let iter = mySet.entries();

// console.log(iter.next());

// console.log(iter.next());

// console.log(iter.next());

// for (let [x] of mySet.entries()) {
//     console.log(x);
// }

// let iter = [...mySet.values()];

// //console.log(iter);

// mySet.forEach(value => console.log(value)); 




let arr = [1,2,2,33,33]
console.log(arr);

let mySet = new Set([1, 2, 2, 4, 4]);
mySet.add("Hello");
mySet.add(4);
mySet.delete(4);

let iter = [...mySet.entries()];
console.log(iter);


mySet.forEach(value => console.log(value));