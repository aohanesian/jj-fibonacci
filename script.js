`use strict`;

const fib = (n = 1) => {
    if (n <= 1) {
        return n;
    }

    return fib(n - 1) + fib(n - 2);
}

console.log(fib(4));
console.log(fib(8));
console.log(fib(10));
console.log(fib(15));