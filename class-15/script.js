//Dom Concept
/*
let x = document.getElementById("first-heading").innerText = "Hello Chandan";
console.log(x);

let y = document.getElementsByClassName("para-01");
console.log(y);

let z = document.getElementsByTagName("h1");
console.log(z);

// function hello(){
//     alert("Hello Chandan Meena");
// }


// let btn = document.getElementById("btn");
// btn.addEventListener("click", function(){
//     alert("i'm MERN STACK developer")
// });

let heading = document.getElementById("first-heading");
let btn = document.getElementsByClassName("btn-class");

btn[0].addEventListener("click", function () {
    heading.innerHTML = "i'm MERN Stack Developer";
});
*/

let x = document.getElementById("first-heading");
console.log(x.getAttribute("id")); //Use getAttribute

x.setAttribute("class","heading"); //Use setAttribute
console.log(x.getAttribute("class")); 

x.setAttribute("id","change-heading"); //Use setAttribute
console.log(x.getAttribute("id")); 

// Use hasAttribute

console.log(x.hasAttribute("id"));

