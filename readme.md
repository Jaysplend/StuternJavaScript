JavaScript Operators & Control Flow

A. Symbols for JavaScript Operators
1. Arithmetic Operators : + - / * % ** ++ --
2. Assignment Operators : = += *= /= %= 
3. Comparison Operators : > , >= , < ,  <= , === , !== , ==
4. Logical Operators: &&,  ||
5. Bitwise Operators: & , >>

4. What is the result when the following program is executed?
for (i=1; i<20; i+=7)(
    console.log(i);
)

When this program is executed, it will run a loop that starts with i=1 and increments i by 7 on each iteration until i is no longer less than 20.

The loop will execute 3 times, because the first three values of i that satisfy the loop condition are 1, 8, and 15. The loop will not execute a fourth time, because i will be 22 after the third iteration, which is not less than 20.

So, the result of this program is that the loop will execute three times with i taking the values 1, 8, and 15.