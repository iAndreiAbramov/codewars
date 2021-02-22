// Task:
// You are given a word target and list of sorted(by length(increasing), number of upper case letters(decreasing), natural order) unique words words which always contains target, your task is to find the index(0 based) of target in words,which would always be in the list.
// Your solution must pass in lss than ref.solution-10ms speed.
// This is because generating long list of unique words in js is slow.
// If you think you've got an correct approach and timing test is not passing then submit again.

function indexOf(words, target) {

  return words.indexOf(target)
  // for (let i = 0; i < words.length; i++) {
  //   if (words[i][0] !== target[0]) continue
  //   if (words[i] === target) return i
  // }
}

console.log(indexOf(['JaCk', 'Jack', 'jack', 'jackk', 'COdewars', 'codeWars', 'abcdefgh', 'codewars'], 'codewars'), 7)
console.log(indexOf(['cP', 'rE', 'sZ', 'am', 'bt', 'ev', 'hq', 'rx', 'yi', 'akC', 'nrcVpx', 'iKMVqsj'], 'akC'), 9)