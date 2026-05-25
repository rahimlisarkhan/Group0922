/**
 * sum.js — a simple utility function
 * Takes any number of arguments and returns their total.
 */
export function sum(...numbers) {
  return numbers.reduce((total, n) => total + n, 0);
}
