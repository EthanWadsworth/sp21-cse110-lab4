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
3) The value stored in the variable `finalPrice` will be printed for the last loop of the for loop. In the example provided, `150` will be printed. When we set `finalPrice` in the for loop, we are using the declaration of `finalPrice` defined outside of the for loop.
4) The `discountPrices` function will return a list of the final prices after the `discount` has been applied to each of the original items. Inside of the for loop, we get the new discounted price of each item and push it to the initially empty array `discounted` that we defined on line 3. After the loop goes through all of the items in the original `prices` array, `discounted` should be filled up with all of the prices with the discount applied.
5) Line 12 will throw an error because `i` was defined in the for loop with the `let` keyword. This means that its scope is confined to the for loop, and cannot be accessed outside of it.
6) Line 13 will cause an error and will say that `discountedPrice` is not defined. This is because we defined `discountPrice` with the `let` keyword inside of the for loop, meaning that the scope of `discountPrice` is the for loop and we cannot access it outside of the for loop, like we tried to do on line 13.
7) The value stored in `finalPrice` will be printed. For this example, the value printed will be `150`. We can update and use the value of `finalPrice` in the loop because the block scope for `finalPrice` is the entire function, which includes the body of the for loop. 
8) The function will return the list of prices entered with the discount applied to each of the original items. For the example provided, the function will return the list `[50, 100, 150]`. Similar to the previous question, we can push and modify the items in the `discounted` list and have Javascript recognize it because the scope was defined to be the entire function, which includes the body of the for loop.
9) Line 11 will cause an error because the variable `i` is not defined. Because `i` was declared with the `let` keyword in the scope of the for loop, `i` cannot be accessed or used outside of the body of the for loop. This is the reason for the error.
10) The value stored in the `length` variable assigned to the length of the `prices` array will be printed to the console on line 12. For the provided example, the value printed will be `3`. This works perfectly fine as the `length` is never reassigned in the program but just used as the exit condition for the for loop. We are also allowed to read variables declared with the `const` keyword as well.
11) This function will return the list of adjusted prices after the `discount` has been applied to each item in the original `prices` array. Even though `discounted` was defined with the `const` keyword, we can still push to the array and modify what the array contains. The only thing that the `const` keyword would prevent us from doing is reassigning the `discounted` variable to something else completely. For the provided example, the list `[50, 100, 150]` is returned.

Data Types
12) a
    a) `student.name`
    b) `student['Grad Year']`
    c) `student.greeting()`
    d) `student['Favorite Teacher'].name`
    e) `student.courseload[0]`

Basic Operators and Type Conversion
13) Arithmetic
    - a: `'3' + 2` becomes `'32'` because Javascript treated the 2 getting added to the string `3` as a concatentation operation and contenated the string `2` to make `32`.
    - b: The output of `'3' - 2` is the number `1`. Javascript recognizes this as a mathematical expression due to the subtraction symbol, Number data type and string representation of a number. Javascript will not recognize this as string concatentation because of the subtraction symbol.
    - c: `3 + null` is `3` because Javascript treats `null` as `0` as well when put in a mathematical expression.
    - d: `'3' + null` is `3null` because Javascript first sees a string and then a concatentation operator, so it concatenates `null` to the string `3` as the string `null`.
    - e: `true + 3` will evaluate to `4` because Javascript treats `true` as the numerical value `1` in a mathematical expression.
    - f: `false + null` will evaluate to `0` because in a mathematical expression, both `false` and `null` with be converted to `0` under Javascript's numeric conversion rules.
    - g: `'3' + undefined` will evaluate to `3undefined` because Javascript will see the expression as a string concatentation, so it will convert `undefined` to the string `'undefined'` and append it to the `'3'`.
    - h: `'3' - undefined` will evaluate to `NaN`. Javascript sees the subtraction symbol and converts `'3'` to `3`, but any mathematical expression with `undefined` is considered invalid and so evaluates to `NaN`.

14) Comparison:
    - a: `'2' > 1` evaluates to `true` because Javascript converts the string `'2'` to the numerical value `2` and then runs the comparision.
    - b: `'2' < '12'` evaluates to `false` because when comparing strings, Javascript compares character by character, so it first compares `'2'` and `'1'`. Because `'2'` is considered to come after `'1'`, `'2'` is considered to be greater than `'1'`.
    - c: `2 == '2'` evaluates to `true` because both sides of the comparision are converted to numbers. So `'2'` gets converted to `2` and it is obvious that `2 == 2` is `true`.
    - d: `2 === '2'` evaluates to `false` because the strict equality operator is used. Because `2` is a number and `'2'` is a string, the types are different so the strict equality operator with make the expression evaluate to `false`.
    - e: `true == 2` evaluates to `false` because `true` gets converted to the numerical value `1`, and 1 does not equal 2.
    - f: `true === Boolean(2)` evaluates to `true` because `Boolean(2)` converts `2` to `true` and `true` has the same type and value as `true`.

15) The `==` tells Javascript to compare equality with type conversion, so strings getting converted to numbers for example. The `===` tells Javascript to use strict equality when comparing and not convert any of the quantities being compared to other forms. The way I like to remember `===` is that it compares both type and value, and `==` can compare different types that evaluate to the same value through conversion.

17) The result of function with the given parameters will be the array `[2, 4, 6]`. To get to my answer, I first looked at what the function `doSomething` was responsible for, and I noticed that it just multiplied the number passed in by 2 and returned it. In the `modifyArray` function, the array indices are just looped through, and a new value is pushed to the `newArr` eventually returned. The callback is used in the push operation, and I noticed that the element at each index in the original array was just being passed in to that callback function, and whatever was returned from the callback function was then pushed to `newArr`. So the program basically multiplies every element in the array by 2, and pushes those new elements to a separate array that is returned.

19) The output of the code is 1 4 3 2, where each of the number is output on its own line.
