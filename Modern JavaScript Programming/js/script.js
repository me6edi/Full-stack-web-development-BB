
// console.log("Hello!");
// alert("Hello");
// document.write("Hey mehedi");
// window.alert("How are you?");

/*document.write(50)
document.write(40)
console.log(32)*/

// var x;
// x = prompt("Enter your name: ");
// document.write(x);
// console.log(x);


/*========== Variable Declaration ========== */

// var myName;
// myName = "Mehedi Amin";
// console.log(myName);
// var myAge = 20;
// document.write(myAge);

// var a;
// let b;
// a = 45;
// console.log(a);
// a = 35.34;
// b = "Mehedi Amin";
// a = "Rakib";
// console.log(a);
// console.log(b); 

// var a;
// let b;
// a = 45;
// console.log(a);
// a = 35.34;
// console.log(a);
// a = "Mehedi Amin";
// console.log(a);

// var a = 20;
// var b = a;
// console.log(a);
// console.log(b);
// a = 30;
// console.log(a);
// console.log(b);

// var a = 20;
// var b = 10;
// var c = a + b;
// console.log(c);

// var $a;
// $a = 20;
// console.log($a);

// var _abc = 30;
// console.log(_abc);

// var myName,myname
// myName = 20;
// myname = 30;
// console.log(myName,myname);

// var a = 20;
// console.log(a);
// var a;
// console.log(a);

// const a = 2;
// console.log(a)

/*========== End variable ========== */

/*========== Operator ========== */
// Binary operator work tow operand
// arithmetic operator +,-,*,/,%

// var a = 2;
// var b = 2;
// document.write(a+b);
// document.write("<br>",a-b);
// document.write("<br>",a*b);
// document.write("<br>",a**b);

/*========== End Operator ========== */

/*========== increment operator and dicremnt operator a++ or ++a or --a or a-- ========== */
// var a = 20;
// var b = 30;
// a++;
// ++b;
// console.log(a)
// console.log(b)

// var num1 = 5;
// var num2 = 30;

// var num3,num4;

// num3 = num1++;
// num4 = ++num2;

// console.log(num3);
// console.log(num1);
// console.log(num2);

// var a = (5-3) * 5 / 7;
// console.log(a)

/*========== End ========== */

/*========== String operator ========== */

// var  line1 = "Hello";
// var  line2 = "World";
// console.log(line1 + " "+ line2);

// value = line1 + 30;
// value2 = "Hello" + 50 + 60;
// value3 = 505 + 50 + "Hi"
// console.log(value)
// console.log(value2)
// console.log(value3)

// var a = "75";
// var b = "20";
// console.log(a-b);

// var c = "75";
// var d = "20";
// console.log(c+d);

/*========== End ========== */

/*========== Comparison operators ========== */

// var a = 20;
// var b = 30;

// var a = 20;
// var b = 20;
// console.log(a==b);

// value,type or not equal compaire ==,=== or != 
//  value1 = a == "4"
//  value2 = a === "4";
//  value3 = a != 5;
// console.log(value1,value2,value3)

// value = a > 5;
// value2 = a < 1;
// value3 = a >= 10
// console.log(value,value2,value3)
// var d = (5<4)
// console.log(d)

/*========== End ========== */

/*========== Logical Operator ========== */

//logical operators ||,&&,!
// (4>6) || (1<7)
// (4>6) && (1<7)

/*========== End ========== */

/*========== Conditional operators ========== */

// var  a = (1>8) ? "Hello":"World";

// console.log(a);

/*========== End ========== */

/*========== Assignment Operator ========== */

// var a = 20;
// a += 12;
// console.log(a);
// var a = prompt("Inputa a number: ");
// var b = 9/5*a + 32
// var d = parseFloat(b.toFixed(2))
// window.alert("Fahrenheit: " + d + " Degree" );
// console.log("Task Complete");

/*========== End ========== */

/*========== Different Types of Data type ========== */

// var x = 2030;
// var v = 35;
// var y = 123e5;
// x = 123 * 10**5;

// console.log(x,v,y);

// var x = 25;
// var y = x.toString()
// console.log(y)

// var z = 3.6565454
// var y = z.toPrecision(3)
// var x = parseInt(y)
// console.log(y)
// console.log(x)

/*========== End ========== */

/*========== Numbere ========== */

