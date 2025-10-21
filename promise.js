// const getPromise = () => {
//     return new Promise((resolve, reject) => {
//         console.log("I am a Promise...");
//         if(1) resolve("Success");
//         else reject("Error");
//     });
// };

// let promise = getPromise();

// promise.then((res) => {
//     console.log("Promise fulfilled", res);
// });

// promise.catch((err) => {
//     console.log("rejected", err);
// });


// A promise can be in 3 states : Pending / fulfilled / rejected

// let myPromise = new Promise((resolve, reject) => {
//     let success = false;  // try changing to false

//     if(success){
//         resolve("✅ Promise resolved! Data received.");
//     } else {
//         reject("❌ Promise rejected! Something went wrong.");
//     }
// });

// myPromise
//     .then(result => {
//         console.log(result);  // runs if resolved
//     })
//     .catch(error => {
//         console.log(error);   // runs if rejected
//     })
//     .finally(() => {
//         console.log("Promise finished.");
//     });


// Promise chain : Lil better than callback hell shii

function step1() {
    return new Promise(resolve => {
        setTimeout(() => resolve(" → Step 1 done"), 2000);
    });
}

function step2() {
    return new Promise(resolve => {
        setTimeout(() => resolve(" → Step 2 done"), 2000);
    });
}

function step3() {
    return new Promise(resolve => {
        setTimeout(() => resolve(" → Step 3 done"), 2000);
    });
}

step1()
    .then(result => {
        console.log(result);
        return step2();   // pass result to step2
    })
    .then(result => {
        console.log(result);
        return step3();   // pass result to step3
    })
    .then(result => {
        console.log(result);
        console.log("✅ All steps completed!");
    });

