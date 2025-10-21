function api() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Weather Data");
            resolve(200);
        },2000);
    });
}

async function getWeatherData() {
    await api().then(res => {
        console.log(res);
    }); //1st call
    await api(); //2nd call : will be executed after 1st call will be fullfilled
    await api(); //3rd call : will be executed after 2nd finishes
}

getWeatherData();