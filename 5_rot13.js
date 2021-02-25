// ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

// Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".

// My solution

function rot13(message) {
  const letters = 'abcdefghijklmnopqrstuvwxyzabcdefghijklmABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLM';
  for (let i = 0; i < message.length; i++) {
    return message.split('').map(item => {
      if (/[a-zA-z]/.test(item)) {
        return letters.substr(letters.indexOf(item) + 13, 1)
      } else {
        return item
      }
    }).join('')
  }
}

// My favorite solution

// function rot13(message) {
//   var abc = 'abcdefghijklmnopqrstuvwxyzabcdefghijklmABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLM';
//   return message.replace(/[a-z]/gi, c => abc[abc.indexOf(c) + 13]);
// }

console.log(rot13('grfg'))
console.log(rot13('Grfg'))

// console.log('Grfg'.match(/[a-zA-z]/g))
// console.log('f'.codePointAt[0])

