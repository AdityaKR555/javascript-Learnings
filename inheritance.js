class Animal{

    constructor(colour){
        this.hindi = "Jaanwar";
        this.colour = colour;
    }
    walk(){
        console.log("walking");
    }

    eat(){
        console.log("Eating");
    }

    energy(){
        console.log("Raaaa");
    }
}

class Dog extends Animal{
    
    constructor(colour){
        super(colour);
    }
    bark(){
        super.energy();
        console.log("Barking");
    }
}

let Lalu = new Dog("Laal");
Lalu.eat();
Lalu.walk();
Lalu.bark();
console.log(Lalu);

let Kalu = new Dog("Kaala");
Kalu.bark();
Kalu.eat();
Kalu.walk();
console.log(Kalu);