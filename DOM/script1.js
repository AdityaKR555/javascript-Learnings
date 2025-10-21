let x = document.querySelectorAll("h1");
console.log(x);

let jc = document.getElementById("jc");
let ajs = document.getElementById("ajs");
let ro = document.getElementById("ro");
let rr = document.getElementById("rr");

jc.addEventListener("click", function(){
    jc.innerHTML = "HUSTLE LOYALTY RESPECT";    //or use this.something
    jc.style.color = "green";
    jc.style.backgroundColor = "orange";
});

ajs.addEventListener("click", function(){
    this.innerHTML = "THE PHENOMENAL ONE";
    this.style.color = "wheat";
    this.style.backgroundColor = "darkBlue";
});

ro.addEventListener("click", function(){
    this.innerHTML = "THE VIPER";
    this.style.color = "red";
    this.style.backgroundColor = "black";
});

rr.addEventListener("click", function(){
    rr.innerHTML = "THE TRIBAL CHIEF";
    rr.style.color = "white";
    rr.style.backgroundColor = "rgb(0, 22, 101)";
});

let body = document.querySelector("body");

body.addEventListener("mouseenter", function(){
    setTimeout(function(){
        jc.style.textAlign = "center";
        ro.style.textAlign = "center";
        ajs.style.textAlign = "center";
        rr.style.textAlign = "center";
    }, 3000);
    

});

// body.addEventListener("mouseleave", function(){
//     jc.style.textAlign = "start";
//     ro.style.textAlign = "start";
//     ajs.style.textAlign = "start";
//     rr.style.textAlign = "start";
// });

let a = document.getElementById("ele1");
let b = document.getElementById("ele2");
let c = document.getElementById("ele3");
let d = document.getElementById("ele4");

a.addEventListener("mouseenter", function(){
    let r = Math.floor(Math.random()*100);
    a.innerHTML = `<h1>${r}</h1>`;
});

a.addEventListener("mouseleave", function(){
    a.innerHTML = "<h1>1</h1>";
});

let clr = "red";
b.addEventListener("mouseenter", function(){
    if(clr == "red"){
        b.style.backgroundColor = "red";
        clr = "green";
    }
    else if(clr == "green"){
        b.style.backgroundColor = "green";
        clr = "blue";
    }
    else{
        b.style.backgroundColor = "blue";
        clr = "red";
    }
    
});

b.addEventListener("mouseleave", function(){
    b.style.backgroundColor = "white";
});

c.addEventListener("mouseenter", function(){
    let r1 = Math.floor(Math.random()*256);
    let r2 = Math.floor(Math.random()*256);
    let r3 = Math.floor(Math.random()*256);
    this.style.backgroundColor = `rgb(${r1}, ${r2}, ${r3})`;
});

c.addEventListener("mouseleave", function(){
    this.style.backgroundColor = "white";
});


d.addEventListener("click", function(){
    let r1 = Math.floor(Math.random()*256);
    let r2 = Math.floor(Math.random()*256);
    let r3 = Math.floor(Math.random()*256);

    a.style.backgroundColor = `rgb(${r1},255,255)`;
    b.style.backgroundColor = `rgb(255,${r2},255)`;
    c.style.backgroundColor = `rgb(255,255,${r3})`;
});

d.addEventListener("mousemove", function(){
    a.style.backgroundColor = "white";
    b.style.backgroundColor = "white";
    c.style.backgroundColor = "white";
})