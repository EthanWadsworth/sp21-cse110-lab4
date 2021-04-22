part 1a
var 
1) values added:  20
2) final result:  20

let
3) values added:  20
4) This line returns an error, because a variable with the `let` keyword only has a block level scope. So, `let result` is defined only in the `if` condition, and not outside of it. Line 13 is outside the `if`, so the variable `result` cannot be accessed.

const
5) Because the variable `result` was defined with the `const` keyword, changing the value of `result` is not allowed, so line 9 throws an error.
6) Line 13 is never reached because of the error caused at line 9 described in the previous question. The error causes the program to exit before it can get to line 13.

Part 1b
1) The value of `i` will be printed at line 12. In the provided example, the value 3 will be printed. This is because `i` was defined with the `var` keyword, meaning that it exists outside of the block scope it was defined in. This means that we can access it outside of the for loop it was defined in on line 6.
2) The value of `discountedPrice` will be printed to the console. More specifically, the last value stored in the `prices` array multiplied by the `discount - 1` will be printed. For the provided example, this value will be `150`. We can print the value of `discountedPrice` to the console because it was declared with the `var` keyword, meaning that it can be accessed outside of the scope it was defined in, which was in the for loop body.