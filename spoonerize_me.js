// Your task is to create a function that takes a string of two words, separated by a space: words and returns a spoonerism of those words in a string, as in the above example.

function spoonerize(words) {
  const letters = words.match(/(\b\w)/g);
  const spoonerized = `${letters[1]}${words.slice(1, words.search(/\s/))} ${letters[0]}${words.slice(words.search(/\s\w/) + 2)}`;
  return spoonerized;
}

console.log(spoonerize("nit picking"))
console.log(spoonerize("wedding bells"))
console.log(spoonerize("jelly beans"))

// const str1 = 'nit picking'
// console.log(str1.match(/(\b\w)|(\b\w)/g))

