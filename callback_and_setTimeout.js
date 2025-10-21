//Callback : giving a function as a parameter in another function

function product(a,b,c){
    return a*b*c;
}

function printProduct(x){
    let z = x(2,3,4);
    console.log(z);
}

printProduct(product);

//setTimeout

function hello(){
    console.log("Hello...");
}
function mello(){
    console.log("Mello...");
}

setTimeout(hello, 2000);    //Will print after mello
setTimeout(mello, 1000);    //Will print first(after 1 second)
 
for(let i=1; i<=10; i++){
    setTimeout(function(){
        console.log(i);
    },i*1000); //will take one second after every printing...
}

//so timeout can be called in two ways
// (a). setTimeout(funcName, time(in ms));
// (b). setTimeout(function(){
//          perform operation
//      }, TimeRanges(in ms));