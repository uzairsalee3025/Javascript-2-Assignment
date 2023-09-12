// Chapter No 6 (Math Expression II)
// Answer No 1
// x++;
// Answer No 2
// x = x - 1;
// x--;  
// Answer No 3
// y = 50;
// Answer No 4
// z = 49;
// Answer No 5
var num = 10;
var newNum = --num;
// Answer No 6
var originalValue = 5;
var newValue = ++originalValue;
console.log(newValue)
// Answer No 7
var myNumber = 10;
myNumber++; 

alert("The new value is: " + myNumber);

// Chapter 7 (Math Expression III)

// Answer No 1
// var calculatedNum = 2 + (2 * 6);
// 2 * 6 = 12
// 2 + 12 = 14
// the value of calculatedNum is '14'

// Answer No 2
// var calculatedNum = (2 + 2) * 6;
// 2 + 2 = 4
// 4 * 6 = 24
// the value of calculatedNum is '24'

// Answer No 3
// var calculatedNum = (2 + 2) * (4 + 2);
// 2 + 2 = 4
// 4 + 2 = 6
// 4 * 6 = 24
// the value of calculatedNum is '24'

// Answer No 4
// var calculatedNum = ((2 + 2) * 4) + 2;
// 2 + 2 = 4
// 4 * 4 = 16
// 16 + 2 = 18
// the value of calculatedNum is '18'

// Answer No 5
// var cost = (2 + 2) * (4 + 10);
// cost = 56

// Answer No 6
// var units = 2 + (2 * 4) + 10;
// units = 20

// Answer No 7
// var pressure = 4 / (2 * 4);
// The value of pressure is 0.5
// In the expression 4 / (2 * 4), it first calculates the result of 2 * 4, which is 8, and then divides 4 by 8, resulting in 0.5

// Chapter 8 (Concatenating Text Strings)

// Answer No 1
// The value of num is the string "22"

// Answer No 2
var message = "Hello," + "Dolly";
alert(message);

// Answer No 3
// The message that displays in the alert box is "333"

// Answer No 4
var part1 = "Pakistan ";
var part2 = "Zindabad";

alert(part1 + part2);

// Answer No 5
var concatenatedValue = "newString" + 42;

// Answer No 6
var firstString = "Hello, ";
var secondString = "world!";
var concatenatedString = firstString + secondString;

// Chapter 9 (Prompts)
// Answer No 1
var firstName = prompt("Enter first name");

// Answer No 2
var country = prompt("Country?", "China");

// Answer No 3
var yourName = prompt("Enter Your Name");

// Answer No 4
var userInput = prompt("Please enter something:", "Default Input");

// Answer No 5
var customMessage = "Enter your favorite color:";
var defaultResponse = "Blue";

var userResponse = prompt(customMessage, defaultResponse);
console.log(userResponse)

// Answer No 6
var customMessage = "Please enter your age:";
var defaultResponse = "25";

var userResponse = prompt(customMessage, defaultResponse);

alert(userResponse);

// Chapter 10 (if statments)
// Answer No 1
var city = prompt("Enter Your City")
if (city == "Karachi") {
    console.log("The City OF Lights")
}

// Answer No 2
x = 15;
y = 15;
if (x === y) {
    var z = +prompt("Enter the value of z:");
}

// Answer No 3
var ZipCode = +prompt("Enter Zip Code")

if (ZipCode == "10010") {
    alert("karachi");
} else {
    alert("Please write correct city");
}

// Answer No 4
var x = 5;

if (x == 5) { 
  x = 1;
}

// Chapter 11 (Comparison Operators)
// Answer No 1
var variable1 = 10;
var variable2 = 12;
if (variable1 !== variable2) {
    console.log("Hello")
}

// Answer No 2
var variable1 = 15;
var variable2 = 12;
if (variable1 >= variable2) {
    console.log("Hello World")
}

// Answer No 3
var x = 5;

if (x !== 10) {
    x = 20;
}
console.log(x)  

// Answer No 4
var number1 = 5;
var number2 = 10;

if (number1 !== number2) {
    alert("Congratulations! The numbers are not equal.");
}

// Answer No 5
var enteredName = prompt("Please enter your first name:");

if (enteredName !== "John") {
  alert("No match");
}


// ================= THE END =================



