//Basic Calculator with Class and Interfaces
//Create an interface ICalculator that defines the methods for addition, subtraction, multiplication, and division.

interface ICalculator {

    add(a: number, b: number): number;
    subtract(a: number, b: number): number;
    multiply(a: number, b: number): number;
    divide(a: number, b: number): number | string;
}

//Implement the Calculator
class Calculator implements ICalculator {

    add(a: number, b: number): number{
        this.validateInput(a,b);
        return a + b;
    }

    subtract(a: number, b: number): number{
        this.validateInput(a,b);
        return a - b;
    }

    multiply(a: number, b: number): number{
        this.validateInput(a,b);
        return a * b;
    }

    divide(a: number, b: number): number | string{
        this.validateInput(a,b);
        if (b === 0){
            return "Division by zero isnot allowed.";
        }
        return a / b;
    }
    private validateInput(a: number, b: number): void {
        if (typeof a !== "number" || typeof b !== "number") {

            throw new Error("Both inputs must be numbers");
                        
        }
        
    }
}

const calculator = new Calculator();
console.log(calculator.add(5,10)); // 15
console.log(calculator.subtract(20,10)); //10
console.log(calculator.multiply(50,10)); //500
console.log(calculator.divide(100,10)); //10



