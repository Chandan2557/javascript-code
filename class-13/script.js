//<------async/await------->
/*
//code by promise 
fetch("https://fakestoreapi.com/products")
.then(res => res.json())
.then(ans => console.log(ans))
.catch(e => console.log(e));


//code by async/await
async function getData() {
  let res = await fetch("https://fakestoreapi.com/products");
  let ans = await res.json();
  console.log(ans);
}

getData().catch(e => console.log(e));
*/

//<-----Callbackhell------->
function callbackHell() {
    try {
        fetch("https://fakestoreapi.com/products").
            then((res) => res.json()).
            then((data) => {
                console.log("All Product", data)
                let singleCategory = data[1].category;
                console.log(singleCategory)
                fetch(`https://fakestoreapi.com/products/category/${singleCategory}`).
                    then((res) => res.json()).
                    then((data) => {
                        console.log("Single category i.e", singleCategory, " ke all product", data);
                        let id = data[0].id;
                        console.log("id is ", id)
                        fetch(`https://fakestoreapi.com/products/${id}`).
                            then((res) => res.json()).
                            then((single) => {
                                console.log("single item is ", single)
                             })

                    })
            })

    }
    catch (err) {
        console.log("Got an error while making api call ", err)    }
 }
 callbackHell();


// // callbackhell Problem Solve by Promise.
// function solveCallBackHell() {
//     fetch("https://fakestoreapi.com/products")
//         .then((res) => res.json())
//         .then((data) => {
//             console.log("All Product", data);

//             const singleCategory = data[1].category;
//             console.log(singleCategory);

//             return fetch(`https://fakestoreapi.com/products/category/${singleCategory}`);
//         })
//         .then((res) => res.json())
//         .then((data) => {
//             console.log("Single category ke all product", data);

//             const id = data[0].id;
//             console.log("id is", id);

//             return fetch(`https://fakestoreapi.com/products/${id}`);
//         })
//         .then((res) => res.json())
//         .then((single) => {
//             console.log("single item is", single);
//         })
// }
// solveCallBackHell();


// //Promise Problem Solve by async/await.
// async function callApi() {
//     const data1 = await fetch("https://fakestoreapi.com/products");
//     const res1 = await data1.json()
//     console.log("fiest api calling result", res1)
//     let singleCategory = res1[1].category;
//     const data2 = await fetch(`https://fakestoreapi.com/products/category/${singleCategory}`);
//     const res2 = await data2.json()
//     console.log("2nd api calling result", res2)

//     const id = res2[1].id
//     const data3 = await fetch(`https://fakestoreapi.com/products/${id}`);
//     const res3 = await data3.json()
//     console.log("3rd api calling result", res3)
// }

// callApi()