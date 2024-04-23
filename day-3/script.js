// 1. Write a JavaScript program that takes two numbers as input from the user and displays the result of adding, subtracting, multiplying, dividing , modular oprator and what I taught today . Use alert or console.log to display the results.
// 2. Make a programe to check weither a number is even or odd.
// 3. Create a weak days conditional means if user prompt 1 then alert will be "today is Monday" and if he enter 7 then alert "today is Sunday" and so on...


// // =========task-1
var value1 = parseFloat(prompt("please enter first number"));
var value2 = parseFloat(prompt("Enter the second number:"));

// Perform operations
var add = value1 + value2;
var sub = value1 - value2;
var mul = value1 * value2;
var div = value1 / value2;
var mod = value1 % value2;

// Display console
console.log("Addition=", add);
console.log("Subtraction=", sub);
console.log("Multiplication=", mul);
console.log("Division=", div);
console.log("Modulus=", mod);

// Display alert
alert("Addition= " + add +
    "\nSubtraction= " + sub +
    "\nMultiplication= " + mul +
    "\nDivision= " + div +
    "\nModulus= " + mod);


// ==============task-2

let number = Number(prompt("enter a number"));

if(number%2==0)
{
alert(number +" number is even");
console.log(number +" number is even")
}
else{
    alert(number +" number is odd");
    console.log(number +" number is odd")
}

// ============task-3
let day = null;
while (true) {
    let day = Number(prompt("enter a number b/w 1 and 7"));
    if (day >= 1 && day <= 7) {
        if (day == 1) {
            alert("today is monday");
        }
        else if (day == 2) {
            alert("today is tuesday");
        }
        else if (day == 3) {
            alert("today is wednsday");
        }
        else if (day == 4) {
            alert("today is thursday");
        }
        else if (day == 5) {
            alert("today is friday");
        }
        else if (day == 6) {
            alert("today is saturday");
        }
        else if (day == 7) {
            alert("today is sunday");
        }
        break;
    }
    else {
        alert("galat hai bhai, Please enter a number b/w 1 and 7.");
    }
}

