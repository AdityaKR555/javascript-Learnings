let Employee = {
    archit : function(){
        return "Archit is saying HIII";
    },
    aditya(){
        console.log("hello");
    }
};

// console.log(Employee.archit());

let Ajaj = {
    salary : 10000
}

Ajaj.__proto__ = Employee;

console.log(Ajaj.archit());
Ajaj.aditya();