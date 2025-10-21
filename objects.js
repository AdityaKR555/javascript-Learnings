let details = ["Aditya", 20, 9.5, true];  //array

let x = {
    name : "Aditya",
    age : 20,
    cgpa : 9.5,
    "is Topper" : true  // key can be named anyhow, just write it as a string
};

console.log(x);
x.age = 19;
console.log(x.age);
x["age"] = 20;
console.log(x["age"]);

for (const key in x) {              //no "for-of" for objects
    console.log(key, x[key]);
}