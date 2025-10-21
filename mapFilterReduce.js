let arr = [1,3,5,7];
//make an array 'brr' which has elements of value double the arr elements
let brr = [];
for(let a of arr){
    brr.push(a*2);
}
console.log(brr);

//to shorthand this, we'll use mapping

function double(x){
    return 2*x;
}
let crr = arr.map(double);
console.log(crr);

//or even make it more simpler by writing the function body within map() only

let drr = arr.map(function(a){
    return a*a;
});
console.log(drr);

//same can be done using arrow function\

let err = arr.map((a) => {
    return a*a*a;
});
console.log(err);

//or make it even more shorter
arr = arr.map(a => a*3);
console.log(arr);

// Filter(Basically returns true or false for each element)

//filter out even elements
x = [1,2,3,4,5,6,7,8,9];

function fun(x){
    if(x%2!=0) return true;
    else return false;
}

x = x.filter(fun);
console.log(x);

//can be executed in the same way as map
//for example:- 
// keep only those elements < 5

x = x.filter(a => a<5);     //a => a<5?true:false;
console.log(x);

// Reduce

let z = [1,9,2,7,4,5,6,2,8];
let l = z.reduce(function(a,b){
    return a+b;
});
console.log(l);

m = z.reduce((a,b) => (a-b));
console.log(m);

// Sort
k = [1,9,-3,-4,0,7];
k = k.sort();   //gives wrong sorting for negative values  
console.log(k);
