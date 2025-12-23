


// 1. Given `let x = 4` and `let y = 7`, calculate `((x + y) ** 2 - (x * y)) / (y - x)` 
// and store it in a variable `result`.
let x=4
let y = 7
let result = ((x+y) ** 2- (x*y)) / (y-x)
console.log(result)



// 2. Create a variable `isDivisible` that checks if `x**3 + y**3` is divisible by `x + y`.
let isDivisible = (x**3 + y**3) % (x+y) ===0
console.log(isDivisible)

let factorial = 1

for (let i = 1; i <= x; i++) {
  factorial *= i
}
let factorialProduct = factorial * (y ** 2)
console.log(factorialProduct)





// 4. Given `let p = 5` and `let q = 3`, calculate `p ** q - q ** p`
//  and check if the result is positive.
let p = 5
let q = 3
let difference = (p ** q)- (q **p)

if(difference>0)
    {
 console.log("The number is positive")
}else{
    console.log("The number is negative")

}


// 5. Create a variable `nestedExpression` 
// to store the result of `(x + y) * (x - y) + (x * y) % (x + y)`.
let nestedExpression = (x + y) * (x - y) + (x * y) % (x + y)
console.log(nestedExpression)


// 6. Check if the sum of the squares of `x` and `y` is a multiple of 5.
let isMultiple = ((x**2) + (y**2)) % 5===0
console.log(isMultiple)





// 7. Calculate the value of `(x + y + result) ** (1/2)` 
// and round it to 2 decimal places, store it in `sqrtValue`.
let sqrtValue = Math.sqrt(x + y + Number(result))
sqrtValue = Number(sqrtValue.toFixed(2))
console.log(sqrtValue)





// 8. Swap the values of `x` and `y` without using a temporary variable,
//  then calculate their new sum.
x = x + y
y = x - y
x = x - y

let newSum = x + y
console.log("Swapped x:", x, "Swapped y:", y)
console.log("New Sum:", newSum)


// 9. Given `let m = 8` and `let n = 6`, calculate `((m % n) ** 3 + (n % m) ** 2) / (m - n)`.
let m = 8
let n = 6

let complexCalculation = ((m % n) ** 3 + (n % m) ** 2) / (m - n)
console.log("Complex Calculation:", complexCalculation)



// 10. Check if `(x * y - factorialProduct)` is divisible by `(x + y + sqrtValue)` 
// and store the boolean in `isDivisibleComplex`.
let isDivisibleComplex = (x * y - factorialProduct) % (x + y + sqrtValue) === 0

console.log( isDivisibleComplex)


