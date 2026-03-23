/*let button = document.getElementById("btn");
console.log(button);

let para = document.getElementById("pre");
console.log(para);
*/


let div= document.getElementById("box")
let button= document.getElementById("btn")
console.log(button)
console.log(div)
 async function colapi(){
    const response=await fetch('https://fakestoreapi.com/products/1')
    const data=await response.json()
    console.log(data)
    div.innerHTML=
        `<p> ${data.title}</p>
        <p> ${data.price}</p>`
}
button.addEventListener("click",()=>{
    colapi()
})
