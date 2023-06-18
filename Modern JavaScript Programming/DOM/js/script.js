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
val = document.getElementById("dcument-title");
val = document.getElementById("dcument-title").id;
val = document.getElementById("dcument-title").className;
val = document.getElementById("dcument-title").style.background = '#554';
val = document.getElementById("dcument-title").style.color = '#fff';
val = document.getElementById("dcument-title").style.padding = '20px';
console.log(val);