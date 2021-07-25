// 1. Identify the base case
// 2. Identify the recursive case
// 3. Return when needed.basically you have two returns


// Factorial
// Write two functions that finds the factorial of any number.
// One should use recursive, the other should just use a for loop
// What is factorial?
// 5! = 5 * 4 * 3 * 2 * 1
// O(n)
function findFactorialRecursive(number) {
  if (number <= 2) return number
  return number * findFactorialRecursive(number - 1)
}
// O(n)
function findFactorialIterative(number) {
  let result = 1
  for (let i = number; 1 < i; i--) {
    result *= i
  }
  return result
}
console.log(findFactorialIterative(5))
console.log(findFactorialRecursive(5))

// Fibonacci
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34
function fibonacciRerusive(n) { // O(n)
  if (n <= 1) return n
  return fibonacciRerusive(n-1) + fibonacciRerusive(n-2)
}
function fibonacciIterative(n) { // O(2 ^n)
  if (n <= 1) return n
  let fib = {
    0: 0,
    1: 1
  }
  for (let i = 2; i <= n; i++) {
    fib[i] = fib[i-1] + fib[i-2]
  }
  return fib[n]
}
console.log(fibonacciRerusive(5))
console.log(fibonacciIterative(5))

//Implement a function that reverses a string using iteration...and then recursion!
function reverseString(str) {
  if (str.length < 2) return str
  return reverseString(str.slice(1)) + str[0]
}

reverseString('yoyo mastery')
//should return: 'yretsam oyoy'