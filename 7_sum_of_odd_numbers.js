// Given the triangle of consecutive odd numbers:
// 1
// 3     5
// 7     9    11
// 13    15    17    19
// 21    23    25    27    29
// Calculate the row sums of this triangle from the row index (starting at index 1) e.g.:
// rowSumOddNumbers(1); // 1
// rowSumOddNumbers(2); // 3 + 5 = 8

function rowSumOddNumbers(n) {
  let lastIndex = 0;
  let lastNumber = 0;
  let sumOfRow = 0;

  for (let i = 1; i <= n; i++) {
    lastIndex += i;
    lastNumber = 1 + 2 * (lastIndex - 1);
  }

  for (let i = 1; i <= n; i++) {
    sumOfRow += lastNumber;
    lastNumber -= 2;
  }
  return sumOfRow;
}

console.log(rowSumOddNumbers(1), 1);
console.log(rowSumOddNumbers(42), 74088);

