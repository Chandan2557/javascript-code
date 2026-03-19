//<-------Destructuring--------->
//Array Destructuring
/*let arr =["Chandan", 22, "Indore"];
let[name, age, city] = arr;
console.log(name);
console.log(age);
console.log(city);


//Object Destructuring
let obj = {
    name : "Chandan",
    age : 22,
    city : "Indore"
};
let {name, age, city} = obj;
console.log(name);
console.log(age);
console.log(city);


//<-------Error Handling--------->
function Add(x, y){
    try{
        if(typeof(x)!==Number && typeof(y)!==Number){
            throw("x & y is not Number Type");
        }
        else{
            console.log(x+y);
        }
    }
    catch(e){
        console.log(e);
    }
}
Add(10, 20);


//<-------Currying--------->
function Add(x){
    return function(y){
        return x*y;
    }
}
let ans = (Add(5)(6));
console.log(ans);


function add(a) {
  return function(b) {
    return function(c) {
      return a + b + c;
    }
  }
}

console.log(add(2)(3)(4)(5)); 

//<-----Infinite Currying------->
function mul (x){
    return function(y){
        if(y === undefined){
            return x;
        }
        return mul (x*y);
    }
}
let op = (mul(1)(2)(3)(4)(5)());
console.log(op);


//<-----Closure------->
function outer() {
  let name = "Chandan";

  function inner() {
    console.log(name);
  }

  inner();
}

outer();
*/

//<-----Promise------->
let isEducated = prompt("Enter true or false");

isEducated = (isEducated === "true");

function example(input) {
  try {

    if (typeof input === "boolean") {

      let myPromise = new Promise((resolve, reject) => {

        if (input) {
          resolve("You are on the right path");
        } else {
          reject("Aapke din ho chuke hai");
        }

      });

  let output = myPromise.then((op) => console.log(op))
        .catch((er) => console.log("Failed:", er));

    } else {
      throw new Error("Error Happened");
    }

  } catch (e) {
    console.log(e.message);
  }
}

example(isEducated);