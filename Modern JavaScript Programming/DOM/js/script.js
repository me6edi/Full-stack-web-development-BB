// let val;
// val = this;
// val = window;
// val = window.document;
// val = document;
// val = document.all;
// val = document.all[2];
// val = document.all.length;
// val = document.head;
// val = document.body;
// val = document.doctype;
// val = document.domain;
// val = document.URL;
// val = document.characterSet;
// val = document.contentType;

// val = document.forms;
// val = document.forms[0];
// val = document.forms[0].method;
// val = document.forms[0].action;

// val = document.links;
// val = document.links[0];
// val = document.links[0].href;
// val = document.links[0].className;
// val = document.links[0].classList;

// val = document.images;

// val = document.scripts;
// val = document.scripts[0];
// val = document.scripts[0].src;
// val = document.scripts[0].getAttribute('src');

// links = document.links;
// let linkArr = Array.from(links);

// linkArr.forEach(function(link){
//     console.log(link.getAttribute('href'));
// });

// console.log(links);
// console.log(val);





// DOM Selector Single Element

let val;

// Gettting an Element
val = document.getElementById("document-title");
val = document.getElementById("document-title").id;
val = document.getElementById("document-title").className;


//Changing style
val = document.getElementById("document-title").style.background = '#554';
val = document.getElementById("document-title").style.color = '#fff';
val = document.getElementById("document-title").style.padding = '20px';
val = document.getElementById("document-title").style.display = "block";

// Changing content

val = document.getElementById("document-title").textContent = "new title";
val = document.getElementById("document-title").innerText = "Mehedi Amin";
val = document.getElementById("document-title").innerHTML = "<i>Mehedi</i>";
val = document.getElementById("document-title");
val.innerText = "Ha ha ha ha ha ha ha ha ha ha ha";

// document.querySelector()
val = document.querySelector("#document-title"); // id
val = document.querySelector(".title-class");// class
val = document.querySelector("h3"); // tag
val = document.querySelector("ol li"); // tag
val.style.background = 'red';
val.style.color = "White";
val = document.querySelector('li:last-child');
val = document.querySelector("li:nth-child(4)").style.color = "green";

console.log(val);