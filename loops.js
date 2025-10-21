//for loop
for(let i = 1; i<=10; i++){
    console.log(i);
}

//while loop
let i = 1;
while(i<=15){
    console.log(i);
    i++;
}

//do-while loop
i = 1;
do{
    console.log(i);
    i++;
}while(i<=20);

//for-of loop
arr = [1,2,3,4];
for(let a of arr){
    a *= 2;
    console.log(a);     //changes made in this loop will last within its block only.
}
console.log(arr)

//for-each loop
brr = [3,5,7,9];
brr.forEach((element,i,brr) => {
    console.log(element, i, brr);       //can pass value, index and array, although last two is optional, also scope is as same as for-of loop
});

brr.forEach(ele => { console.log(ele) });      //wow