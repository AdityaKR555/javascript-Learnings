// conditional statements and inputting

// let age = prompt("Enter your age: ");
let age = 15;
if(age >= 18){
    console.log("You are eligible for voting!");
}
else{
    console.log("You are not eligible for voting now, you will be eligible after", 18-age, "years");
}

//else-if ladder
rating = 5;
if(rating == 1) console.log("Poor");
else if(rating == 2) console.log("Below Average");
else if(rating == 3) console.log("Average");
else if(rating == 4) console.log("Above Average");
else console.log("Excellent")

// TripleEqualTo
a = 5;
b = '5';
console.log(a == b);    //Compares value only
console.log(a === b);   //Compares value and datatype both

//falsy values => false condition, false, 0, null, NaN(not a number), undefined >>> like if these are inside if() condition
//truthy values => everything except falsy values, like true condition, true, 1(or any other real number)