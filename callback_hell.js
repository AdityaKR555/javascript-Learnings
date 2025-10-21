function getData(dataId, getNextData){
    setTimeout(() => {
        console.log("data =", dataId);
        if(getNextData){
            getNextData();
        }
    },2000);
}   

getData(1, () => {
    getData(2, () => {          //This is called callback hell
        getData(3, () => {      //Making Pyramid of Doom
            getData(4)
        });
    });
});