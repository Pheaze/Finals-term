let num1 = parseInt(prompt("Enter number 1: "));
let num2 = parseInt(prompt("Enter number 2: "));
let num3 = parseInt(prompt("Enter number 3: "));
let num4 = parseInt(prompt("Enter number 4: "));
let num5 = parseInt(prompt("Enter number 5: "));

document.write("You entered: " + num1 + ", " + num2 + ", " + num3 + ", " + num4 + ", " + num5 + "<br>");

let sum = num1 + num2 + num3 + num4 + num5;
let average = sum / 5;

document.write("Sum: " + sum + "<br>");
document.write("Average: " + average + "<br>");