// var x = 180;
// y = isNan(x);
// console.log(y);
// var x; x = 3.141; x = 34; x = 123e5;
// 123 * 10 ** 5 x = 123e-5; // 123 * 10 ** -5 
// Numbers takes 64 bits 
// + can be used for both addition and conatenation "34" + "45" 
// will be string 34 + "45" // will be string "34 " + 45 
// will be string "The result is " + 34 + 45 34 + 45 + "is the result" 34 + 45 + "13" 
//Numeric Strings "25"-"5" "25"/"5 " // result 10 "25"*"5" "25"%"5" "25"+"5" 
//exception //Infinity var num = Infinity; 25/0 // will get Infinity 
//Hexa Decimal Numbers var x = 0xBB x.toString() 
// Returns number as string x.toString(16); var x = 3.1416; x.toPrecision(); x.toPrecision(2); x.toPrecision(4); x.toPrecision(6); var x = "123" parseInt(x); x = "123.45" parseFloat(x); isNaN(x); 
//Links 
//https://www.w3schools.com/jsref/jsref_obj_number.asp
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number

/*========== End ========== */

/*========== Strings ========== */

// "Hello World" 'Hello World' "Hello " World" "Hello World" "Hello n World" 'Hello ' World' 'Hello t World'
//Concatenation "Hello" + "World" var x = "Hello World"; 
//Length of String x.length; 
//It is a property 
//Indexing "Hello World"[0] "Hello World"[3] x = "Hello World"; x[0] x[3] 
//Immutable x[1] x[1] = "5" x[1] 
// return a new string, doesn't change x 
//These are methods x.slice(1, 5); x.slice(- 6, -1); x.substr(3, 2); 
// 2nd parameter means the length x.replace("Hello", "World"); x.toUpperCase(); x.toLowerCase(); x.concat ("1", "2"); x.trim(); 
//links 
//https://www.w3schools.com/jsref/jsref_obj_string.asp //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

/*========== Booleans ========== */

// var loon = 10 > 20;
// var loon2 = 10 < 20;
// console.log(loon,loon2);
// console.log(Boolean(loon));
// x = "Bangladesh";
// x = 10/"H";
// console.log(x);

/*========== End ========== */

/*========== Array ========== */

// var countries = ["Bangladesh", "USA","UK"];
// countries[1] = "Rakib",
// countries[0] = 20,
// countries[3] = 30,
// countries[countries.length] = 'Rony',
// countries.push("Jony"),
// countries.pop(),
// console.log(countries);

// var numbers = [];
// numbers[0] = 10;
// numbers[1] = 20;
// numbers[2] = 30;
// numbers.push(256);
// numbers.unshift("rony");
// console.log(numbers);

// var x = "Bangladesh";
// var y = x.split("");
// // var y = x.split("n");
// console.log(y);
// console.log(x.toString());\\

// var test = ["Bangladesh", "USA", "UK","Japanese","gramany","Thailand","China"];
// var value = test.sort();
// var value = test.reverse();
// console.log(value);

/*========== End ========== */

/*========== objects ========== */

// var students = {name: "John",age:22, hometown: "Dhaka"};
// console.log(students["name"]);
// students["occupation"] = "Developers";
// console.log(students.age);
// students.village = "Kurigram";
// delete students.age;
// console.log(students);
// let a = students = {};
// a.name = "Mehedi Amin"
// console.log(a);

// var array = [10,12,["a","b",["Word1","Word2"]],8,9];
// var array = [10,12,["a","b",["Word1","Word2",{name:"Robin",age:"21"}]],8,9];
// console.log(array[2][2][2].name);

// var c = "abc"/10;
// console.log(c);

/*========== Primitive Types ========== */

// number, string, boolean
// defferent address

// let a = 7;
// let b = a;
// a = 45;
// console.log(b);

/*========== End ========== */

/*========== Reference Types ========== */

// Reference Types
// array, object
// same address

// let numbers = [1, 2, 3, 4, 5];
// let newNumbers = numbers;

// console.log(newNumbers);
// numbers[1] = 500;
// console.log(numbers);
// console.log(newNumbers);
// let value = 65 + "100";
// console.log(value);
// let a = true;
// console.log(a);

/*========== Template literals ========== */

//  (ES6)
// Backtick
// console.log("First line \n second line");
// console.log(`First line second line`);
// let age = 36;
// console.log("His age is " + age);
// console.log(`His age is ${age}`);

// let name =  "Mehedi Amin";
// let age = 23;
// let dob = "21 june, 1999";
// console.log(`His name is ${name}
// His age is ${age}
// His age is ${dob}
// `);

