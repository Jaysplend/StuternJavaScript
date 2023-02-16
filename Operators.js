// Arithmetic Operators

var x = 5;
var y = 3;

// Addition
var sum = x + y; // Output: 8

// Subtraction
var diff = x - y; // Output: 2

// Multiplication
var product = x * y; // Output: 15

// Division
var quotient = x / y; // Output: 1.6666666666666667

// Modulus (remainder after division)
var remainder = x % y; // Output: 2

// Increment
var a = 1;
a++; // Increment a by 1 (now a is 2)

// Decrement
var b = 2;
b--; // Decrement b by 1 (now b is 1)

//Assignment Operators
var x = 5;

// Add 3 to x using +=
x += 3; // x is now 8


//Example 2
var y = 10;

// Multiply y by 2 using *=
y *= 2; // y is now 20

// Divide y by 5 using /=
y /= 5; // y is now 4

// Take the remainder of y divided by 3 using %=
y %= 3; // y is now 1


//Compasrison Operators
var a = 10;
var b = 5;

// Check if a is greater than b using >
console.log(a > b); // Output: true

// Check if a is less than b using <
console.log(a < b); // Output: false

//Example 2
var x = 5;
var y = "5";

// Check if x and y are equal using ==
console.log(x == y); // Output: true

// Check if x and y are not equal using !=
console.log(x != y); // Output: false

//Logical operators
//Logical AND (&&)
var x = 10;
var y = 20;

// Check if both x is greater than 5 and y is less than 30 using &&
if (x > 5 && y < 30) {
  console.log("Both conditions are true.");
} else {
  console.log("At least one condition is false.");
}

//Logical OR (||)
var a = 5;
var b = 10;

// Check if either a is greater than 10 or b is less than 20 using ||
if (a > 10 || b < 20) {
  console.log("At least one condition is true.");
} else {
  console.log("Both conditions are false.");
}

//Bitwise operators
//Using the & operator to perform a bitwise AND operation:

var x = 5;  // binary representation: 0101
var y = 3;  // binary representation: 0011

// Perform a bitwise AND operation using &
var result = x & y;  // binary representation: 0001

console.log(result);  // Output: 1

//Using the << operator to perform a left shift operation:

var x = 5;  // binary representation: 0101

// Perform a left shift operation using <<
var result = x << 2;  // binary representation: 010100

console.log(result);  // Output: 20
