class Calculator {
    constructor(_operand1, _operand2, _operation) {
        this.operand1 = _operand1;
        this.operand2 = _operand2;
        this.operation = _operation;
    }

    setOperand1(_operand1) {
        this.operand1 = _operand1;
    }

    setOperand2(_operand2) {
        this.operand2 = _operand2;
    }

    setOperation(_operation) {
        this.operation = _operation;
    }

    getResult(){
        switch (this.operation) {
            case "sum":
              return parseInt(this.operand1) + parseInt(this.operand2);
            case "sub":
              return parseInt(this.operand1) - parseInt(this.operand2);
            case "times":
              return parseInt(this.operand1) * parseInt(this.operand2);
            case "over":
              return parseInt(this.operand1) / parseInt(this.operand2);
            default:
                return parseInt(this.operand1) + parseInt(this.operand2);
        }
    }

    clearCalculator(){
        this.operand1 = 0;
        this.operand2 = 0;
        this.operation = undefined;

        return {
           operand1:this.operand1,
           operand2:this.operand2,
           operation:this.operation
        } 
    }

}

var operator;
var num1;
var num2;
function insert(num) {
    var numero = document.getElementById('result').innerHTML;
    document.getElementById('result').innerHTML = numero + num;
}

function clearInput() {
    const calculator = new Calculator(num1,num2,operator);
    calculator.clearCalculator();
    document.getElementById('result').innerHTML = "";
}

function times() {    
    num1 = document.getElementById('result').innerHTML;
    document.getElementById('result').innerHTML = "";
    operator = "times";
}
function over() {
    num1 = document.getElementById('result').innerHTML;
    document.getElementById('result').innerHTML = "";
    operator = "over";
}
function sum() {
    num1 = document.getElementById('result').innerHTML;
    document.getElementById('result').innerHTML = "";
    operator = "sum";
}
function sub() {
    num1 = document.getElementById('result').innerHTML;
    document.getElementById('result').innerHTML = "";
    operator = "sub";
}

function equal() {
    num2 = document.getElementById('result').innerHTML;
    const calculator = new Calculator(num1,num2,operator);
    document.getElementById('result').innerHTML = calculator.getResult();
    console.log(calculator.setOperand1);
    console.log(calculator.setOperand2);
    console.log(parseInt(calculator.setOperand1) + parseInt(calculator.setOperand2));
    console.log(calculator.setOperation);
    console.log(calculator.getResult());
}