// let a = 20;
// let b = 30;
// console.log(`The result is: ${a} + ${b} = ${a + b}`);

/*========== End ========== */

/*========== Control Flow ========== */
// IF statemnt
// if(true){
//     console.log("If Statement Executed Success");
// }else{
//     console.log("If Statement Executed Failed");
// }
// console.log("End of if Statement!")

// var age = prompt();

// if (age >= 50){
//     console.log("old!");
// } else if(age < 50 && age >= 30){
//     console.log("Under 50 but above 30");
// } else if(age < 30 && age >= 18){
//     console.log("Under 30 but above or equal to 30");
// } else if( age < 18 && age > 0){
//     console.log("under 18!");
// }
// else{
//     console.log("Invalid Input!");
// }

/*========== End ========== */

/*========== Find the largest number ========== */
// var n1 = parseInt(prompt("First number: "));
// var n2 = parseInt(prompt("Second number: "));
// var n3 = parseInt(prompt("Third number: "));

// if(n1 >= n2 && n1 >= n3){
//     console.log(n1 + " is the largest number")
// }else if(n2 >= n1 && n2 >= n3){
//     console.log(n2 + " is the largest number")
// }
// else{

//     console.log(n3 + " is the largest number")
// }

// if(n1 >= n2){
//     if(n1 >= n3){
//         console.log(n1 + " is the largest number");
//     }else{
//         console.log(n3 + " is the largest number");
//     }

// } else{
//     if(n2 >= n3){
//         console.log(n2 + " is the largest number");           
// }else{
//     console.log(n3 + " is the largest number");
// }
// }
/*========== End ========== */



/*========== Switch ========== */
// console.log("Select an option:\n. Option 1 \nb. Option 2 \nc. Option 3 ");

// choice = prompt();

// var text;

// if(choice == "a") {
//     text = "You have selected option 1";
// }else if(choice == "b") {
//     text = "You have selected option 2";
// }else if(choice == "c") {
//     text = "You have selected option 3";
// }else{
//     text = "no option selected"
// }


// console.log("Select an option:\n. Option 1 \nb. Option 2 \nc. Option 3 ");

// choice = prompt();

// var text;
// switch(choice){
//     case "a":
//         text = "You have selected option 1";
//         break;
//     case "b":
//         text = "You have selected option 2";
//         break;
//     case "c":
//         text = "You have selected option 3";
//         break;

//     default:
//         text = "no option selected";
//         break;
// }

// console.log(text);


// let num = prompt("What is your number?");

// if(num >= 80){
//     console.log("Your Grade: A+");
// }else if(num >= 70){
//     console.log("Your Grade: A");
// }else if(num >=  60){
//     console.log("Your Grade: B+");
// }else if(num >=  50){
//     console.log("Your Grade: B");
// }else{
//     console.log("Invalid Number");
// }

// let number = prompt("What is you number?");
// number = parseInt(number);

// if(number >= 80 && number <= 100){
//      console.log("A+");
// }else if(number >= 75 && number <= 80){
//     console.log("A");
// }else if(number >= 70 && number <= 75){
//     console.log("A-");
// }else if(number >= 65 && number <= 70){
//     console.log("B+");
// }else if(number >= 60 && number <= 65){
//     console.log("B");
// }else if(number >= 55 && number <= 60){
//     console.log("B-");
// }else if(number >= 50 && number <= 55){
//     console.log("C+");
// }else if(number >= 45 && number <= 50){
//     console.log("C");
// }else if(number >= 40 && number <= 45){
//     console.log("D");
// }else if(number >= 0 && number <= 40){
//     console.log("Fail!");
// }else{
//     console.log("Invalid Number");
// }


// var number = prompt("What is your number?");
// number = parseInt(number);
// let grade;

// if(number <=100 && number >= 80){
//     grade = "A+";
// }else if(number < 80 && number >= 70){
//     grade = "A";
// }else if(number < 70 && number >= 60){
//     grade = "A-";
// }
// else if(number < 60 && number >= 50){
//     grade = "B";
// }
// else if(number < 50 && number >= 40){
//     grade = "C";
// }
// else if(number < 40 && number >= 33){
//     grade = "D";
// }else if(number < 33 && number >= 0){
//     grade = "F";
// }else{
//     grade = "Invalid number!";
// }
// console.log(grade);

// JavaScript Arithmetic using if and else

// console.log("Select \n1.Addition\n2.Subtract \n3.Multiply  \n4.Divide ");

