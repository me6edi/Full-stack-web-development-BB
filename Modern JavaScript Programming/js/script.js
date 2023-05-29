
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
