// Description:
// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

var uniqueInOrder = function(iterable) {
    return [...iterable].filter((item, i) => iterable[i] != iterable[i + 1])
}

console.log(uniqueInOrder('AAAABBBCCDAABBB'))  
console.log(uniqueInOrder(['A', 'A', 'A', 'A', 'B', 'B', 'B', 'C', 'C', 'D', 'A', 'A', 'B', 'B', 'B']))  


// console.log(Array.isArray('retdfgdfg'))
// console.log(Array.isArray([1, 2, 3]))

// const string = 'AAAABBBCCDAABBB'
// const arr = ['A', 'A', 'A', 'A', 'B', 'B', 'B', 'C', 'C', 'D', 'A', 'A', 'B', 'B', 'B']
// const arr = [11, 11, 11, 12, 12, 12, 2, 13, 13, 111, 111, 14, 411, 411, 33]

// console.log(string.replace(/(.)(?=\1)/g, '').split(''))
// console.log(arr.join('').replace(/(.)(?=\1)/g, '').split(''))
// console.log(arr.filter((item, i) => arr[i] != arr[i + 1]))

// console.log([...string])
// console.log([...arr])
