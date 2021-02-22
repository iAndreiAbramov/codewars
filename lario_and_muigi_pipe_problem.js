// #Task Given the a list of numbers, return the list so that the values increment by 1 for each index up to the maximum value.
// #Example:
// Input: 1,3,5,6,7,8
// Output: 1,2,3,4,5,6,7,8

function pipeFix(numbers) {
  const fixed = []
  for (let i = numbers[0]; i <= +numbers.slice(-1); i++) {
    fixed.push(i)
  }
  return fixed
}

console.log(pipeFix([1,2,3,5,6,8,9]),[1,2,3,4,5,6,7,8,9]);
console.log(pipeFix([1,2,3,12]),[1,2,3,4,5,6,7,8,9,10,11,12]);
console.log(pipeFix([6,9]),[6,7,8,9]);
console.log(pipeFix([-1,4]),[-1,0,1,2,3,4]);
console.log(pipeFix([1,2,3]),[1,2,3]);