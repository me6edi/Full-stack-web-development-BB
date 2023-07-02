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