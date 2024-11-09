// 1 1 2 3 5 8 13
const fib = (n) => {
  if (n == 0 || n == 1) {
    return n;
  } else {
    return fib(n - 1) + fib(n - 2);
  }
};

console.log(fib(6));
