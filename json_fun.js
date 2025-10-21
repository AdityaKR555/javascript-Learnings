obj = {name : "Aditya",
    length : "6"
};

console.log(obj);

x = JSON.stringify(obj);            //object -> string

console.log(x);
console.log("\n----------\n")

console.log(typeof x);
console.log(typeof obj);

let parsed = JSON.parse(x);         //string -> object
console.log(parsed);
console.log(typeof(parsed));