// number1 = parseInt(prompt("Enter First number"));
// number2 = parseInt(prompt("Enter second number"));
// choose = parseInt(prompt("Select a number"));
// let value;
// if(choose == 1) {
//     Addition = number1 + number2;
//     // console.log(Addition);
//     console.log(`Addition: ${number1} + ${number2} = ` + Addition);
// }else if(choose == 2){
//     Subtraction = number1 - number2;
//     console.log(`Subtraction: ${number1} - ${number2} = ` + Subtraction);
// }else if(choose == 3){
//     Multiplication = number1 * number2;
//     console.log(`Multiplication: ${number1} * ${number2} = ` + Multiplication);
// }else if(choose == 4){
//     Division = number1 / number2;
//     console.log(`Division: ${number1} / ${number2} = ` + Division);
// }else{
//     console.log("Invalid Input");
// }

// JavaScript Arithmetic switch

// console.log("Select \n1.Addition\n2.Subtract \n3.Multiply  \n4.Divide ");

// number1 = parseInt(prompt("Enter First number"));
// number2 = parseInt(prompt("Enter second number"));
// choose = parseInt(prompt("Select a number"));
// let value;
// switch(choose){

//     case 1:
//         Addition = number1 + number2;
//         console.log(`Addition: ${number1} + ${number2} = ` + Addition);
//         break;
//     case 2:
//         Subtraction = number1 - number2;
//         console.log(`Subtraction: ${number1} - ${number2} = ` + Subtraction);
//         break;
//     case 3:
//         Multiplication = number1 * number2;
//         console.log(`Multiplication: ${number1} * ${number2} = ` + Multiplication);
//         break;
//     case 4:
//         Division = number1 / number2;
//         console.log(`Division: ${number1} / ${number2} = ` + Division);
//         break;
//     default:
//         console.log("Invalid Input");
//         break;
// }

// console.log("Select an Option: n1. Add n2. Subtractn3. Mulitply n4. Divide");

// var num1 = prompt("Enter First Number: ");
// var num2 = prompt("Enter Second Number: ");
// var option = prompt("Choose an operation: ");
// var result = null;

// num1 = parseInt(num1);
// num2 = parseInt(num2);
// option = parseInt(option);

// var num1Con = isNaN(num1);
// var num2Con = isNaN(num2);
// var optionCon = isNaN(option);

// if (num1Con || num2Con || optionCon) {
//     console.log("Invalid Input!");
// } else {
//     switch (option) {
//         case 1:
//             result = num1 + num2;
//             break;
//         case 2:
//             result = num1 - num2;
//             break;
//         case 3:
//             result = num1 * num2;
//             break;
//         case 4:
//             result = num1 / num2;
//             break;
//         default:
//             break;
//     }

//     if (result == null) {
//         console.log("No Result!");
//     }
//     else {
//         console.log("Result: " + result);
//     }
// } 
/*========== End ========== */


/*========== Loop ========== */
// while (true){
//     console.log("Hello World!");
// }

// var i = 1;
// while(i <= 5){
//     console.log("Value of i: " + i);
//     i++;
// }

// var i = 1;
// do {
//     console.log("Value of i: " + i);
//     i++;
// }while(i <= 5);

// var i = 1;
// while(i <= 10) {
//     if(i == 4) {
//     console.log("Value of i: " + i);
//     }
//     console.log(i);
//     i++;
// }
// let i = 1;
// let sum = 0;
// let product = 0;
// while(i <= 10) {
//     sum = sum + i;
//     product = sum * i;
//     i++;
// }
// console.log(sum);
// console.log(product);

// for loop 

// for (let i = 1; i <= 5; i++) {
//     console.log("Hello world!" + i);
// }

// for (let i = 5; i >= 1; i--) {
//     console.log("Hello", + i)
// }

// for loop break and continue

// for (i = 1; i <= 5; i++) {
//     if(i == 3) {
//         break;
//     }
//     console.log(i);
// }

// for (var i = 1; i <= 10; i++){
//     if(i % 2 == 1) {
//         continue;
//     }
//     console.log(i);
// }

// for loop using string and array
// let value = "Mehedi Amin"
// console.log(value.length);
// console.log(value[0]);

// for (var i = 0; i <= 10; i++) {
//     if (i == 6){
//         continue;
//     }
//     console.log(`index ${i}` + " = " ,value[i]);
// }

