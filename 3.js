const select = document.getElementById('select');
const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');
const btnResult = document.getElementById('send');
const resultValuePage = document.getElementById('result');

class Calc {
    constructor(options) {
        this.select = options.select;
        this.num1 = options.num1;
        this.num2 = options.num2;
        this.send = options.send;
        this.result = options.result;
    }

    Calc.staticSum(num1, num2) {
        return resultValuePage.innerHTML = num1 + num2
    };

    Calc.staticMin(num1, num2) {
        return resultValuePage.innerHTML = num1 - num2
    };

    Calc.staticDivide(num1, num2) {
        return resultValuePage.innerHTML = num1 * num2
    };

    Calc.staticMultiply(num1, num2) {
        return resultValuePage.innerHTML = num1 / num2
    };
}