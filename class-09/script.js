//Freeze any Peticular 
// Property in object.

// const ob1 = {
//     id: 101,
//     name: "chandan meena",
//     age: 20,
// }
// ob1.age = 30;
// Object.defineProperty(ob1, "age", {
//     writable: false
// });
// ob1.name = "Nandan";
// console.log(ob1.age);

//<------- Shallow copy by refernce and Deep copy------>

// const original = {
//     id: 101,
//     name: "chandan",
//     additionalInfo: {
//         data: "He is Avg. copy",
//         skill: "java",
//     }
// }
// console.log(original);
// original.name = "Nandan";
// let copy = original;
// copy.id = 400,
// copy.skill = "C++";
// console.log(copy);




// //<-------method-02 obj.assing() - Shallow copy pass by refernce and Deep copy------>
// let copyobj1 = Object.assign(original);
// copyobj1.id = 738282; 
// copyobj1.additionalInfo.skill= "C++";
// console.log(copyobj1);

// //<-------method-03 spread opreator- Shallow copy pass by refernce and Deep copy------>
// let copyobj2 = Object.assign(original);





// //<-------Deep Cpoy------->
// const original2 = {
//     id: 101,
//     name: "chandan",
//     Info: {
//         data: "He is Avg. copy",
//         skill: "java",
//         city : "Indore",
//     }
// }
// //1 - doing deep copy JSON.Objrct.parse.
// //No change in the original object and their inner object value.
// let deepCopy1 = JSON.parse(JSON.stringify(original2));
// deepCopy1.id = 10012;
// deepCopy1.Info.city = "Harsud";
// console.log(original2);
// console.log(deepCopy1);


// //2 - doing deep copy structureclone.
// //No change in the original object and their inner object value.
// const original2 = {
//     id: 101,
//     name: "chandan",
//     Info: {
//         data: "He is Avg. copy",
//         skill: "java",
//         city : "Indore",
//     }
// }

// let deepCopy1 = structuredClone(original2);
// deepCopy1.id = 10012;
// deepCopy1.Info.city = "Harsud";
// console.log(original2);
// console.log(deepCopy1);


// let user = {
//   name: "Chandan",
//   skills: ["JS","React"]
// };

// let copy = structuredClone(user);

// copy.skills[0] = "Python";

// console.log(user.skills);
// console.log(copy.skills);





// //Rest Operator
// // function Ram (x,y,...z){
// // console.log(x,y);
// // console.log(z);
// // }
// // console.log(Ram(5, 6, 8))

// // //Spread Operator
// let data = {
//     id : 101,
//     name : "Chandan"
// }
// let x1 ={
//     info:1,
//     city : "Harsud"
// }
// let x = {...data}
// console.log(x)

// let ans = {...x1,...data}
// console.log(ans);


// function outer() {
//  let count = 0;

//  return function inner() {
//  count++;
//  console.log(count);
//  };
// }

// const fn1 = outer();
// const fn2 = outer();

// fn1();
// fn1();
// fn2();
// fn2();

const ob1 = {
    id :101,
    name:"chandan meena",
    age:20,
}
ob1.age = 30;
Object.defineProperty(ob1, "age", {
    writable:false
});
ob1.name = "Nandan";
console.log(ob1.age); 
console.log(ob1.name);