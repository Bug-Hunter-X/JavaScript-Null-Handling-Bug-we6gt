function foo(a, b) {
  if (a === null && b === null) {
    return null; // Handle both null values
  } else if (a === null || b === null) {
    return null; // Handle single null values
  }
  return a + b;
}

console.log(foo(1, 2)); // Output: 3
console.log(foo(null, 2)); // Output: null
console.log(foo(1, null)); // Output: null
console.log(foo(null, null)); // Output: null