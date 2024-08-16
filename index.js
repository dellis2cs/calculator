const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

let display = document.querySelector(".display");
let buttons = document.querySelector(".buttons");
let equal = document.querySelector(".equal");
let clear = document.querySelector(".clear");
let displayValue = "";

let number1 = "";
let operator = "";
let number2 = "";
let result = "";

buttons.addEventListener("click", (event) => {
  if (event.target.className === "number" && operator === "" && result === "") {
    number1 += event.target.textContent;
    display.textContent = number1;
    console.log("number1 is: " + number1);
  }
  if (event.target.className === "operator" && number1 != "") {
    operator = event.target.textContent;
    display.textContent = operator;
    console.log("operator is: " + operator);
  }
  if (event.target.className === "number" && operator != "") {
    number2 += event.target.textContent;
    display.textContent = number2;
    console.log("number2 is: " + number2);
  }
  //   if (
  //     event.target.className === "number" &&
  //     operator != "" &&
  //     number1 === "" &&
  //     number2 != "" &&
  //     result != ""
  //   ) {
  //     number1 += event.target.textContent;
  //     display.textContent = event.target.textContent;
  //     console.log(number1);
  //   }
});

equal.addEventListener("click", (event) => {
  if (number1 != "" && operator != "" && number2 != "") {
    result = operate(number1, operator, number2);
    if (result == "can't divide by zero") {
      display.textContent = result;
      number1 = "";
      number2 = "";
      operator = "";
    }
    Math.round(result * 10) / 10;
    display.textContent = result;
    number1 = result;
    number2 = "";
    operator = "";
  }
});

clear.addEventListener("click", (event) => {
  display.textContent = "";
  number1 = "";
  number2 = "";
  operator = "";
  result = "";
});

function operate(number1, operator, number2) {
  number1 = Number(number1);
  number2 = Number(number2);
  if (operator == "+") {
    return add(number1, number2);
  }
  if (operator == "-") {
    return subtract(number1, number2);
  }
  if (operator == "*") {
    return multiply(number1, number2);
  }
  if (operator == "/") {
    console.log(number2);
    if (number2 == 0) {
      return "can't divide by zero";
    }
    return divide(number1, number2);
  }
}
