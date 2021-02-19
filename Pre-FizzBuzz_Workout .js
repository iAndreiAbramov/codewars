// This is the first step to understanding FizzBuzz.
// Your inputs: a positive integer, n, greater than or equal to one. n is provided, you have NO CONTROL over its value.
// Your expected output is an array of positive integers from 1 to n (inclusive).
// Your job is to write an algorithm that gets you from the input to the output

// const preFizz = n => (n > 1) ? preFizz(n) : 1;

function preFizz(n) {
  const arr = []
  while(n >= 1) {
    arr.push(n)
    n--
  }
  return arr.reverse()
}

console.log(preFizz(1), [1], `Array should be from 1 to 1`);
console.log(preFizz(2), [1,2], `Array should be from 1 to 2`);
console.log(preFizz(3), [1,2,3], `Array should be from 1 to 3`);
console.log(preFizz(4), [1,2,3,4], `Array should be from 1 to 4`);
console.log(preFizz(5), [1,2,3,4,5], `Array should be from 1 to 5`);