// A string is considered to be in title case if each word in the string is either (a) capitalised (that is, only the first letter of the word is in upper case) or (b) considered to be an exception and put entirely into lower case unless it is the first word, which is always capitalised.
// Write a function that will convert a string into title case, given an optional list of exceptions (minor words). The list of minor words will be given as a string with each word separated by a space. Your function should ignore the case of the minor words string -- it should behave in the same way even if the case of the minor word string is changed.

function titleCase(title, minorWords = '') {
  return title.split(' ').map(word => {
    if (!minorWords.toLowerCase().split().includes(word.toLowerCase())) {
      return word.toLowerCase().replace(/\b[a-z]/, char => char.toUpperCase());
    } else {
      return word.toLowerCase();
    }
  }).join(' ').trim().replace(/\b[a-z]/, char => char.toUpperCase());
}

console.log(titleCase(''), '');
console.log(titleCase('a clash of KINGS', 'a an the of'), 'A Clash of Kings')
console.log(titleCase('THE WIND IN THE WILLOWS', 'The In'), 'The Wind in the Willows')
console.log(titleCase('the quick brown fox'), 'The Quick Brown Fox')