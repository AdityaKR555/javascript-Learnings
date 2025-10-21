const URL = "https://catfact.ninja/fact";

let factPara = document.getElementById("fact");
let btn = document.getElementById("button");

let getFacts = async () => {

    try{
        factPara.innerHTML = "Loading..."
        console.log("Getting data....");
        let response = await fetch(URL);
        let data = await response.json();
        console.log(data);
        factPara.innerHTML = data.fact;
        btn.innerHTML = "Check Another One";
    } catch (error) {
        factPara.innerHTML = "Could not fetch a fact. Try again!";
        console.error(error);
    }
   
}

btn.addEventListener("click", getFacts);