// Code for Basic understandig with synchrouns.
// let myPromise = new Promise((resolve, reject) => {
// console.log("Hello Chandan meena");
// // resolve(1001);
// reject(new Error("Internal error"));
// })


// Code with Asynchrouns.
// function myName(){
// console.log("Hello My Name is Chandan meena")
// }
// setTimeout(myName, 10000);


// setTimeout(function myName() {
//     console.log("Hello My Name is Chandan meena");
// }, 15000)


// let myPromise2 = new Promise((resolve, reject) => {
//     setTimeout(function myName() {
//         console.log("Hello My Name is Chandan meena")
//     }, 10000);
//     // resolve("Hey");
//     reject(new error("some erroe"));
// });



// let myPromise3 = new Promise((resolve, reject) => {
//     let success = true;
//     if (success != false) {
//         resolve("Promise is Fullfilled");
//     } else {
//         reject("Promise is Rejected");
//     }
// })

//Use .then and .catch method in Promise.
// myPromise3.then((messge)=>{
//     console.log("Then ka msg ye hai " + messge)
// }).catch((error)=>{
//     console.log("Error " + error);
// })


//Use multiple .then method in Promise.
// myPromise3.then((messge) => {
//     console.log("First msg " + messge);
//     return "promise fullfilled Second msg";
// }).then((messge) => {
//     setTimeout(() => {
//         console.log("Second mgs " + messge);
//         return "promise fullfilled third msg";
//     }, 2000)
// }).then((messge) => {
//     setTimeout(() => {
//         console.log("Third meg " + messge);
//     },3000)
// }).catch((error) => {
//     console.log("Error " + error);
// }).finally((messge) => {
//     console.log("Me to pakka chalunga hi")
// })

//Use multiple promise with promise all method
// let myPromise1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("First")
//     }, 1000)
// })
// let myPromise2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Second")
//     }, 2000)
// })
// let myPromise3 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Third")
//     }, 3000)
// })
// let myPromise4 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Fouth")
//     }, 4000)
// })

// Promise.all([myPromise1, myPromise4, myPromise3, myPromise2])
// .then((values)=>{
//     console.log(values);
// })

let myPromise4 = new Promise((resolve, reject) => {
 setTimeout(function myName() {
     console.log("Hello My Name is Chandan meena");
 }, 5000)
})

// This interview type question.
let myPromise5 = new Promise((resolve, reject) => {
 setTimeout(function myName() {
     console.log("Hello My Name is Anjali meena");
 }, 0)
})