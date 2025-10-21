class HyundaiCar{               //class
    start(){
        console.log("Start");
    }

    stop(){
        console.log("stop");
    }

    setColour(colour){
        this.colour = colour;
    }

    getColour(){
        console.log(this.colour);
    }
}

let i10 = new HyundaiCar();     //object
i10.setColour("red");
i10.getColour();
i10.start();
i10.stop();


let i20 = new HyundaiCar();     //object
i20.start();
i20.stop();
i20.getColour();

console.log("-------------\n\n");
console.log(i10);
console.log(i20);

console.log(typeof(HyundaiCar));
console.log(typeof(i10));

class HeroBike{
    
    constructor(brand, mileage){
        this.brand = brand;
        this.mileage = mileage;
    }

    printInfo(){
        console.log(`Mileage of ${this.brand} bike is ${this.mileage}`);
    }
}

let iSmart = new HeroBike("iSmart", 60);
let Splendor = new HeroBike("Splendor", 60);

iSmart.printInfo();
Splendor.printInfo();