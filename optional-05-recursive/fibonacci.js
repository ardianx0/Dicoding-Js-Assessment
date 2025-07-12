function fibonacci(n) {
  function fib(num) {
    if (num === 0) return 0;
    if (num === 1) return 1;
    return fib(num - 1) + fib(num - 2);
  }

  const sequence = [];
  for (let i = 0; i <= n; i++) {
    sequence.push(fib(i));
  }
  return sequence;
}

// Jangan hapus kode di bawah ini!
export default fibonacci;
