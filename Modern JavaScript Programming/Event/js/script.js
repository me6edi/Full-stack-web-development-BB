// // Events o javascript
// function message(){
//     console.log("Hello world!");
// }

// Events listeners


// document.getElementById('myId').addEventListener('click', message);
// document.querySelector('.container').addEventListener('click', message);

// // function message(){
// //     console.log("Button Clicked!");
// // }

// function message(e){

//     let val = e;
//     val = e.target;
//     val = e.target.id;
//     val = e.timeStamp;
//     val = e.type;

//     val = e.clientY;
//     val = e.offsetY;
//     console.log(val);
// }

// Event Listener

// document.querySelector(".container").addEventListener('mousemove', message);

// document.querySelector('.container').style.background = "red";

// function message(e) {
//     let val = e;
//     val = e.target; // this
//     val = e.target.id;

//     val = e.timeStamp;
//     val = e.type;

//     val = e.clientY;
//     val = e.clientX;

//     val = e.offsetY;
//     val = e.offsetX;
//     val = this;

//     this.style.background = `#${e.offsetX}`;

//     //console.log(val);
//     console.log(e.offsetX);
//     console.log(e.offsetY);
//     console.log(val);

// }


// // Events of JavaScript
// // https://www.w3schools.com/JS/js_events_examples.asp

// // Event Listener

// document.querySelector("#name").addEventListener('focus', test);

// document.querySelector("#name").addEventListener('keyup', test2);

// function test(e) {
//     this.style.background = 'pink';
// }

// function test2(e) {
//     //console.log(this.value);
//     document.getElementById("demo").innerText = this.value;
// }


// document.querySelector("#name").addEventListener('focus', test);
// document.querySelector("#name").addEventListener('keyup', test2);

// function test(){
//     this.style.background = 'pink';
// }

// function test2(){
//     // console.log(this.value);
//     document.getElementById('demo').innerText = this.value;
// }

// document.getElementById("demo").innerText = "Mehedi amin";

// Error handling
// console.log("Before Error!");
// let a = 20;

// try{
//     // test();
//     // undefined.test();
//     if(a>15) throw "Too Big";
//     else if (a<5) throw "Too small";
// } catch(e){
//     console.log(e.message);
//     console.log(e.name);
// }
// finally{
//     console.log("I am inside finally!");
// }

// console.log("After Error!");


// console.log("Before Error!");

// try {
//     //test();
//     //undefined.test();
// } catch(err) {
//     //console.log(err);
//     console.log(err.message);
//     console.log(err.name);
// } finally {
//     console.log("I am inside finally!");
// }

// console.log("After Error!");


// // Error Handling

// let a = 2;

// try {
//     if(a>15) throw "Too Big";
//     else if (a<5) throw "Too small";
// } catch(err) {
//     console.log(err);
// }

// ///https://www.w3schools.com/jsref/jsref_obj_error.asp 


// Regular expressions

// Regular Expression
// Pattern Matching Technique

// let re;
// let str;
// re = /hello/;
// re = /Hello/;
// re = /hello/i; // i = case insensitive

// console.log(re);
// console.log(re.source);


// // exec() - Returns result in an array or null
// str = "HelLo World";
// str = "Again Hello World";
// str = "Hell World";
// str = "sdsHellosds World";
// str = "Again Hello World Hello";
// str = "World";
// let result = re.exec(str);

// // test() - true/false
// result = re.test(str);
// console.log(result);

// // match() - Returns array or null
// result = str.match(re);
// console.log(result);

// // search() - Returns index of the first match or -1
// str = "World";
// result = str.search(re);
// console.log(result);

// // replace() - Return new string
// str = "Again Hello World Hello";
// let newstr = str.replace(re, "Hi");
// console.log(newstr); 

// let re;
// let str;
// // Literal Character
// re = /hello/;
// re = /hello/i;
// re = /hell/i;
// re = /lo W/i;
// re = /loW/i;

// // Meta Characters
// re = /^hello/; // Must start with
// re = /hello$/; // Must end with
// re = /world$/;
// re = /^hello$/; // Must start and end with
// re = /^h.llo$/; // Matches any one character
// re = /h.llo/;
// re = /h*llo/; // 0 or more times
// re = /he?a?llo/; // Optional
// re = /hello?/; // escaping

// str = "Again hello World";
// str = "hello hello";
// str = "hello";
// str = "hallo";
// str = "hillo";
// str = "h llo";
// str = "hllo";
// str = "hillo worlde";
// str = "hello worlde";
// str = "hillo";
// str = "hilo";
// str = "hhfsdhfsuillo";
// str = "hello";
// str = "hllo";
// str = "hallo";
// str = "htllo";
// str = "heallo";
// str = "hello";
// str = "hallo";
// str = "hllo";
// str = "hello";
// str = "hello?";



// console.log(re.exec(str));
// reTest(re, str);
// function reTest(re, str) {
//     if(re.test(str)) {
//         console.log(`'${str}' matches '${re.source}'`);
//     }
//     else {
//         console.log(`'${str}' doesn't match '${re.source}'`);
//     }
// } 