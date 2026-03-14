// for(let i=1; i<=5; i++){
//     console.log(`printing table of ${i}\n`);
//     for(let j=1; j<=10; j++){
//         console.log(`${i} X ${j} = ${i*j}`);
//     }
//     console.log(`\n------------------\n`);
// }

// let count = 1
// while(count <= 5){
//     console.log(`printing table of ${count}\n`);
//     let j = 1;
//     while(j <= 10){
//         console.log(`${count} X ${j} = ${count*j}`);
//         j++
//     }
//     console.log(`\n------------------\n`);
//     count++
// }

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {            // for of me value deta hai
    console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) {
    if(greet == " " || greet == "!") continue;
    console.log(`Each char is ${greet}`)
}

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")


console.log(map);

for (const [key, value] of map) {
    console.log(key, ':-', value);
}

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
    
// }    object is not iterable

const myObject2 = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject2) {
    console.log(`${key} shortcut is for ${myObject2[key]}`);
}

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {        //for-in index ya key deta hai
    console.log(programming[key]);
}

// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

// for (const key in map) {
//     console.log(key);
// }