let a = "Aditya Kumar Rai";
console.log(a, a.length);
console.log(a[14]);

for(let i=0; i<a.length; i++){
    console.log(a[i]);
}

// With for-of loop
for(let i of a){
    console.log(i);
}

// for-each loop does not work with strings


//Built-in functions:-

let s = "Disco Dancer";         //Strings are immutable, so u can't change its original value.
console.log(s.toUpperCase());
console.log(s.toLowerCase());

let x = "    s  " + s + "     ";
console.log(x);
console.log(x.trim());

console.log(s.indexOf('n'));
console.log(s.indexOf('D'));
console.log(s.lastIndexOf('D'));

console.log(s.charAt(3));       // s[3] : well well well

// SLice -> for substring
console.log(s.slice(0));        // Substring from index i to end
console.log(s.slice(5));        // from 5 to end
console.log(s.slice(2,5));      // Substring from index i to j-1
s2 = s.slice(0,5);
console.log(s2);

// Splitting string based on given value to store in an array
let z = "Tum pass aaye yu muskuraye";
console.log(z);
let arr = z.split(' ');     // Splitting based on space
console.log(arr);

let y = "a,b,c,d,e,f,g";
brr = y.split(',');
console.log(brr);