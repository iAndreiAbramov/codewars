// You will be given an array of strings. The words in the array should mesh together where one or more letters at the end of one word will have the same letters (in the same order) as the next word in the array. But, there are times when all the words won't mesh.
// Examples of meshed words:
// "apply" and "plywood"
// "apple" and "each"
// "behemoth" and "mother"
// Examples of words that do not mesh:
// "apply" and "playground"
// "apple" and "peggy"
// "behemoth" and "mathematics"
// If all the words in the given array mesh together, then your code should return the meshed letters in a string. You won't know how many letters the meshed words have in common, but it will be at least one.
// If all the words don't mesh together, then your code should return "failed to mesh".
// Input: An array of strings. There will always be at least two words in the input array.
// Output: Either a string of letters that mesh the words together or the string "failed to mesh".
// Examples
// #1:
// ["allow", "lowering", "ringmaster", "terror"] --> "lowringter"
// because:
// the letters "low" in the first two words mesh together
// the letters "ring" in the second and third word mesh together
// the letters "ter" in the third and fourth words mesh together.
// #2:
// ["kingdom", "dominator", "notorious", "usual", "allegory"] --> "failed to mesh"
// Although the words "dominator" and "notorious" share letters in the same order, the last letters of the first word don't mesh with the first letters of the second word.

function wordMesh(arr) {
  const resultArr = [];
  for (let i = 0; i < arr.length - 1; i++) {
    let j = Math.min(arr[i].length, arr[i + 1].length);
    while (j >= 1) {
      if (arr[i].slice(-j) === arr[i + 1].substr(0, j)) {
        resultArr.push(arr[i].slice(-j));
        break;
      }
      j--;
    }
  }
  return (resultArr.length + 1 === arr.length) ? resultArr.join('') : 'failed to mesh';
}

console.log(wordMesh(["beacon", "condominium", "umbilical", "california"]), "conumcal");
console.log(wordMesh(["allow", "lowering", "ringmaster", "terror"]), "lowringter");
console.log(wordMesh(["abandon", "donation", "onion", "ongoing"]), "dononon");
console.log(wordMesh(["jamestown", "ownership", "hippocampus", "pushcart", "cartographer", "pheromone"]), "ownhippuscartpher");