//  way of access html element in js file( selectors)

// id selector- getElementById("IDNAME")=> single tag return karta hai
const para1=document.getElementById("para1");
console.log(para1);
console.log(para1.textContent);
console.log(para1.innerText);
console.log(para1.getAttribute("id"));

/* hame ye create karna hai
        <p></p>
        <p>this </p>
        <p id="">this</p>

*/
// createElement("tagName")-> ye html tag ko create karne ke kaam me aata hai
let newParaGraph = document.createElement("p");//<p></p>
console.log(newParaGraph);

// // tag ke andar content ka dalna hai 
newParaGraph.innerText = "This is newly Created paragraph";
console.log(newParaGraph);//<p>This is newly Created paragrap</p>


// tag ke andar attribute dalna hai uske leaye =>setAttribute("attributekanName","attribute kee value")

newParaGraph.setAttribute("id","new-para");//<p id="new-para">This is newly xreated paragrap</p>
console.log(newParaGraph);


//  ui me add karne ke leaye aap ->
// body ke andar newparagraph ko dalna hai- 2 METHOD-> append(ek time miltiple tag ko aapend karti hai) 2. appendChild(ek bar ek hee tag ko append karti hai)
// body ko lekar ke aao
let bodyDiv=document.getElementsByTagName("body");// aray like object i.e html collection
console.log(bodyDiv);

bodyDiv[0].append(newParaGraph);
bodyDiv[0].prepend(newParaGraph);

// event ko attach karna -> EVENT is a action which is made by user.
//  ex-> click, change, sumbit, reload, scroll, keypress, resize

/*
 event ko attach kaise karte hai kisi tag ke sath-> 
 addEventListner() ye 3 parameter leta hai
 1st parameter-> event ka name string ke andar.
 2nd parameter-> event handler function-> event ke hone me kya karna chahta hu uska pura code handler function ke andar hota hai 
  3rd parater-> optional hota hai ye bubling ya capturing karne ke kaam me pta hai
*/


//  event lagane kee steps-> 
// 1 jis tag me lagana hai usko select kar lao
const btn=document.getElementById("click-btn");
console.log(btn);

// // 2 attach event ->
btn.addEventListener("click",()=>{
    console.log("ham to click ho gye hai");
});


// // both are same 1nd syntex
function eventFunction() {
    console.log("ham to click ho gye hai normal");
// }
// // 2 attach event ->
btn.addEventListener("click",eventFunction);


//  apply inline css using dom 
// tag ko le aao jisme css lagana hai
const para4=document.getElementById("para-4");
para4.style.backgroundColor="red";


//  class ko add karke css lagaunga 
//  tag ko le aao jisme class ko lagana hai css ka code ka likhne ke leaye 
const para5 = document.getElementById("para-4");
para4.classList.add("para5");
para4.classList.remove("tt");
para4.classList.toggle("syam");
}

//Forms handling
let ip1 = document.getElementById("fname")
let ip2 = document.getElementById("lname")
console.log(ip1, ip2)

let op = {};
ip1.addEventListener("change", (event) => {
    // console.log(event);
    // console.log(event.target)
    // console.log(event.target.value)
    op.fName = event.target.value;
    // console.log(op)
})


ip2.addEventListener("change", (event) => {
    // console.log(event);
    // console.log(event.target)
    // console.log(event.target.value)
    op.lName = event.target.value;
    // console.log(op)
})


//  we sumbit the form so we have to attach sumbit event on form tag
const formC=document.getElementById("form");
formC.addEventListener("submit",(event)=>{
    event.preventDefault()
    console.log(op)
    ip1.value=""
    ip2.value=""
})


// Todo->
const inputField = document.getElementById("data");
const btn1 = document.getElementById("btn");
const bodyC = document.getElementsByTagName("body");

let op1 = {};
inputField.addEventListener("change", (event) => {
    op1.data = event.target.value
})

btn.addEventListener("click", () => {
    let para = document.createElement("p");
    para.innerText = op1.data;
    bodyC[0].append(para);


    // edit btn 
    let editBtn = document.createElement("button");
    editBtn.innerText = "Edit"; 
    bodyC[0].append(editBtn);


    // delete btn
    let deleteBtn = document.createElement("button");
    deleteBtn.innerText = "delete";
    bodyC[0].append(deleteBtn);
})



