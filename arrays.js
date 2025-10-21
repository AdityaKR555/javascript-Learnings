arr = [1,3,5,7];
console.log(arr);

arr.push(9);        //Adds element at the last position
console.log(arr);

arr.pop();          //Removes last element
console.log(arr);

arr.unshift(2);     //Adds element at beginning
console.log(arr);

arr.shift();        //Removes first element
console.log(arr);

//let and const arrays will work same too

//same as python, can store values of diff. datatypes even an array within array.

let brr = [7, "hello", true, 3.2, arr, [1,2,4]];
console.log(brr);

let x = [[1,2,3],[5,6,7,8,9]];      //2d array of different sizes is possible too
console.log(x);