// Summation
// Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

const summation = function (num) {
  return (num === 1) ? num : num + summation(num - 1);
}

console.log(summation(1), 1)
console.log(summation(8), 36)