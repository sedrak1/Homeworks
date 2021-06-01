factorial = (num = 0) => (num === 0 ? 1 : num * factorial(num - 1))
console.log(factorial())