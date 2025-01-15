export const calculator = (function () {
    function add(x, y) {
        return x + y;
    }

    function subtract(x, y) {
        return x - y;
    }

    function multiply(x, y) {
        return x * y;
    } 

    function divide(x, y) {
        return Math.floor(x / y);
    }
    return {add, subtract, multiply, divide}
})();


console.log(calculator.divide(106, -6));