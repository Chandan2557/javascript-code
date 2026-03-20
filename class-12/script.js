//<------SetTimeout-------->
let uId = setTimeout(() => {
    clearInterval(uId)
    console.log("Hi")
}, 5000)

//<------SetInterval-------->

let countValue = 0;
let id = setInterval(() => {
    console.log("Hello js")
    countValue++;
    if (countValue == 7) {
        clearInterval(id);
    }
}, 1000)

//<------Api Calling-------->

let url = "https://jsonplaceholder.typicode.com/todos/1";

fetch(url)
.then((ip) => ip.json())
.then((data) => console.log(data))
.catch((e) => console.log(e));


