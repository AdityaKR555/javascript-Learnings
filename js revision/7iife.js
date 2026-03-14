// Immediately Invoked Function Expressions (IIFE)


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();   //semicolon is important to end the statement 

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh');

((name = "birju") => {
    console.log(`DB CONNECTED THREE ${name}`);
})();