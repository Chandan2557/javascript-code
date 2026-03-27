//Create simple async function
// async function getData(){
//     setTimeout(function (){
//     console.log("Hello Chandan")

//     },2000)
// }
// let x = getData();
// console.log(x); //return promise

//Fetch Api
// async function getData(){
// let response = await fetch('https://jsonplaceholder.typicode.com/comments?postId=1');
// let data = await response.json();
// console.log(data);
// }
// getData()



const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const url = "https://jsonplaceholder.typicode.com/posts";

const options = {
    method: "POST",
    body: JSON.stringify({ username: "Chandan Meena" }),
    headers: myHeaders,
};

//get data from url
async function getdata() {
    const url = "https://dummyjson.com/posts/user/252";
    const response = await fetch(url);
    let data = await response.json();
    console.log(data);
}

//add data in url
async function postData() {
    const response = await fetch("https://dummyjson.com/posts/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            title: "Chandan Meena",
            userId: 5,
        }),
    });

    const data = await response.json();
    console.log(data);
}

async function processData() {
    await postData();
    await getdata();
}

processData();