const select = document.getElementById('select');
const num1 = document.getElementById('numFirst');
const num2 = document.getElementById('numSecond');
const btnResult = document.getElementById('send');
const resultValuePage = document.getElementById('result');

class Calc { 
    constructor(options) {
        this.select = options.select;
        this.numFirst1 = options.numFirst;
        this.numSecond = options.numSecond;
        this.send = options.send;
        this.result = options.result;
    createCalc() {
            static staticSum(numFirst.value,numSecond.value){
            return resultValuePage.innerHTML = numFirst.value + numSecond.value}

            static minus(numFirst.value,numSecond.value){
            return resultValuePage.innerHTML = numFirst.value - numSecond.value}
            
            static divide(numFirst.value,numSecond.value){
            return resultValuePage.innerHTML = numFirst.value * numSecond.value}

            static multiply(numFirst.value,numSecond.value){
            return resultValuePage.innerHTML = numFirst.value / numSecond.value}
}}}
const case = false;
if case(numFirst.value / 0) {
    alert('На ноль делить нельзя!'); 
}//

button.addEventListener('click', () => {
    document
        .querySelector('input')
        .value;
    console.log(input.value);
})
