`use strict`;

const fibonacci = (n) => {
    if (n <= 1) {
        return n;
    }

    return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(4));
console.log(fibonacci(8));
console.log(fibonacci(10));
console.log(fibonacci(15));