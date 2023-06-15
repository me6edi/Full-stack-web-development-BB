let val;
val = this;
val = window;
val = window.document;
val = document;
val = document.all; // not working
val = document.all[3];
val = document.all.length;
val = document.head;
console.log(val);
