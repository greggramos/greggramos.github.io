// // Create a function for all operations: Sum, Substract, Multiply, Divide, Exponent and Modulo

// const firstNumber = 100;
// const secondNumber = 2;

// const sum = firstNumber + secondNumber;
// const substract = firstNumber - secondNumber;
// const multiply = firstNumber * secondNumber;
// const divide = firstNumber / secondNumber;
// const exponent = firstNumber ** secondNumber;
// const modulo = firstNumber % secondNumber;

// function mySolution(sum, substract, multiply, divide, exponent, modulo) {
//  return `The sum of ${firstNumber} and ${secondNumber} is ${sum}. The substract of ${firstNumber} and ${secondNumber} is ${substract}. The multiplication of ${firstNumber} and ${secondNumber} is ${multiply}. The division of ${firstNumber} and ${secondNumber} is ${divide}. The exponent of ${firstNumber} and ${secondNumber} is ${exponent}. The modulo of ${firstNumber} and ${secondNumber} is ${modulo}.`;
// }

// console.log(mySolution(sum, substract, multiply, divide, exponent, modulo));


// const iceCream = "Vanilla"
// if(iceCream === "Chocolate") {
//   console.log("I love Chocolate Ice Cream!");
// } else if(iceCream === "Vanilla") {
//     console.log("I love Vanilla Ice Cream!");
// }  else {
//     console.log("I'm not a ice cream lover!");
//   }

// for (let i = 1; i <= 100; i = i + 1) {
//   console.log(i);
// }

// for (let i = 100; i >= 1; i = i - 1) {
//     console.log(i);
//   }

// Loop and produce odd numbers only
// for (let n = 0; n <= 100; n++) {
//     if (n % 2 !== 0) {
//     console.log(n);
//     }
// }

// let n = 0;
// while (n <= 100) {
//     if (n % 2 !== 0) {
//         console.log(n);
//     }
//     n++;
// }

const body = document.body;
// const div = document.createElement("div");
// body.append(div);

// div.innerText = "Hello World Again!";
// div.innerHTML = "<h1>Hello World!</h1>";

// const strong = document.createElement("strong");
// strong.innerText = "Hello World!";
// div.append(strong);

const div = document.querySelector("div");
const spanHi = document.querySelector("#hi");
const spanWo = document.querySelector("#bye");

// spanWo.remove();
// console.log(spanHi.getAttribute("title"));

// console.log(spanHi.dataset);

spanHi.style.color = "red";
spanWo.style.backgroundColor = "blue";
