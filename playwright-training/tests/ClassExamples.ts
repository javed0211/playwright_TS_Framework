class car{
    brand:string;
    model:string;
    year:number;

    constructor(brand:string,model:string,year:number){
        this.brand=brand;
        this.model=model;
        this.year=year;
        }

    startEngine(): void{
        console.log('${this.brand} ${this.model} engine started');
    }
    stopEngine():void{
        console.log('${this.brand} ${this.model} engine stopped');
    }
}

let myCar = new car('Toyota','Camry',2019);
myCar.startEngine();
myCar.stopEngine();


class Calculator {
    add(a:number , b:number):number{
        return a+b;
    }
  
    multiply(a:number , b:number):number{
        return a*b;
    }
}

const calc = new Calculator();
console.log(calc.add(5,3));
console.log(calc.multiply(4,6));