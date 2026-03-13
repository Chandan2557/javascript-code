let obj1 = {
    id : 101,
    name : "Chandan",
    101 : 10000,
    "e - id" : "E102",
    "u id" : 'c102',
    "LastName" : "Meena"
}
console.log(obj1.id)
//console.log(obj1[id])
console.log(obj1["id"]);


console.log(obj1.name);
//console.log(obj1[name]);
console.log(obj1["name"]);

console.log(obj1[101]);
console.log(obj1["101"]);

console.log(obj1["e - id"]);

console.log(obj1["u id"]);

console.log(obj1["LastName"]);
console.log(obj1.LastName);

let obj2 = {
    id : 10,
    userName : "Chandan",
    H : function(){
        console.log("Hey")
    }
}
//obj1.H();
let x = obj1.H();


let person = {
    userName: "cm",
    age: 21,
    class: "Mern"
}
person.name = "Dm";
console.log(person.name);
person = 10;
console.log(person);


const ob3 = {
    userName: "cm",
    age: 21,
    class: "Mern"
}
ob1.class = "Mean";
console.log(ob1.class);

ob1 = 100;
console.log(ob1);

//<----- Nested Object -------->
//Q1
let obj4 = {
    id : 10,
    name : "Chandan Meena",
    formercomapany : {
        cid : 'C1123',
        name : "ADP",
        Tech : {
            Mern : 'Transfer',
            payrod : 'AL115',
        },
        city : "Hyd"
    },
    Pincode : 450116
}

console.log(obj4.formercomapany.Tech.payrod);
console.log(obj4.formercomapany.city);
console.log(obj4.Pincode);
console.log(obj4.name);
console.log(obj4.formercomapany.cid);


//Q2
let obj5 = {
    id: 10,
    name: "Chandan Meena",
    "Data-info": {
        cid: 'C1123',
        cname: "TCS",
        salaryPay: {
            Department: ["1", "2", "3", "4"],
            "C2 15": "data info",
            415: {
                420: {
                    211: 300,
                    id: 113
                }
            }
        }
    }
}

console.log(obj5["Data-info"].salaryPay[415][420][211].id);
console.log(obj5["Data-info"].salaryPay.Department[2])
console.log(obj5["Data-info"].salaryPay[415])
console.log(obj5["Data-info"].salaryPay["C2 15"])


//Q3
let obj6 = {
    id : 101,
    city : "Indore",
    pin : 450116
}
console.log("id" in obj6);
console.log(Object.keys(obj6));
console.log(Object.values(obj6));


//Q4 Use For-in Loop
let obj7 = {
    id : 101,
    city : "Indore",
    pin : 450116
}
for(let k in obj7){
    console.log(k, obj7[k]);
}


//Q5 Use Freeze keyword
let user = {
  name: "Chandan",
  age: 22
};

Object.freeze(user);
user.age = 30;      
user.city = "Delhi"; 
delete user.name;    
console.log(user);


//Q6 Use Seal keyword
let user = {
  name: "Chandan",
  age: 22,
  city : "Harsud"
};
Object.seal(user);
user.age = 30;      
user.city = "Delhi"; 
 delete user.name;    
console.log(user);



let obj8 = {
    id : 101,
    city : "Indore",
    pin : 450116,
    10 : "Hello",
    "u id" : 'C3738',
    "e-id" : 'F4828',
    "LastName" : "meena",
}

console.log(obj8["u id"]);
console.log(obj8["e-id"])
console.log(obj8["10"]) //1
console.log(obj8["10"]) //2
console.log(obj8.LastName) //1
console.log(obj8["LastName"]) //2


//<-------Nested Object------->
let ecommerce = {
  storeName: "TechStore",
  location: {
    city: "Delhi",
    address: {
      area: "Connaught Place",
      pincode: 110001
    }
  },
  products: [
    {
      id: 101,
      name: "Laptop",
      specs: {
        brand: "Dell",
        config: {
          cpu: "i7",
          ram: "16GB",
          storage: {
            type: "SSD",
            size: "1TB"
          }
        }
      },
      reviews: [
        {
          user: {
            id: 1,
            name: "Chandan"
          },
          rating: 5
        },
        {
          user: {
            id: 2,
            name: "Meena"
          },
          rating: 4
        }
      ]
    }
  ]
};

console.log(ecommerce.products[0].specs.config.storage.size);
console.log(ecommerce.products[0].reviews[1].rating)
console.log(ecommerce.products[0].reviews[1].user.name)


//<------Object.difine property------->
var obj9 = {
    id : 101,
    name : "Chandan Meena",
    age : 20
}
obj1.age = 25;
Object.defineProperty(obj9, "age",{
    writable:false
});
obj1.age = 50;
obj1.name = "Anjali Meena";
console.log(obj9.name);
console.log(obj9.age);
