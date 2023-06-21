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

// let val;

// Gettting an Element
// val = document.getElementById("document-title");
// val = document.getElementById("document-title").id;
// val = document.getElementById("document-title").className;


//Changing style
// val = document.getElementById("document-title").style.background = '#554';
// val = document.getElementById("document-title").style.color = '#fff';
// val = document.getElementById("document-title").style.padding = '20px';
// val = document.getElementById("document-title").style.display = "block";

// Changing content

// val = document.getElementById("document-title").textContent = "new title";
// val = document.getElementById("document-title").innerText = "Mehedi Amin";
// val = document.getElementById("document-title").innerHTML = "<i>Mehedi</i>";
// val = document.getElementById("document-title");
// val.innerText = "Ha ha ha ha ha ha ha ha ha ha ha";

// document.querySelector()
// val = document.querySelector("#document-title"); // id
// val = document.querySelector(".title-class");// class
// val = document.querySelector("h3"); // tag
// val = document.querySelector("ol li"); // tag
// val.style.background = 'red';
// val.style.color = "White";
// val = document.querySelector('li:last-child');
// val = document.querySelector("li:nth-child(4)").style.color = "green";

// console.log(val);


// Multiselector
// document.getElementsByClassName()

// let list = document.getElementsByClassName('sample-class');
// list[0].style.backgroundColor = "red";
// list[3].style.backgroundColor = "green";
// list[1].textContent = "Hello, world!";
// console.log(list[0]);

// document.getElementByTagName();
// let list = document.getElementsByTagName("li");
// let list = document.querySelector('ol').getElementsByTagName('li');
// let lis = Array.from(list);
// lis.forEach(function(item){
//     console.log(item);
// });
// list.for
// console.log(list);

// document.querySelectorAll()
// id = i -> #idName
// classname -> .className
// tagname -> noting
// let mylist = document.querySelectorAll('ul li');

// mylist.forEach(function(item) {
//     console.log(item);
// })

// let liOdd = document.querySelectorAll('li:nth-child(odd)');
// let liEven = document.querySelectorAll('li:nth-child(even)');

// liOdd.forEach(function(item) {
//     item.style.background = 'grey';
//     item.style.color = 'white';
// })
// console.log(liEven);

// liOdd.forEach(function(item) {
//     item.style.background = 'Red';
//     item.style.color = 'white';
// })
// console.log(liOdd);

// Traversing the DOM 

// let val;
// let list = document.querySelector('ul');
// let listitem = document.querySelector('ul li:last-child');
// val = listitem;
// // console.log(val);


// // Get child Nodes

// val = list;
// val = list.childNodes;
// val = list.childNodes[0];
// val = list.childNodes[1].nodeName;
// val = list.childNodes[1].nodeType;

// 1 Element
// 2 Attributes
// 3 Text Node
// 4 comments
// 5 Document Itself
// 6 Doctype

// val = list.childNodes;

// val = list.children;
// val = list.children[1];
// list.children[0].textContent = "Hello, world!";
// val = list.children[1].children[0];
// val = list.children[1].children[0].href;

// val = list.firstChild;
// val = list.firstElementChild;
// val = list.lastChild;
// val = list.lastElementChild;


// val = listitem;
// val = listitem.parentElement;
// val = listitem.parentNode;
// val = listitem.parentElement.parentElement;

// val = listitem.nextSibling.nextSibling;
// val = listitem.nextElementSibling;
// console.log(val);