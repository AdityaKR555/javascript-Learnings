// const accountId = 144553
// let accountEmail = "hitesh@google.com"
// var accountPassword = "12345"
// accountCity = "Jaipur"
// let accountState;

// // accountId = 2 // not allowed


// accountEmail = "hc@hc.com"
// accountPassword = "21212121"
// accountCity = "Bengaluru"

// console.log(accountId);

// /*
// Prefer not to use var
// because of issue in block scope and functional scope
// */


// console.table([accountId, accountEmail, accountPassword, accountCity, accountState])


// //---------------------------------++++++++++++++++++++++++-------------------------------------

// let isLoggedIn = "hitesh"

// let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);

// let someNumber = 33

// let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);

// let a = "3434"
// let numberA = Number(a)
// console.log(numberA);
// console.log(typeof numberA);


// let value = 3
// let negValue = -value
// console.log(negValue);

const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(3));              //decimal ke baad kitne digit chahiye
console.log(balance.toPrecision(5));          //total kitne digit chahiye

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));  //local ke hisab se format kar dega number ko

// +++++++++++++ Maths +++++++++++++++++++++++++++++

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.9));
console.log(Math.min(4, 3, 6, 8));
console.log(Math.max(4, 3, 6, 8));

console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)