// let person = {
//     name: "Mehedi",
//     profession: "Cricketer",
//     team: "Bangladesh",
//     age: 36
// }
// we will get index
// for (var x in person) {
//     console.log(x);
// }
// we will get items
// for(var y of person) {
//     console.log(y);
// }

// var n = parseInt(prompt());

// var sum = 0;
// var serise = "";

// for (var i = 1; i <= n; i++) {

//     sum = sum +  i*i;
//     serise += (i**2).toString();
//     if(i == n){
//         continue;
//     }
//     serise += " + "

// }

// console.log(`Result: ${serise} = ${sum}`);


// function

// function myfunction(){
//     console.log("Hello world!");
// }
// myfunction();

// function perameter
// function SaySomething(fname,lname) {
//     console.log(fname,lname);
// }
// let firstname = "Mehedi";
// let lastname = "Amin";
// SaySomething(firstname, lastname);

// function myValue(fnumber,lnumber) {
//     return fnumber + lnumber;
// }

// // console.log(myValue(50,50));
// let num = myValue(50,50)
// console.log(num);

// FUnction parameter/argument

// function saySomenthing(fname = "Fazle", lname = "Rahat") {
//     console.log(`Hello ${ fname } ${ lname }!`);
// }

// //alert("Hello");
// //let val = "Simanta";
// let firstname = "Simanta";
// let lastname = "Paul";

// saySomenthing(firstname, lastname);


// function addNum(a=0, b=0) {
//     console.log(a+b);
// }

// addNum(4,5);
// addNum(3.6, 2.3)


// // Normal Declarations
// function myFuncation(name){
//     console.log(name);
// }
// myFuncation("Mehedi");
// // Function Expression

// let saySomenthing = function(name){
//     console.log(name);
// }
// saySomenthing("Amin");

// Arrow function (ES6)

// let saySomenthing2 = (value) => {
//     console.log("I am in arrow function");
//     console.log(value);
// }

// saySomenthing2("Mehedi Amin");

// Oject Method

// let person ={
//     firstname: "Mehedi",
//     lastname: "Amin",
//     dob: "9-10-1998",

//     fullname: function() {
//         return `${this.firstname} ${this.lastname}`
//     }
// }
// console.log(person.firstname);
// console.log(person.fullname());

 // Math Object

// let val;
// val = Math.PI;
// val = Math.E;
// val = Math.round(3.7);
// val = Math.ceil(1.9);
// val = Math.floor(1.9);
// val = Math.sqrt(81);
// val = Math.abs(-8); 
// val = Math.min(1, 8, -8, 1, 0);
// val = Math.max(1, 8, -8, 1, 0);
// val = Math.random();
// val = Math.random() * 100 + 1;
// val = Math.floor(Math.random() * 100 + 1);
// console.log(val);


// Date object

// let val; 
// let today = new Date();
// let birthday = new Date('1999-08-01');
// birthday = new Date('08/01/1997');

// val = today;
// val = today.toString();

// val = birthday;

// val = today.getMonth(); // Start from 0
// val = today.getDate();
// val = today.getDay();
// val = today.getFullYear();
// val = today.getHours();
// val = today.getMinutes();
// val = today.getSeconds();
// val = today.getMilliseconds();
// val = today.getTime();

// // console.log(val);
// birthday.setMonth(0);
// birthday.setDate(12);
// birthday.setFullYear(1996);
// birthday.setHours(3);
// console.log(birthday)


// Global scope

// var a = 1;
// let b = 2;
// const c  = 3;
// var d = 10;

// console.log(`Golobal Scope: `, a, b, c);

// function test(){
//     var a = 4;
//     let b = 5;
//     const c = 6;
//     console.log('Function Scope: ', a, b, c,d);
// }

// test();

// if (true){
//     var a = 7;
//     let b = 8;
//     const c = 9;
//     console.log("IF Scope: ", a, b, c);
// }

// console.log("Global Scope: ", a, b, c);

// for(var a = 0; a < 10; a++){
//     console.log("Global Scope: ", a)
// }

// console.log("Global Scope: ", a, b, c);

// Class(ES6) 
// Class is a template for creating objects

// class Person {
//     constructor(fname, lname, birthday) {
//         this.firstname = fname;
//         this.lastname = lname;
//         this.dob = birthday;
//     }

//     calculateAge() {
//         let birthday = new Date(this.dob);
//         let diff = Date.now() - birthday.getTime();
//         let ageDate = new Date(diff);
//         return Math.abs(ageDate.getUTCFullYear() - 1970);
//     }

//     fullname() {
//         console.log(this.firstname, this.lastname);
//     }

// }

// let person1 = new Person("Fazle", "Rahat", "11-13-1988"); 
// let person2 = new Person("Moinul", "Islam", "02-11-1991");
// let person3 = new Person("Rony", "Chy", "01-17-1996");

// console.log(person1.calculateAge());
// console.log(person2.calculateAge());
// console.log(person3.calculateAge());


// console.log(person1.fullname());
// console.log(person2.fullname());
// console.log(person3.fullname()); 

// Sub Class
// Inheritance

// class Person { //Base Class
//     constructor(fname, lname) {
//         this.firstname = fname;
//         this.lastname = lname;
//     }

//     greeting() {
//         return `Hello ${this.firstname} ${this.lastname}!`;
//     }
// }

// class Customer extends Person { //Sub Class
//     constructor(fname, lname, phone, memberShip) {
//         super(fname, lname);

//         this.phone = phone;
//         this.memberShip = memberShip;
//     }

//     fullname() {
//         console.log(this.firstname, this.lastname);
//     }
// }

// let person1 = new Person("Fazle", "Rahat");
// console.log(person1);
// console.log(person1.greeting());
// console.log(person1.fullname());

// let customer1 = new Customer("Rony", "Chy", "017777778888", "1234");
// console.log(customer1);
// console.log(customer1.greeting());
// console.log(customer1.fullname()); 

// Class(ES6)
// Class is a template for creating objects
// let person1 ={
//     firstname: 'Mehedi',
//     lastname: 'Amin',
//     dob: '11-12-1999',

//     fullname: function(){
//         console.log(`${this.firstname} ${this.lastname}`);
//     }
// }

// let person2 ={
//     firstname: 'Robin',
//     lastname: 'Amini',
//     dob: '11-12-1909',

//     fullname: function(){
//         console.log(`${this.firstname} ${this.lastname}`);
//     }
// }

// console.log(person1);
// console.log(person2);

// class Person{
//     constructor(fname,lname,birthday){
//         this.firstname = fname;
//         this.lastname = lname;
//         this.dob = birthday;
//     }
//     calculateAge(){
//         let birthday = new Date(this.dob);
//         let diff = Date.now() - birthday.getTime();
//         let ageDate = new Date (diff);
//         return Math.abs(ageDate.getUTCFullYear() - 1970);
//     }
// }

// let person1 = new Person("Mehedi","Amin","19-12-2015");
// let person2 = new Person("Hassn","Amin","19-12-2010");
// let person3 = new Person("Robin","Amin","19-12-2000");
// console.log(person1.calculateAge());
// console.log(person2.calculateAge());
// console.log(person3.calculateAge());

// Class(ES6) 
// Class is a template for creating objects

// class Person {
//     constructor(fname, lname, birthday) {
//         this.firstname = fname;
//         this.lastname = lname;
//         this.dob = birthday;
//     }

//     calculateAge() {
//         let birthday = new Date(this.dob);
//         let diff = Date.now() - birthday.getTime();
//         let ageDate = new Date(diff);
//         return Math.abs(ageDate.getUTCFullYear() - 1970);
//     }

//     fullname() {
//         console.log(this.firstname, this.lastname);
//     }

// }

// let person1 = new Person("Fazle", "Rahat", 11-13-1988); 
// let person2 = new Person("Moinul", "Islam", 02-11-1991);
// let person3 = new Person("Rony", "Chy", 01-17-1492);

// console.log(person1.calculateAge());
// console.log(person2.calculateAge());
// console.log(person3.calculateAge());


// Sub Class
// Inheritance

// class Person { //Base Class
//     constructor(fname, lname) {
//         this.firstname = fname;
//         this.lastname = lname;
//     }

//     greeting() {
//         return `Hello ${this.firstname} ${this.lastname}!`;
//     }
// }

// class Customer extends Person { //Sub Class
//     constructor(fname, lname, phone, memberShip) {
//         super(fname, lname);

//         this.phone = phone;
//         this.memberShip = memberShip;
//     }

//     fullname() {
//         console.log(this.firstname, this.lastname);
//     }
// }

// let person1 = new Person("Fazle", "Rahat");
// console.log(person1);
// console.log(person1.greeting());
// console.log(person1.fullname());

// let customer1 = new Customer("Rony", "Chy", "017777778888", "1234");
// console.log(customer1);
// console.log(customer1.greeting());
// console.log(customer1.fullname()); 
